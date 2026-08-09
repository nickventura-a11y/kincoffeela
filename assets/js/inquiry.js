/* ============================================================
   Kin Coffee — shared page engine
   Inquiry form (validation, relay, graceful fallback),
   reveal-on-scroll, nav solidify, accordion behavior.
   ============================================================ */

/* ---- FORM RELAY CONFIG ------------------------------------------------
   ACTIVATION (5 minutes, done during hosting setup — see README):
   1. Create a free key at https://web3forms.com using kristen@kincoffeela.com
   2. Paste it into accessKey below. Set ccemail to route Adhir a copy.
   Until accessKey is set, the form falls back to opening a pre-filled
   email draft to both inboxes so no inquiry is ever lost.               */
const KIN_FORM = {
  accessKey: "", // <-- paste Web3Forms access key here at hosting time
  endpoint: "https://api.web3forms.com/submit",
  toEmail: "kristen@kincoffeela.com",
  ccEmail: "adhir@kincoffeela.com",
  subject: "New event inquiry — kincoffeela.com",
};

(function () {
  "use strict";

  /* ---------- reveal on scroll (single motion primitive) ---------- */
  function initReveal() {
    var els = document.querySelectorAll("[data-reveal]");
    if (!els.length) return;
    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-revealed"); });
      return;
    }
    // stagger siblings inside any [data-reveal-stagger] container
    document.querySelectorAll("[data-reveal-stagger]").forEach(function (group) {
      var kids = group.querySelectorAll("[data-reveal]");
      kids.forEach(function (el, i) {
        el.style.transitionDelay = Math.min(i * 100, 500) + "ms";
      });
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -5% 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------- nav solidify ---------- */
  function initNav() {
    var nav = document.querySelector("[data-nav]");
    if (!nav) return;
    var onScroll = function () {
      nav.classList.toggle("is-solid", window.scrollY > 32);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- accordion: close siblings ---------- */
  function initAccordion() {
    document.querySelectorAll("[data-accordion]").forEach(function (root) {
      root.querySelectorAll("details").forEach(function (d) {
        d.addEventListener("toggle", function () {
          if (!d.open) return;
          root.querySelectorAll("details[open]").forEach(function (other) {
            if (other !== d) other.open = false;
          });
        });
      });
    });
  }

  /* ---------- inquiry form ---------- */
  var MESSAGES = {
    name: "Please tell us your name.",
    email: "Please enter a valid email so we can reply.",
    date: "Please pick your event date — a best guess is fine.",
    type: "Please choose the kind of event.",
  };

  function fieldError(field) {
    var name = field.getAttribute("name");
    if (field.required && !field.value.trim()) return MESSAGES[name] || "This one's required.";
    if (name === "email" && field.value.trim() &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(field.value.trim()))
      return MESSAGES.email;
    return "";
  }

  function showError(field, msg) {
    var slot = field.closest("[data-field]");
    var out = slot ? slot.querySelector(".field-error") : null;
    if (out) { out.textContent = msg; out.hidden = !msg; }
    field.setAttribute("aria-invalid", msg ? "true" : "false");
  }

  function validateField(field) {
    var msg = fieldError(field);
    showError(field, msg);
    return !msg;
  }

  function collect(form) {
    var data = {};
    Array.prototype.forEach.call(form.elements, function (el) {
      if (!el.name || el.name === "botcheck" || el.type === "submit") return;
      data[el.name] = el.value.trim();
    });
    return data;
  }

  function prettyLines(data) {
    var labels = {
      name: "Name", email: "Email", phone: "Phone", date: "Event date",
      type: "Event type", guests: "Guest count", location: "Location", message: "Details",
    };
    return Object.keys(labels)
      .filter(function (k) { return data[k]; })
      .map(function (k) { return labels[k] + ": " + data[k]; })
      .join("\n");
  }

  function showSuccess(form) {
    var section = form.closest("[data-inquiry]") || form.parentElement;
    var success = section.querySelector("[data-form-success]");
    form.hidden = true;
    if (success) {
      success.hidden = false;
      success.setAttribute("tabindex", "-1");
      success.focus({ preventScroll: false });
    }
    try { history.replaceState(null, "", "#thank-you"); } catch (e) { /* noop */ }
  }

  function setStatus(form, msg, isError) {
    var out = form.querySelector("[data-form-status]");
    if (!out) return;
    out.textContent = msg;
    out.hidden = !msg;
    out.classList.toggle("is-error", !!isError);
  }

  function mailtoFallback(form, data) {
    var body = "Hi Kin Coffee — I'd love to check your availability.\n\n" + prettyLines(data) + "\n";
    var href = "mailto:" + KIN_FORM.toEmail +
      "?cc=" + KIN_FORM.ccEmail +
      "&subject=" + encodeURIComponent(KIN_FORM.subject) +
      "&body=" + encodeURIComponent(body);
    window.location.href = href;
    setStatus(form,
      "Your email app should open with your inquiry ready to send. If it doesn't, email us directly at " +
      KIN_FORM.toEmail + ".", false);
  }

  function submitRelay(form, data, button) {
    var payload = {
      access_key: KIN_FORM.accessKey,
      subject: KIN_FORM.subject,
      from_name: "kincoffeela.com inquiry form",
      ccemail: KIN_FORM.ccEmail,
      botcheck: form.querySelector("[name='botcheck']") ?
        form.querySelector("[name='botcheck']").checked : false,
    };
    Object.keys(data).forEach(function (k) { payload[k] = data[k]; });

    var original = button.textContent;
    button.disabled = true;
    button.textContent = "Sending…";

    fetch(KIN_FORM.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    })
      .then(function (res) { return res.json(); })
      .then(function (json) {
        if (json.success) { showSuccess(form); }
        else { throw new Error(json.message || "relay error"); }
      })
      .catch(function () {
        setStatus(form,
          "Something went wrong on our end. Please email us directly at " +
          KIN_FORM.toEmail + " — we reply within 24 hours.", true);
      })
      .finally(function () {
        button.disabled = false;
        button.textContent = original;
      });
  }

  function initForm() {
    document.querySelectorAll("form[data-inquiry-form]").forEach(function (form) {
      // min date = today
      var dateInput = form.querySelector("input[type='date']");
      if (dateInput) dateInput.min = new Date().toISOString().slice(0, 10);

      // validate on blur, clear on input
      Array.prototype.forEach.call(form.elements, function (el) {
        if (!el.name || el.type === "submit" || el.name === "botcheck") return;
        el.addEventListener("blur", function () { validateField(el); });
        el.addEventListener("input", function () {
          if (el.getAttribute("aria-invalid") === "true") validateField(el);
        });
      });

      form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var ok = true, firstBad = null;
        Array.prototype.forEach.call(form.elements, function (el) {
          if (!el.name || el.type === "submit" || el.name === "botcheck") return;
          if (!validateField(el) && ok !== false) { /* keep first */ }
          if (fieldError(el)) { ok = false; if (!firstBad) firstBad = el; }
        });
        if (!ok) {
          if (firstBad) firstBad.focus();
          setStatus(form, "Almost there — a couple of fields need a look.", true);
          return;
        }
        setStatus(form, "", false);
        var data = collect(form);
        var button = form.querySelector("button[type='submit']");
        if (KIN_FORM.accessKey) submitRelay(form, data, button);
        else mailtoFallback(form, data);
      });
    });
  }

  /* ---------- mobile sticky CTA bar ---------- */
  function initMobileCta() {
    var bar = document.querySelector("[data-mobile-cta]");
    if (!bar) return;
    var form = document.querySelector("[data-inquiry]");
    var pastHero = window.scrollY > 480, nearForm = false;
    var update = function () {
      bar.classList.toggle("is-shown", pastHero && !nearForm);
    };
    window.addEventListener("scroll", function () {
      pastHero = window.scrollY > 480;
      update();
    }, { passive: true });
    if (form && "IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        nearForm = entries[0].isIntersecting;
        update();
      }, { threshold: 0.05 }).observe(form);
    }
    update();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      initReveal(); initNav(); initAccordion(); initForm(); initMobileCta();
    });
  } else {
    initReveal(); initNav(); initAccordion(); initForm(); initMobileCta();
  }
})();

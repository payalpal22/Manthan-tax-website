// ── SLIDER ──
let current = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
function showSlide(n) {
  slides[current].classList.remove("active");
  dots[current].classList.remove("active");
  current = (n + slides.length) % slides.length;
  slides[current].classList.add("active");
  dots[current].classList.add("active");
}
function changeSlide(dir) {
  showSlide(current + dir);
}
function goToSlide(n) {
  showSlide(n);
}
setInterval(() => changeSlide(1), 5500);

// ── ROUTER ──
function navigate(page) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  const target = document.getElementById("page-" + page);
  if (target) target.classList.add("active");
  document.querySelectorAll(".nav-links a").forEach((a) => {
    a.classList.toggle("active", a.dataset.page === page);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ── SERVICE TABS ──
function switchTab(tabId, btn) {
  document
    .querySelectorAll(".tab-content")
    .forEach((t) => t.classList.remove("active"));
  document
    .querySelectorAll(".tab-btn")
    .forEach((b) => b.classList.remove("active"));
  document.getElementById("tab-" + tabId).classList.add("active");
  btn.classList.add("active");
}

// ── EMAIL FORM SENDER ──
function sendViaEmail() {
  const firstName = document
    .querySelector('input[placeholder="Rahul"]')
    .value.trim();
  const lastName = document
    .querySelector('input[placeholder="Sharma"]')
    .value.trim();
  const email = document
    .querySelector('input[placeholder="rahul@business.com"]')
    .value.trim();
  const phone = document
    .querySelector('input[placeholder="+91 98765 43210"]')
    .value.trim();
  const service = document
    .querySelector(".contact-form-box select")
    .value.trim();
  const message = document
    .querySelector(".contact-form-box textarea")
    .value.trim();

  if (!firstName || !phone) {
    alert("Please fill in at least your Name and Phone Number.");
    return;
  }

  const subject = "Enquiry from Website - " + firstName + " " + lastName;

  const body =
    `Hello Manthan Tax Consultancy,\n\n` +
    `Name: ${firstName} ${lastName}\n` +
    `Phone: ${phone}\n` +
    (email ? `Email: ${email}\n` : "") +
    (service ? `Service Required: ${service}\n` : "") +
    (message ? `Message: ${message}\n` : "") +
    `\nThank you.`;

  const mailtoLink =
    "mailto:manthantaxconsultancy@gmail.com" +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body);

  window.location.href = mailtoLink;
}
function sendToWhatsApp() {
  const firstName = document
    .querySelector('input[placeholder="Rahul"]')
    .value.trim();
  const lastName = document
    .querySelector('input[placeholder="Sharma"]')
    .value.trim();
  const email = document
    .querySelector('input[placeholder="rahul@business.com"]')
    .value.trim();
  const phone = document
    .querySelector('input[placeholder="+91 98765 43210"]')
    .value.trim();
  const service = document
    .querySelector(".contact-form-box select")
    .value.trim();
  const message = document
    .querySelector(".contact-form-box textarea")
    .value.trim();

  if (!firstName || !phone) {
    alert("Please fill in at least your Name and Phone Number.");
    return;
  }

  const text =
    `Hello Manthan Tax Consultancy!

` +
    `*New Enquiry from Website*
` +
    `─────────────────────
` +
    `*Name:* ${firstName} ${lastName}
` +
    `*Phone:* ${phone}
` +
    (email
      ? `*Email:* ${email}
`
      : "") +
    (service
      ? `*Service Required:* ${service}
`
      : "") +
    (message
      ? `*Message:* ${message}
`
      : "") +
    `─────────────────────
` +
    `_Sent from manthan website_`;

  const encoded = encodeURIComponent(text);
  // Opens WhatsApp with Adv. Maneesh Kumar's number as primary
  window.open("https://wa.me/919310143521?text=" + encoded, "_blank");
}

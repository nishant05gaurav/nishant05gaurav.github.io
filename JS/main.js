/* log(Nishant) — portfolio behavior */

const body = document.body;
const toggleBtn = document.getElementById("themeToggleBtn");
const themeLabel = document.getElementById("themeLabel");

function applyTheme(theme, save = false) {
  const isDark = theme === "dark";

  body.classList.toggle("dark-mode", isDark);
  body.classList.toggle("light-mode", !isDark);

  if (toggleBtn) {
    toggleBtn.checked = isDark;
    toggleBtn.setAttribute("aria-checked", String(isDark));
  }

  if (themeLabel) {
    themeLabel.textContent = isDark ? "DARK" : "LIGHT";
  }

  if (save) {
    localStorage.setItem("theme", theme);
  }
}

/*
 * Dark is the default visual identity.
 * If the visitor has already chosen a mode, restore that choice.
 */
const savedTheme = localStorage.getItem("theme");
applyTheme(savedTheme === "light" ? "light" : "dark");

toggleBtn?.addEventListener("change", () => {
  applyTheme(toggleBtn.checked ? "dark" : "light", true);
});

/*
 * Keep external writing links in one place.
 * Replace the "#" values when the final DEV/Medium/article URLs
 * are confirmed.
 */
const writingLinks = {
  dev: "#",
  medium: "#",
  portfolio: "#",
  mcm: "#",
  palindrome: "#",
  boolean: "#"
};

document.querySelectorAll("[data-link]").forEach((link) => {
  const key = link.dataset.link;
  if (writingLinks[key] && writingLinks[key] !== "#") {
    link.href = writingLinks[key];
    link.target = "_blank";
    link.rel = "noopener";
  }
});

document.querySelectorAll("[data-article-link]").forEach((link) => {
  const key = link.dataset.articleLink;
  if (writingLinks[key] && writingLinks[key] !== "#") {
    link.href = writingLinks[key];
    link.target = "_blank";
    link.rel = "noopener";
  } else {
    link.addEventListener("click", (event) => event.preventDefault());
  }
});

/* Contact form: open the visitor's email client. */
document.getElementById("contactForm")?.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
  const bodyText = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\n${message}`
  );

  window.location.href =
    `mailto:nishant05gaurav@gmail.com?subject=${subject}&body=${bodyText}`;
});

/* Close the mobile navbar after clicking a section. */
document.querySelectorAll("#mainNav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const nav = document.getElementById("mainNav");
    if (nav?.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(nav).hide();
    }
  });
});

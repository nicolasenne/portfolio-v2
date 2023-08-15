// On page load set the theme.
(function() {
  let onpageLoad = localStorage.getItem("theme") || "";
  let element = document.body;
  element.classList.add(onpageLoad);
  document.getElementById("theme").textContent =
    localStorage.getItem("theme") || "light";
})();

function themeToggle() {
  let element = document.body;
  element.classList.toggle("dark-theme");

  let theme = localStorage.getItem("theme");
  if (theme && theme === "dark-theme") {
    localStorage.setItem("theme", "");
  } else {
    localStorage.setItem("theme", "dark-theme");
  }

  document.getElementById("theme").textContent = localStorage.getItem("theme");
}

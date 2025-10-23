console.log("✅ main.js loaded");

document.addEventListener("DOMContentLoaded", () => {
  const icon = document.getElementsByClassName("icon")[0];
  const nav  = document.getElementById("myTopnav");

  if (!icon || !nav) return;

  const toggleNav = () => {
    // If class is exactly "topnav", append " responsive"
    if (nav.className === "topnav") {
      nav.className += " responsive";
    } else {
      nav.className = "topnav";
    }
  };

  icon.addEventListener("click", toggleNav);

  // (Optional a11y) make the icon keyboard-activatable
  icon.setAttribute("role", "button");
  icon.setAttribute("tabindex", "0");
  icon.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleNav();
    }
  });
});

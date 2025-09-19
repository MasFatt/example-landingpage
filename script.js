// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Mobile menu toggle
    const btn = document.getElementById("mobile-menu-button");
    const menu = document.getElementById("mobile-menu");
  
    if (btn && menu) {
      btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
      });
    }
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
  
        const targetId = this.getAttribute("href");
        if (targetId === "#") return;
  
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const header = document.querySelector("header");
          const headerHeight = header ? header.offsetHeight : 0;
  
          const targetPosition =
            targetElement.getBoundingClientRect().top +
            window.pageYOffset -
            headerHeight;
  
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
  
          // Close mobile menu if open
          if (menu) {
            menu.classList.add("hidden");
          }
        }
      });
    });
  });
  
  // Tailwind
  window.tailwind = {
    config: {
      theme: {
        extend: {
          colors: {
            primary: {
              100: "#16a34a",
              400: "#15803d",
              nohover: "#166534",
            },
            secondary: "#f8fafc",
          },
        },
      },
    },
  };
  
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
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
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

// Tambahkan CSS no-scrollbar ke dalam <head>
const style = document.createElement("style");
style.innerHTML = `
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
document.head.appendChild(style);

// next back button
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("teamContainer");
  const scrollLeftBtn = document.getElementById("scrollLeft");
  const scrollRightBtn = document.getElementById("scrollRight");

  const scrollAmount = 220; // Sesuaikan dengan lebar tiap card + gap

  scrollLeftBtn.addEventListener("click", () => {
    container.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  });

  scrollRightBtn.addEventListener("click", () => {
    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  });
});

// Header
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('#nav a:not(.no-text-change)');
    const brandName = document.getElementById('brand-name');
  
    window.addEventListener('scroll', () => {
      if(window.scrollY > 0) {
        header.classList.remove('bg-transparent');
        header.classList.add('bg-white');
  
        // Ubah warna teks nav link dari putih ke abu-abu gelap
        navLinks.forEach(link => {
          link.classList.remove('text-white');
          link.classList.add('text-gray-700');
        });
  
        // Ubah warna brandName dari putih ke abu-abu gelap
        brandName.classList.remove('text-white');
        brandName.classList.add('text-gray-800');
  
      } else {
        header.classList.remove('bg-white');
        header.classList.add('bg-transparent');
  
        // Kembalikan warna teks nav link ke putih
        navLinks.forEach(link => {
          link.classList.remove('text-gray-700');
          link.classList.add('text-white');
        });
  
        // Kembalikan warna brandName ke putih
        brandName.classList.remove('text-gray-800');
        brandName.classList.add('text-white');
      }
    });
  });
  
const mainTextEl = document.getElementById("mainText");
const staticTextEl = document.getElementById("staticText");
const subTextEl = document.getElementById("subText");
const allElements = [
  mainTextEl,
  staticTextEl,
  document.querySelector(".static-text:last-child"),
  subTextEl,
];

const textOptions = [
  {
    main: "We Build",
    static: "CRO-optimized websites",
    sub: "To Increase Sales",
  },
  { main: "We Design", static: "branding strategies", sub: "For Brands" },

  { main: "We Do", static: "CGI Marketing", sub: "For Brands" },
];

let currentIndex = 0;

function animateText() {
  // Animate out
  allElements.forEach((el, index) => {
    el.classList.remove("animate-in-up", "animate-in-down");
    el.classList.add(index < 3 ? "animate-out-up" : "animate-out-down");
  });

  setTimeout(() => {
    // Change text
    currentIndex = (currentIndex + 1) % textOptions.length;
    const { main, static, sub } = textOptions[currentIndex];
    mainTextEl.textContent = main;
    staticTextEl.textContent = static;
    subTextEl.textContent = sub;

    // Animate in
    allElements.forEach((el, index) => {
      el.classList.remove("animate-out-up", "animate-out-down");
      void el.offsetWidth; // Force reflow
      el.classList.add(index < 3 ? "animate-in-up" : "animate-in-down");
    });
  }, 500);
}

// Initial animation in
allElements.forEach((el, index) => {
  el.classList.add(index < 3 ? "animate-in-up" : "animate-in-down");
});

// Start the animation loop
setInterval(animateText, 2000);

function updatePrice(button, price) {
  const priceElement = button.closest(".price-card").querySelector("#price");
  priceElement.textContent = "₹" + price;

  // Remove 'active' class from all buttons
  const packageButtons = button
    .closest(".package-buttons")
    .querySelectorAll(".package-btn");
  packageButtons.forEach((btn) => btn.classList.remove("active"));

  // Add 'active' class to the clicked button
  button.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const featuresScroll = document.querySelector(".features-scroll");
  const cards = document.querySelectorAll(".feature-card");

  // Clone the first set of cards and append them to the end
  // This creates a seamless loop effect
  cards.forEach((card) => {
    const clone = card.cloneNode(true);
    featuresScroll.appendChild(clone);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Logo scroll implementation
  const logoScroll = document.querySelector(".logo_scroll");
  const logos = document.querySelectorAll(".logo_scroll .logos");

  logos.forEach((logo) => {
    const clone = logo.cloneNode(true);
    logoScroll.appendChild(clone);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Logo scroll implementation
  const testimonials = document.querySelector(".testimonials-carousel");
  const testimonialcards = document.querySelectorAll(
    ".testimonials-carousel .testimonial-card"
  );

  // Clone cards multiple times for smoother infinite scroll
  for (let i = 0; i < 3; i++) {
    testimonialcards.forEach((card) => {
      const clone = card.cloneNode(true);
      testimonials.appendChild(clone);
    });
  }
});

// Portfolio Filtering
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  // Show all items by default
  portfolioItems.forEach((item) => {
    item.style.display = "block";
    item.style.opacity = "1";
    item.style.transform = "scale(1)";
  });

  // Make "All" button active by default
  const allButton = document.querySelector('.filter-btn[data-filter="all"]');
  if (allButton) {
    allButton.classList.add("active");
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");

      portfolioItems.forEach((item) => {
        if (filterValue === "all" || item.classList.contains(filterValue)) {
          item.style.display = "block";
          setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "scale(1)";
          }, 0);
        } else {
          item.style.opacity = "0";
          item.style.transform = "scale(0.8)";
          setTimeout(() => {
            item.style.display = "none";
          }, 300);
        }
      });
    });
  });
});

// Add smooth reveal animation for portfolio items on scroll
// const observerOptions = {
//   root: null,
//   rootMargin: "0px",
//   threshold: 0.1,
// };

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("reveal");
//       observer.unobserve(entry.target);
//     }
//   });
// }, observerOptions);

// document.querySelectorAll(".portfolio-item").forEach((item) => {
//   observer.observe(item);
// });

const faqItems = [
  {
    question: "How long does it take to create a website?",
    answer:
      "The time required varies depending on the complexity of the project. A simple website might take 2-4 weeks, while a more complex one could take 2-3 months or more.",
  },
  {
    question:
      "What are the key steps involved in the website development process?",
    answer:
      "The key steps typically include planning, design, development, content creation, testing, and launch. Each phase is crucial for creating a successful website.",
  },
  {
    question: "Can you integrate ecommerce functionality into my website?",
    answer:
      "Yes, we can integrate various ecommerce solutions depending on your needs, from simple payment gateways to full-fledged online stores with inventory management.",
  },
  {
    question: "Do you provide website maintenance services after launch?",
    answer:
      "Yes, we offer ongoing maintenance packages to ensure your website remains secure, up-to-date, and performs optimally after launch.",
  },
  {
    question: "What factors determine the cost of building a custom website?",
    answer:
      "Factors include the site's complexity, number of pages, custom functionality, design requirements, and whether you need content creation services.",
  },
  {
    question: "Do you optimize websites for search engines (SEO)?",
    answer:
      "Yes, we implement on-page SEO best practices during development and can provide more comprehensive SEO services if needed.",
  },
];

// State to track open FAQ
let openIndex = 0;

// Load FAQ Items
const faqList = document.getElementById("faq-list");

faqItems.forEach((item, index) => {
  const faqItem = document.createElement("div");
  faqItem.className = "faq-item";

  faqItem.innerHTML = `
    <button class="faq-question" data-index="${index}">
      <span>${item.question}</span>
      <span class="toggle-icon">${index === openIndex ? "-" : "+"}</span>
    </button>
    <div class="faq-answer" style="${
      index === openIndex ? "display:block;" : ""
    }">
      <p>${item.answer}</p>
    </div>
  `;

  faqList.appendChild(faqItem);
});

// Handle Toggle
faqList.addEventListener("click", (e) => {
  const button = e.target.closest(".faq-question");
  if (!button) return;

  const index = Number(button.dataset.index);
  const faqItemsElements = document.querySelectorAll(".faq-item");

  faqItemsElements.forEach((item, idx) => {
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".toggle-icon");

    if (idx === index) {
      const isOpen = answer.style.display === "block";
      answer.style.display = isOpen ? "none" : "block";
      icon.textContent = isOpen ? "+" : "-";
    } else {
      answer.style.display = "none";
      icon.textContent = "+";
    }
  });
});

// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const bars = document.querySelector(".threebars");
  const wrongbars = document.querySelector(".wrongbars");
  const mobilenav = document.querySelector(".mobilenav");
  const links = document.querySelectorAll(".mobilenav .mobilesubnav .ul a");
  const logo = document.querySelector(".mobilenav .logo");
  const logoSquare = document.querySelector(".mobilenav .logo-square");

  // Toggle mobile menu
  bars.addEventListener("click", function () {
    mobilenav.style.display = "flex";
    document.body.style.overflow = "hidden"; // Prevent scrolling

    // GSAP Animations
    gsap.from(mobilenav, {
      x: -30,
      opacity: 0,
      duration: 0.9,
    });

    gsap.from(logoSquare, {
      scale: 0,
      opacity: 0,
      duration: 1.2,
    });

    gsap.from(wrongbars, {
      scale: 0,
      opacity: 0,
      duration: 1.2,
    });

    gsap.from(links, {
      y: 80,
      duration: 0.9,
      stagger: 0.3,
    });
  });

  wrongbars.addEventListener("click", function () {
    mobilenav.style.display = "none";
    document.body.style.overflow = "auto"; // Restore scrolling
  });

  // Close menu when clicking on links
  links.forEach((link) => {
    link.addEventListener("click", function () {
      mobilenav.style.display = "none";
      document.body.style.overflow = "auto";
    });
  });
});

// Testimonials carousel logic

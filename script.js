// Typing Effect
const typedName = "Monish Kumar";
const typedRole = "Full Stack Developer | AI & ML Enthusiast";
let nameIndex = 0, roleIndex = 0;

function typeText(element, text, index, callback) {
  if (index < text.length) {
    document.getElementById(element).textContent += text.charAt(index);
    setTimeout(() => typeText(element, text, index + 1, callback), 100);
  } else if (callback) callback();
}

window.onload = () => {
  typeText("typed-name", typedName, 0, () => {
    setTimeout(() => typeText("typed-role", typedRole, 0), 500);
  });
};

// Scroll Reveal Animation
window.addEventListener("scroll", () => {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// Modal Functions
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent background scrolling
  
  // Add entrance animation
  setTimeout(() => {
    modal.querySelector('.modal-content').style.transform = 'translateY(0)';
    modal.querySelector('.modal-content').style.opacity = '1';
  }, 10);
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  const modalContent = modal.querySelector('.modal-content');
  
  // Add exit animation
  modalContent.style.transform = 'translateY(-50px)';
  modalContent.style.opacity = '0';
  
  setTimeout(() => {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Restore scrolling
    // Reset for next time
    modalContent.style.transform = 'translateY(50px)';
    modalContent.style.opacity = '0';
  }, 300);
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      const modalId = modal.id;
      closeModal(modalId);
    }
  });
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const openModal = document.querySelector('.modal[style*="block"]');
    if (openModal) {
      closeModal(openModal.id);
    }
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add loading animation for project cards
document.addEventListener('DOMContentLoaded', function() {
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    card.style.animation = 'fadeInUp 0.6s ease forwards';
  });
});

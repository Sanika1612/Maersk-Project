document.addEventListener('DOMContentLoaded', function() {
  // If a link has a dropdown, add sub menu toggle.
  var linksWithDropdown = document.querySelectorAll('nav ul li a:not(:only-child)');
  linksWithDropdown.forEach(function(link) {
    link.addEventListener('click', function(e) {
      var siblingDropdown = this.nextElementSibling;
      if (siblingDropdown) {
        siblingDropdown.style.display = siblingDropdown.style.display === 'block' ? 'none' : 'block';
        // Close one dropdown when selecting another
        var allDropdowns = document.querySelectorAll('.nav-dropdown');
        allDropdowns.forEach(function(dropdown) {
          if (dropdown !== siblingDropdown) {
            dropdown.style.display = 'none';
          }
        });
        e.stopPropagation();
      }
    });
  });

  // Clicking away from dropdown will remove the dropdown class
  document.addEventListener('click', function() {
    var allDropdowns = document.querySelectorAll('.nav-dropdown');
    allDropdowns.forEach(function(dropdown) {
      dropdown.style.display = 'none';
    });
  });

  // Toggle open and close nav styles on click
  var navToggle = document.getElementById('nav-toggle');
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      var navUl = document.querySelector('nav ul');
      if (navUl) {
        navUl.style.display = navUl.style.display === 'block' ? 'none' : 'block';
      }
    });

    // Hamburger to X toggle
    navToggle.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  }
});
window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, );
};

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    let valid = true;

    if (!name) {
        alert('Crafty says: Name is required');
        valid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Crafty says: Please enter a valid email address');
        valid = false;
    }

    if (!message) {
        alert('Crafty says: Message is required');
        valid = false;
    }

    if (valid) {
        // Clear the form
        document.getElementById('contactForm').reset();

        // Show a success message
        const successMessage = document.createElement('p');
        successMessage.textContent = 'Your message has been sent successfully!';
        successMessage.style.color = '#272727';
        successMessage.style.fontSize = '1.5em';
        successMessage.style.fontFamily="Muli";
        successMessage.style.paddingTop= '10px';
        
        successMessage.id = 'successMessage';
        const existingMessage = document.getElementById('successMessage');
        if (existingMessage) {
            existingMessage.remove();
        }
        document.getElementById('contact').appendChild(successMessage);
    }
});
document.addEventListener('DOMContentLoaded', function() {
  // const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const slider = document.querySelector('.slider');
  const cards = document.querySelectorAll('.card');

  let currentIndex = 0;
  const cardWidth = cards[0].offsetWidth + 20; // Adjusted width including margin

  // Show initial slide
  showSlide(currentIndex);

  function showSlide(index) {
      // Ensure index is within bounds
      if (index < 0) {
          currentIndex = cards.length - 1;
      } else if (index >= cards.length) {
          currentIndex = 0;
      } else {
          currentIndex = index;
      }

      // Calculate transform value
      const transformValue = -currentIndex * cardWidth;
      slider.style.transform = `translateX(${transformValue}px)`;
  }

  // Event listeners for navigation buttons
  // prevButton.addEventListener('click', function() {
  //     showSlide(currentIndex - 1);
  // });

  nextButton.addEventListener('click', function() {
      showSlide(currentIndex + 1);
  });
});



document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});

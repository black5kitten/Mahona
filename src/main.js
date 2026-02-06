// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Testimonials Carousel
const testimonials = document.querySelectorAll('.testimonial-card');
let currentIndex = 0;

if (testimonials.length > 0) {
  const showTestimonial = (index) => {
    testimonials.forEach((card, i) => {
      if (i === index) {
        card.classList.remove('opacity-0');
        card.classList.add('opacity-100');
      } else {
        card.classList.remove('opacity-100');
        card.classList.add('opacity-0');
      }
    });
  };

  // Initial show
  showTestimonial(currentIndex);

  // Auto rotate
  setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }, 4000);
}

// Gallery Carousel Logic
const galleryContainer = document.getElementById('gallery-carousel');
const prevBtn = document.getElementById('gallery-prev');
const nextBtn = document.getElementById('gallery-next');

if (galleryContainer && prevBtn && nextBtn) {
  prevBtn.addEventListener('click', () => {
    galleryContainer.scrollBy({
      left: -galleryContainer.offsetWidth, // Scroll one full container width
      behavior: 'smooth'
    });
  });

  nextBtn.addEventListener('click', () => {
    galleryContainer.scrollBy({
      left: galleryContainer.offsetWidth, // Scroll one full container width
      behavior: 'smooth'
    });
  });
}

// Facilities Carousel Logic
const facilitiesContainer = document.getElementById('facilities-carousel');
const facilitiesPrevBtn = document.getElementById('facilities-prev');
const facilitiesNextBtn = document.getElementById('facilities-next');

if (facilitiesContainer && facilitiesPrevBtn && facilitiesNextBtn) {
  facilitiesPrevBtn.addEventListener('click', () => {
    // Scroll amount: Width of one item approx
    // On desktop (3 items), shifting by container width scrolls 3 items.
    // On mobile (1 item), shifting by container width scrolls 1 item.
    facilitiesContainer.scrollBy({
      left: -facilitiesContainer.offsetWidth,
      behavior: 'smooth'
    });
  });

  facilitiesNextBtn.addEventListener('click', () => {
    facilitiesContainer.scrollBy({
      left: facilitiesContainer.offsetWidth,
      behavior: 'smooth'
    });
  });
}

// Admission Form Logic
const admissionForm = document.getElementById('admission-form');
const successMessage = document.getElementById('success-message');

if (admissionForm && successMessage) {
  admissionForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simulate loading/processing if needed (optional)
    const submitBtn = admissionForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerText;
    submitBtn.innerText = 'Submitting...';
    submitBtn.disabled = true;

    setTimeout(() => {
      // Hide form
      admissionForm.style.display = 'none';

      // Show success message
      successMessage.classList.remove('hidden');

      // Reset button (in case they reload or go back)
      submitBtn.innerText = originalBtnText;
      submitBtn.disabled = false;

      // Scroll to top to see message
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500); // 1.5s delay for realism
  });
}

// Explore Classes Modal Logic
const modalContainer = document.getElementById('modal-container');
const modalContent = document.getElementById('modal-content');

const classDetails = {
  'pre-primary': {
    title: 'Pre-Primary (Playgroup - UKG)',
    color: 'text-brand-pink',
    icon: 'fa-shapes',
    description: 'A nurturing environment where children discover the joy of learning through play, exploration, and structured activities.',
    subjects: ['English & Phonics', 'Number Work', 'General Awareness (EVS)', 'Art & Craft', 'Music & Movement'],
    activities: ['Storytelling Sessions', 'Sand & Water Play', 'Role Play', 'Festival Celebrations'],
    approach: 'Montessori & Play-way method focusing on fine motor skills and social development.'
  },
  'primary': {
    title: 'Primary School (Class 1 - 5)',
    color: 'text-brand-blue',
    icon: 'fa-book-open-reader',
    description: 'Building a strong academic foundation while encouraging curiosity and confidence in young learners.',
    subjects: ['English Literature & Grammar', 'Hindi', 'Mathematics', 'Environmental Science', 'Computer Studies', 'General Knowledge'],
    activities: ['Science Experiments', 'Public Speaking', 'Field Trips', 'Creative Writing', 'Mental Math'],
    approach: 'Activity-based learning with a focus on conceptual clarity and language proficiency.'
  },
  'middle': {
    title: 'Middle School (Class 6 - 8)',
    color: 'text-brand-green',
    icon: 'fa-microscope',
    description: 'Transitioning from guided learning to independent inquiry, with an emphasis on analytical thinking.',
    subjects: ['Physics, Chemistry, Biology', 'Mathematics', 'History & Civics', 'Geography', 'Computer Science', 'Third Language (Sanskrit/Urdu)'],
    activities: ['Robotics Lab', 'Debates & Elocution', 'Sports Competitions', 'Project Exhibitions'],
    approach: 'Inquiry-based learning aimed at developing critical thinking and problem-solving skills.'
  },
  'secondary': {
    title: 'Secondary (Class 9 - 12)',
    color: 'text-brand-yellow',
    icon: 'fa-graduation-cap',
    description: 'Preparing students for board exams and future career paths with rigorous academic training.',
    subjects: ['Science Stream (PCM/PCB)', 'Commerce Stream', 'English Core', 'Physical Education', 'Computer Science / IP'],
    activities: ['Career Counseling', 'Leadership Council', 'Mock Parliaments', 'Subject Enrichment Activities'],
    approach: 'Exam-focused preparation combined with career-oriented guidance and personalized mentoring.'
  }
};

// Make functions global for inline onclick
window.openModal = (type) => {
  const data = classDetails[type];
  if (!data || !modalContainer) return;

  const contentHtml = `
    <div class="text-center mb-8">
      <div class="inline-block p-4 rounded-full bg-gray-50 mb-4 shadow-sm">
        <i class="fa-solid ${data.icon} text-4xl ${data.color}"></i>
      </div>
      <h2 class="text-3xl font-bold text-gray-800 mb-2">${data.title}</h2>
      <p class="text-gray-600">${data.description}</p>
    </div>

    <div class="space-y-8">
      <!-- Subjects -->
      <div>
        <h3 class="font-bold text-gray-800 text-lg mb-3 flex items-center gap-2">
          <i class="fa-solid fa-book ${data.color}"></i> Subjects Taught
        </h3>
        <div class="flex flex-wrap gap-2">
          ${data.subjects.map(sub => `<span class="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 font-medium border border-gray-200">${sub}</span>`).join('')}
        </div>
      </div>

      <!-- Activities & Approach Grid -->
      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-gray-50 p-5 rounded-2xl border border-gray-100">
          <h3 class="font-bold text-gray-800 text-lg mb-3 flex items-center gap-2">
            <i class="fa-solid fa-star ${data.color}"></i> Key Activities
          </h3>
          <ul class="space-y-2">
            ${data.activities.map(act => `<li class="flex items-start gap-2 text-sm text-gray-600"><i class="fa-solid fa-check mt-1 ${data.color}"></i> ${act}</li>`).join('')}
          </ul>
        </div>

        <div class="bg-gray-50 p-5 rounded-2xl border border-gray-100">
          <h3 class="font-bold text-gray-800 text-lg mb-3 flex items-center gap-2">
            <i class="fa-solid fa-lightbulb ${data.color}"></i> Teaching Approach
          </h3>
          <p class="text-sm text-gray-600 leading-relaxed">${data.approach}</p>
        </div>
      </div>
    </div>
  `;

  modalContent.innerHTML = contentHtml;
  modalContainer.classList.remove('hidden', 'opacity-0');
  modalContainer.classList.add('flex', 'opacity-100');

  // Prevent body scroll
  document.body.style.overflow = 'hidden';
};

window.closeModal = () => {
  if (!modalContainer) return;
  modalContainer.classList.add('opacity-0');
  modalContainer.classList.remove('opacity-100');

  setTimeout(() => {
    modalContainer.classList.add('hidden');
    modalContainer.classList.remove('flex');
    modalContent.innerHTML = ''; // Clear content
  }, 300); // Wait for transition

  // Restore body scroll
  document.body.style.overflow = 'auto';
};

// Close on outside click
if (modalContainer) {
  modalContainer.addEventListener('click', (e) => {
    if (e.target === modalContainer) {
      window.closeModal();
    }
  });
}

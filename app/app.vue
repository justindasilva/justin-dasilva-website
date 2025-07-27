<script setup lang="ts">
import { ref } from 'vue'

const showContactForm = ref(false)
const isSubmitting = ref(false)
const submitStatus = ref('')

const formData = ref({
  name: '',
  email: '',
  company: '',
  message: ''
})

const sendEmail = () => {
  showContactForm.value = true
}

const closeContactForm = () => {
  showContactForm.value = false
  submitStatus.value = ''
  formData.value = { name: '', email: '', company: '', message: '' }
}

const submitForm = async () => {
  if (!formData.value.name || !formData.value.email || !formData.value.message) {
    submitStatus.value = 'Please fill in all required fields.'
    return
  }

  isSubmitting.value = true
  submitStatus.value = ''

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData.value)
    })

    const result = await response.json()

    if (result.success) {
      submitStatus.value = 'Thank you! Your message has been sent successfully.'
      setTimeout(() => {
        closeContactForm()
      }, 3000)
    } else {
      submitStatus.value = 'Sorry, there was an error sending your message. Please try again.'
    }
  } catch (error) {
    submitStatus.value = 'Sorry, there was an error sending your message. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="resume-container">
    <!-- Header Section -->
    <header class="resume-header">
      <div class="header-content">
        <h1 class="name">Justin Da Silva</h1>
        <h2 class="title">Full-Stack Developer</h2>
                <div class="contact-info">
          <div class="contact-item">
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <a href="#" @click.prevent="sendEmail" id="email-link">Contact Me</a>
          </div>
          <div class="contact-item">
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
            </svg>
            <a href="/justin-dasilva-resume.pdf" target="_blank">Download PDF Resume</a>
          </div>
          <div class="contact-item">
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <a href="https://github.com/justindasilva" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <div class="contact-item">
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <a href="https://www.linkedin.com/in/justinmdasilva/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </header>

    <!-- Contact Form Modal -->
    <div v-if="showContactForm" class="modal-overlay" @click="closeContactForm">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3>Contact Me</h3>
          <button class="close-button" @click="closeContactForm">&times;</button>
        </div>
        
        <form @submit.prevent="submitForm" class="contact-form">
          <div class="form-group">
            <label for="name">Name *</label>
            <input 
              id="name"
              v-model="formData.name" 
              type="text" 
              required 
              placeholder="Your name"
            />
          </div>
          
          <div class="form-group">
            <label for="email">Email *</label>
            <input 
              id="email"
              v-model="formData.email" 
              type="email" 
              required 
              placeholder="your.email@example.com"
            />
          </div>
          
          <div class="form-group">
            <label for="company">Company</label>
            <input 
              id="company"
              v-model="formData.company" 
              type="text" 
              placeholder="Your company (optional)"
            />
          </div>
          
          <div class="form-group">
            <label for="message">Message *</label>
            <textarea 
              id="message"
              v-model="formData.message" 
              required 
              rows="4"
              placeholder="Tell me about your opportunity..."
            ></textarea>
          </div>
          
          <div v-if="submitStatus" class="status-message" :class="{ 'success': submitStatus.includes('Thank you') }">
            {{ submitStatus }}
          </div>
          
          <div class="form-actions">
            <button type="button" class="cancel-button" @click="closeContactForm">
              Cancel
            </button>
            <button type="submit" class="submit-button" :disabled="isSubmitting">
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Summary Section -->
    <section class="resume-section">
      <h3 class="section-title">Summary</h3>
      <p class="summary-text">
        Results-driven full-stack developer with 15+ years of experience building scalable apps with Vue.js, Node.js, and PHP. Passionate about crafting maintainable, accessible software and improving team processes. Experienced mentor and collaborator, actively exploring cloud infrastructure with AWS and Terraform.
      </p>
    </section>

    <!-- Skills Section -->
    <section class="resume-section">
      <h3 class="section-title">Skills</h3>
      <div class="skills-grid">
        <div class="skill-category">
          <h4 class="skill-category-title">Front-End</h4>
          <div class="skill-tags">
            <span class="skill-tag">Vue.js</span>
            <span class="skill-tag">Nuxt</span>
            <span class="skill-tag">React</span>
            <span class="skill-tag">Next.js</span>
            <span class="skill-tag">JavaScript (ES6+)</span>
            <span class="skill-tag">HTML5</span>
            <span class="skill-tag">CSS3</span>
            <span class="skill-tag">Responsive Design</span>
            <span class="skill-tag">UI/UX</span>
          </div>
        </div>
        <div class="skill-category">
          <h4 class="skill-category-title">Back-End</h4>
          <div class="skill-tags">
            <span class="skill-tag">Node.js</span>
            <span class="skill-tag">PHP</span>
            <span class="skill-tag">MySQL</span>
            <span class="skill-tag">PostgreSQL</span>
            <span class="skill-tag">RESTful API design</span>
          </div>
        </div>
        <div class="skill-category">
          <h4 class="skill-category-title">DevOps & Tools</h4>
          <div class="skill-tags">
            <span class="skill-tag">Git</span>
            <span class="skill-tag">Docker</span>
            <span class="skill-tag">AWS</span>
            <span class="skill-tag">Terraform</span>
            <span class="skill-tag">CI/CD</span>
          </div>
        </div>
        <div class="skill-category">
          <h4 class="skill-category-title">Practices</h4>
          <div class="skill-tags">
            <span class="skill-tag">Agile</span>
            <span class="skill-tag">Test-driven development</span>
            <span class="skill-tag">Accessibility (WCAG)</span>
            <span class="skill-tag">OOP</span>
            <span class="skill-tag">Mentoring</span>
            <span class="skill-tag">Git Flow</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="resume-section">
      <h3 class="section-title">Work Experience</h3>
      <div class="experience-list">
        <div class="experience-item">
          <div class="job-header">
            <h4 class="company-name">Mercatus Technologies Inc</h4>  
            <span class="job-period">May 2016 – April 2025</span>
          </div>
          <ul class="achievements-list">
            <li class="achievement-item">Maintained and enhanced an Angular + Drupal 7 e-commerce platform (~5 years), then contributed to its migration to Next.js (React) + Drupal 10 (~4 years), collaborating with an 8‑developer team to modernize architecture and processes, ensuring all client sites were upgraded before Drupal 7 end‑of‑life.</li>
            <li class="achievement-item">Initiated and developed “The Config Manager,” a Nuxt (Vue) app that empowered clients to customize site features, themes, and translations.</li>
            <li class="achievement-item">Designed RESTful APIs connecting front-end and back-end systems.</li>
            <li class="achievement-item">Championed WCAG compliance, ensuring certification.</li>
            <li class="achievement-item">Improved page load times by 20%, boosting overall performance.</li>
            <li class="achievement-item">Mentored juniors, led code reviews, and promoted Agile & Git Flow practices.</li>
            <li class="achievement-item">Contributed to architectural discussions, sprint planning, and cross‑team efforts.</li>
          </ul>
        </div>

        <div class="experience-item">
          <div class="job-header">
            <h4 class="company-name">Fuse Powered Inc.</h4>
            <span class="job-period">November 2014 – October 2015</span>
          </div>
          <ul class="achievements-list">
            <li class="achievement-item">Developed and maintained a high-traffic PHP web app (Phalcon Framework), building front‑end and back‑end features and collaborating via Git Flow.</li>
          </ul>
        </div>

        <div class="experience-item">
          <div class="job-header">
            <h4 class="company-name">Arlene Dickinson Enterprises</h4>
            <span class="job-period">March 2014 – November 2014</span>
          </div>
          <ul class="achievements-list">
            <li class="achievement-item">Built a mobile‑first, responsive infographic feature using MODx (PHP), jQuery, SASS, Bootstrap 3, and Mustache, boosting user engagement by 25%.</li>
          </ul>
        </div>

        <div class="experience-item">
          <div class="job-header">
            <h4 class="company-name">EldoLED</h4>
            <span class="job-period">November 2008 – February 2014</span>
          </div>
          <ul class="achievements-list">
            <li class="achievement-item">Developed and maintained web applications with PHP, MySQL, JavaScript, XHTML, and CSS, focusing on clean architecture, database design, and front‑end interactivity using jQuery.</li>
          </ul>
        </div>

        <div class="experience-item">
          <div class="job-header">
            <h4 class="company-name">Self-Employed</h4>
            <span class="job-period">2005 – Present</span>
          </div>
          <ul class="achievements-list">
            <li class="achievement-item">Created and managed multiple websites and developed web and mobile applications for clients, including interactive Flash games and Android apps.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section class="resume-section">
      <h3 class="section-title">Education</h3>
      <div class="education-list">
        <div class="education-item">
          <div class="education-header">
            <h4 class="school">University of Toronto Scarborough</h4>
            <span class="education-period">2007 – 2011</span>
          </div>
          <p class="education-details">Honours B.Sc., Major: Computer Science; Minors: Economics & Statistics</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.resume-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
  background: #fff;
}

.resume-header {
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #e5e7eb;
}

.name {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.025em;
}

.title {
  font-size: 1.25rem;
  font-weight: 500;
  color: #6b7280;
  margin: 0 0 1.5rem 0;
}

.contact-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
}

.contact-item a {
  color: #3b82f6;
  text-decoration: none;
  transition: color 0.2s;
}

.contact-item a:hover {
  color: #2563eb;
  text-decoration: underline;
}

.icon {
  width: 1rem;
  height: 1rem;
  color: #6b7280;
}

.resume-section {
  margin-bottom: 2rem;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.summary-text {
  font-size: 1rem;
  color: #4b5563;
  margin: 0;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.skill-category {
  padding: 1rem;
  background: #f9fafb;
  border-radius: 0.5rem;
}

.skill-category-title {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 0.75rem 0;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: #3b82f6;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.experience-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.experience-item {
  padding: 1rem;
  background: #f9fafb;
  border-radius: 0.5rem;
  border-left: 4px solid #e5e7eb;
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.job-period {
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
}

.company-name {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}

.achievements-list {
  margin: 0;
  padding-left: 1.25rem;
}

.achievement-item {
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

.education-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.education-item {
  padding: 1rem;
  background: #f9fafb;
  border-radius: 0.5rem;
}

.education-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.education-period {
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
}

.school {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}

.education-details {
  margin: 0;
  font-size: 0.875rem;
  color: #4b5563;
}

.education-details li {
  margin-bottom: 0.25rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .resume-container {
    padding: 1rem;
  }
  
  .name {
    font-size: 2rem;
  }
  
  .contact-info {
    flex-direction: column;
    align-items: center;
  }
  
  .job-header,
  .education-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
}

@media print {
  .resume-container {
    max-width: none;
    padding: 0;
  }
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.modal-content {
  background: white;
  border-radius: 0.5rem;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1.5rem 0 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 1.5rem;
}

.modal-header h3 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #6b7280;
  cursor: pointer;
  padding: 0;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  transition: background-color 0.2s;
}

.close-button:hover {
  background-color: #f3f4f6;
}

.contact-form {
  padding: 0 1.5rem 1.5rem 1.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #374151;
  font-size: 0.875rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  transition: border-color 0.2s, box-shadow 0.2s;
  box-sizing: border-box;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

.status-message {
  padding: 0.75rem;
  border-radius: 0.375rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  background-color: #fef2f2;
  color: #dc2626;
  border: 1px solid #fecaca;
}

.status-message.success {
  background-color: #f0fdf4;
  color: #16a34a;
  border-color: #bbf7d0;
}

.form-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
}

.cancel-button,
.submit-button {
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
}

.cancel-button {
  background-color: #f3f4f6;
  color: #374151;
}

.cancel-button:hover {
  background-color: #e5e7eb;
}

.submit-button {
  background-color: #3b82f6;
  color: white;
}

.submit-button:hover:not(:disabled) {
  background-color: #2563eb;
}

.submit-button:disabled {
  background-color: #9ca3af;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .modal-content {
    margin: 1rem;
    max-height: calc(100vh - 2rem);
  }
  
  .form-actions {
    flex-direction: column;
  }
  
  .cancel-button,
  .submit-button {
    width: 100%;
  }
}
</style>
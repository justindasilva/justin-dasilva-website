<script setup lang="ts">
useHead({
  titleTemplate: 'Justin Da Silva',
})

const sendEmail = () => {
  const email = 'justindasilva@gmail.com'
  const subject = 'Resume Inquiry'
  const body = 'Hi Justin,\n\nI came across your resume and would like to discuss potential opportunities.\n\nBest regards,'
  
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  window.location.href = mailtoLink
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
            <span class="icon">📧</span>
            <a href="#" @click.prevent="sendEmail" id="email-link">justindasilva[at]gmail[dot]com</a>
          </div>
          <div class="contact-item">
            <span class="icon">📄</span>
            <a href="/justin-dasilva-resume.pdf" target="_blank">Download PDF Resume</a>
          </div>
        </div>
      </div>
    </header>

    <!-- Summary Section -->
    <section class="resume-section">
      <h3 class="section-title">Summary</h3>
      <p class="summary-text">
        Results-oriented full-stack developer with 15+ years of experience delivering high-quality web applications using HTML5, CSS3, JavaScript, Vue, Node, and PHP. Proven ability to create innovative, user-friendly solutions. Seeking a challenging opportunity to leverage my skills and contribute to a dynamic team.
      </p>
    </section>

    <!-- Skills Section -->
    <section class="resume-section">
      <h3 class="section-title">Skills</h3>
      <div class="skills-grid">
        <div class="skill-category">
          <h4 class="skill-category-title">Front-End</h4>
          <div class="skill-tags">
            <span class="skill-tag">HTML5</span>
            <span class="skill-tag">CSS3</span>
            <span class="skill-tag">JavaScript (ES6+)</span>
            <span class="skill-tag">Vue</span>
            <span class="skill-tag">Nuxt</span>
            <span class="skill-tag">React</span>
            <span class="skill-tag">Next</span>
            <span class="skill-tag">Responsive Design</span>
            <span class="skill-tag">UI/UX Principles</span>
          </div>
        </div>
        <div class="skill-category">
          <h4 class="skill-category-title">Back-End</h4>
          <div class="skill-tags">
            <span class="skill-tag">Node</span>
            <span class="skill-tag">Express</span>
            <span class="skill-tag">PHP</span>
            <span class="skill-tag">MySQL</span>
            <span class="skill-tag">PostgreSQL</span>
          </div>
        </div>
        <div class="skill-category">
          <h4 class="skill-category-title">DevOps</h4>
          <div class="skill-tags">
            <span class="skill-tag">Git</span>
            <span class="skill-tag">Docker</span>
            <span class="skill-tag">CI/CD</span>
            <span class="skill-tag">AWS</span>
          </div>
        </div>
        <div class="skill-category">
          <h4 class="skill-category-title">Other</h4>
          <div class="skill-tags">
            <span class="skill-tag">Agile</span>
            <span class="skill-tag">OOP</span>
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
            <h4 class="job-title">Senior Full-Stack Developer</h4>
            <span class="job-period">May 2016 - April 2025</span>
          </div>
          <h5 class="company-name">Mercatus Technologies Inc</h5>
          <ul class="achievements-list">
            <li class="achievement-item">Spearheaded the development and maintenance of e-commerce web applications using Nuxt (Vue), Next (React), Node, and PHP for a team of 10 developers, consistently delivering high-quality solutions.</li>
            <li class="achievement-item">Instrumental in implementing Web Content Accessibility Guidelines (WCAG), ensuring client applications met certification requirements.</li>
            <li class="achievement-item">Developed "The Config Manager," a Nuxt application that allowed clients to customize their websites, including features, translation strings, and theme elements.</li>
            <li class="achievement-item">Designed and implemented RESTful APIs, facilitating seamless data exchange between front-end and back-end systems and enhancing overall application functionality.</li>
            <li class="achievement-item">Optimized application performance, achieving a 20% improvement in page load speed and significantly enhancing user experience.</li>
            <li class="achievement-item">Progressed through increasingly senior roles, providing technical leadership and mentoring junior developers on key projects.</li>
            <li class="achievement-item">Utilized Agile methodologies to streamline development processes, improve team efficiency, and ensure timely project delivery.</li>
            <li class="achievement-item">Implemented and maintained Git Flow branching strategies, promoting efficient collaboration and ensuring smooth version control.</li>
          </ul>
        </div>

        <div class="experience-item">
          <div class="job-header">
            <h4 class="job-title">Full-Stack Developer</h4>
            <span class="job-period">November 2014 - October 2015</span>
          </div>
          <h5 class="company-name">Fuse Powered Inc.</h5>
          <ul class="achievements-list">
            <li class="achievement-item">Contributed to the development and maintenance of a high-traffic web application using PHP (Phalcon Framework), focusing on front-end (HTML, CSS, JavaScript) and back-end development, and version control (Git Flow).</li>
          </ul>
        </div>

        <div class="experience-item">
          <div class="job-header">
            <h4 class="job-title">Web Developer</h4>
            <span class="job-period">March 2014 - November 2014</span>
          </div>
          <h5 class="company-name">Arlene Dickinson Enterprises</h5>
          <ul class="achievements-list">
            <li class="achievement-item">Developed a mobile-first, responsive infographic feature using MODx (a PHP framework), jQuery, SASS, Twitter Bootstrap 3, and Mustache, resulting in a 25% increase in user engagement.</li>
          </ul>
        </div>

        <div class="experience-item">
          <div class="job-header">
            <h4 class="job-title">Web Developer</h4>
            <span class="job-period">November 2008 - February 2014</span>
          </div>
          <h5 class="company-name">EldoLED</h5>
          <ul class="achievements-list">
            <li class="achievement-item">Involved in the development and maintenance of web applications using PHP, MySQL, JavaScript, XHTML, and CSS, with a focus on creating extensible and maintainable code, database design, and front-end interactivity using jQuery.</li>
          </ul>
        </div>

        <div class="experience-item">
          <div class="job-header">
            <h4 class="job-title">Freelance Web/Mobile Developer</h4>
            <span class="job-period">2005 - Present</span>
          </div>
          <h5 class="company-name">Self-Employed</h5>
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
            <h4 class="degree">Honours Bachelor of Science</h4>
            <span class="education-period">2007 - 2011</span>
          </div>
          <h5 class="school">University of Toronto Scarborough</h5>
          <ul class="education-details">
            <li>Major Program: Computer Science</li>
            <li>Minor Programs: Economics and Statistics</li>
          </ul>
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
  font-size: 1rem;
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
  border-left: 4px solid #3b82f6;
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.job-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}

.job-period {
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
}

.company-name {
  font-size: 1rem;
  font-weight: 500;
  color: #3b82f6;
  margin: 0 0 0.75rem 0;
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

.degree {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}

.education-period {
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
}

.school {
  font-size: 1rem;
  font-weight: 500;
  color: #3b82f6;
  margin: 0 0 0.5rem 0;
}

.education-details {
  margin: 0;
  padding-left: 1.25rem;
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
</style>
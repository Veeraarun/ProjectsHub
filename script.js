// Portfolio Hub - Project Filtering and Management

document.addEventListener('DOMContentLoaded', () => {
  initializeFilters();
  updateProjectCount();
});

/**
 * Initialize filter button event listeners
 */
function initializeFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectsGrid = document.getElementById('projects-grid');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => handleFilterChange(button, filterButtons, projectsGrid));
    
    // Keyboard support for tabs
    button.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleFilterChange(button, filterButtons, projectsGrid);
      }
    });
  });
}

/**
 * Handle filter button click and update project visibility
 * @param {Element} clickedButton - The clicked filter button
 * @param {NodeList} allButtons - All filter buttons
 * @param {Element} projectsGrid - The projects grid container
 */
function handleFilterChange(clickedButton, allButtons, projectsGrid) {
  const filter = clickedButton.getAttribute('data-filter');

  // Update active button state
  allButtons.forEach((btn) => {
    btn.classList.remove('active');
    btn.setAttribute('aria-selected', 'false');
  });
  
  clickedButton.classList.add('active');
  clickedButton.setAttribute('aria-selected', 'true');

  // Filter projects
  const projects = projectsGrid.querySelectorAll('.project-item');
  projects.forEach((project) => {
    const projectCategory = project.getAttribute('data-category');
    const matches = filter === 'all' || projectCategory === filter;

    if (matches) {
      // Show project with animation
      project.classList.remove('hiding');
      setTimeout(() => {
        project.style.display = 'block';
      }, 0);
    } else {
      // Hide project with animation
      project.classList.add('hiding');
      setTimeout(() => {
        project.style.display = 'none';
      }, 320);
    }
  });

  // Update project count after filtering
  updateProjectCount();
}

/**
 * Update the project count display
 */
function updateProjectCount() {
  const projectsGrid = document.getElementById('projects-grid');
  const projectCountElement = document.getElementById('numOfProjects');
  
  if (!projectsGrid || !projectCountElement) return;

  const visibleProjects = Array.from(projectsGrid.querySelectorAll('.project-item')).filter(
    (project) => project.style.display !== 'none'
  );

  const totalProjects = projectsGrid.querySelectorAll('.project-item').length;
  const visibleCount = visibleProjects.length;

  if (visibleCount === totalProjects) {
    projectCountElement.textContent = `${visibleCount} Project${visibleCount !== 1 ? 's' : ''} Displayed`;
  } else {
    projectCountElement.textContent = `${visibleCount} of ${totalProjects} Project${totalProjects !== 1 ? 's' : ''} Shown`;
  }
}

/**
 * Trap focus within interactive elements for better accessibility
 */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    const activeElement = document.activeElement;
    
    // Ensure tab navigation works properly with project buttons
    if (activeElement && activeElement.classList.contains('project-btn')) {
      // Tab navigation will continue naturally
    }
  }
});

// Smooth scroll behavior for accessibility
if (!CSS.supports('scroll-behavior', 'smooth')) {
  document.documentElement.style.scrollBehavior = 'auto';
}

// Log for debugging (remove in production)
console.log('Portfolio Hub initialized successfully');

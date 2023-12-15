// main.js

// Function to dynamically load scripts
function loadScripts(scripts) {
  scripts.forEach(script => {
    const scriptElement = document.createElement('script');
    scriptElement.src = script;
    scriptElement.defer = true;
    document.head.appendChild(scriptElement);
  });
}

// Function to dynamically load styles
function loadStyles(styles) {
  styles.forEach(style => {
    const styleElement = document.createElement('link');
    styleElement.rel = 'stylesheet';
    styleElement.href = style;
    document.head.appendChild(styleElement);
  });
}

// Extract the current page name from the URL
const currentPage = window.location.pathname.split('/').pop();

// Fetch the JSON configuration file
fetch('content/code/reqs.js')
  .then(response => response.json())
  .then(config => {
    // Check if the current page has configuration
    if (config.pages && config.pages[currentPage]) {
      const pageConfig = config.pages[currentPage];

      if (pageConfig.scripts) {
        loadScripts(pageConfig.scripts);
      }

      if (pageConfig.styles) {
        loadStyles(pageConfig.styles);
      }
    }
  })
  .catch(error => console.error('Error fetching JSON:', error));

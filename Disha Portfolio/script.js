
 
    (function() {
      const toggle = document.getElementById('darkModeToggle');
      const rootElement = document.documentElement;

      // Check for saved theme in localStorage
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        rootElement.classList.add('dark');
        toggle.checked = true;
        toggle.setAttribute('aria-checked', 'true');
      }

      toggle.addEventListener('change', () => {
        if (toggle.checked) {
          rootElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
          toggle.setAttribute('aria-checked', 'true');
        } else {
          rootElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
          toggle.setAttribute('aria-checked', 'false');
        }
      });
    })();
  
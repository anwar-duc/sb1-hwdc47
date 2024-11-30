// Function to toggle dark mode
export const toggleDarkMode = () => {
  // Toggle the 'dark' class on the HTML element
  document.documentElement.classList.toggle('dark');
};

// Save the user's dark mode preference in localStorage
export const saveDarkModePreference = (isDarkMode: boolean) => {
  localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
};

// Load dark mode preference from localStorage on page load
export const loadDarkModePreference = () => {
  const darkMode = localStorage.getItem('darkMode');
  if (darkMode === 'enabled') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

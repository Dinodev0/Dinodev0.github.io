document.getElementById("menu-button").addEventListener("click", function() {
    this.classList.toggle("open");
  });

// Get the menu button and sidebar elements
const menuButton = document.querySelector('.menu-button');
const sidebar = document.querySelector('.sidebar');

// Add an event listener to the menu button
menuButton.addEventListener('click', () => {
  // Toggle the show class on the sidebar
  sidebar.classList.toggle('show');
});
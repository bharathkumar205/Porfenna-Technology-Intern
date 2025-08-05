document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop();
  console.log("Current page:", currentPage); // debug

  const sidebarLinks = document.querySelectorAll('.list-group-item');

  sidebarLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});
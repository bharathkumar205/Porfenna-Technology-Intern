window.addEventListener('DOMContentLoaded', () => {
  includeHTML('../Shared/navbar.html', 'navbar');
  includeHTML('../Shared/footer.html', 'footer');
  loadBanner(); // new
});

function includeHTML(file, elementId) {
  console.log(`Loading ${file} into #${elementId}`);
  fetch(file)
    .then(response => response.text())
    .then(data => document.getElementById(elementId).innerHTML = data)
    .catch(err => console.error(`Error loading ${file}:`, err));
}

function loadBanner() {
  const bannerElement = document.getElementById('page-banner');
  if (!bannerElement) return;

  const title = bannerElement.getAttribute('data-title') || 'Page Title';
  const path = bannerElement.getAttribute('data-path') || 'Home / Page';

  fetch('../Shared/banner.html')
    .then(response => response.text())
    .then(data => {
      bannerElement.innerHTML = data;
      document.getElementById('banner-title').textContent = title;
      document.getElementById('breadcrumb-path').textContent = path;
    });
}

const searchInput = document.getElementById('searchInput');
const eventCards = document.querySelectorAll('.card');

searchInput.addEventListener('input', function () {
  const searchTerm = searchInput.value.toLowerCase();

  eventCards.forEach(card => {
    const title = card.querySelector('.card-title').textContent.toLowerCase();
    card.parentElement.style.display = title.includes(searchTerm) ? 'block' : 'none';
  });
});

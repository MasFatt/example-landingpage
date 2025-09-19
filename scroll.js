const teamScroll = document.getElementById('teamScroll');
const nextBtn = document.getElementById('nextTeam');
const prevBtn = document.getElementById('prevTeam');

const scrollAmount = 200;

nextBtn.addEventListener('click', () => {
  teamScroll.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  teamScroll.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

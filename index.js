let currentSlide = 0;
const itemsPerPage = 3;
function showSlide(index) {
  const slides = document.querySelectorAll('.work-item');
  slides.forEach(slide => slide.classList.remove('active'));
  for (let i = index * itemsPerPage; i < (index * itemsPerPage) + itemsPerPage; i++) {
    if (slides[i]) {
      slides[i].classList.add('active');
    }
  }
  const dots = document.querySelectorAll('.pagination span');
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
  currentSlide = index;
}


showSlide(0);
const newsItems = document.querySelector('.news-items');
const dots = document.querySelectorAll('.news-pagination .dot');
let currentIndex = 0;
function updateSlider(index) {
  const offset = -index * 100 / 3;
  newsItems.style.transform = `translateX(${offset}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateSlider(index);
  });
});
updateSlider(currentIndex);
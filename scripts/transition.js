const element = document.querySelector('#title, .page-nav');
const observer = new IntersectionObserver(entries => {
  element.classList.toggle( 'animation', entries[0].isIntersecting );
});

observer.observe( element );
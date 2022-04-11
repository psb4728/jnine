// Scroll Event
const scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60)};
const elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {
  Array.prototype.forEach.call(elementsToShow, function(element){
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } 
  });

  scroll(loop);
}

loop();

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    (rect.top <= 200
      && rect.bottom >= 200)
    ||
    (rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top >= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 200 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

const navigation = document.querySelector('.navigation');
const hamBtn = document.querySelector('.ham_btn');

hamBtn.addEventListener('click', ()=> {
  hamBtn.classList.toggle('open');
  navigation.classList.toggle('open');
})
// menuParent.addEventListener('click', () => {
//   subMenu.classList.toggle('open');
// });

function pageMove(page) {
  location.href = page;
}
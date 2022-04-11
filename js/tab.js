let tabWrap = document.querySelector('.tab_tit');
let tabTitle = document.querySelectorAll('.tab_tit > li');
let tabContent = document.querySelectorAll('.tab_content');

tabTitle.forEach(tab => {
  tab.addEventListener('click', tabOpen);
})

function tabOpen(e) {
  tabContent.forEach(cont => {
    if(cont.dataset.id === e.target.dataset.id) {
      cont.classList.add('active');
    } else {
      cont.classList.remove('active');
    }
  })
  
  tabTitle.forEach(tit => {
    if(tit.dataset.id === e.target.dataset.id) {
      tit.classList.add('active');
    } else {
      tit.classList.remove('active');
    }
  })
}

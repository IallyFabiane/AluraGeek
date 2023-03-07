let input = document.querySelector('.menu__search-input');
input.addEventListener('focus', (event) => {
   event.target.style.borderBottom = "1px solid #00C6CC";
});

input.addEventListener('blur', (event) => {
   event.target.style.borderBottom = "none";
});

const searchIcon = document.querySelector('.menu__search-icon')
const path = searchIcon.querySelector('path');

searchIcon.addEventListener('mouseover', function() {
  path.style.fill = 'blue';
});

searchIcon.addEventListener('mouseout', function() {
    path.style.fill = '#A2A2A2';
  });
  

// It is always helpful to use comments in your code!

var mainLink = document.getElementsByClassName('main-link');
console.log(mainLink);

function toggleDropdown(){
    this.children[1].classList.toggle('show');
 }
 
 console.log(toggleDropdown);

 for(i=0;i<mainLink.length;i++){
     mainLink[i].addEventListener('mouseenter', toggleDropdown);
     mainLink[i].addEventListener('mouseleave', toggleDropdown);
 }
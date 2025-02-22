const para = document.getElementsByClassName (".parallax");
window.addEventListener("scroll", Function() ,{
    let  offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + 'px';

})
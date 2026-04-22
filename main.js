let scrollBtn = document.getElementById('scrollToTop')

window,onscroll = function() {
    if(document.body.scrollTop > 150 || document.getElement.scrollTop > 150) {
        scrollBtn.style.display = "block";
    }

    else {
        scrollBtn.style.dsiplay = "none";
    }
}


scrollBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        nehavior: 'smooth'
     });
}
document.addEventListener('mousemove', function (e) {
    const x = e.clientX;
    const navbar = document.getElementsByClassName("navbar")[0];
    if (x <= 200) {
        navbar.style.transform = "translateX(0)"
    } else {
        navbar.style.transform = "translateX(-100%)"
    }
});
document.addEventListener('mousemove', function (e) {
    const x = e.clientX;
    console.log(x);
    const navbar = document.getElementsByClassName("navbar")[0];
    if (x <= 200) {
        // Access the first element with the class "navbar"
        if (navbar) {
            // navbar.style.visibility = "visible"; // Set visibility to visible
            navbar.style.transform = "translateX(0)"
        }
    } else {
        navbar.style.transform = "translateX(-100%)"
    }
});
window.addEventListener('load', (event) => {
    //about link
    document.getElementById("about-link").addEventListener("click", function () {
        if ( document.getElementById("about").style.display != "flex") {
        document.getElementById("about").style.display = "flex";
        } else {
            document.getElementById("about").style.display = "none";
        }
    });
    // portfolio link
    document.getElementById("portfolio-link").addEventListener("click", function () {
        if ( document.getElementById("portfolio").style.display != "block") {
        document.getElementById("portfolio").style.display = "block";
        } else {
            document.getElementById("portfolio").style.display = "none";
        }
    })
});
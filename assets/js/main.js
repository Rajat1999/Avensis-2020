menuToggle = () => {
    let nav1 = document.getElementById("menu-overlay");
    nav1.classList.toggle("active");
    let nav2 = document.getElementById("toggle-icon");
    nav2.classList.toggle("active");
}

// setTimeout(function () {
//     document.getElementById("video").play();
// }, 5000);

var video = document.getElementById("video");
video.addEventListener("canplay", function () {
    setTimeout(function () {
        video.play();
    }, 5000);
});
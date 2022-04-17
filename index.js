var button = document.querySelector(".btn")
var showHide = document.querySelector('.pass')
button.onclick = function () {
    if(button.innerHTML ==="Show"){
        button.innerHTML = "Hide";
        showHide.type = "text"
    }
    else if (button.innerHTML==="Hide"){
        button.innerHTML = "Show";
        showHide.type = "password"
    }
}
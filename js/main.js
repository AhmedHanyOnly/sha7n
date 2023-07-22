// Btn Add Active
let addActive = document.querySelectorAll("#add-active");
addActive.forEach(btn=> {
 btn.addEventListener("click",()=> {
  let element = document.querySelector(btn.dataset.active);
  element.classList.toggle("active")
 })
})

// close popup Video
let closeVideo = document.querySelector(".modal-video-wrapper .video-close");
let modalContent = document.querySelector(
    ".modal-video-wrapper .modal-content"
);
let oldIframe = document.querySelector(".modal-video-wrapper iframe");
let newIframe = oldIframe;
closeVideo.addEventListener("click", function () {
    oldIframe.remove();
    modalContent.appendChild(newIframe);
});
export function customYTPlayer () {
    const playBtn = document.querySelectorAll(".custom-play-btn");
    [...playBtn].map(item=> {
        item.addEventListener("click", (event) => {
            event.preventDefault();
            let poster = item.parentNode;
            let iframe = poster.parentNode.querySelector("iframe");
            poster.classList.add("active");
            iframe.contentWindow.postMessage("{\"event\":\"command\",\"func\":\"" + "playVideo" + "\",\"args\":\"\"}", "*");
        });
    })
    
}
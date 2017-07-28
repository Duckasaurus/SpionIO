document.onload(() => {
    window.addEventListener("click", (e) => {
        const click = JSON.stringify({
            clickX: e.clientX,
            clickY: e.clientY,
            width: document.width,
            height: document.height
        });
        console.log(click);
        let request = new XMLHttpRequest();
        request.open('POST',"http://localhost:3000/storeClick",true);
        request.setRequestHeader("Content-type","application/json");
        request.send(click);
    },false)

    document.addEventListener((e) => {
        let sc = document.scrollTop;
        let bot = window.height + sc;
        let pageScroll = Math.floor((bot / document.height) * 100);
        console.log("You've scrolled " + pageScroll + "% of the page");
    });
})
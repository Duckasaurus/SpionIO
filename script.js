window.onload = (() => {
    if (document.readyState === 'complete') {
        window.addEventListener("click", (e) => {
            const click = JSON.stringify({
                clickX: e.clientX,
                clickY: e.clientY,
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            });
            console.log(click);
            let request = new XMLHttpRequest();
            request.open('POST', "http://localhost:3000/storeClick", true);
            request.setRequestHeader("Content-type", "application/json");
            request.onreadystatechange = function () {
                if (request.readyState > 3 && request.status == 200) {
                    console.log(request.responseText);
                }
            };
            request.send(click);
        }, false);

        document.addEventListener("scroll", (e) => {
            let sc = document.documentElement.scrollTop;
            let bot = window.height + sc;
            let pageScroll = Math.floor((bot / document.documentElement.clientHeight) * 100);
            console.log("You've scrolled " + pageScroll + "% of the page");
        }, false);
    }
})
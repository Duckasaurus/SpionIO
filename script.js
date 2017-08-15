window.onload = (() => {
    const socket = io.connect("http://localhost:3000/");
    socket.on('connect', (data) => {
            socket.emit('join', "joining with server");
        });
    socket.on('messages', (data) => {
        console.log('message', data);
    })
    socket.on('clickResponse', (data) => {
        console.log('clickResponse', data);
    })
    socket.on('scrollResponse', (data) => {
        console.log('scrollResponse', data);
    })
    if (document.readyState === 'complete') {


        //////////////////// click data retrieval ////////////////////
        window.addEventListener("click", (e) => {
            let sy = window.pageYOffset;
            let sx = window.pageXOffset;
            const clickToken = {
                clickX: e.clientX  + sx,
                clickY: e.clientY + sy,
                documentWidth: document.documentElement.clientWidth,
                documentHeight: document.documentElement.clientHeight,
                windowWidth: window.innerWidth,
                windowHeigth: window.innerHeight,
                token: getCookie("token"),
            };
            console.log(clickToken);
            socket.emit('storeClick', clickToken)
        }, false);




        //////////////////// scroll data retrieval ////////////////////
        let body = document.body,
            html = document.documentElement;

        let height = Math.max(body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight);
        let pageScroll = 0;
        document.addEventListener("scroll", (e) => {
            let sc = window.pageYOffset;
            let bot = document.documentElement.clientHeight + sc;
            if (pageScroll < Math.floor((bot / height) * 100)) {
                pageScroll = Math.floor((bot / height) * 100);
                console.log("You've scrolled " + pageScroll + "% of the page");
            }
        }, false);

        //////////////////// scroll data saving ////////////////////
        window.addEventListener("beforeunload", (e) => {
            socket.emit('storeScroll', pageScroll);
        }, false);
    }
})

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


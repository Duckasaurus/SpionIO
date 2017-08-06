const express = require('express');
const app = express();
const path = require('path');
const sitesController = require('./database/controller/sitesController.js');
const pagesController = require('./database/controller/pagesController.js');
const clickController = require('./database/controller/clickController.js');
const scrollController = require('./database/controller/scrollController.js');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const uuid = require('uuid/v4');
const secret = "cats"
const mongoose = require('mongoose');
let mongoURI = 'mongodb://mus:1@ds125623.mlab.com:25623/userevents';

require('./passport')(passport); //pass passport for configuration


mongoose.connect(mongoURI);


const Session = require('./database/model/sessionsModel.js');
const Page = require('./database/model/pagesModel');
const Click = require('./database/model/clickModel');
const Scroll = require('./database/model/scrollModel');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', express.static(__dirname + './../'));
app.use(bodyParser.json());
app.use(cookieParser())
app.use(session({ secret: 'ilovetesting' })) /// session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/logo.png', (req, res) => {
    res.sendFile(path.join(__dirname, 'logo.png'));
})

app.get('/screenshot.png', (req, res) => {
    res.sendFile(path.join(__dirname, 'screenshot.png'))
})

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated) {
        return next();
    } else {
        res.redirect('/');
    }
}

app.get('/dashboard', isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/dashboard/sites', isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/dashboard/sites/:siteID', isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/dashboard/sites/:siteID/page', isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/dashboard/sites/:siteID/page/:pageID', isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/clickReportData', isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, 'dummy.json'))
});

app.get('/scrollReportData', isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, 'dummy.json'));
});

app.get('/funnelReportData', isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, 'dummy.json'));
});

app.get('/script.js', (req, res, next) => {
    res.sendfile('./script.js');
})

app.get('*/build/bundle.js', (req, res, next) => {
    res.sendfile('./build/bundle.js');
})

///////////////////////////////// Passport //////////////////////////////

app.post('/signup', (req, res, next) => {
    console.log('you\'ve reached the signup route');
    console.log(req.body);
    next();
}, (req, res, next) => { passport.authenticate('local-signup', {
    successRedirect: '/dashboard',
    failureRedirect: '/'
    })
}) 
// app.post('/signup', processSignUp)
app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
})





app.post('/guestauth', (req, res, next) => {
    try {
        let sessionID = jwt.verify(req.body.token, secret)
        console.log("json", sessionID);
        Session.findOne({
            _id: sessionID
        }, (err, sessionFound) => {
            if (err) res.send(err);
            else {
                console.log("SESSION FOUND", sessionFound);
                if (sessionFound.currentUrl === req.body.url) {
                    res.send("preauth");
                } else {
                    let pageFound = Page.findOne({
                        url: req.body.url
                    }, (err, pageFound) => {
                        if (err) res.send(err);
                        else {
                            if (!pageFound.pageHTML || !pageFound.pageCSS) {
                                pageFound.pageHTML = req.body.html.body;
                                pageFound.pageCSS = req.body.html.header
                            }
                            console.log("pageFound");
                            pageFound.save(err => {
                                sessionFound.currentUrl = req.body.url;
                                sessionFound.funnel.push({
                                    /// current page,
                                    pageID: pageFound,
                                    clickID: new Click,
                                    scrollID: new Scroll,
                                });
                                console.log(sessionFound);
                                sessionFound.save((err) => {
                                    if (err) res.send(err)
                                    else {
                                        let token = jwt.sign(sessionFound._id, secret);
                                        res.json({
                                            token: token
                                        });
                                    }
                                })
                            })
                        }
                    })
                }
            }
        }) 
        //search database
    } catch (err) {
        console.log("TOKEN", err);
        //make new session

        let pageFound = Page.findOne({
            url: req.body.url
        }, (err, pageFound) => {
            if (err) res.send(err);
            else {
                if (!pageFound.pageHTML || !pageFound.pageCSS) {
                    pageFound.pageHTML = req.body.html.body;
                    pageFound.pageCSS = req.body.html.header
                }
                console.log("URL", req.body.url) 
                console.log("PAGEFOUND", pageFound);
                pageFound.save(err => {
                    if (err) console.log(err)
                    else {
                        let sessionID = uuid();
                        let newSession = new Session({
                            _id: sessionID,
                            currentUrl: req.body.url
                        });
                        newSession.funnel.push({
                            /// current page,
                            pageID: pageFound,
                            clickID: new Click,
                            scrollID: new Scroll,
                        });
                        console.log("ABOUT TO SAVE", newSession);
                        newSession.save((err) => {
                            if (err) {
                                console.log("SENDING ERROR")
                                console.log(err);
                                res.send(err)
                            } else {
                                console.log("SESSION SAVE");
                                let token = jwt.sign(sessionID, secret);
                                console.log("sessionID", sessionID);
                                res.json({
                                    token: token
                                });
                            }
                        })
                    }
                })
            }
        })
    }
})

app.get('/sites', sitesController.getSites);

app.post('/sites', sitesController.createSites);
app.post('/updateSitePage', sitesController.findSite, pagesController.createPages);

app.post('/pages', sitesController.findSite, pagesController.getPages);

app.post('/singlePage', sitesController.findSite, pagesController.getSinglePages);

io.on('connection', (client) => {
    client.on('join', (data) => {
        client.emit('messages', 'Hello from server');
    })
    client.on('storeClick', (data) => {
        clickController.updateClick(data)
            .then((response) => {
                client.emit('clickResponse', response);
            })
            .catch((response) => {
                client.emit('clickResponse', response);
            })
    })
    client.on('storeScroll', (data) => {
        scrollController.createScroll(data)
            .then((response) => {
                client.emit('scrollResponse', response)
            })
            .catch((response) => {
                client.emit('scrollResponse', response)
            })


    })
})


server.listen(3000);

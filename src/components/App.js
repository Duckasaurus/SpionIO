import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

/////////// import components ///////////
import Documentation from './Documentation.js';
import Dashboard from './Dashboard.js';
import DashboardUserSession from './DashboardUserSession.js';


/////////// import stylesheets ///////////
import './../styles/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


// Documentation and Home page of our entire webpage, provided the client has not signed in

class App extends Component { 
  render() {
    return(

      <Router>

      <div> 
        <MuiThemeProvider>
          <Route exact path='/' component={Documentation}/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Route exact path='/dashboard' component={Dashboard}/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Route exact path='/dashboard/:recordingID' component={DashboardUserSession}/>
        </MuiThemeProvider>
      </div>

      </Router>

    )
  }
}

export default App;

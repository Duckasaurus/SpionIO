import React, { Component } from 'react';
// ES6 Imports
import Scroll from 'react-scroll'; // Imports all Mixins
import {scroller} from 'react-scroll'; //Imports scroller mixin, can use as scroller.scrollTo()


// Or Access Link,Element,etc as follows
let Link       = Scroll.Link;
let Element    = Scroll.Element;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;


import './../styles/Welcome.css';

class Welcome extends Component {


  render() {
    return (
      <div>
        <div id="page-content" className="App-header">
          <div id='section1'>
          <div className='logo-div'>
          <img className='App-logo' src='./../../welcomelogo.png'/>
          </div>

          <div className="App-title">
            <h1 className='app-text'>THE IDEAL FRONT-END</h1><br/><br/><h1 className='app-text'>FOCUS GROUP MANAGEMENT PLATFORM</h1><br/><br/><h1 className='app-text'>FOR DEVELOPERS</h1>
          </div>

          <div className='scroll demo' id='section07'>
            <a className='a' onClick={() => scroll.scrollTo(1005)}>
              <span></span><span></span><span></span>
            </a>
            <br/>GET STARTED
          </div>
          </div>



          <br/><br/><hr/>

          <div id='section2'>
          <br/><br/><br/>
          <h1>QUICK-START GUIDE</h1>
          <table>
            <tr>
              <td className='.td-welcome'>
                <img className='mini-logo-website' src='./../../websiteicon.png'/>
                <h3>BUILD BETTER SITES</h3>
                <p className='td-sub'>Signing up gives you full access and control to all of our analytical features that include gathering user interaction in the form of mouse, scroll, time, and funnel data</p>
              </td>
              <td className='.td-welcome'>
                <img className='mini-logo-database' src='./../../databaseicon.png'/>
                <h3>STAY IN CONTROL</h3>
                <p className='td-sub'>After you sign up, start by adding sites and embedding our script into your HTML pages. Right away, you'll begin to receieve detailed insight into real user client-side interaction</p>
              </td>
              <td className='.td-welcome'>
                <img className='mini-logo-machinelearning' src='./../../machinelearningicon.png'/>                
                <h3>RESPONSIVELY IMPROVE UX/UI</h3>
                <p className='td-sub'>Our advanced machine learning algorithms simulate user behavior and generate fix recommendations to place the most optimal interface at the tip of your fingers</p>
              </td>
            </tr>
          </table>

          <br/><br/><br/><br/><hr width='85%'/><br/><br/><br/><br/>

          <h1>LIGHTWEIGHT INTUITIVE DASHBOARD</h1><br/>

          <img className='dashboard-screenshot' src='./../../screenshot.png'/>
            
          </div> 

        </div>
      </div>
    )
  }
}

export default Welcome;
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
          <div className='logo-div'>
          <img className='App-logo' src='./../../logo.png'/>
          </div>

          <div className="App-title">
            <h1>THE IDEAL</h1><br/><br/><h1>FULL-STACK ANALYTICS</h1><br/><br/><h1>FOR DEVELOPERS</h1>
          </div>

          <div className='scroll demo' id='section07'>
            {/* <Link className='a test1' activeClass="active" to="test1" spy={true} smooth={true} duration={500}> */}
            <a className='a' onClick={() => scroll.scrollTo(1005)}>
              <span></span><span></span><span></span>
            </a>
            {/* </Link> */}
            <br/><br/><br/><br/><br/>GET STARTED
          </div>



          <br/><br/><hr/>

          <div id='section2'>
          <br/><br/><br/><br/>
          <h1>HOW IT WORKS</h1>
          <table>
            <tr>
              <td>
                <img className='mini-logo' src='./../../logo.png'/>
                <h3>START BUILDING A BETTER SITE</h3>
                <p className='td-sub'>Signing up gives you full access and control to all of our analytical features that include gathering user interaction in the form of mouse, scroll, time, and funnel data</p>
              </td>
              <td>
                <img className='mini-logo' src='./../../logo.png'/>
                <h3>STAY IN CONTROL</h3>
                <p className='td-sub'>After you sign up, start by adding sites and embedding our script into your HTML pages. Right away, you'll begin to receieve detailed insight into real user client-side interaction</p>
              </td>
              <td>
                <img className='mini-logo' src='./../../logo.png'/>                
                <h3>CONSISTENTLY IMPROVE UX/UI</h3>
                <p className='td-sub'>Our advanced machine learning algorithms simulate user behavior and generate fix recommendations to place the most optimal interface at the tip of your fingers</p>
              </td>
            </tr>
          </table>

          <br/><br/><br/><br/><hr width='75%'/>

            
          </div> 

          <br/><br/><br/><br/><br/><br/>

        </div>
      </div>
    )
  }
}

export default Welcome;
import React, { Component } from 'react';
import $ from 'jquery';
// ES6 Imports
import Scroll from 'react-scroll';
let scroll     = Scroll.animateScroll;

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';


import './../styles/Doc.css';
import './../styles/Welcome.css';

const style = {
  margin: 6,
  marginTop: '20px',
  sub: {
    paddingLeft: '5px',
    color: 'gray',
    textTransform: 'none',
    letterSpacing: '1px',
  },
  label: {
    fontSize: '30px',
    paddingRight: '5px',
    color: '#E0E1E5',
    textTransform: 'none',
    letterSpacing: '1px',
  },
  paper: {
    height: '80px',
  },
  team: {
    height: 260,
    width: 260,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: '#E0E1E5',
  }
};

class Doc extends Component {
  componentDidMount() {
    $(window).on("scroll", function() {
      // console.log('scrolling')
      if( ($(window).scrollTop() > 225) && ($(window).scrollTop() < 1300 ) )  {
        $(".doc-section2").removeClass("doc-section2-visible");
        $(".doc-section2").addClass("animated zoomIn");
      } else {
        $(".doc-section2").addClass("doc-section2-visible");
        $(".doc-section2").removeClass("animated zoomIn");
      }

      if ( ($(window).scrollTop() > 970 ) && ($(window).scrollTop() < 2000) ) {
        $(".doc-section3-content").removeClass("doc-section3-visible");
        $(".doc-section3-content").addClass("animated fadeInLeftBig");
      } else {
        $(".doc-section3-content").addClass("doc-section3-visible");
        $(".doc-section3-content").removeClass("animated fadeInLeftBig")
      }

      // if ( ($(window).scrollTop() > 1700 ) && ($(window).scrollTop() < 3200) ) {
      //   $(".doc-section4").removeClass("doc-section4-visible");
      //   $(".doc-section4").addClass("animated fadeIn");
      // } else {
      //   $(".doc-section4").addClass("doc-section4-visible");
      //   $(".doc-section4").removeClass("animated fadeIn")
      // }

      // if ( ($(window).scrollTop() > 1700 ) && ($(window).scrollTop() < 2900) ) {
      //   $(".doc-section4-team").removeClass("doc-section4-team-visible");
      //   $(".doc-section4-team").addClass("animated fadeInRight");
      // } else {
      //   $(".doc-section4-team").addClass("doc-section4-team-visible");
      //   $(".doc-section4-team").removeClass("animated fadeInRight")
      // }

      if ( ($(window).scrollTop() > 2630 ) && ($(window).scrollTop() < 3200) ) {
        $(".doc-section4-letsbuild").removeClass("doc-section4-letsbuild-visible");
        $(".doc-section4-letsbuild").addClass("animated zoomIn");
      } else {
        $(".doc-section4-letsbuild").addClass("doc-section4-letsbuild-visible");
        $(".doc-section4-letsbuild").removeClass("animated zoomIn")
      }
      
    });
  }


  render() {
    return(
      <div>
        <div className='doc-section1'>
        <h2 className='doc-title'>FOCUS GROUP MANAGEMENT PLATFORM</h2>

          <p className='doc-sub-2'>Open source developer tool for capturing<br/>and analyzing user interaction to<br/>radically improve UX</p>
        <RaisedButton style={{marginTop: '4%'}} label='Github' href='http://github.com/Duckasaurus/private-i'></RaisedButton>
        <RaisedButton style={{marginTop: '4%', marginLeft: '2%'}} label='NPM' href='http://npmjs.com'></RaisedButton>

        <div className='scroll demo' id='section07'>
            <a className='a' onClick={() => scroll.scrollTo(805)}>
              <span></span><span></span><span></span>
            </a>
            <br/><br/><br/>GET STARTED
        </div>
        </div>

        <div className='doc-section2'>
          <br/>
          <hr style={{marginBottom: '2%'}} width='15%'/>
          <h1 className='doc-section2-title'>How It Works</h1>
          <hr style={{marginTop: '2%'}} width='15%'/>
          <table>
            <tr>
              <td className='td-welcome'>
                <img className='mini-logo-website' src='./../../websiteicon.png'/>
                <h3 className='td-title'>Take Control</h3>
                <p className='td-sub'>By injecting our script into the top level of the front-end of your app and cloning our interface from Github, as a developer you now have the tools to manage your own focus groups remotely and fully capture user sessions on your website.</p>
              </td>
              <td className='td-welcome'>
                <img className='mini-logo-database' src='./../../databaseicon.png'/>
                <h3 className='td-title'>Bring the Best to Market</h3>
                <p className='td-sub'>Now that all of the management power is in your hands, you can analyze a variety of user interactions and determine the best course of action in redesigning to drastically improve UX in all of your deployed websites, with confidence.</p>
              </td>
              <td className='td-welcome'>
                <img className='mini-logo-machinelearning' src='./../../machinelearningicon.png'/>                
                <h3 className='td-title'>Scalability</h3>
                <p className='td-sub'>With an open source approach to this solution, we've discovered a way to keep costs completely free out-of-the box while giving you complete control over your costs by giving the developer's the option of providing their own server</p>
              </td>
            </tr>
          </table>
        </div>


        <div className='doc-section3'>
          <div className='doc-section3-content'>
          <hr style={{marginBottom: '2%', borderColor: 'lightgray', color: 'lightgray'}} width='15%'/>
          <h1 className='doc-section3-title'>The platform for managing modern front-end <br/>web applications.</h1>
          <hr style={{marginTop: '2%', borderColor: 'lightgray', color: 'lightgray'}} width='15%'/>
          <br/><br/><br/><br/><br/><br/><p className='gif'>INSERT GIF HERE</p>
          </div>
        </div>

        <div className='doc-section4'>
          <div className='doc-section4-team'>
          <hr style={{marginBottom: '2%'}} width='15%'/>
          <h1>Meet the Team.</h1>
          <hr style={{marginTop: '2%'}} width='15%'/>
          <table style={{marginTop: '5%'}}>
            <tr>
              <td className='td-welcome'>
                <a href='https://github.com/morpherious'><Paper zDepth={2} style={style.team} circle={true}/></a><br/><br/><br/>
                <FlatButton hoverColor='none' labelStyle={{letterSpacing: '3px'}} label='Mustafa Khan' href='https://github.com/morpherious'></FlatButton>
              </td>
                <td className='td-welcome'>
                <a href='https://github.com/mm0nr0e'><Paper zDepth={2} style={style.team} circle={true}/></a><br/><br/><br/>
                <FlatButton hoverColor='none' labelStyle={{letterSpacing: '3px'}} label='Miranda Monroe' href='https://github.com/mm0nr0e'></FlatButton>
              </td>
              <td className='td-welcome'>
                <a href='https://github.com/j3rryj'><Paper zDepth={2} style={style.team} circle={true}/></a><br/><br/><br/>
                <FlatButton hoverColor='none' labelStyle={{letterSpacing: '3px'}} label='Jerry Jong' href='https://github.com/j3rryj'></FlatButton>
              </td>
            </tr>
          </table>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </div>
          <div className='doc-section4-lets'>
          <p className='doc-section4-letsbuild'>Let's build something great together.</p>
          </div>
        </div>

        <div className='doc-sectionfooter'>
          <ul className='doc-footer-company'>
            <li className='doc-footer-company-title'>Company</li>
            <li>Blog</li>
            <li>Customers</li>
            <li>Team</li>
            <li>Career</li>
          </ul>




          <ul className='doc-footer-list'>
            <li className='doc-footer-individual'>Contact</li>
            <li className='doc-footer-individual'>Terms</li>
            <li className='doc-footer-individual'>Privacy</li>
            <li className='doc-footer-individual'>@Private-I</li>
          </ul>
        </div>

      </div>
    )
  }
}

export default Doc;
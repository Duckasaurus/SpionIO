import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './../styles/Home.css';
import axios from 'axios';

// import material-ui components
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import AVPlayCircleOutline from 'material-ui/svg-icons/AV/play-circle-outline';
import HardwareDesktopWindows from 'material-ui/svg-icons/hardware/desktop-windows';

const style = {
  paper: {
    verticalAlign: 'middle',
    height: '60px',
    
  },
  mediumIcon: {
    width: 30,
    height: 30,
  },
  medium: {
    padding: 0,
  },
  smallIcon: {
    width: 16,
    height: 16,
  },
  small: {
    padding: 0,
    width: 30,
    height: 30,
    float: 'left'
  },
  p1 : {
    fontSize: '.7em', 
    float: 'right', 
    width: '100px', 
    paddingTop: '13%'
  },
  p2: {
    fontSize: '.8em', 
    margin: '0 auto', 
    letterSpacing: '2px', 
    marginLeft: '6.5%', 
    marginTop: '10%'
  },
  p3: {
    fontSize: '.6em', 
    margin: '0 auto', 
    float: 'right', 
    marginTop: '10%'
  }
}

class DashboardContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recordings: []
    }
    this.getRecordings = this.getRecordings.bind(this);
    this.generateRecordings = this.generateRecordings.bind(this);
  }

  componentDidMount() {
    this.getRecordings();
  }

  getRecordings() {
    console.log('getting recordings')
    axios.get('/recordings')
    .then((res) => {
      this.setState({recordings: res.data})
    })
    .catch((err) => {
      return console.error(err);
    })
  }

  generateRecordings() {
    console.log('generating recordings')
    let recordingNodes = this.state.recordings.map((recordings) => {
      let date = recordings.createdTime.split('T')[0].split('-').reverse().slice(0, 2);
      let time = recordings.createdTime.split('T')[1].split('.')[0].split(':');
      if(date[1] === '08') {
        date[1] = 'Aug'
      }
      date = date.reverse().join(' ');
      if (time[0] > 12) {
        time[0] = (time[0] - 12).toString();
        time = time.slice(0, 2).join(':');
        time += 'PM';
      } else {
        time = time.slice(0, 2).join(':');
        time += 'AM';
      }

      
      return (
        <Paper 
          className='animated fadeIn' 
          key={recordings._id} 
          style={style.paper}
          >
          <div className='recording-block'>
            <div className='recording-avatar'>
              <img className='recording-icon' src={'./../../public/'+Math.floor((Math.random()*9)+1)+'.png'}/>
            </div>
            <div className='recording-description'>
              <p style={{letterSpacing: '1px'}} className='recording-title'>{'User ' + recordings._id.slice(0, 5)}</p>
              <p style={{letterSpacing: '1px'}} className='recording-sub'>{'Visited on ' + date}</p> 
            </div>
          </div>
          <div className='recording-playback-wrapper'>
          <div className='recording-playback'>
            <Link style={{float:'left'}} to={'/recordings/' + recordings._id}>
              <IconButton iconStyle={style.mediumIcon} style={style.medium} tooltip='play session'>
                <AVPlayCircleOutline color='#006CAA'/>
              </IconButton>
            </Link>
            <p style={style.p1}>{time}</p>
          </div>

          <div className='recording-platform'>
            <div className='recording-platform-text'>
              <p style={style.p2}>Los Angeles</p>
            </div>
            <div className='recording-platform-icon'>
            <IconButton iconStyle={style.smallIcon} style={style.small}>
              <HardwareDesktopWindows color='lightgray'/>
            </IconButton>
            <p style={style.p3}>OS X · CHROME</p>
            </div>
          </div>


          </div>
        </Paper>
      )
    })
    return recordingNodes;
  }

  render() {
    return (
      <div >
        <div className='recording-latest-updates'>
          {this.generateRecordings()}
        </div>
      </div>
    )
}}

export default DashboardContent;
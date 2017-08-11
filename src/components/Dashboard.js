import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './../styles/Home.css';
import './../styles/App.css';

import DashboardUserSession from './DashboardUserSession';
import DashboardHeader from './DashboardHeader';
import DashboardContent from './DashboardContent';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
// import AVPlayCircleOutline from 'material-ui/svg-icons/AV/play-circle-outline';
import axios from 'axios';

const style = {
  paper: {
    verticalAlign: 'middle',
    height: '60px',
    paddingTop: '12px',
  },
  outer: {
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  inner: {
    display: 'flex',
    flexFlow: 'row nowrap'
  }
}
////////// Separate component that is similar to App.js but for whne a client has successfully signed into his specific dashboard //////////
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recordings: [],
      enabled: false,
    }
    this.getRecordings = this.getRecordings.bind(this);
    this.generateRecordings = this.generateRecordings.bind(this);
    this.toggleRecordingStyle = this.toggleRecordingStyle.bind(this);
  }

  componentDidMount() {
    this.getRecordings();
  }

  getRecordings() {
    axios.get('/recordings')
    .then((res) => {
      this.setState({recordings: res.data})
    })
    .catch((err) => {
      return console.error(err);
    })
  }

  generateRecordings() {
    let recordingNodes = this.state.recordings.map((recordings) => {
      // let date = recordings.startTime.split('T')[0].split('-').reverse().slice(0, 2).join('/');
      // let time = recordings.startTime.split('T')[1].split('.')[0].split(':');
      // if (time[0] > 12) {
      //   time[0] = (time[0] - 12).toString();
      //   time = time.slice(0, 2).join(':');
      //   time += 'PM';
      // } else {
      //   time = time.slice(0, 2).join(':');
      //   time += 'AM';
      // }
      return (
        <Paper style={style.paper} onClick={this.toggleRecordingStyle}>
          <div className='recording-block'>
            <div className='recording-avatar'>
              <img className='recording-icon' src={'./../../public/'+Math.floor((Math.random()*9)+1)+'.png'}/>
            </div>
            <div className='recording-description'>
              <p className='recording-title'>{'User ' + recordings._id}</p>
              <p className='recording-sub'>4567</p> 
            </div>
          </div>
          <div className='recording-playback'>
            <Link to={'/dashboard/' + recordings._id}>
              <IconButton tooltip='play session'>
                {/* <AVPlayCircleOutline/> */}
              </IconButton>
            </Link>
          </div>
        </Paper>
      )
    })
    return recordingNodes;
  }

  toggleRecordingStyle() {
    console.log('toggle toggle')
    this.setState({enabled: !this.state.enabled})
  }

  render() {
    return (
      <div style={style.outer}>
        <DashboardHeader />
        <div style={style.inner}>
          <DashboardContent recordings={this.state.recordings} recordingNodes={this.generateRecordings}/>
          <Route path='/dashboard/:recordingID' component={DashboardUserSession}/>
        </div>
      </div>
    )
  }
} 

export default Dashboard;
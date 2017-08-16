import React, { Component } from 'react';
import Slider from 'material-ui/Slider';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarSeparator} from 'material-ui/Toolbar';
import AvPlayArrowIcon from 'material-ui/svg-icons/av/play-arrow';
import AvPauseIcon from 'material-ui/svg-icons/av/pause';
import AvSkipNextIcon from 'material-ui/svg-icons/av/skip-next';
import AvSkipPreviousIcon from 'material-ui/svg-icons/av/skip-previous';
import ActionChromeReaderMode from 
'material-ui/svg-icons/action/chrome-reader-mode';
import LinearProgress from 'material-ui/LinearProgress';


import './../styles/Home.css';


const style = {
  mediumIcon: {
    width: 36,
    height: 36,
  },
  medium: {
    width: 56,
    height: 56,
    display: 'inline-block',
  },
}

class PlaybackBar extends Component {
  constructor(props) {
    super(props)

    this.toggleIcon = this.toggleIcon.bind(this);
    this.togglePlay = this.togglePlay.bind(this);

    this.state={
      val: 0
    };
    this.handleSlide = this.handleSlide.bind(this);

  }

  toggleIcon() {
    if(this.props.playing) {
      return <AvPauseIcon color='#006CAA'/>
    } else {
      return <AvPlayArrowIcon color='#006CAA'/>
    }
  }


  togglePlay() {
    if(this.props.playing) {
      return this.props.pause
    } else {
      return this.props.play
    }
  }

  componentDidMount() {
    this.toggleIcon();
  }
  handleSlide(event,value){
    this.setState({val:value});
    this.props.slide(value);

  }
  
  render() {
    return (
      <div style={{margin: '0 auto'}}>
        {/* <LinearProgress mode="determinate" value={this.props.index} /> */}
        {/* <Slider 
          style={{margin: '0 auto'}}
          sliderStyle={{margin: '0 auto'}}
          min={0}
          max={this.props.len}
          step={1} 
          value={this.props.val} 
          onChange={this.handleSlide}/> */}
        <Toolbar style={{backgroundColor: 'white', margin: '0, auto'}}>
          <IconButton iconStyle={style.mediumIcon} style={style.medium} touch={true} onTouchTap={this.togglePlay()}>
            {this.toggleIcon()}
          </IconButton>
          <FlatButton 
            hoverColor='white' 
            labelStyle={{color: '#006CAA', letterSpacing: '3px'}} 
            style={{float: 'right', marginTop: '1.5%'}} 
            label='Full Screen'
            onClick={this.props.fullscreen}
          />
        </Toolbar>
      </div>
    )
  }
}

export default PlaybackBar;
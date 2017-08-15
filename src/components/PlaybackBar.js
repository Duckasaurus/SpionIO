import React, { Component } from 'react';
import Slider from 'material-ui/Slider';
import IconButton from 'material-ui/IconButton';
import {Toolbar, ToolbarSeparator} from 'material-ui/Toolbar';
import AvPlayArrowIcon from 'material-ui/svg-icons/av/play-arrow';
import AvPauseIcon from 'material-ui/svg-icons/av/pause';
import AvSkipNextIcon from 'material-ui/svg-icons/av/skip-next';
import AvSkipPreviousIcon from 'material-ui/svg-icons/av/skip-previous';


import './../styles/Home.css';


// const style = {

// }

class PlaybackBar extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const value = this.props.step * this.props.index;
    const slide = this.props.slide;
    const step = this.props.step;
    return (
      <div style={{margin: '0 auto'}}>
        <Slider 
          style={{margin: '0 auto'}}
          sliderStyle={{margin: '0 auto'}}
          step={this.props.step} 
          value={value} 
          onChange={function() {
            slide(Math.floor(value / step))
          }}/>
        <Toolbar>
          <IconButton touch={true} onTouchTap={this.props.play}>
            <AvPlayArrowIcon />
          </IconButton>
          <IconButton touch={true} onTouchTap={this.props.pause}>
            <AvPauseIcon />
          </IconButton>
          <IconButton touch={true}>
            <AvSkipPreviousIcon />
          </IconButton>
          <IconButton touch={true}>
            <AvSkipNextIcon />
          </IconButton>
        </Toolbar>
      </div>
    )
  }
}

export default PlaybackBar;
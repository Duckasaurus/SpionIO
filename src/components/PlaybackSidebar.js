import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import { Link } from 'react-router-dom';

const style = {
  paper: {
    width: '5%',
    height: '700px',
    float: 'left',
    textAlign: 'center',
    // paddingTop: '1%',
    backgroundColor: '#006CAA'
  },
  mediumIcon: {
    width: 30,
    height: 30,
  },
  medium: {
    width: 60,
    height: 60,
    // padding: 0,
  },
}

class PlaybackSidebar extends Component {
  render() {
    return (
      <Paper zDepth={1} style={style.paper} rounded={false}>
        <Link to='/dashboard'><IconButton iconStyle={style.mediumIcon} style={style.medium} tooltip='Go Back'><NavigationArrowBack color='lightgray'/></IconButton></Link>
        <Link to='/dashboard'><IconButton iconStyle={style.mediumIcon} style={style.medium} tooltip='Settings'><ActionSettings color='lightgray'/></IconButton></Link>
      </Paper>
    )
  }
}

export default PlaybackSidebar;
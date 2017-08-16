import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import ActionChromeReaderMode from 'material-ui/svg-icons/action/chrome-reader-mode';
import Paper from 'material-ui/Paper';
// import AVFiberManualRecordIcon from 'material-ui/svg-icons/AV/fiber-manual-record';
import './../styles/Home.css';

const style = {
  paper: {
    width: '20%',
    float: 'right',
    height: '100%',
  },
  paperHead: {
    backgroundColor: '#006CAA',
    height: '52px',
    textAlign: 'center',
  },
  pHead: {
    color: 'white',
    paddingTop: '6%',
    letterSpacing: '2px',
    display: 'inline-block',
    float: 'right',
    marginRight: '18%',
  },
  mediumIcon: {
    width: 24,
    height: 24,
  },
  medium: {
    width: 36,
    height: 36,
    pointerEvents: 'none',
    display: 'inline-block',
    float: 'left',
    marginLeft: '16%',
    // padding: 0,
  },
}

class Storyboard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
  // console.log("LISTz",typeof this.props.list); 
    const list = this.props.list.map((Element) => {
      let hintText = 'Clicked ' + Element.split('>')[0].split(' ')[0].split('').splice(1).join('').toUpperCase();
      console.log(hintText);
      return(
        <Card>
          <CardHeader title={hintText} actAsExpander={true} showExpandableButton={true}/>
          <CardText expandable={true}>{Element}</CardText>
        </Card>
      )
    })
    return(
      <Paper rounded={false} style={style.paper}>
        <Paper style={style.paperHead}>
        <IconButton iconStyle={style.mediumIcon} style={style.medium}><ActionChromeReaderMode color='white'/></IconButton>
          <p style={style.pHead}>STORYBOARD</p>
          </Paper>
        {list}
      </Paper>

    )
  }
}

export default Storyboard;
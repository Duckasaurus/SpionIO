import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import Playback from './Playback';
import Storyboard from './Storyboard';
import DashboardHeader from './DashboardHeader';
import PlaybackSidebar from './PlaybackSidebar';
import { fromJS } from "immutable";
import './../styles/Home.css';
import axios from 'axios';
import $ from 'jquery';

const style = {
  width: '100%',
  margin: '0 auto'
}


// let i = 0;
const REPLAY_SCALE = .862;

const SPEED = 1;
let mouseMade = false;

$.fn.getPath = function () {
  // stolen from http://stackoverflow.com/a/2068381/1376627
  if (this.length != 1) throw 'Requires one element.';
  var path, node = this;
  while (node.length) {
    var realNode = node[0],
      name = realNode.localName;
    if (!name) break;
    name = name.toLowerCase();

    var parent = node.parent();

    var siblings = parent.children(name);
    if (siblings.length > 1) {
      name += ':eq(' + siblings.index(realNode) + ')';
    }

    path = name + (path ? '>' + path : '');
    node = parent;
  }

  return path.split('html>')[1];
};

class DashboardUserSession extends Component {

  constructor(props) {
    super(props);
    this.state = {
      targetList: [],
      flag: true,
      startPlay: null,
      $iframeDoc: null,
      $fakeCursor: null,
      step: 1,
      i: 0
    }
    this.addtoList = this.addtoList.bind(this);
    this.frameScript = this.frameScript.bind(this);
    // this.updateFlag = this.updateFlag.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.getRecordingData = this.getRecordingData.bind(this);
    this.slide = this.slide.bind(this);
  }
  drawAnimate($iframeDoc, $fakeCursor, startPlay, context) {
    let response = this.state.response;
    (function draw() {
      let event = response.Frame[context.state.i];
      if (!event) {
        return;
      }
      let offsetRecording = event.time - response.startTime;

      let offsetPlay = (Date.now() - startPlay) * SPEED;
      if (offsetPlay >= offsetRecording) {
        drawEvent(event, $fakeCursor, $iframeDoc);
        // const newI = this.state.i + 1
        context.setState({ i: context.state.i + 1 });
      }

      if (context.state.i < response.Frame.length && context.state.flag) {
        requestAnimationFrame(draw);
      } else if (!context.state.flag) {
        console.log("Coming in");
        context.setState({
          startPlay: startPlay,
          $fakeCursor: $fakeCursor,
          $iframeDoc: $iframeDoc
        })
      }
    })();

    function drawEvent(event, $fakeCursor, $iframeDoc) {
      console.log("DRAWING", event.event);
      if (event.target) {
        context.addtoList(event.target)
      }
      // if (event.event === "scroll") {
      //   $iframeDoc.contents().scrollTop(event.scrollTop)
      //   $iframeDoc.contents().scrollLeft(event.scrollLeft) }
      else if (event.event === 'click') {
        $fakeCursor.css({
          top: event.ClickY,
          left: event.ClickX
        })
      } else {
        if (event.event === 'mouseleave') {
          console.log("inside");
          $fakeCursor.css({
            top: event.ClickY,
            left: event.ClickX
          })
          $iframeDoc.find($fakeCursor).remove();
          mouseMade = false;
        } else {
          if (!mouseMade) {
            $iframeDoc.find('body').append($fakeCursor);
            mouseMade = true;
          }

          $fakeCursor.css({
            top: event.ClickY,
            left: event.ClickX
          })
        }
      }
    }

    function flashClass($el, className) {
      $el.addClass(className).delay(200).queue(() => $el.removeClass(className).dequeue());
    }
  }

  async frameScript(context) {
    let response = context.state.response;
    let $iframe = $('.react-iframe');
    $iframe.height(response.height * (REPLAY_SCALE-.053));
    $iframe.width(response.width * REPLAY_SCALE);
    $iframe.css({
      '-ms-zoom': `${REPLAY_SCALE}`,
      '-moz-transform': `scale(${REPLAY_SCALE})`,
      '-moz-transform-origin': `0 0`,
      '-o-transform': `scale(${REPLAY_SCALE})`,
      '-o-transform-origin': `0 0`,
      '-webkit-transform': `scale(${REPLAY_SCALE})`,
      '-webkit-transform-origin': `0 0`
    })
    $iframe[0].contentDocument.documentElement.innerHTML = response.htmlCopy;
    const $iframeDoc = $($iframe[0].contentDocument.documentElement);

    let $fakeCursor = $('<div class="cursor"></div>')
    
    $iframeDoc.find('body').append($fakeCursor);
   // let i = 0;

    const startPlay = Date.now();
    // let $fakeCursor = $('<div class="cursor"></div>')
    context.drawAnimate($iframeDoc, $fakeCursor, startPlay, context)
  }

  addtoList(element) {
    let list = this.state.targetList;
    list.push(element)
    this.setState({
      targetList: list
    })
  }

  // async updateFlag() {
  //   console.log("UPDATE")
  //   await this.setState({
  //     flag: !this.state.flag
  //   })
  //   if (this.state.flag) {
  //     this.drawAnimate(this.state.$iframeDoc,this.state.$fakeCursor,this.state.startPlay,this)
  //   } else {
  //     console.log("False")
  //   }
  // }

  pause() {
    console.log('pausing');
    this.setState({
      flag: false
    })

  

    if (this.state.flag) {
      this.drawAnimate(this.state.$iframeDoc, this.state.$fakeCursor, this.state.startPlay, this)
    } else {
      console.log("False")
    }
  }

  async play() {
    console.log('pausing');
    await this.setState({
      flag: true
    })
    this.drawAnimate(this.state.$iframeDoc,this.state.$fakeCursor,this.state.startPlay,this)
  }

  async getRecordingData() {
    let response = await axios.get('/recordings/' + this.props.match.params.recordingID);
    console.log('DATA', response.data.Frame)
    console.log('DATA LENGTH', response.data.Frame.length)
    const step = 1/(response.data.Frame.length ? response.data.Frame.length: 1);
    console.log(step)
    this.setState({
      response: response.data,
      step: step
    });
    this.frameScript(this);
  }

 async slide(newInd) {
    console.log('Slider to new index:', newInd)

    await this.setState({ i: newInd })
    this.drawAnimate(this.state.$iframeDoc,this.state.$fakeCursor,this.state.startPlay,this)
  }

  componentDidMount() {
    this.getRecordingData();
  }

  componentWillUpdate() {
    this.state.targetList = [];
  }

  component

  render() {
    return (
      <div style={style}>
        {/* <DashboardHeader/> */}
        <PlaybackSidebar/>
        <Playback key={this.props.match.params.recordingID} frameScript={this.frameScript} context={this} pause={this.pause} play={this.play} step={this.state.step} index={this.state.i} slide={this.slide} id={this.props.match.params.recordingID}  />
        <Storyboard key={this.props.match.params.recordingID + '1'} list={this.state.targetList} />         
      </div>
    );
  }
}

export default DashboardUserSession;
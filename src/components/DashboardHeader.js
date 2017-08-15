import React, { Component } from 'react';
import Card from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import './../styles/Home.css';
import SearchBar from 'material-ui-search-bar';
import { Link } from 'react-router-dom';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionSearch from 'material-ui/svg-icons/action/search';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';


const style = {
  card: {
    height: '100%',
  },
  paper: {
    display: 'inline-block',
    marginTop: '15px',
    marginBottom: '15px',
    marginLeft: '16px',
    height: '30px',
    width: '50%',
  },
  textField: {
    marginLeft: '20px',
    height: '40px',
    display: 'inline-block',
    letterSpacing: '1px',
  },
  underlineStyle: {
    borderColor: 'white',
  },
  underlineFocus: {
    borderColor: 'white',
  },
  iconButton: {
    marginLeft: '5px',
  },
  paperHeader: {
    height: '60px',
    backgroundColor: '#F4F7F5'
  },
  paperHead: {width: '256px', height: '60px', backgroundColor: '#006CAA', margin: '0 auto', textAlign: 'center', display: 'inline-block', float: 'left'},
  pHead: {paddingTop: '15px', margin: '0 auto', fontSize: '1.4em', color: 'white', fontWeight: 'lighter', letterSpacing: '2px'}
}

const recordings = [
  'user2146',
  'user5617',
  'user2623',
  'user6806',
  'user2526',
  'user1046',
  'user0403',
  'user5987',
  'user2233',
  'user0786',
  'user8826',
  'user3232'
];


class DashboardHeader extends Component {
  render() {
    return(
      <Paper style={style.paperHeader} zDepth={0} rounded={false}>
      <header className='dashboard-header'>
        <div id="myTopnav dashboard-nav">
        <Paper zDepth={1} style={style.paperHead} rounded={false}><p style={style.pHead}>PRIVATE-I</p></Paper>
        <Paper className='search-bar' zDepth={1} style={style.paper} rounded={false}>
          <IconButton style={{padding: '0 auto', borderRight: '1px solid #BDC0C1', height: '30px'}} tooltip='Search'><ActionSearch className='search-icon'/></IconButton> 
          <AutoComplete hintText='search for recordings ..' underlineStyle={{border: 'white'}} hintStyle={{height: '15px', fontSize: '0.8em'}} textFieldStyle={{height: '30px', marginLeft: '1%'}} style={{width: '92%' , float: 'right', letterSpacing: '1px'}} menuStyle={{height: '90px', overflow: 'scroll'}} listStyle={{width: '600px'}} filter={AutoComplete.caseInsensitiveFilter} dataSource={recordings}/>
        </Paper> 
    <IconMenu 
      className='nav-first'
      iconButtonElement={<IconButton style={style.iconButton}><ActionAccountCircle /></IconButton>}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      listStyle={{height: '5px' }}
      menuStyle={{height: '150px'}}
    >
      <MenuItem style={{fontSize: '0.9em'}} primaryText="Refresh" />
      <MenuItem style={{fontSize: '0.9em'}} primaryText="Send feedback" />
      <Link to='/dashboard/settings'><MenuItem style={{fontSize: '0.9em'}} primaryText="Settings" /></Link>
      <MenuItem style={{fontSize: '0.9em'}} primaryText="Help" />
      <MenuItem style={{fontSize: '0.9em'}} primaryText="Sign out" />
    </IconMenu>
      </div>
    </header>
    </Paper>
    )
  }
}

export default DashboardHeader;


// import React, { Component } from 'react';
// import { HashRouter, Link, Switch, Route } from 'react-router-dom';
// import Drawer from 'material-ui/Drawer';
// import Paper from 'material-ui/Paper';
// import Card from 'material-ui/Card';
// import ActionFace from 'material-ui/svg-icons/action/face.js';
// import FileFolder from 'material-ui/svg-icons/file/folder.js';
// import axios from 'axios';

// ////////// Similar to Header.js but for Dashboard feature //////////
// const style = {
//   paperHead: {height: '60px', backgroundColor: '#006CAA', margin: '0 auto', textAlign: 'center'},
//   paper: {height: '60px', backgroundColor: '#EDEDED', margin: '0 auto', textAlign: 'center'},
//   p: {paddingTop: '20px', margin: '0 auto', fontSize: '1em', color: 'white', fontWeight: 'lighter'},
//   pHead: {paddingTop: '15px', margin: '0 auto', fontSize: '1.4em', color: 'white', fontWeight: 'lighter'}
// }

// class DashboardSideBar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       open: true,
//       // sites: false,
//       // settings: false,
//       // sitesData: [],
//     };
//     // this.renderSites = this.renderSites.bind(this);
//     // this.getSites = this.getSites.bind(this);
//     // this.handleToggleSites = this.handleToggleSites.bind(this);
//     // this.toggleIconSites = this.toggleIconSites.bind(this);
//     // this.toggleIconSettings = this.toggleIconSettings.bind(this);
//     // this.handleToggleSettings = this.handleToggleSettings.bind(this);
//     // this.renderSettings = this.renderSettings.bind(this);
//     // this.handleToggleDashboard = this.handleToggleDashboard.bind(this);
//   }

//   // componentDidMount() {
//   //   this.getSites();
//   // }

//   // getSites() {
//   //   axios.get('/sites')
//   //   .then((res) => {
//   //     console.log(res);
//   //     this.setState({ sitesData: res.data })
//   //   })
//   //   .catch((err) => {
//   //     console.log(err);
//   //   })
//   // }

//   // handleToggleSites(e) {
//   //   if (this.state.sites) {
//   //     this.setState({sites: false, settings: false})
//   //   } else {
//   //     this.setState({sites: true, settings: false})
//   //   }
//   //   this.renderSites();
//   // }

//   // toggleIconSites(e) {
//   //   if (this.state.sites) {
//   //     return(
//   //       <FileFolderOpen/>
//   //     )
//   //   } else {
//   //     return(
//   //       <FileFolder/>
//   //     )
//   //   }
//   // }

//   // toggleIconSettings(e) {
//   //   if (this.state.settings) {
//   //     return(
//   //       <FileFolderOpen/>
//   //     )
//   //   } else {
//   //     return(
//   //       <FileFolder/>
//   //     )
//   //   }
//   // }

//   // handleToggleSettings(e) {
//   //   if (this.state.settings) {
//   //     this.setState({settings: false, sites: false})
//   //   } else {
//   //     this.setState({settings: true, sites: false})
//   //   }
//   //   this.renderSettings();
//   // }

//   // handleToggleDashboard(e) {
//   //   this.setState({sites: false, settings: false});
//   //   this.renderSettings();
//   //   this.renderSites();
//   // }


//   // renderSettings() {
//   //   if (this.state.settings) {
//   //     return(
//   //       <Link to='/dashboard/account'><MenuItem leftIcon={<ActionDashboard />}>Account</MenuItem></Link>          
//   //     )
//   //   }
//   // }

//   // // handletoggle = () => this.setState({open: !this.state.open });
//   // renderSites() {
//   //   let siteNodes;
//   //   if (this.state.sites) {
//   //     siteNodes = this.state.sitesData.map((site) => {
//   //     let url = '/dashboard/sites/' + site._id;
//   //     return(
//   //       <Link to={url}><MenuItem leftIcon={<NavigationSubdirectoryArrowRight />}>{site.title}</MenuItem></Link>
//   //     )
//   //   })
//   //   return siteNodes;
//   //   }
//   // }


//   render() {
//     return(
//       <div>
//         <Drawer docked={true} zDepth={0} containerStyle={{backgroundColor: '#F4F7F5'}}>
//           <Paper zDepth={0} style={style.paperHead}><p style={style.pHead}>PRIVATE-I</p></Paper>
//           <Paper zDepth={0} style={style.paper}><Link to='/dashboard' style={{textDecoration: 'none'}}><p style={style.p}>Dashboard</p></Link></Paper>
//         </Drawer>
//       </div>
//     )
//   }
// }

// export default DashboardSideBar;
/**
*
* Navbar
*
*/

import React from 'react';
import {Link} from "react-router";
import Responsive from 'react-responsive';
import MenuIcon from "material-ui/svg-icons/navigation/menu";
import IconButton from 'material-ui/IconButton';

class Navbar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen:false,
      token:sessionStorage.getItem("token"),
      user:JSON.parse(sessionStorage.getItem("user"))
    }
  }

  handleMenu = () => {
    if(this.state.menuOpen == false)
    {
      this.setState({
        menuOpen:true
      })
    }
    else if(this.state.menuOpen == true)
    {
      this.setState({
        menuOpen:false
      })
    }
  }
  showMenu = () => {

  const nav={
    display:"flex",
    flexDirection:"row",
    alignSelf:'center'
    }

  const linkStyle={
    textDecoration:"none",
    color:"#000000",
    fontSize:"2em",
    fontFamily:"Josefin Sans",
    fontStyle:"light",
    fontWeight:"300",
    textAlign:"center"
    };

    if(this.state.menuOpen == true)
    {
      var dashLink = <Link style={linkStyle} to= "/Dashboard"> Dashboard </Link>;
      var signUpLink = <Link to="/SignUp" style={linkStyle}>Sign Up</Link>;
      var signInLink = <Link to="/SignIn" style={linkStyle}>Sign In</Link>;

      if(this.state.token === null){
        dashLink="";
      }
      else{
        signUpLink="";
        signInLink="";
        if(this.state.user.roleID !== 1){
          dashLink="";
        }
      }
      return(
        <nav style={nav}>
          <Link style={linkStyle} to= "/"> Home </Link>
          <Link style={linkStyle} to= "/About"> About </Link>
          <Link style={linkStyle} to= "/Shop"> Shop </Link>
          <Link style={linkStyle} to= "/News"> News </Link>
          <Link style={linkStyle} to= "/Contact"> Contact </Link>
          {signUpLink}
          {signInLink}
          {dashLink}
        </nav>
      )
    }
  }




  render() {

    const navStyle={
      margin:"0",
      padding:"10px",
      width:"100%",
      fontSize:"2em",
      fontFamily:"Open Sans",
      fontStyle:"light",
      fontWeight:"400",
      borderTop:"2px solid #000000",
      borderBottom:"1px solid #000000",
      textAlign:"center",
       }

    const navStyle2={
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      height:"100px",
      alignItems:"center",
      textDecoration:"none",
      color:"#000000",
      fontSize:".90em",
      fontFamily:"Open Sans",
      fontStyle:"light",
      fontWeight:"400",
      textAlign:"right",
      textTransform:"uppercase",
      letterSpacing:"2px",
    }
    const headStyle={
      display:"flex",
      flexDirection:"row",
      justifyContent:"center"
    }
    const logoStyle={
      marginTop:"20px",
      height:"75px",
      width:"auto",
      marginRight:"20px",
    }
    const linkStyle2={
      display:"flex",
      flexDirection:"row",
      paddingRight:"30px",
      textDecoration:"none",
      color:"#000000",
      fontSize:"1em",
      fontFamily:"Open Sans",
      fontStyle:"light",
      fontWeight:"400",
      textAlign:"right",
      textTransform:"uppercase",
      letterSpacing:"2px",
    }
      const divStyle2Mobile={
        width:"100%",
        height:"auto",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        position:"fixed",
        top:"0",
        left:"0",
        background:"#ffffff",
        zIndex:"99999"
    }
      const colorBox={
        width:"100px",
        height:"100px",
        background:"rgba(235, 11, 38, 1.00)",
        color:"rgba(255, 255, 255, 1.00)",
        display:"flex",
        flexDirection:"row",
        alignItems:"right",
      }

    var dashLink = <Link style={linkStyle2} to="/Dashboard">Dashboard</Link>;
    var signUpLink = <Link to="/SignUp" style={linkStyle2}>Sign Up</Link>;
    var signInLink = <Link to="/SignIn" style={linkStyle2}>Sign In</Link>;

    if(this.state.token === null){
      dashLink="";
    }
    else{
      signUpLink="";
      signInLink="";
      if(this.state.user.roleID !== 1){
        dashLink="";
      }
    }

    return (
      <div style={divStyle2Mobile}>
        <Responsive minDeviceWidth={1024}>
          <div style={headStyle}>
            <img style={logoStyle} src="http://h4z.it/Image/c4604f_RL_logo_long.png"/>
            <nav style={navStyle2}>
              <Link style={linkStyle2} to= "/"> Home </Link>
              <Link style={linkStyle2} to= "/About"> About </Link>
              <Link style={linkStyle2} to= "/Shop"> Shop </Link>
              <Link style={linkStyle2} to= "/News"> News </Link>
              <Link style={linkStyle2} to= "/Contact"> Contact </Link>
              {signUpLink}
              {signInLink}
              {dashLink}
              <div style={colorBox}></div>


            </nav>
          </div>
        </Responsive>

        <Responsive maxDeviceWidth={1023}>
          <div style={headStyle}>
            <img style={logoStyle} src="http://h4z.it/Image/681c4a_SRL_logo.png"/>
          <nav style={navStyle2}>
            <IconButton onTouchTap={this.handleMenu}> <MenuIcon/> </IconButton>
          </nav>
          {this.showMenu()}
        </div>
        </Responsive>
      </div>
    );
  }
}

export default Navbar;

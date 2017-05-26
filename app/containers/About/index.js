/*
 *
 * About
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Responsive from 'react-responsive';
import {Link} from "react-router";
import FlatButton from "material-ui/FlatButton";
import NavBar from 'components/NavBar';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaYoutubePlay from 'react-icons/lib/fa/youtube-play';
import FaInstagram from 'react-icons/lib/fa/instagram';

export default class About extends React.PureComponent {

  constructor(props){
    super(props);
    this.state={
      email:"",
    }
  }
  handleEmail = (event) => {
    this.setState({
      email:event.target.value
    })
  }

    storeContact = () => {
      var data = new FormData ();
      data.append("email", this.state.email);

    fetch("http://localhost:8000/api/storeEmail",{
      method:"post",
      body:data
    })
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      if(json.success){
        this.setState({
          email:"",
        })
        alert(json.success);
      }

      else if (json.error){
        alert(json.error);
      }
    }.bind(this))
  }

  render() {

    const divStyle={
      width:"100%",
      height:"700px",
      background:"url(http://h4z.it/Image/e97237_oRobot2017-5.jpg)",
      backgroundSize:"cover",
      backgroundAttachment:"fixed",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat",
      zIndex:"999999",
    }
    const divStyleMobile={
      width:"100%",
      height:"700px",
      background:"url(http://h4z.it/Image/e97237_oRobot2017-5.jpg)",
      backgroundSize:"cover",
      backgroundAttachment:"fixed",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat",
    }
    const divStyle2={
      width:"100%",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      background:"rgba(255, 255, 255, 1.00)",
      height:"500px",
    }
    const divStyle2Mobile={
      width:"100%",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      background:"rgba(255, 255, 255, 1.00)",
      height:"auto",
    }
    const divStyle6={
      width:"100%",
      height:"150px",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      background:"rgba(235, 11, 38, 1.00)",
    }
    const divStyle6Mobile={
      width:"100%",
      height:"150px",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      background:"rgba(235, 11, 38, 1.00)",

    }
    const divStyle7={
      width:"100%",
      height:"300px",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      background:"rgba(189, 190, 192, 1.00)",
    }
    const divStyle7Mobile={
      width:"100%",
      height:"300px",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      background:"rgba(189, 190, 192, 1.00)",
    }
    const headerStyle={
      color:"rgba(109, 110, 114, 1.00)",
      fontSize:"2.5em",
      fontFamily:"Open Sans",
      fontWeight:"300",
      textAlign:"center",
      textTransform:"uppercase",
      marginTop:"50px",
      letterSpacing:"1.5px"
    }
    const headerMobileStyle={
      color:"rgba(109, 110, 114, 1.00)",
      fontSize:"2em",
      fontFamily:"Open Sans",
      fontWeight:"300",
      textAlign:"center",
      textTransform:"uppercase",
      marginTop:"40px",
      letterSpacing:"1.5px"
    }
    const photoRow={
      margin:"0 auto",
      marginTop:"30px",
      display:"flex",
      justifyContent:"space-around",
      width:"100%",
    }
    const photoRowMobile={
      marginTop:"30px",
      padding:".5vw",
      fontSize:"0",
      FlexboxlexWrap:"wrap",
      FlexDirection:"column",
      WebkitFlexFlow:"column",
      flexFlow:"column",
      display:"webkit-box",
      display:"flex",
    }
    const photo={
      width:"25%",
      height:"auto",
    }
      const photoMobile={
        flex:"auto",
        maxWidth:"100%",
        margin:".5vw",
        marginBottom:"20px"
    }
    const buttonBox={
      color:"rgba(235, 11, 38, 1.00)",
      fontSize:"1.25em",
      fontFamily:"Open Sans",
      fontWeight:"400",
      textAlign:"center center",
      textTransform:"uppercase",
      paddingTop:"5px",
      width:"150px",
      height:"40px",
      marginTop:"30px",
      background:"rgba(255, 255, 255, 1.00)",
      border:"2px solid rgba(109, 110, 114, 1.00)",
      display:"flex",
      justifyContent:"center",
    }
    const quoteStyle={
      color:"rgba(255, 255, 255, 1.00)",
      fontSize:"3em",
      fontFamily:"Open Sans",
      fontWeight:"400",
      fontStyle:"italic",
      textAlign:"center",
    }
    const quoteStyleMobile={
      color:"rgba(255, 255, 255, 1.00)",
      fontSize:"2em",
      fontFamily:"Open Sans",
      fontWeight:"400",
      fontStyle:"italic",
      textAlign:"center",
    }
    const photo2={
      maxWidth:"100%",
      height:"auto",
      display:"flex",
      flexDirection:"row",
      justifyContent:"right",
    }
    const photo2Mobile={
      maxWidth:"100%",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
    }
    const textStyle={
      color:"rgba(109, 110, 114, 1.00)",
      fontSize:"1em",
      fontFamily:"Open Sans",
      fontWeight:"300",
      textAlign:"left",
    }
    const headerStyle2={
      color:"rgba(235, 11, 38, 1.00)",
      fontSize:"2.5em",
      fontFamily:"Open Sans",
      fontWeight:"300",
      textAlign:"left",
      textTransform:"uppercase",
      marginTop:"50px",
      marginBottom:"30px",
      letterSpacing:"1.5px"
    }
    const iconStyle={
      color:"rgba(255, 255, 255, 1.00)",
      fontSize:"4em",
      paddingLeft:"20px",
    }
    const iconStyleMobile={
      color:"rgba(255, 255, 255, 1.00)",
      fontSize:"3em",
      paddingRight:"20px",
    }
    const inputBox={
      color:"rgba(255, 255, 255, 1.00)",
      fontSize:"1em",
      fontFamily:"Open Sans",
      fontWeight:"400",
      textAlign:"left",
      width:"285px",
      height:"30px",
      border:"2px solid rgba(255, 255, 255, 1.00)",
      marginTop:"10px",
      marginBottom:"10px",
      marginRight:"30px",
      background:"rgba(189, 190, 192, 1.00)"
    }
    const contactLeft={
      width:"100%",
      display:"flex",
      flexDirection:"column",
      paddingLeft:"5%",
      paddingTop:"8%"
    }
    const contactLeftMobile={
      display:"flex",
      flexDirection:"column",
      paddingLeft:"5%",
      paddingTop:"8%"
    }
    const contactRow={
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around",
      padding:"50px 10px 0px 0px",
    }
    const buttonBox2={
      color:"rgba(235, 11, 38, 1.00)",
      fontSize:"1.25em",
      fontFamily:"Open Sans",
      fontWeight:"400",
      textAlign:"center center",
      textTransform:"uppercase",
      paddingTop:"5px",
      width:"150px",
      height:"40px",
      marginTop:"10px",
      marginBottom:"50px",
      background:"rgba(189, 190, 192, 1.00)",
      border:"2px solid rgba(109, 110, 114, 1.00)",
      display:"flex",
      justifyContent:"center",
    }

    return (
      <div>
        <Helmet title="About" meta={[ { name: 'description', content: 'Description of About' }]}/>

          <header>
              <NavBar/>
          </header>

            <Responsive minDeviceWidth={1024}>
              <div style={divStyle}>
              </div>
            </Responsive>

            <Responsive maxDeviceWidth={1023}>
              <div style={divStyleMobile}>
              </div>
            </Responsive>

            <Responsive minDeviceWidth={1024}>
              <div style={divStyle2}>
                <div style={{maxWidth:"600px", margin:"0 auto", marginTop:"30px", marginBottom:"30px",
                }}>
                <div style={headerStyle}>
                  About Us
                </div>
                <div style={textStyle}>
                  Sumo Robot League is a non-profit robotics curriculum and sports league operated by HACK Augusta. Students design and build robots to compete in fully autonomous sumo wrestling. Each match motivates kids to learn and understand the principles of S.T.E.M. (Science, Technology, Engineering and Math).<br/>
                  COMPETITION & CURRICULUM <br/>
                  Sumo Robot League is a scalable STEM education platform that offers an affordable competitive robotics curriculum for middle and high school students. Our program provides multiple hands on lessons that give students the opportunity to build electrical circuits, design and 3D print adaptive components, and code sensor-based autonomous response algorithms using the actual C++ programming language. In additiona, our kits are expandable to include exercises in mobile app development, machine learning, and the internet of things.<br/>

                  The League has a Fall and Spring season coordinated with local school system schedules. Regional competitions are held at the end of each season in local communities. The championship tournament is held in Augusta, Georgia at the Greater Augusta Innovation Academy located in an 18,000 sq. foot historic schoolhouse built in 1802. HACK Augusta is the non-profit that manages Sumo Robot League as well as theClubhou.se, a makerspace and startup incubator. This short video done by one of our students gives a glimpse into the scope of our program and what kids can do.<br/>
                </div>
               </div>
             </div>
            </Responsive>

            <Responsive maxDeviceWidth={1023}>
              <div style={divStyle2Mobile}>
                <div style={{maxWidth:"280px", margin:"0 auto", marginTop:"30px", marginBottom:"30px",
                }}>
                <div style={headerStyle}>
                  About Us
                </div>
                <div style={textStyle}>
                  Sumo Robot League is a non-profit robotics curriculum and sports league operated by HACK Augusta. Students design and build robots to compete in fully autonomous sumo wrestling. Each match motivates kids to learn and understand the principles of S.T.E.M. (Science, Technology, Engineering and Math).<br/>
                  COMPETITION & CURRICULUM <br/>
                  Sumo Robot League is a scalable STEM education platform that offers an affordable competitive robotics curriculum for middle and high school students. Our program provides multiple hands on lessons that give students the opportunity to build electrical circuits, design and 3D print adaptive components, and code sensor-based autonomous response algorithms using the actual C++ programming language. In additiona, our kits are expandable to include exercises in mobile app development, machine learning, and the internet of things.<br/>

                  The League has a Fall and Spring season coordinated with local school system schedules. Regional competitions are held at the end of each season in local communities. The championship tournament is held in Augusta, Georgia at the Greater Augusta Innovation Academy located in an 18,000 sq. foot historic schoolhouse built in 1802. HACK Augusta is the non-profit that manages Sumo Robot League as well as theClubhou.se, a makerspace and startup incubator. This short video done by one of our students gives a glimpse into the scope of our program and what kids can do.<br/>
                </div>
               </div>
             </div>
            </Responsive>

            <Responsive minDeviceWidth={1024}>
              <div style={divStyle6}>
                <div>
                  <a style={iconStyle} href= "https://www.facebook.com/SumoRobotLeague/"><FaFacebook/></a>
                  <a style={iconStyle} href= "https://twitter.com/SumoRobotLeague"><FaTwitter/></a>
                  <a style={iconStyle} href= "https://www.youtube.com/channel/UC0WCv8s-wjs_T7GnELdtvow"><FaYoutubePlay/></a>
                  <a style={iconStyle} href= "https://www.instagram.com/explore/tags/sumorobotleague/"><FaInstagram/></a>
                </div>
              </div>
            </Responsive>

            <Responsive maxDeviceWidth={1023}>
              <div style={divStyle6Mobile}>
                <div>
                  <a style={iconStyleMobile} href= "https://www.facebook.com/SumoRobotLeague/"><FaFacebook/></a>
                  <a style={iconStyleMobile} href= "https://twitter.com/SumoRobotLeague"><FaTwitter/></a>
                  <a style={iconStyleMobile} href= "https://www.youtube.com/channel/UC0WCv8s-wjs_T7GnELdtvow"><FaYoutubePlay/></a>
                  <a style={iconStyleMobile} href= "https://www.instagram.com/explore/tags/sumorobotleague/"><FaInstagram/></a>
                </div>

              </div>
            </Responsive>

            <Responsive minDeviceWidth={1024}>
              <div style={divStyle7}>
                <div style={{maxWidth:"320px", margin:"0 auto", marginTop:"30px", marginBottom:"30px",
                }}>
                <div style={contactLeft}>
                    <label style={textStyle}>SUBSCRIBE FOR UPDATES<input type="text" style={inputBox} value={this.state.email} placeholder=" Email Address"/> </label>
                    <input onTouchTap = {this.storeContact} type="submit" placeholder="Send Message" style={buttonBox2}/>

                    &copy; 2017<script>new Date().getFullYear()>2017&&document.write("-"+new Date().getFullYear());</script>, Sumo Robot League.<br/>Proudly designed by <a href="http://cb-iii.com">Charlie Bradley III</a>
                </div>
                </div>
              </div>
            </Responsive>

            <Responsive maxDeviceWidth={1023}>
              <div style={divStyle7Mobile}>
                <div style={divStyle7}>
                  <div style={{maxWidth:"320px", margin:"0 auto", marginTop:"30px", marginBottom:"30px",
                  }}>
                  <div style={contactLeft}>
                      <label style={textStyle}>SUBSCRIBE FOR UPDATES<input type="text" style={inputBox} value={this.state.email} placeholder=" Email Address"/> </label>
                      <input onTouchTap = {this.storeContact} type="submit" placeholder="Send Message" style={buttonBox2}/>

                      &copy; 2017<script>new Date().getFullYear()>2017&&document.write("-"+new Date().getFullYear());</script>, Sumo Robot League.<br/>Proudly designed by <a href="http://cb-iii.com">Charlie Bradley III</a>
                  </div>
                  </div>
                </div>
              </div>
            </Responsive>
      </div>
    );
  }
}

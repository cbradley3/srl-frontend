/*
 *
 * Home
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

export default class Home extends React.PureComponent {
  render() {
    const divStyle={
      width:"100%",
      height:"700px",
      background:"url(http://h4z.it/Image/e97237_oRobot2017-5.jpg)",
      backgroundSize:"cover",
      backgroundAttachment:"fixed",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat",
    }
    const divStyleMobile={
      width:"100%",
      height:"500px",
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
    }
    const divStyle2Mobile={
      width:"100%",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",

    }
    const divStyle3={
      width:"100%",
      height:"200px",
      background:"rgba(109, 110, 114, 1.00)",
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center",
      marginTop:"80px",
    }
    const divStyle3Mobile={
      width:"100%",
      height:"200px",
      background:"rgba(109, 110, 114, 1.00)",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      marginTop:"80px",
    }
    const divStyle4={
      width:"100%",
      height:"600px",
      background:"rgba(255, 255, 255, 1.00)",
      display:"flex",
      flexDirection:"row",
    }
    const divStyle4Mobile={
      width:"100%",
      height:"auto",
      background:"rgba(255, 255, 255, 1.00)",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
    }
    const divStyle5={
      width:"100%",
      height:"600px",
      background:"rgba(255, 255, 255, 1.00)",
      display:"flex",
      flexDirection:"row",
    }
    const divStyle5Mobile={
      width:"100%",
      height:"auto",
      background:"rgba(255, 255, 255, 1.00)",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
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
      border:"2px solid rgba(189, 190, 192, 1.00)",
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

    return (
      <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

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
                <div style={headerStyle}>
                  New Sumo Robot Kits Available
                </div>
                <div style ={photoRow}>
                  <img style={photo} src="http://h4z.it/Image/860166_wheels.jpg"/>
                  <img style={photo} src="http://h4z.it/Image/860166_wheels.jpg"/>
                  <img style={photo} src="http://h4z.it/Image/860166_wheels.jpg"/>
                </div>
                <Link style={buttonBox} to= "/Shop"> Shop </Link>
              </div>
            </Responsive>

            <Responsive maxDeviceWidth={1023}>
              <div style={divStyle2Mobile}>
                <div style={headerMobileStyle}>
                  New Sumo Robot Kits Available
                </div>
                <div style ={photoRowMobile}>
                  <div style={photoMobile}><img src="http://h4z.it/Image/be49e8_wheels2.jpg"/></div>
                  <div style={photoMobile}><img src="http://h4z.it/Image/be49e8_wheels2.jpg"/></div>
                  <div style={photoMobile}><img src="http://h4z.it/Image/be49e8_wheels2.jpg"/></div>
                </div>
                <Link style={buttonBox} to= "/Shop"> Shop </Link>
              </div>
            </Responsive>

            <Responsive minDeviceWidth={1024}>
              <div style={divStyle3}>
                <div style={quoteStyle}>
                  "My team is awesome and we love to battle our bots!"<br/>
                -Mason, age 10</div>
              </div>
            </Responsive>

            <Responsive maxDeviceWidth={1023}>
              <div style={divStyle3Mobile}>
                <div style={quoteStyleMobile}>
                  "My team is awesome and we love to battle our bots!"<br/>
                -Mason, age 10</div>
              </div>
            </Responsive>

            <Responsive minDeviceWidth={1024}>
              <div style={divStyle4}>
                <div style={{maxWidth:"300px", margin:"0 auto", marginTop:"100px", marginBottom:"15px",
                }}> <div style={headerStyle2}>
                  About SRL
                </div>
                <div style={textStyle}>
                  Sumo Robot League is a non-profit robotics curriculum and sports league operated by HACK Augusta. Students design and build robots to compete in fully autonomous sumo wrestling. Each match motivates kids to learn and understand the principles of S.T.E.M. (Science, Technology, Engineering and Math).<br/> For more info click the butttom below.</div>
                <Link style={buttonBox} to= "/About"> About </Link>
                </div>
                <div style={photo2}><img src="http://h4z.it/Image/78aa3c_obot2017-3sm.jpg"/></div>
              </div>
            </Responsive>

            <Responsive maxDeviceWidth={1023}>
              <div style={divStyle4Mobile}>
                <div style={photo2Mobile}><img src="http://h4z.it/Image/78aa3c_obot2017-3sm.jpg"/></div>
                <div style={{maxWidth:"250px", margin:"0 auto", marginTop:"30px", marginBottom:"30px",
                }}> <div style={headerStyle2}>
                  About SRL
                </div>
                <div style={textStyle}>
                  Sumo Robot League is a non-profit robotics curriculum and sports league operated by HACK Augusta. Students design and build robots to compete in fully autonomous sumo wrestling. Each match motivates kids to learn and understand the principles of S.T.E.M. (Science, Technology, Engineering and Math).<br/> For more info click the butttom below.</div>
                <Link style={buttonBox} to= "/About"> About </Link>
                </div>
              </div>
            </Responsive>

            <Responsive minDeviceWidth={1024}>
              <div style={divStyle5}>
                <div style={photo2}><img src="http://h4z.it/Image/549da7_obot2017-2sm.jpg"/></div>
                <div style={{maxWidth:"300px", margin:"0 auto", marginTop:"100px", marginBottom:"15px",
                }}> <div style={headerStyle2}>
                  SRL News
                </div>
                <div style={textStyle}>
                  We just came back from a great show in Baltimore, and check out our cool wrap up video!  Sumo Robot League is project based makerspace learning for middle school students in computer science and advanced manufacturing, that grows STEAM skills and computational thinking. Add robotics to your school, camp, or after school program. <br/> For more info click the butttom below.</div>
                <Link style={buttonBox} to= "/News"> News </Link>
                </div>
              </div>
            </Responsive>

            <Responsive maxDeviceWidth={1023}>
              <div style={divStyle5Mobile}>
                <div style={photo2Mobile}><img src="http://h4z.it/Image/549da7_obot2017-2sm.jpg"/></div>
                <div style={{maxWidth:"250px", margin:"0 auto", marginTop:"30px", marginBottom:"30px",
                }}> <div style={headerStyle2}>
                  SRL News
                </div>
                <div style={textStyle}>
                  We just came back from a great show in Baltimore, and check out our cool wrap up video!  Sumo Robot League is project based makerspace learning for middle school students in computer science and advanced manufacturing, that grows STEAM skills and computational thinking. Add robotics to your school, camp, or after school program. <br/> For more info click the butttom below.</div>
                <Link style={buttonBox} to= "/News"> News </Link>
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


              </div>
            </Responsive>

            <Responsive maxDeviceWidth={1023}>
              <div style={divStyle7Mobile}>

              </div>
            </Responsive>


      </div>
    );
  }
}

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
      height:"auto",

    }
    const divStyle3={
      width:"100%",
      height:"600px",
      background:"url(http://h4z.it/Image/35e950_DSC_0266rev.jpg)",
      backgroundSize:"cover",
      backgroundAttachment:"fixed",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat"
    }
    const divStyle3Mobile={
      width:"100%",
      height:"500px",
      background:"url(http://h4z.it/Image/35e950_DSC_0266rev.jpg)",
      backgroundSize:"cover",
      backgroundAttachment:"fixed",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat"
    }
    const divStyle4={
      width:"100%",
      height:"800px",
      background:"rgba(255, 255, 255, 1.00)",
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
    }
    const divStyle4Mobile={
      width:"100%",
      height:"800px",
      background:"rgba(255, 255, 255, 1.00)",
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
    }
    const divStyle5={
      width:"100%",
      height:"600px",
      background:"url(http://h4z.it/Image/4bd89e_da443c74crev.jpg)",
      backgroundSize:"cover",
      backgroundAttachment:"fixed",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat",
    }
    const divStyle5Mobile={
      width:"100%",
      height:"450px",
      background:"url(http://h4z.it/Image/4bd89e_da443c74crev.jpg)",
      backgroundSize:"cover",
      backgroundAttachment:"fixed",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat",
    }
    const divStyle6={
      width:"100%",
      height:"700px",
      background:"rgba(255, 255, 255, 1.00)",
      display:"flex",
      flexDirection:"row",
      justifyContent:"center"
    }
    const divStyle6Mobile={
      width:"100%",
      height:"700px",
      background:"rgba(255, 255, 255, 1.00)",
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
    }
    const divStyle7={
      width:"100%",
      height:"600px",
      background:"url(http://h4z.it/Image/645fa8_IMG_9509rev.jpg)",
      backgroundSize:"cover",
      backgroundAttachment:"fixed",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat"
    }
    const divStyle7Mobile={
      width:"100%",
      height:"450px",
      background:"url(http://h4z.it/Image/645fa8_IMG_9509rev.jpg)",
      backgroundSize:"cover",
      backgroundAttachment:"fixed",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat"
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
      display:"-ms-flexbox",
      msFlexboxlexWrap:"wrap",
      msFlexDirection:"column",
      WebkitFlexFlow:"column",
      flexFlow:"column",
      display:"-webkit-box",
      display:"flex",
    }
    const photo={
      width: "33%",
    }
      const photoMobile={
        WebkitBoxFlex:"auto",
        msFlex:"auto",
        flex:"auto",
        maxWidth:"50%",
        height:"auto",
        margin:".5vw",
        marginBottom:"20px"
    }
    const headerDivImg={
      width:"100%",
      height:"auto",
    }
    const buttonBox={
      color:"rgba(235, 11, 38, 1.00)",
      fontSize:"1.5em",
      fontFamily:"Open Sans",
      fontWeight:"300",
      textAlign:"center",
      textTransform:"uppercase",
      width:"200px",
      height:"75px",
      marginTop:"30px",
      background:"rgba(255, 255, 255, 0)",
      border:"1px solid rgba(189, 190, 192, 1.00)",
      display:"flex",

    }
    const inputBox3Mobile={
      color:"#ffffff",
      fontSize:"1em",
      fontFamily:"Open Sans",
      fontWeight:"400",
      textAlign:"center",
      width:"100px",
      height:"50px",
      marginTop:"15px",
      background:"rgba(0, 0, 0, 1.00)",
      border:"1px solid #ffffff",
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
              </div>
            </Responsive>



      </div>
    );
  }
}

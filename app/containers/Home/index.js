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
      height:"600px",
      background:"url(http://h4z.it/Image/e97237_oRobot2017-5.jpg)",
      backgroundSize:"cover",
      backgroundAttachment:"absolute",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat",
    }
    const divStyleMobile={
      width:"100%",
      height:"500px",
      background:"url(http://h4z.it/Image/e97237_oRobot2017-5.jpg)",
      backgroundSize:"cover",
      backgroundAttachment:"absolute",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat",
    }
    const divStyle2={
      width:"100%",
      height:"250px",
      background:"rgba(0, 0, 0, 0.03)"
    }
    const divStyle2Mobile={
      width:"100%",
      height:"250px",
      background:"rgba(0, 0, 0, 0.03)"
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

    return (
      <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}

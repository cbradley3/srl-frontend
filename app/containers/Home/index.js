/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class Home extends React.PureComponent {
  render() {

    const body={
      fontSize:"1em",
      background:"rgba(76, 25, 25, 0.9)",
}

    const container={
     width:"960px",
     margin:"0 auto",
}

    const header={
      width:"960px",
      background:"rgba(76, 25, 25, 0.9)",
      float:"left",
      height:"100px",
}

    const logo={
      float:"left",
      width:"100px",
      padding:"10px",
}

    const navigation={
      float:"left",
      width:"840px",
}

.main-nav {
   width: 800px;
}

.main-nav li {
  float:left;
  list-style-type: none;
  width: 198px;
  text-align: center;
  border-left:1px solid $altred;
  border-right:1px solid $altred;
}

.main-nav li a {
  line-height: 32px;
  text-decoration: none;
  background-color: $red;
  width: 198px;
  display: block;
  color: white;
}

.main-nav li a:hover {
  background-color: $darkred;
}

.content {
 padding: 30px;
 width: 600px;
 float:left;
 background: #fff;
}

.sidebar {
 width: 280px;
 float:left;
 padding: 10px;
 background-color: $altred;
}

.footer {
  float:left;
  width: 900px;
  background-color:$red;
  padding: 30px;
  color: white;
  a {
    color: white;
  }
}
    return (
      <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}

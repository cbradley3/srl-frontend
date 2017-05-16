/*
 *
 * News
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class News extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="News" meta={[ { name: 'description', content: 'Description of News' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}

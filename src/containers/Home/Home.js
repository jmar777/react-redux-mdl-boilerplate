import React, { Component } from 'react';
import Spinner from 'react-mdl/lib/Spinner';
import Button from 'react-mdl/lib/Button';
// import { Link } from 'react-router';
// import { CounterButton, GithubButton } from 'components';
// import config from '../../config';

export default class Home extends Component {
  render() {
    // const styles = require('./Home.scss');
    // require the logo image both from client and server
    // const logoImage = require('./logo.png');
    return (
      <div>
        <h2>Home Page</h2>
        <Spinner />
        <Button raised ripple>Button</Button>
      </div>
    );
  }
}

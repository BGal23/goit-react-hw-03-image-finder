import { Component } from 'react';
import PropTypes from 'prop-types';

export class Loader extends Component {
  render() {
    return (
      <>
        <p>{this.props.random}</p>
      </>
    );
  }
}

Loader.propTypes = {
  random: PropTypes.string,
};

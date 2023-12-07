import { Component } from 'react';
import PropTypes from 'prop-types';

export class Modal extends Component {
  render() {
    return (
      <>
        <p>{this.props.random}</p>
      </>
    );
  }
}

Modal.propTypes = {
  random: PropTypes.string,
};

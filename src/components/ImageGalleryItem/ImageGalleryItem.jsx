import { Component } from 'react';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  render() {
    return <>{this.props.random}</>;
  }
}

ImageGalleryItem.propTypes = {
  random: PropTypes.string,
};

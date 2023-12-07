import { Component } from 'react';
import PropTypes from 'prop-types';
import '../.././/index.css';

export class ImageGallery extends Component {
  render() {
    const { children } = this.props;
    return (
      <ul className="gallery">
        <p>{children}</p>
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  children: PropTypes.object,
};

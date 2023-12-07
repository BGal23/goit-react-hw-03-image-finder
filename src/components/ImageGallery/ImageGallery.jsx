import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './image-gallery.module.css';

export class ImageGallery extends Component {
  render() {
    const { children } = this.props;
    return <ul className={css.gallery}>{children}</ul>;
  }
}

ImageGallery.propTypes = {
  children: PropTypes.object,
};

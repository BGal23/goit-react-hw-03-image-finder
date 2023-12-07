import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './image-gallery-item.module.css';

export class ImageGalleryItem extends Component {
  render() {
    const { images, modalOpen } = this.props;
    const imagesList = images.map(item => (
      <div onClick={modalOpen} className={css.item} key={item.id}>
        <img
          srcSet={item.largeImageURL}
          className={css.image}
          src={item.webformatURL}
          alt={item.tags}
        />
      </div>
    ));
    return <>{imagesList}</>;
  }
}

ImageGalleryItem.propTypes = {
  images: PropTypes.array,
  modalOpen: PropTypes.func,
};

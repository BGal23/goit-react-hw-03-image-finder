import { Component } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import css from './app.module.css';

export class App extends Component {
  searchItems = event => {
    event.preventDefault();
    console.log(event.target[1].value);
  };

  loadMore = event => {
    console.log(event);
  };
  render() {
    return (
      <div className={css.app}>
        <Searchbar searchItems={this.searchItems} />
        <ImageGallery>
          <ImageGalleryItem />
        </ImageGallery>
        <Loader />
        <Button loadMore={this.loadMore} />
        <Modal />
      </div>
    );
  }
}

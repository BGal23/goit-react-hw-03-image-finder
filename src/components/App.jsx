import { Component } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { SearchBar } from './SearchBar/SearchBar';
import css from './app.module.css';
import getAllItem from './importAPI';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    pageNr: 1,
    modal: false,
    modalImg: '',
    alt: '',
    btnMore: false,
    message: false,
  };

  searchItems = async event => {
    event.preventDefault();
    const query = event.target[1].value;

    try {
      this.setState({
        isLoading: true,
        images: [],
        btnMore: false,
        message: false,
      });
      const images = await getAllItem(query, this.state.pageNr);
      this.setState({ images: images });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState(state =>
        state.images.length > 0
          ? { isLoading: false, btnMore: true }
          : { isLoading: false, btnMore: false, message: true }
      );
    }
  };

  modalOpen = event => {
    this.setState({
      modal: true,
      modalImg: event.target.srcset,
      alt: event.target.alt,
    });
    window.addEventListener('keydown', this.modalClose);
  };

  modalClose = event => {
    if (event.target.tagName === 'DIV' || event.code === 'Escape') {
      this.setState({
        modal: false,
        modalImg: '',
        alt: '',
      });
      window.removeEventListener('keydown', this.modalClose);
    }
  };

  loadMore = event => {
    console.log(event);
  };

  render() {
    const { images, isLoading, modal, modalImg, alt, btnMore, message } =
      this.state;
    return (
      <>
        <SearchBar searchItems={this.searchItems} />
        <div className={css.app}>
          {isLoading === true ? (
            <Loader />
          ) : (
            <ImageGallery>
              <ImageGalleryItem modalOpen={this.modalOpen} images={images} />
            </ImageGallery>
          )}
          {modal === true && (
            <Modal
              modalImg={modalImg}
              modalAlt={alt}
              modalClose={this.modalClose}
            />
          )}
        </div>
        {message === true && (
          <div className={css.message}>
            Sorry, there are no images matching your search query. Please try
            again.
          </div>
        )}
        {btnMore === true && <Button loadMore={this.loadMore} />}
      </>
    );
  }
  componentDidCatch() {
    console.log('hey');
  }
}

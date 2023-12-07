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
    searching: '',
    pageNr: 1,
    modal: false,
    modalImg: '',
    alt: '',
    btnMore: false,
    message: '',
  };

  searchItems = async event => {
    event.preventDefault();
    const query = event.target[1].value;

    try {
      await this.setState({
        isLoading: true,
        images: [],
        btnMore: false,
        message: '',
        searching: query,
        pageNr: 1,
      });

      const images = await getAllItem(this.state.searching, this.state.pageNr);
      await this.setState({ images: images });
    } catch (error) {
      this.setState({ message: "Sorry, something's wrong" });
    } finally {
      this.setState(state =>
        state.images.length > 11
          ? { isLoading: false, btnMore: true }
          : {
              isLoading: false,
              btnMore: false,
              message: "Sorry, that's all we found.",
            }
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

  loadMore = async () => {
    const nextPage = this.state.pageNr;
    const allImages = this.state.images.length;

    try {
      await this.setState({
        btnMore: false,
        message: false,
        pageNr: nextPage + 1,
      });
      const nextImages = await getAllItem(
        this.state.searching,
        this.state.pageNr
      );
      await this.setState({ images: this.state.images.concat(nextImages) });
    } catch (error) {
      this.setState({ message: "Sorry, something's wrong" });
    } finally {
      this.setState(state =>
        state.images.length > allImages + 11
          ? { btnMore: true }
          : { btnMore: false, message: "Sorry, that's all we found." }
      );
    }
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
        {message && <div className={css.message}>{message}</div>}
        {btnMore === true && <Button loadMore={this.loadMore} />}
      </>
    );
  }
}

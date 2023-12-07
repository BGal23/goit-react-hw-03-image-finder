import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './modal.module.css';

export class Modal extends Component {
  render() {
    const { modalImg, modalAlt, modalClose } = this.props;
    return (
      <div onClick={modalClose} className={css.overlay}>
        <div className={css.modal}>
          <img src={modalImg} alt={modalAlt} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  modalImg: PropTypes.string,
  modalAlt: PropTypes.string,
  modalClose: PropTypes.func,
};

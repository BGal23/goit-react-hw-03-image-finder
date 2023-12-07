import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './button.module.css';

export class Button extends Component {
  render() {
    const { loadMore } = this.props;
    return (
      <>
        <button onClick={loadMore} type="button" className={css.button}>
          Load more
        </button>
      </>
    );
  }
}

Button.propTypes = {
  random: PropTypes.string,
};

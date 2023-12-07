import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './search-bar.module.css';

export class SearchBar extends Component {
  render() {
    const { searchItems } = this.props;
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={searchItems}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  searchItems: PropTypes.func,
};

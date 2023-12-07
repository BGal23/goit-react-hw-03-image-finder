import { Component } from 'react';
import css from './loader.module.css';
import { Audio } from 'react-loader-spinner';

<Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="three-dots-loading"
  wrapperStyle
  wrapperClass
/>;

export class Loader extends Component {
  render() {
    return (
      <div className={css.loader}>
        <Audio />
      </div>
    );
  }
}

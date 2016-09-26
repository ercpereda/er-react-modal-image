import React from 'react';
import styles from './ModalImage.css';

const ModalImage = props => (
  <div className={styles.component}>
    {props.text}
  </div>
);

ModalImage.propTypes = {
  text: React.PropTypes.string
};

export default ModalImage;

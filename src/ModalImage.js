import React from 'react';
import classnames from 'classnames';
import styles from './ModalImage.css';

class ModalImage extends React.Component {
  constructor() {
    super();

    this.close = this.close.bind(this);
  }

  close() {
    this.props.onRequestClose();
  }

  render() {
    const modalClass = classnames(styles.modal, {
      [styles.show]: this.props.isOpen
    });

    return (
      <div className={modalClass}>
        <span className={styles.close} onClick={this.close}>&times;</span>
        <img className={styles.modalContent} src={this.props.img} alt="modal" />
        <div className={styles.caption}>{this.props.caption}</div>
      </div>
    );
  }
}

ModalImage.propTypes = {
  isOpen: React.PropTypes.bool,
  img: React.PropTypes.string,
  caption: React.PropTypes.string,
  onRequestClose: React.PropTypes.func
};

export default ModalImage;

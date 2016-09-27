import React from 'react';
import ReactDOM from 'react-dom';
import ModalImage from './ModalImage';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <ModalImage
          isOpen={this.state.modalIsOpen}
          img="https://www.bing.com/az/hprichbg/rb/Castelmezzano_EN-US11750585825_1920x1080.jpg"
          caption="Castelmezzano, Italy"
          onRequestClose={this.closeModal}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


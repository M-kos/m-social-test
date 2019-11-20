import React, { Component } from 'react';
import './App.scss';
import Header from '../Header/Header';
import ModalPopUp from '../ModalPopUp/ModalPopUp';


class App extends Component {

  state = {
    modalShow: false
  }

  showPopUp = () => {
    this.setState({modalShow: !this.state.modalShow});
  };

  render() {
    const {modalShow} = this.state;
    return (
      <div className="App">
        <Header showPopUp={this.showPopUp} />
        <ModalPopUp
          show={modalShow}
          onHide={this.showPopUp}
        />
      </div>
    );
  }
}

export default App;

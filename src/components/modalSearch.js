import React from 'react';
import Modal from 'react-modal';
import Search from "./search";
import './scss/modalSearch.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

Modal.setAppElement('#___gatsby')  //public/htmlのid参照
class ModalWindow extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  render() {
    return (
      <div className="modalWrapper">
        <div className="openModal">
          <button className="btn-openModal" onClick={this.openModal}>
            <span className="_icon"><FontAwesomeIcon icon={faSearch} size="2x"/></span>
            <span className="_text">にっきを<br/>けんさくする</span>
          </button>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Seach Modal"
          className="modalSearchWindow"
          overlayClassName="modalSearchOverlay"
          closeTimeoutMS={300}
        >
          <Search />
          <div className="closeModal">
            <button className="btn-closeModal" onClick={this.closeModal}>✖</button>
          </div>
        </Modal>
      </div>
    );
  }
}
export default ModalWindow;
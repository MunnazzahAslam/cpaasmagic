import Delayed from './Delayed';
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Modal = props => (
    <Delayed waitBeforeShow={5000}>
      Modal
    </Delayed>
)

export default Modal;
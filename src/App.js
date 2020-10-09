import React, { useState } from 'react';

import { Provider } from 'react-redux';
import { ModalTodoComponent } from './components/modaltodo/ModalTodoComponent';
import { TodoPage } from './pages/TodoPage'

import { store } from './store/store';
import './App.css';
import { ModalInfoComponent } from './components/modalInfo/ModalInfoComponent';
function App() {

  const [opennew, setOpennew] = useState(false);
  const handleOpen = () => {
    console.log("OPEN")
    setOpennew(false);
  }
  const handleClose = () => {
    setOpennew(true);
  }
  return (
    <Provider store={store}>
      <ModalTodoComponent></ModalTodoComponent>
      <ModalInfoComponent></ModalInfoComponent>
      <TodoPage></TodoPage>


    </Provider>

  );
}

export default App;

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransectionModalOpen] = useState(false);

     function handleOpenNewTransectionModal(){
        setIsNewTransectionModalOpen(true);
    }
    function handleCloseNewTransectionModal(){
        setIsNewTransectionModalOpen(false)
    }

    
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransectionModal}/>
      <Dashboard />
      <NewTransactionModal 
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransectionModal}
      />
      <GlobalStyle />
    </>
  );
}


import Modal from "react-modal";
import React, {useState} from 'react';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header"
import { GlobalStyle } from "./styles/global"
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionProvider, TransactionsContext } from "./TransactionsContext";

Modal.setAppElement('#root') //Para melhorar a acessibilidade
//Fala para o leitor de tela, q a div root, não esta acessivel, pq o modal ta por cima

export const App = ()=> {
  const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }


  return (
    <TransactionProvider>
     <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
     <Dashboard />
     <NewTransactionModal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      ></NewTransactionModal>
     <GlobalStyle/>
    </TransactionProvider>
  );
}

import { FormEvent, useState,useContext } from 'react'
import Modal from 'react-modal'
import { api } from '../../services/api'
import { TransactionsContext } from '../../TransactionsContext'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { Container,TransactionTypeContainer,RadioBox } from './styles'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  
  const [type,setType] = useState('deposit');
  const [title,setTitle] = useState('');
  const [value,setValue] = useState(0);
  const [category,setCategory] = useState('');

  const {createTransaction} = useContext(TransactionsContext);


  async function handleCreateNewTransaction (event:FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount:value,
      category, 
      type
    })
    setTitle('');
    setValue(0);
    setCategory('');
    setType('deposit');
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button" 
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal"/>
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>
          Cadastrar transação
          </h2>
        <input
          onChange={event => setTitle(event.target.value)}
          value={title}
          placeholder="Título"
        />

        <input
          onChange={event => setValue(Number(event.target.value))}
          value={value}
          type="number"
          placeholder="Valor"
        />

        <TransactionTypeContainer>
          <RadioBox 
            onClick={()=>{setType('deposit');}}
            type="button"
            isActive={type==='deposit'}
            activeColor='green'
          >
            <img src={incomeImg} alt="Entrada"/>
            <span>Entrada</span>
          </RadioBox>

          <RadioBox 
            type="button"
            onClick={()=>{setType('withdraw');}}
            isActive={type==='withdraw'}
            activeColor='red'
          >
            <img src={outcomeImg} alt="Saída"/>
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          onChange={event => setCategory(event.target.value)}
          value={category}
        />

        <button id="button-submit" >
          Cadastrar
          </button>
      </Container>
    </Modal>
  )
}
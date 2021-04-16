import { createContext, ReactNode, useEffect, useState,useContext } from 'react';
import { api } from './services/api';

interface Transaction {
  id: number;
  title: string;
  amount:number;
  type:string;
  category: string;
  createdAt: string;
}

//Formas de clonar os tipos(omissao e pickar)
type TransactionInput = Omit<Transaction,'id' |'createdAt'>
// type TransactionInput = Pick<Transaction,'title' |'amount' | 'category' | 'type'>

interface TransactionProviderProps {
  children: ReactNode;  //Para fala com react que aceita qualquer tipo de conteudo jsx dentro desse componente
}

interface TransactionsContextData {
  transactions: Transaction [];
  createTransaction: (transactions:TransactionInput)=>Promise<void>;
}

//Tipo useState do componente so que global
export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionProvider({children}:TransactionProviderProps) {
  const [transactions,setTransactions] = useState<Transaction[]>([]);

  useEffect( () => {
    api('transactions')
    .then(response =>setTransactions(response.data.transactions) )
  },[] )

  async function createTransaction(transactionInput:TransactionInput){

    const response = await api.post('/transactions',{
      ...transactionInput,
      createdAt: new Date()
    })
    const {transaction} = response.data;

    setTransactions([
      ...transactions,transaction
    ])

  }

  return (
    <TransactionsContext.Provider value={{transactions,createTransaction}}>
      {children} 
    </TransactionsContext.Provider>
  )

}

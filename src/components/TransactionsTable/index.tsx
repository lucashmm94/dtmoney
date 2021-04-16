import { useEffect, useState } from 'react'
import { Container } from './style'
import {api} from '../../services/api'

interface Transaction {
  id: number;
  title: string;
  amount:number;
  type:string;
  category: string;
  createdAt: string;

}

export function TransactionTable() {
  const [transactions,setTransactions] = useState<Transaction[]>([]);



  useEffect( () => {
    api('transactions')
    .then(response =>setTransactions(response.data.transactions) )
  },[] )

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction,index)=>(
            <tr key={index}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR',{
                  style: 'currency', //formato moeda
                  currency: 'BRL' //tipo damoeda em real
                }).format(transaction.amount)}
                </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-br').format(
                  new Date(transaction.createdAt) //intl 
                )}
              </td>
            </tr>
          ))}
         
        </tbody>
      </table>
    </Container>
  )
}
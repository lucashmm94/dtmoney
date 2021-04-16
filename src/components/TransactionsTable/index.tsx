import { useContext } from 'react'
import { Container } from './style'
import { TransactionsContext } from '../../TransactionsContext'



export function TransactionTable() {
  const {transactions} = useContext(TransactionsContext);

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
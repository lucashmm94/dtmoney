import { useEffect } from 'react'
import { Container } from './style'
import {api} from '../../services/api'

export function TransactionTable() {



  useEffect( () => {
    api('/transactions')
    .then(data => console.log(data) )
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
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2012</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">R$-1.100,00</td>
            <td>Casa</td>
            <td>17/02/2012</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
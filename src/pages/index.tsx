import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'


export default function Home() {
  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Bia', 45, '3'),
    new Cliente('Bia', 45, '4'),
  ]


  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-300 to-blue-50
    text-white
    `}>
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes}></Tabela>
      </Layout>
    </div>
  )
}

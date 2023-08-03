import './App.css'
import Balance from './components/Balance'
import ExpenseChart from './components/ExpenseChart'
import Header from './components/Header'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionForm from './components/transactions/TransactionForm'
import TransactionList from './components/transactions/TransactionList'
import { GlobalProvider } from './context/GlobalState'

function App() {

  return (
    <GlobalProvider>
      <div className='bg-zinc-950 text-white h-screen flex justify-center items-center'>
        <div className=' mx-auto w-2/6'>
          <div className='bg-zinc-800 p-10 rounded-lg flex gap-x-3'>
            <div>
              < Header />
              < IncomeExpenses />
              < Balance />
              < TransactionForm />
            </div>
            <div className='flex flex-col flex-2'>
              < ExpenseChart />
              < TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  )
}

export default App

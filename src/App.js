import React from 'react';
import './App.css';
import Header from './Components/Header';
import Balance from './Components/Balance';
import IncomeExpense from './Components/IncomeExpense';
import TransactionList from './Components/TransactionList';
import AddTransaction from './Components/AddTransaction';

function App() {
return <div> 
    <Header></Header> 
    <div className="container">
        <Balance/>
        <IncomeExpense/>
        <TransactionList/>
        <AddTransaction/>
    </div>
 </div>
}

export default App;

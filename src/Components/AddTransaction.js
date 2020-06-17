import React from 'react'

const AddTransaction = () => {
    return (
        <>
          <h3>Add New Transaction</h3>
          <form>
              <div className="form-control">
                  <label htmlFor="text">Text
                  </label>
                  <input type="text" placeholder="Enter text" />
              </div> 
              <div className="form-control">
                  <label htmlFor="amount">Amount <br/> 
                  
                  (negative -expense , possitive -income)
                  </label>
                  <input type="number" placeholder="Enter amount" />
              </div>    
              <button className="btn">Add Transaction</button>
          </form>  
        </>
    )
}
export default AddTransaction;
import React from 'react'

const IncomeExpenseSummary = ({entries}) => {
  const getSum = (sum, entry) => {
    if (entry.type === 'expense') {
      return sum - entry.amount
    } else {
    return sum + entry.amount
    }
  }
  return(
    <div>
      Tuloja ja menoja yhteensä:
      {entries.reduce(getSum, 0) > 0 ? ' +' : ' '}
      {entries.reduce(getSum, 0).toLocaleString()} €
    </div>
  )
}

export default IncomeExpenseSummary
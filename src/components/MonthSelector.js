import React from 'react'

const MonthSelector = ({viewPeriod, getPreviousMonth, getNextMonth}) => {
  const monthNames = ['Tammikuu', 'Helmikuu', 'Maaliskuu', 'Huhtikuu', 'Toukokuu', 'Kesäkuu', 'Heinäkuu', 'Elokuu', 'Syyskuu', 'Lokakuu', 'Marraskuu', 'Joulukuu']
  return (
    <div>
      <button type="button" onClick={getPreviousMonth}>&lt;</button>
      {monthNames[viewPeriod.getMonth()]} {viewPeriod.getFullYear()}
      <button type="button" onClick={getNextMonth}>&gt;</button>
    </div>
  )
}

export default MonthSelector


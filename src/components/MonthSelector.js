import React from 'react'

const MonthSelector = ({showEntryType, viewPeriod, getPreviousMonth, getNextMonth}) => {
  const monthNames = ['Tammikuu', 'Helmikuu', 'Maaliskuu', 'Huhtikuu', 'Toukokuu', 'Kesäkuu', 'Heinäkuu', 'Elokuu', 'Syyskuu', 'Lokakuu', 'Marraskuu', 'Joulukuu']
  return (
    <div className="month-selector--container">
      <div className="advice-container">
        <div className="advice-title">
          Tarkastele {showEntryType==='expense' ? 'menoja' : 'tuloja'}
        </div>
        <div className="advice-text">
          Valitse tarkasteltava kuukausi
        </div>
      </div>
      <button type="button" className="month-selector--button link" onClick={getPreviousMonth}>&lt;</button>
      {monthNames[viewPeriod.getMonth()]} {viewPeriod.getFullYear()}
      <button type="button" className="month-selector--button link" onClick={getNextMonth}>&gt;</button>
    </div>
  )
}

export default MonthSelector


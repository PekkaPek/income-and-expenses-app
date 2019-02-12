import React from 'react'

const Navigation = ({showEntryType, toggleShowEntryType}) => {
  return (
  <nav>
    <div className={showEntryType==='expense' ? 'link' : null} onClick={showEntryType==='expense' ? toggleShowEntryType : null}>Tulot</div>
    <div className={showEntryType==='income' ? 'link' : null} onClick={showEntryType==='income' ? toggleShowEntryType : null}>Menot</div>
  </nav>
  )
}

export default Navigation
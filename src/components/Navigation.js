import React from 'react'

const Navigation = ({showEntryType, toggleShowEntryType}) => {
  return (
    <nav>
      <div className={showEntryType==='expense' ? 'link navigation--item' : 'navigation--item'} onClick={showEntryType==='expense' ? toggleShowEntryType : null}>Tulot</div>
      <div className={showEntryType==='income' ? 'link navigation--item' : 'navigation--item'} onClick={showEntryType==='income' ? toggleShowEntryType : null}>Menot</div>
    </nav>
  )
}

export default Navigation
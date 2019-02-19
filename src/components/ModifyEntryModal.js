import React from 'react'

const ModifyEntryModal = ({entryToBeModified, updateEntry, updateEntryToBeModifiedDate, updateEntryToBeModifiedAmount}) => {
  return(
    <div>
      <input value={entryToBeModified.date} onChange={updateEntryToBeModifiedDate}/>
      <input value={entryToBeModified.amount} onChange={updateEntryToBeModifiedAmount}/>
      <input type="submit" value="Muokkaa" onClick={updateEntry(entryToBeModified)}/>
    </div>
  )
}

export default ModifyEntryModal
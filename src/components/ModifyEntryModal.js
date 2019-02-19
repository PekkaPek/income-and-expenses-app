import React from 'react'

const ModifyEntryModal = ({entryToBeModified, updateEntry}) => {
  return(
    <div>
      <input value={entryToBeModified.date}/>
      <input value={entryToBeModified.amount}/>
      <input type="submit" value="Muokkaa" onClick={updateEntry(entryToBeModified)}/>
    </div>
  )
}

export default ModifyEntryModal
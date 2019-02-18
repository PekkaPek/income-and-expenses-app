import React from 'react'

const ModifyEntryModal = ({entryToBeModified}) => {
  return(
    <div>
      <input value={entryToBeModified.date}/>
      <input value={entryToBeModified.amount}/>
      <input type="submit" value="Muokkaa"/>
    </div>
  )
}

export default ModifyEntryModal
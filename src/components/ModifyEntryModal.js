import React from 'react'

const ModifyEntryModal = ({entryDateToModify, entryAmountToModify}) => {
  return(
    <div>
      <input value={entryDateToModify}/>
      <input value={entryAmountToModify}/>
      <input type="submit" value="Muokkaa"/>
    </div>
  )
}

export default ModifyEntryModal
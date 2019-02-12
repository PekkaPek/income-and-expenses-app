import React from 'react'

const AddEntryForm = ({newEntryDate, newEntryAmount, updateDate, updateAmount, addEntry}) => {
  return (
    <form className="form--add-entry" onSubmit={addEntry}>
      <label>Päivämäärä</label>
      <input type="date" value={newEntryDate} onChange={updateDate}></input>
      <label>Summa</label>
      <input type="text" value={newEntryAmount} onChange={updateAmount}></input>
      <br></br>
      <input type="submit" value="+ Lisää"></input>
    </form>
  )
}

export default AddEntryForm
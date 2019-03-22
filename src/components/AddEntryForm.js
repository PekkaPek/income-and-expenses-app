import React from 'react'

const AddEntryForm = ({newEntryDate, newEntryAmount, updateDate, updateAmount, addEntry}) => {
  return (
    <form className="form--add-entry" onSubmit={addEntry}>
      <div className="form--short-entities-container">
        <div className="form--short-entity">
          <label>Päivämäärä</label>
          <input type="date" value={newEntryDate} onChange={updateDate}></input>
        </div>
        <div className="form--short-entity">
          <label>Summa</label>
          <input type="text" value={newEntryAmount} onChange={updateAmount}></input>
        </div>
      </div>
      <div className="form--submit-container">
        <input className="form--submit" type="submit" value="+ Lisää"></input>
      </div>
    </form>
  )
}

export default AddEntryForm
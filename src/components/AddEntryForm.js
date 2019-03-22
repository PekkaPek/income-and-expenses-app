import React from 'react'

const AddEntryForm = ({showEntryType, toggleShowEntryType, newEntryDate, newEntryAmount, updateDate, updateAmount, addEntry}) => {
  return (
      <form className="form--add-entry" onSubmit={addEntry}>
        <div className="form--advice-container">
          <div className="form--advice-title">
          Lisää {showEntryType==='expense' ? 'meno' : 'tulo'}
          </div>
          <div className="form--advice-text">
            <p>Vapaaehtoiset kentät on merkattu.</p>
            <p>{showEntryType==='expense' ? 'Tulon' : 'Menon'} voi lisätä <span className="link" onClick={toggleShowEntryType}>{showEntryType==='expense' ? 'tulo' : 'meno'}näkymästä</span>.</p>
          </div>
        </div>
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
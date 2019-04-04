import React from 'react'

const ModifyEntryModal = ({showModifyEntryModal, entryToBeModified, updateEntry, updateEntryToBeModifiedDate, updateEntryToBeModifiedAmount}) => {
  return(
    <div className={showModifyEntryModal ? 'modify-entry-modal--container show' : 'hide'}>
      <div className='modify-entry-modal--background'>
      </div>
      <div className='modify-entry-modal--inner-container'>
        <div className='advice-title'>
          Muokkaa {entryToBeModified.type === 'income' ? 'tuloa' : 'menoa'}
        </div>
        <div className="modify-entry-modal--short-fields-container">
          <div className="modify-entry-modal--short-field">
            <label>Päivämäärä</label>
            <input value={entryToBeModified.date} onChange={updateEntryToBeModifiedDate}/>
          </div>
          <div className="modify-entry-modal--short-field">
            <label>Summa</label>
            <input value={entryToBeModified.amount} onChange={updateEntryToBeModifiedAmount}/>
          </div>
        </div>
        <div className="modify-entry-modal--submit-container">
          <input className="submit-button link" type="submit" value="Muokkaa" onClick={updateEntry(entryToBeModified)}/>
        </div>
      </div>
    </div>
  )
}

export default ModifyEntryModal
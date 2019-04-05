import React from 'react'

const ModifyEntryModal = ({showModifyEntryModal, hideModifyEntryModal, entryToBeModified, updateEntry, updateEntryToBeModifiedDate, updateEntryToBeModifiedAmount}) => {
  const toUTCDate = (dateString) => {
    const date = new Date(dateString)
    return date.getUTCFullYear() + '-' + ('0' + (date.getUTCMonth() + 1)).slice(-2) + '-' + ('0' + date.getUTCDate()).slice(-2)
  }
  return(
    <div className={showModifyEntryModal ? 'modify-entry-modal--container show' : 'hide'}>
      <div className='modify-entry-modal--background' onClick={hideModifyEntryModal}>
      </div>
      <div className='modify-entry-modal--inner-container'>
        <div className='advice-title'>
          Muokkaa {entryToBeModified.type === 'income' ? 'tuloa' : 'menoa'}
        </div>
        <div className="short-fields-container">
          <div className="short-field">
            <label>Päivämäärä</label>
            <input type='date' value={toUTCDate(entryToBeModified.date)} onChange={updateEntryToBeModifiedDate}/>
          </div>
          <div className="short-field">
            <label>Summa</label>
            <input value={entryToBeModified.amount} onChange={updateEntryToBeModifiedAmount}/>
          </div>
        </div>
        <div className="modify-entry-modal--submit-container">
          <input className="submit-button link" type="submit" value="Peruuta" onClick={hideModifyEntryModal}/>
          <input className="submit-button link" type="submit" value="Muokkaa" onClick={updateEntry(entryToBeModified)}/>
        </div>
      </div>
    </div>
  )
}

export default ModifyEntryModal
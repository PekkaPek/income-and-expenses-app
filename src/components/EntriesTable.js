import React from 'react'

const EntriesTable = ( {entries, showEntryType} ) => {
  const entriesToShow = entries.filter(entry => entry.type===showEntryType)
  return(
    <table>
    <tbody>
      <tr><th>Päivämäärä</th><th>Summa</th></tr>
      {entriesToShow.map(entry => <tr key={entry.id}><td>{entry.date}</td><td>{entry.amount}</td></tr>)}
    </tbody>
    </table>
  )
}

export default EntriesTable
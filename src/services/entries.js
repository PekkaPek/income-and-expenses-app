import axios from 'axios'
const baseUrl = 'http://localhost:3002/api/entries'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = (newEntry) => {
  const request = axios.post(baseUrl, newEntry)
  return request.then(response => response.data)
}

const update = (entryToBeUpdated) => {
  console.log('entryToBeUpdated:', entryToBeUpdated)
  const request = axios.put(`${baseUrl}/${entryToBeUpdated.id}`, entryToBeUpdated)
  return request.then(response => {
    console.log('response:', response)
    return response.data
  })
}

const deleteOne = (entryToBeDeleted) => {
  console.log('text print:', entryToBeDeleted)
  const request = axios.delete(`${baseUrl}/${entryToBeDeleted.id}`)
  return request.then(response => {
    console.log('response:', response)
    return response.data
  })
}

export default {getAll, create, update, deleteOne}
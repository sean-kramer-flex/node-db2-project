const db = require('../../data/db-config')

const getAll = () => {
  return db('cars')
}

const getById = (id) => {
  return db('cars')
  .where({id})
  .first()
}

const create = (newCar) => {
  return db.insert(newCar).into('cars')
}


module.exports = {
  getAll,
  getById,
  create
}

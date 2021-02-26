const carsModel = require('./cars-model')

const router = require('express').Router()

router.get('/', async (req, res, next) => {
  try {
const data = await carsModel.getAll()
res.json(data)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
const car = await carsModel.getById(req.params.id)
res.json(car)
  } catch (err) {
    next(err)
  }
})

// router.post('/', async (req, res, next) => {
//   try {

//   } catch (err) {
//     next(err)
//   }
// })

module.exports = router

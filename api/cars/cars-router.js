const carsModel = require('./cars-model')
const { checkCarId } = require('./cars-middleware')

const router = require('express').Router()

router.get('/', async (req, res, next) => {
  try {
const data = await carsModel.getAll()
res.json(data)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', checkCarId(),async (req, res, next) => {
  try {
const car = await carsModel.getById(req.params.id)
res.json(car)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
const [id] = await carsModel.create({
  vin: req.body.vin,
  make: req.body.make,
  model: req.body.model,
  mileage: req.body.mileage,
  title: req.body.title,
  transmission: req.body.transmission
})

const newCar = await carsModel.getById(id)

res.status(201).json(newCar)
  } catch (err) {
    next(err)
  }
})

module.exports = router

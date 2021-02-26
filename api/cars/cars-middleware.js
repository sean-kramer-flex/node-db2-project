const cars = require('./cars-model')

const checkCarId = () => {
  return (req, res, next) => {
cars.getById(req.params.id)
.then((car) => {
  if (car) {
    next()
  } else {
    res.status(404).json({
      message: "No car with this id"
    })
  }
})
  }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
}

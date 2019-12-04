import mongoose from 'mongoose'
import bluebird from 'bluebird'
import { MONGODB_URI } from './util/secrets'

// Connect to MongoDB
const mongoUrl = MONGODB_URI
mongoose.Promise = bluebird

export default (cb): void => {
  const connect = (): void => {
    mongoose.connect(mongoUrl, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }).then(
      () => console.log('MongoDB connection successfully.')
    ).catch(err => {
      console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err)
      process.exit()
    })
  }

  connect()

  mongoose.connection.on('connected', cb)

  mongoose.connection.on('disconnected', connect)

  process.on('SIGINT', function () {
    mongoose.connection.close(function () {
      console.log('Mongoose default connection is disconnected due to application termination')
      process.exit(0)
    })
  })
}

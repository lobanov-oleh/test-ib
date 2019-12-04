import mongoose from 'mongoose'
import bluebird from 'bluebird'
import { MONGODB_URI } from './util/secrets'

// Connect to MongoDB
const mongoUrl = MONGODB_URI
mongoose.Promise = bluebird

mongoose.connect(mongoUrl, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }).then(
  () => console.log('MongoDB connection successfully.')
).catch(err => {
  console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err)
  process.exit()
})

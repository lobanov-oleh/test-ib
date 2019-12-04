import mongoose, { Schema, Document } from 'mongoose'
import { Patient } from './patient.model'

export interface Email extends Document {
  patient: Patient['_id']
  subject: string
  body: string
}

const EmailSchema: Schema = new Schema({
  patient: { type: Schema.Types.ObjectId, required: true },
  subject: { type: String, required: true },
  body: { type: String, required: true }
})

export default mongoose.model<Email>('EMAIL', EmailSchema)

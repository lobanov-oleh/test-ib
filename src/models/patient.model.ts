import mongoose, { Schema, Document } from 'mongoose'

export enum EnumConsent {
  Y = 'Y',
  N = 'N'
}

export interface Patient extends Document {
  cardNumber: string
  memberID: string
  firstName: string
  lastName: string
  dateOfBirth: Date
  address1: string
  address2: string
  city: string
  state: string
  zipCode: string
  telephoneNumber: string
  emailAddress: string
  CONSENT: EnumConsent
  mobilePhone: string
}

const PatientSchema: Schema = new Schema({
  cardNumber: { type: String, required: true },
  memberID: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  dateOfBirth: { type: Date, required: true },
  address1: { type: String, required: true },
  address2: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  telephoneNumber: { type: String },
  emailAddress: { type: String },
  CONSENT: { type: String, required: true },
  mobilePhone: { type: String }
})

export default mongoose.model<Patient>('Patient', PatientSchema)

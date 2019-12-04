import mongoose from 'mongoose'
import PatientModel, { Patient, EnumConsent } from '../models/patient.model'

async function CreatePatient ({
  cardNumber,
  memberID,
  firstName,
  lastName,
  dateOfBirth,
  address1,
  address2,
  city,
  state,
  zipCode,
  telephoneNumber,
  emailAddress,
  CONSENT,
  mobilePhone
}): Promise<Patient> {
  return PatientModel.create({
    cardNumber,
    memberID,
    firstName,
    lastName,
    dateOfBirth,
    address1,
    address2,
    city,
    state,
    zipCode,
    telephoneNumber,
    emailAddress,
    CONSENT,
    mobilePhone
  })
    .then((data: Patient) => {
      return data
    })
    .catch((error: Error) => {
      throw error
    })
}

function FindConsonants (cb: (err: any, res: Patient[]) => void): mongoose.Query<Patient[]> {
  return PatientModel.find({ CONSENT: EnumConsent.Y }, {}, cb)
}

export default {
  CreatePatient,
  FindConsonants
}

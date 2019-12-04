import { Patient } from '../models/patient.model'
import EmailModel, { Email } from '../models/email.model'

interface CreateEmailInput {
  patient: Patient['_id']
  subject: Email['subject']
  body: Email['body']
}

async function CreateEmail ({
  patient,
  subject,
  body
}: CreateEmailInput): Promise<Email> {
  return EmailModel.create({
    patient,
    subject,
    body
  })
    .then((data: Email) => {
      return data
    })
    .catch((error: Error) => {
      throw error
    })
}

export default {
  CreateEmail
}

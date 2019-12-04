import logger from './util/logger'
import connect from './connect'
import PatientRepository from './repositories/patient.repository'
import EmailRepository from './repositories/email.repository'

const emails = (): void => {
  PatientRepository.FindConsonants(async (err, res) => {
    if (err) {
      logger.error(err)
      process.exit()
    }

    for (const patient of res) {
      for (let day = 1; day <= 4; day++) {
        await EmailRepository.CreateEmail({
          patient: patient._id,
          subject: `Day ${day}`,
          body: `There is a important message`
        })
      }

      console.log(`Emails for patient #${patient.memberID} are ready (${patient.CONSENT}).`)
    }

    process.exit()
  })
}

connect(emails)

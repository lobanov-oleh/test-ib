import connect from './connect'
import fs from 'fs'
import es from 'event-stream'
import PatientRepository from './repositories/patient.repository'
import { DATA_PATH } from './util/secrets'

const dataPath = DATA_PATH

let curLine = -1

const load = (): void => {
  const s = fs.createReadStream(dataPath)
    .pipe(es.split())
    .pipe(es.mapSync(async (line: string) => {
      s.pause()

      curLine++

      if (!curLine) {
        s.resume()
        return
      }

      const [
        , // programIdentifier,
        , // dataSource,
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
      ] = line.split('|')

      const [MM, DD, YYYY] = dateOfBirth.split('/')

      const patient = await PatientRepository.CreatePatient({
        cardNumber,
        memberID,
        firstName,
        lastName,
        dateOfBirth: `${YYYY}-${MM}-${DD}`,
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

      console.log(`Patient #${curLine} added`)

      s.resume()
    })
      .on('error', err => console.log('Error while reading file.', err))
      .on('end', () => {
        console.log('Read entire file.')
        process.exit()
      })
    )
}

connect(load)

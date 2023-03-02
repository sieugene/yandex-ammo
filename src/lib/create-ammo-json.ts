import { writeFile } from 'fs'
import { AmmoJSON } from 'types'

export function createAmmoJson(data: AmmoJSON) {
    writeFile(`${data.name}.json`, JSON.stringify(data), 'utf8', (err) => {
        if (err) throw err
        console.log('Data has been added!')
    })
}

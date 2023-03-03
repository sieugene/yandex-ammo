import { generateExampleAmmo } from './example'

type FN = () => void

export class AmmosLoader {
    private ammos: FN[]
    constructor() {
        console.log('Ammo Loader init')
        this.ammos = [generateExampleAmmo]
    }
    generate() {
        console.log(`Ammo generate of ${this.ammos.length}`)
        this.ammos.map((a) => a())
    }
}

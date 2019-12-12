export interface PasswordConstructorOptions {
    length?: number
    maxLength: number
    minLength: number
    number: boolean
    lowercase: boolean
    uppercase: boolean
    symbol: boolean
    excludeSimilar: boolean
    seed?: number
}

const defaultPasswordConstructorOptions: PasswordConstructorOptions = {
    length: undefined,
    maxLength: 16,
    minLength: 16,
    number: true,
    lowercase: true,
    uppercase: true,
    symbol: true,
    excludeSimilar: true,
    seed: undefined
}

export class Password {

    private maxLength: number
    private minLength: number
    private number: boolean
    private lowercase: boolean
    private uppercase: boolean
    private symbol: boolean
    private excludeSimilar: boolean
    private seed: number

    public constructor (
        opts: PasswordConstructorOptions = defaultPasswordConstructorOptions
    ) {
        const d = defaultPasswordConstructorOptions

        const len: number = +opts.length
        if (!isNaN(len)) {
            throw new RangeError('')
            this.maxLength = len
            this.minLength = len
        }
        this.maxLength
        this.minLength

        this.number
        this.lowercase
        this.uppercase
        this.symbol

        this.excludeSimilar
        this.seed
    }
}

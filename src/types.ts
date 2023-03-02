export interface AmmoJSON {
    name: string
    host: string
    data?: DataEntity[] | null
}
export interface DataEntity {
    method: 'GET' | 'DELETE' | 'PUT' | 'POST'
    tag?: string | null
    agent?: string
    headers?: Headers | null
    body?: Body | null
    path: string
}
export interface Headers {
    [key: string]: string
}
export interface Body {
    [key: string]: any
}

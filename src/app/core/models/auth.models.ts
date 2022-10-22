export interface LoginRequestData {
  email: string
  password: string
}

export interface MeResponse {
  email: string
  id: number
  login: string
}

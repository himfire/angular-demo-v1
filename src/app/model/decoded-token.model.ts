export interface DecodedToken{
  exp: number
  iat: number
  isActive: boolean
  role: string
  name:string
  sub: string
  userId: number
}

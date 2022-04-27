export interface DecodedToken{
  exp: number
  iat: number
  isActive: boolean
  role: string
  sub: string
  userId: number
}

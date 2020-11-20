export interface User{
  id?: string,
  email: string,
  password: string,
  type: UserType
}

export enum UserType{
  alumno = 'alumno', profesor = 'profesor', admin = 'admin'
}

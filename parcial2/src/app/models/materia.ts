import { User } from './user';

export interface Materia {
  id?: string,
  alumnos?: any,
  nombre: string,
  cuatrimestre: string,
  cupo: string,
  año: string,
  profesor: any
}

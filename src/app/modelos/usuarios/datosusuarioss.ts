export type Datosusuarioss = {
  username:string,
  password:string,
}

export interface todoslosdatos {
  id: number ,
  username:string ,
  email:string ,
  firstName: string,
  lastName:string ,
  gender:string ,
  image:string ,
  token:string,
}

export type perfildato = {
  perfiles: Array<todoslosdatos>
}

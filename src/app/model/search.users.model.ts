import {PHONE} from "./phone.model";
import {ADDRESS} from "./address.model";
import {User} from "./user.model";

export interface SearchUsers {

  page:number
  size:number
  order:string

  firstName ?:string
  lastName?:string
  username?:string
  email?:string

  authority ? :string
}

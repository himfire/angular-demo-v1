import {PHONE} from "./phone.model";
import {ADDRESS} from "./address.model";

export interface User {

  id:number
  firstName:string
  lastName:string
  username:string
  email:string
  summary:string
  phone:PHONE
  address:ADDRESS
  isActive:boolean
  authority:string
}

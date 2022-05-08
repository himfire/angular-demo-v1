import {User} from "./user.model";

export interface Course{
  id:number
  title:string
  slugTitle:string
  description:string
  skillLevel:string
  price:number
  duration:number
  courseImageURL:string
  courseVideoURL:string
  author:User
  language:string
  contributors:string
}

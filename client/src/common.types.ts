export type RegisterFormType = {
  userName?: string
  email: string
  password: string
  confirmPassword?: string
  avatar?: string
  role?: string
}

export type UserCardType = {
  avatar: string
  date: string
  email: string
  role: string
  userName: string
  _id: string
}

export type GeneralActionType = {
  payload: string
  type: string
}
 
export type ProjectCardType = {
  id: string,
    title: string,
    reviews: number,
    price: number,
    description: string,
    stars: number,
    img: string,}
 
export type UserType = {
  avatar: string
  date: string
  email: string
  password: null
  role: string
  userName: string
  _id: string
  __v?: number
 
}

//project type (from db)
export type ProjectType = {
    _id: {
      $oid: string,
    }, //?? to be reviewed according to gotten data
    user_id: string,
    title: string,
    description: string,
    photo: string,
    github: string,
    liveLink: string,
    videoLink: string,
  skills_used: string[],
    //_id:string,
  __v?: number,
    date?:string
}

import { UseMainContext } from '../context'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import Succsess from '../components/Status/Success'
import User_profile_card from '../components/User/User_profile_card'
import { useEffect } from 'react'
import axios from 'axios'
import { globalUrl } from '../global-vars/Api-url'

const Profile = () => {
  const { UserState, statusState, UserDispatch } = UseMainContext()
  const navigate = useNavigate()
  const cookies = new Cookies()

  const logOut = () => {
    cookies.remove('jwt_authorization')
    window.location.reload()
  }

  if (UserState.userData.user && UserState.userData.user.email) {
    //_id should not be accsasable on UI, _id will be used to create chat,update user infomration, post new projects etc

    return (
      <div className="flex  flex-col gap-2 p-2 items-center justify-center">
        <Succsess success={statusState.success} />

        <User_profile_card data={UserState.userData.user} />
        <button
          onClick={() => logOut()}
          className="bg-red-500 shadow-md text-white p-4  rounded-[6px]"
        >
          LOG OUT
        </button>
        <button onClick={() => navigate('/dev_project_add/title')}>
          Portfolio add
        </button>
      </div>
    )
  } else {
    return (
      <div>
        please <Link to="/login">log in </Link>or
        <Link to="/register">register </Link>
      </div>
    )
  }
}

export default Profile

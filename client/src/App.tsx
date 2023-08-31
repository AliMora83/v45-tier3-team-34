import './index.css'
import Login from './pages/Login'
import Profile from './pages/Profiles/Profile'
import Home from './pages/Home'
import Register from './pages/Register'
import { Route, Routes } from 'react-router-dom'
import Dev_Add_Personal_Project from './pages/Forms/Dev_Portfolio_Add'
import Portfolio_title from './components/Dev_Portfolio/Portfolio_title'
import Portfolio_details from './components/Dev_Portfolio/Portfolio_details'
import Portfolio_Preview from './components/Dev_Portfolio/Portfolio_Preview'

import FAQs from './pages/MainMenu/WhyDevConnect/FAQs'
import SuccessStories from './pages/MainMenu/WhyDevConnect/SuccessStories'
import AboutUs from './pages/MainMenu/WhyDevConnect/AboutUs'

import Single_User_Page from './pages/Profiles/Single_User_Page'
import User_Portfolio_Single from './components/User/User_Portfolio_Single'
import User_info_form from './pages/Forms/User_info_form'
import ForCompanyMain from './pages/MainMenu/ForCompany/ForCompanyMain'
import Company_info_form from './pages/Forms/Company_info_form'
import Company_Profile from './pages/Profiles/Company_Profile'
import ProjectsListingPage from './pages/ProjectsListingPage'
import Project_Page from './pages/Project/Project_Page'
import Developer_list from './pages/MainMenu/ForCompany/Developer_list'
import PostProject from './pages/MainMenu/ForCompany/PostProject'
import ViewProjects from './pages/MainMenu/ForCompany/ViewProjects'
import NeedHelp from './pages/MainMenu/ForCompany/NeedHelp'
import ListProjects from './pages/MainMenu/ForDeveloper/ListProjects'
import MyProjects from './pages/MainMenu/ForDeveloper/MyProjects'
import NeedHelpDev from './pages/MainMenu/ForDeveloper/NeedHelpDev'
import ResourceTools from './pages/MainMenu/ForDeveloper/ResourceTools'
import CompanyProjectForm from './pages/Forms/Company_Project_posting'
import Layout from './layout'
import Single_Company_Page from './pages/Profiles/Single_Company_Page'

//routes
const router = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  // Main Menu
  {
    path: '/ForCompany',
    element: <ForCompanyMain />,
    outlet: [
      {
        path: 'ListDevelopers',
        element: <Developer_list />,
      },
      {
        path: 'PostProjects',
        element: <PostProject />,
      },
      {
        path: 'ViewProjects',
        element: <ViewProjects />,
      },
      {
        path: 'NeedHelp',
        element: <NeedHelp />,
      },
    ],
  },

  {
    path: '/ForDeveloper/ListProjects',
    element: <ListProjects />,
  },
  {
    path: '/ForDeveloper/ResourceTools',
    element: <ResourceTools />,
  },
  {
    path: '/ForDeveloper/MyProjects',
    element: <MyProjects />,
  },
  {
    path: '/ForDeveloper/NeedHelpDev',
    element: <NeedHelpDev />,
  },
  {
    path: '/WhyDevConnect/AboutUs',
    element: <AboutUs />,
  },
  {
    path: '/WhyDevConnect/SuccessStories',
    element: <SuccessStories />,
  },
  {
    path: '/WhyDevConnect/FAQs',
    element: <FAQs />,
  },

  {
    path: '/dev_project_add',
    element: <Dev_Add_Personal_Project />,
    outlet: [
      {
        path: 'title',
        element: <Portfolio_title />,
      },
      {
        path: 'details',
        element: <Portfolio_details />,
      },
      {
        path: 'preview',
        element: <Portfolio_Preview />,
      },
    ],
  },
  {
    path: '/user_info',
    element: <User_info_form />,
  },
  {
    path: '/company_info',
    element: <Company_info_form />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/company_profile',
    element: <Company_Profile />,
  },
  {
    path: '/company_project',
    element: <CompanyProjectForm />,
  },
  {
    path: 'user/project/:project_id',
    element: <User_Portfolio_Single />,
  },

  {
    path: '/Developer/:dev_id',
    element: <Single_User_Page />,
  },

  {
    path: '/company/single',
    element: <Single_Company_Page />,
  },

  //projects listing page (by category) !! ??
  {
    path: '/projects/:project_category',
    element: <ProjectsListingPage />,
  },
  //project page
  {
    path: '/project/:project_id',
    element: <Project_Page />,
  },
]

type ReactRouteType = {
  path: string
  element: JSX.Element
  outlet?: ReactRouteType[]
}
const App = () => {
  return (
    <Layout>
      <Routes>
        {router.map((route: ReactRouteType) => {
          const { path, element, outlet } = route
          if (outlet) {
            return (
              <Route key={path} path={path} element={element}>
                {outlet.map((outletRoute) => {
                  const { path, element } = outletRoute
                  return <Route key={path} path={path} element={element} />
                })}
              </Route>
            )
          } else {
            return <Route key={path} path={path} element={element} />
          }
        })}
      </Routes>
    </Layout>
  )
}

export default App

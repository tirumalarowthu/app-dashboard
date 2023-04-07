import React, { useState } from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const Login = React.lazy(() => import("src/views/pages/login/Login"))
const DefaultLayout = () => {
  const [isUserLogin, setIsUserLogin] = useState(localStorage.getItem("AdminInfo" || false) )
  // console.log(isUserLogin)
  return (
    <div> 
      {
        isUserLogin ? <div>
          <AppSidebar />
          <div className="wrapper d-flex flex-column min-vh-100 bg-light">
            <AppHeader />
            <div className="body flex-grow-1 px-3">
              <AppContent />
            </div>
            <AppFooter />
          </div>
        </div> : <Login setIsUserLogin={setIsUserLogin} />

      }

    </div>
  )
}

export default DefaultLayout

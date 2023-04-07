import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import axios from 'axios'
import { toast } from 'react-toastify'
const Login = ({ setIsUserLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  /******change the input values  ***************/
  const handleChangeInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  console.log(formData)
  const handleClickBtn = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      }
      if (formData.email && formData.password) {
        const AdminExits = await axios.post("http://localhost:9000/admin/login", formData, config).then(res => res.data).catch(err => console.log(err.message))

        if (AdminExits) {
          localStorage.setItem("AdminInfo", JSON.stringify(AdminExits))
          setIsUserLogin(true)
          toast.success("login successfully")
        } else {
          setIsUserLogin(false)
          toast.warning("please login with valid credentials")
        }
      }else{
        toast.warning()
      }

    }
    catch (err) {
      console.log(err.message)
    }
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1 className='text-center'>Applicant-Tracking-System</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput value={formData.email} name="email" onChange={handleChangeInput} placeholder="Enter your email" autoComplete="off" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChangeInput}
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" onClick={handleClickBtn}>
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              {/* <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard> */}
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login

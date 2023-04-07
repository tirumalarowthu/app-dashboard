import React from 'react'
import { CRow, CCol, CCard, CCardHeader, CCardBody, CButton, CNavLink, CForm, CFormInput, CFormSelect, CFormCheck } from '@coreui/react'
import { NavLink } from 'react-router-dom'
const AddApplicant = () => {
    return (
        <>
            <CCard className="mb-4">
                <CCardHeader className='text-center'>
                    Add Applicant
                    {/* <DocsLink href="https://coreui.io/docs/utilities/colors/" /> */}
                </CCardHeader>
                <CCardBody>
                    <CRow>
                        {/* <CNavLink to="/UpdateApplicant" component={NavLink}>
                            CLick here to go update status
                        </CNavLink>  */}
                        <CForm className="row g-3">
                            <CCol md={6}>
                                <CFormInput type="text" id="inputEmail4" label="Name" />
                            </CCol>
                            <CCol md={6}>
                                <CFormInput type="email" id="inputPassword4" label="Email" />
                            </CCol>
                            <CCol xs={12}>
                                <CFormInput id="inputAddress" label="Address" placeholder="1234 Main St" />
                            </CCol>
                            <CCol xs={12}>
                                <CFormInput id="inputAddress2" label="Address 2" placeholder="Apartment, studio, or floor" />
                            </CCol>
                            <CCol md={6}>
                                <CFormInput id="inputCity" label="City" />
                            </CCol>
                            <CCol md={4}>
                                <CFormSelect id="inputState" label="State">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </CFormSelect>
                            </CCol>
                            <CCol md={2}>
                                <CFormInput id="inputZip" label="Zip" />
                            </CCol>
                            <CCol xs={12}>
                                <CFormCheck type="checkbox" id="gridCheck" label="Check me out" />
                            </CCol>
                            <CCol xs={12}>
                                <CButton type="submit">Sign in</CButton>
                            </CCol>
                        </CForm>
 


                    </CRow>
                </CCardBody>
            </CCard>
            
        </>
    )
}

export default AddApplicant

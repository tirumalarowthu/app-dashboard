import React from 'react'
import { CCard, CCardHeader, CCardBody } from '@coreui/react'
import { DocsLink } from 'src/components'

const UpdateApplicant = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader className='text-center'>
          Update Applicant
          <DocsLink href="https://coreui.io/" name="hello" text="Veera"></DocsLink>
        </CCardHeader>
        <CCardBody>

        </CCardBody>
      </CCard>
    </>
  )
}

export default UpdateApplicant

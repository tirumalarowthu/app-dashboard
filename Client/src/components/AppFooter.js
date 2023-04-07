import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        {/* <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          CoreUI
        </a> */}
        <span className="ms-1">All rights reserved &copy; 2023</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://www.p2fsemi.com/" target="_blank" rel="noopener noreferrer">
          P2F Semiconductors Private Limited
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)

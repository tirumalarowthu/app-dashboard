import React from 'react'

//components 
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const AddApplicant = React.lazy(() => import('./views/components/AddApplicant'))
const UpdateApplicant = React.lazy(() => import('./views/components/UpdateApplicant'))

const routes = [ 
  { path: '/', exact: true, name: 'Home Indi' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/AddApplicant', name: 'Add Applicant', element: AddApplicant },
  { path: '/UpdateApplicant', name: 'UpdateApplicant', element: UpdateApplicant },
]

export default routes

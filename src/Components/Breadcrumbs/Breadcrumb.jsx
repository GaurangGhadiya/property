import { Breadcrumbs  } from '@mui/material'
import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import "./Breadcrumb.scss"


const Breadcrumb = ({breadcrumb}) => {
    
  return (
    <div>
        <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumb}
      </Breadcrumbs>
    </div>
  )
}

export default Breadcrumb
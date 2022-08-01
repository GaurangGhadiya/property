import React from 'react'
import "./Comapny-Profile.scss"
import parse from 'html-react-parser'
const Comapny_Profile = ({data}) => {
  return (
    <div>
      <div className="row">
            {data?.description && parse(data?.companyProfile.replace(/!important/g, ''))}
            </div>
    </div>
  )
}

export default Comapny_Profile;
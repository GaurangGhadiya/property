import React from 'react'
import RichTextEditor from "react-rte";

const Add_Comapny_Profile = ({richValue2,onChange2}) => {
  return (
      <div className='text_editor'>
            <div className="title">
                <h4>Add Company</h4>
            </div>
            <div className="input_filed">
                <RichTextEditor name="company" value={richValue2} onChange={onChange2} />
            </div>
    </div>
  )
}

export default Add_Comapny_Profile
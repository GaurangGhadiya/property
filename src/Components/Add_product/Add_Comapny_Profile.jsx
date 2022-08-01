import React from 'react'
import RichTextEditor from "react-rte";

const Add_Comapny_Profile = ({pipData2,richValue2,onChange2,errors}) => {
  return (
      <div className='text_editor'>
            <div className="title">
                <h4>Add Company</h4>
            </div>
            <div className="input_filed">
                <RichTextEditor name="company" value={richValue2} onChange={onChange2} />
                <span className="errorInput">
                                {pipData2?.description !== "<p><br></p>" ? "" : errors["pipData2"]}
                            </span>
            </div>
    </div>
  )
}

export default Add_Comapny_Profile
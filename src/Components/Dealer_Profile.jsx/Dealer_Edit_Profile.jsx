import { Avatar, Box, Button, Modal, TextareaAutosize, TextField } from '@mui/material'
import React, { useState } from 'react'
import { ApiPost, ApiPut } from '../../Api/Api';
import { ErrorToast, SuccessToast } from '../Toast';
import './Dealer_Profile.scss'
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  height: "90vh",
  overflowY: "scroll"
};
const Dealer_Edit_Profile = ({image, setImage,open, handleClose, data, sourcingInfo, companyInfo, handleChange, handleChange2 ,handleChange3}) => {
// ==============store Profile Image===================//
  const onImageChange = (e) => {
    console.log(e.target.files);
    let file = e.target.files[0];
    let fileURL = URL.createObjectURL(file);
    file.fileURL = fileURL;
    setImage((post) => [file]);
  };
  // ==============Image Uploaded API===================//
  const thumbnailapi = async () => {
    const formData = new FormData();

    let thub;
    if (image[0].fileURL) {
      formData.append("image", image[0]);

      await ApiPost("upload/product", formData)
        .then((res) => {
          thub = res.data.data.image;
        })
        .catch(async (err) => {
          ErrorToast(err.message);
        });
      return thub;
    } else {
      thub = image[0];
      return thub;
    }
  };
  // ==============update Profile API===================//
  const updateProfile = async () => {
    let image = await thumbnailapi();
    const body = {
      image,
      name: data?.name,
      email: data?.email,
      FAX: data?.FAX,
      phoneNumber: data?.phoneNumber,
      ownerAt: data?.ownerAt,
      address: data?.address,
      companyInfo: {
        aboutUs: companyInfo?.aboutUs,
        employees: companyInfo?.employees,
        name: companyInfo?.name,
        operationalAddress: companyInfo?.operationalAddress,
        registeredAddress: companyInfo?.registeredAddress,
        website: companyInfo?.website,
        yearEstablished: companyInfo?.yearEstablished,
      },
      sourcingInfo: {
        annualPurchasingVolumn: sourcingInfo?.annualPurchasingVolumn ,
        averageSourcingFrequency: sourcingInfo?.averageSourcingFrequency ,
        supplierQualification: sourcingInfo?.supplierQualification,
        preferredIndustries: sourcingInfo?.preferredIndustries
    }
    }
    console.log("body", body);
        await ApiPut("dealer/update_profile", body)
            .then((res) => {
                SuccessToast(res?.data?.message);
                console.log(res,"res");
                handleClose()
            })
            .catch(async (err) => {
                console.log(err);
            });
  }
  return (
    <div className='updateProfileModal'>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>Update Profile</h1>
          <div className="row">
            <div className="col-md-4">
              <div className="d-flex justify-content-between flex-row input_filed mt-4 pt-2">
                <label className="Upload_box" for="inputTag">
                  <p><span className='text-danger'>Click Here,</span> Upload Your Profile Image</p>
                  <input type="file" id='inputTag' className='display_none' accept="image/*" onChange={onImageChange} />
                </label>
                {image && <Avatar className='product_img' src={image[0]?.fileURL ? image[0]?.fileURL : image} alt="" />}
              </div>
            </div>
            <div className="col-md-4">
              <div className="input_filed mt-2">
                <label htmlFor="email">Your Name</label>
                <TextField
                  hiddenLabel
                  id="outlined-basic"
                  name="name"
                  variant="outlined"
                  value={data?.name}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-md-4"><div className="input_filed mt-2">
              <label htmlFor="email">Email Address</label>
              <TextField
                hiddenLabel
                id="outlined-basic"
                name="email"
                variant="outlined"
                value={data?.email}
                onChange={handleChange}
              />
            </div></div>
            <div className="col-md-4"><div className="input_filed mt-2">
              <label htmlFor="Fax">Fax</label>
              <TextField
                hiddenLabel
                type="number"
                id="outlined-basic"
                name="FAX"
                value={data?.FAX}
                variant="outlined"
                onChange={handleChange}
              />
            </div></div>
            <div className="col-md-4">
              <div className="input_filed mt-2">
                <label htmlFor="email">Phone Number</label>
                <div className="phone">
                  <select id="" className='p-2'>
                    <option selected value="+91">
                      +91
                    </option>
                  </select>
                  <TextField
                    hiddenLabel
                    type="number"
                    name="phoneNumber"
                    id="outlined-basic"
                    variant="outlined"
                    value={data?.phoneNumber}
                    onChange={handleChange}

                  />
                </div></div>
            </div>

            <div className="col-md-4">
              <div className="input_filed mt-2">
                <label htmlFor="email">Owner at</label>
                <TextField
                  type="text"
                  hiddenLabel
                  id="outlined-basic"
                  name="ownerAt"
                  variant="outlined"
                  value={data?.ownerAt}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="input_filed mt-2">
                <label htmlFor="address">Address</label>
                <TextareaAutosize
                  type="text"
                  hiddenLabel
                  id="address"
                  variant="outlined"
                  name="address"
                  maxRows={4}
                  minRows={2}
                  value={data?.address}
                  onChange={handleChange}
                />
              </div>
            </div>
            <h4>Company Information </h4>
            <div className="row">
              <div className="col-md-4"><div className="input_filed mt-2">
                <label htmlFor="email">Company Name:</label>
                <TextField
                  hiddenLabel
                  type="text"
                  id="outlined-basic"
                  name="name"
                  variant="outlined"
                  onChange={handleChange2}
                  value={companyInfo?.name}

                />
              </div></div>
              <div className="col-md-4"><div className="input_filed mt-2">
                <label htmlFor="email">Year Established:</label>
                <TextField
                  hiddenLabel
                  type="number"
                  id="outlined-basic"
                  name="yearEstablished"
                  variant="outlined"
                  onChange={handleChange2}
                  value={companyInfo?.yearEstablished}
                />
              </div></div>
              <div className="col-md-4"><div className="input_filed mt-2">
                <label htmlFor="email">Website:</label>
                <TextField
                  hiddenLabel
                  type="text"
                  id="outlined-basic"
                  name="website"
                  variant="outlined"
                  onChange={handleChange2}
                  value={companyInfo?.website}
                />
              </div></div>
              <div className="col-md-4"><div className="input_filed mt-2">
                <label htmlFor="email">No. of Employees:</label>
                <TextField
                  hiddenLabel
                  type="number"
                  id="outlined-basic"
                  name="employees"
                  variant="outlined"
                  onChange={handleChange2}
                  value={companyInfo?.employees}
                />
              </div></div>
              <div className="col-md-4"><div className="input_filed mt-2">
                <label htmlFor="email">Registered Address:</label>
                <TextField
                  hiddenLabel
                  type="text"
                  id="outlined-basic"
                  name="registeredAddress"
                  variant="outlined"
                  onChange={handleChange2}
                  value={companyInfo?.registeredAddress}
                />
              </div></div>
              <div className="col-md-4"><div className="input_filed mt-2">
                <label htmlFor="email">Operational Address:</label>
                <TextField
                  hiddenLabel
                  type="text"
                  id="outlined-basic"
                  name="operationalAddress"
                  variant="outlined"
                  onChange={handleChange2}
                  value={companyInfo?.operationalAddress}
                />
              </div></div>
              <div className="col-md-12"><div className="input_filed mt-2">
                <label htmlFor="email">About Us:</label>
                <TextareaAutosize
                  type="text"
                  hiddenLabel
                  id="address"
                  variant="outlined"
                  name="aboutUs"
                  maxRows={4}
                  minRows={2}
                  onChange={handleChange2}
                  value={companyInfo?.aboutUs}
                />
              </div></div>
            </div>
            <h4>Sourcing Information </h4>
            <div className="row">
              <div className="col-md-6"><div className="input_filed mt-2">
                <label htmlFor="email">Annual Purchasing Volumn: </label>
                <TextField
                  hiddenLabel
                  type="number"
                  id="outlined-basic"
                  name="annualPurchasingVolumn"
                  variant="outlined"
                  onChange={handleChange3}
                  value={sourcingInfo?.annualPurchasingVolumn}
                />
              </div></div>
              <div className="col-md-6"><div className="input_filed mt-2">
                <label htmlFor="email">Average Sourcing Frequency:</label>
                <TextField
                  hiddenLabel
                  type="text"
                  id="outlined-basic"
                  name="averageSourcingFrequency"
                  variant="outlined"
                  onChange={handleChange3}
                  value={sourcingInfo?.averageSourcingFrequency}
                />
              </div></div>
              <div className="col-md-6"><div className="input_filed mt-2">
                <label htmlFor="email">Supplier Qualifications:</label>
                <TextField
                  hiddenLabel
                  type="text"
                  id="outlined-basic"
                  name="supplierQualification"
                  variant="outlined"
                  onChange={handleChange3}
                  value={sourcingInfo?.supplierQualification}
                />
              </div></div>
              <div className="col-md-6"><div className="input_filed mt-2">
                <label htmlFor="email">Preferred Industries:</label>
                <TextField
                  hiddenLabel
                  type="text"
                  id="outlined-basic"
                  name="preferredIndustries"
                  variant="outlined"
                  onChange={handleChange3}
                  value={sourcingInfo?.preferredIndustries}
                />
              </div></div>
            </div>

          </div>
          <div className="buttons mt-4">
            <Button onClick={handleClose}>Cancle</Button>
            <Button onClick={updateProfile}>Update</Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default Dealer_Edit_Profile
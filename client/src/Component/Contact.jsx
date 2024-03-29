import React from "react";
import "./Contact.scss";
import profile from "../assets/profile.jpg";
import edit from "../assets/edit.gif";
import trash from "../assets/trash.gif";

let contacts = [
  {
    id: 1,
    name: "Kodiyarasu",
    place: "Ariyalur",
    mobileNumber: "+91 8825457794",
  },
  {
    id: 2,
    name: "Mathesh",
    place: "Coimbatore",
    mobileNumber: "+91 1234567890",
  },
  {
    id: 3,
    name: "Sanjay",
    place: "Chennai",
    mobileNumber: "+91 243564565",
  },
  {
    id: 4,
    name: "Varsha",
    place: "Trichy",
    mobileNumber: "+91 3456346546",
  },
  {
    id: 5,
    name: "Trisha",
    place: "Chennai",
    mobileNumber: "+91 34645645564",
  },
  {
    id: 5,
    name: "Trisha",
    place: "Chennai",
    mobileNumber: "+91 34645645564",
  },
];
const Contact = () => {
  return (
    <>
      <div className="contact_container">
        {/* //left side */}
        <div className="contact_list_box">
          <div className="contact_title">
            <h4>All Contact Lists</h4>
          </div>

          {contacts.map((data, index) => {
            return (
              <div className="list" key={index}>
                <div className="contact_profile">
                  <img src={profile} alt="profile" />
                </div>
                <div className="contact_detail">
                  <div className="first">
                    <h4>Full Name</h4>
                    <h3>{data.name}</h3>
                  </div>
                  <div className="first">
                    <h4>Native Place</h4>
                    <h3>{data.place}</h3>
                  </div>
                  <div className="first">
                    <h4>Mobile Number</h4>
                    <h3>{data.mobileNumber}</h3>
                  </div>
                  <div className="first">
                    <h4>Actions</h4>
                    <div className="buttons">
                      <img
                        width="48"
                        height="48"
                        src="https://img.icons8.com/color/48/create-new.png"
                        alt="create-new"
                      />
                      <img
                        width="32"
                        height="32"
                        src="https://img.icons8.com/stencil/32/trash.png"
                        alt="trash"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side */}
        <div className="form_list_box">
          <div className="form_title">
            <h4>Create Contact List</h4>
          </div>

          <form action="">
            <div className=" profile">
              <h4>Upload their Photo</h4>
              <label htmlFor="profile">
                <img src={profile} name="profile" alt="profile" />
              </label>

              <input type="file" name="profile" id="profile" />
            </div>
            <div className="form_group">
              <label htmlFor="name"> FullName</label>
              <input
                type="text "
                placeholder="Enter their FullName"
                name="name"
                id="name"
              />
            </div>
            <div className="form_group">
              <label htmlFor="place"> Place</label>
              <input
                type="text "
                placeholder="Enter their Place"
                name="place"
                id="place"
              />
            </div>
            <div className="form_group">
              <label htmlFor="number"> Mobile Number</label>
              <input
                type="number"
                placeholder="Enter their MobileNumber"
                name="number"
                id="number"
              />
            </div>
            <div className="Form_actions">
              <button className="btn-hover color-1" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

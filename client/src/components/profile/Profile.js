import React from "react";
import { useState } from "react";
import "./Profile.css";
import { Button } from "react-bootstrap";
function Profile() {
  const [fullName, setFullName] = useState("Johnatan Smith");
  const [email, setEmail] = useState("example@example.com");
  const [phone, setPhone] = useState("(097) 234-5678");
  const [mobile, setMobile] = useState("(098) 765-4321");
  const [address, setAddress] = useState("Bay Area, San Francisco, CA");

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  return (
    <div>
      <section style={{ backgroundColor: "#eee" }}>
        <div class="container py-5">
          <div class="row">
            <div class="col"></div>
          </div>

          <div class="row">
            <div class="col-lg-4">
              <div class="card mb-4">
                <div class="card-body text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    class="rounded-circle img-fluid"
                    style={{ width: "150px" }}
                  />
                  <h5 class="my-3">John Smith</h5>
                  <p class="text-muted mb-1">Full Stack Developer</p>
                  <p class="text-muted mb-4">Bay Area, San Francisco, CA</p>
                  <div class="d-flex justify-content-center mb-2"></div>
                </div>
              </div>
            </div>

            <div class="col-lg-8">
              <div class="card mb-4">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Full Name</p>
                    </div>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        value={fullName}
                        onChange={handleFullNameChange}
                      />
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Email</p>
                    </div>
                    <div class="col-sm-9">
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={handleEmailChange}
                      />
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Phone</p>
                    </div>
                    <div class="col-sm-9">
                      <input
                        type="tel"
                        className="form-control"
                        value={phone}
                        onChange={handlePhoneChange}
                      />
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Mobile</p>
                    </div>
                    <div class="col-sm-9">
                      <input
                        type="tel"
                        className="form-control"
                        value={mobile}
                        onChange={handleMobileChange}
                      />
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Address</p>
                    </div>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        value={address}
                        onChange={handleAddressChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center mb-2">
            <Button
              type="button"
              className="btn"
              style={{ backgroundColor: "black", color: "white" }}
            >
              Save
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;

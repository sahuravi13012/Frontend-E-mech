import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Country, State, City } from "country-state-city";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import axios from "axios";
import config from "../../config";
import { useNavigate } from "react-router-dom";

function Add_Retailers() {
  const navigate = useNavigate();
  const [getData, setData] = useState([]);
  const [getCountry, setCountry] = useState();
  const [getState, setState] = useState([]);
  const [selectedState, setSelectedState] = useState();
  const [getCities, setCities] = useState([]);
  const [postRetailerData, setPostRetailerData] = useState({
    shop_name: "",
    owner_name: "",
    email: "",
    password: "",
    contact_no: "",
    gst_no: "",
    pan_no: "",
    country: "",
    state: "",
    city: "",
    address: "",
    registration_no: "",
    pincode: "",
  });
  const [profilePhoto, setProfilePhoto] = useState();
  const [registrationDocs, setRregistrationDocs] = useState();

  const getDataFromApi = async () => {
    const apiData = await axios.get(
      "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"
    );
    setData(apiData.data);
    // console.log(apiData);
  };
  const Country = [...new Set(getData.map((country) => country.country))];

  const handleCountry = (e) => {
    const selectedCountry = e.target.value;
    let states = getData.filter((state) => state.country === selectedCountry);
    states = [...new Set(states.map((item) => item.subcountry))];
    // console.log("State Options:", states);
    setState(states);
    setPostRetailerData({
      ...postRetailerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleState = (e) => {
    let cities = getData.filter((city) => city.subcountry === e.target.value);
    // console.log("city Options:", cities);
    setCities(cities);
    setPostRetailerData({
      ...postRetailerData,
      [e.target.name]: e.target.value,
    });
  };
  const handleChange = async (e) => {
    setPostRetailerData({
      ...postRetailerData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("profile_photo", profilePhoto);
    formData.append("registration_doc", registrationDocs);
    formData.append("shop_name", postRetailerData.shop_name);
    formData.append("owner_name", postRetailerData.owner_name);
    formData.append("email", postRetailerData.email);
    formData.append("password", postRetailerData.password);
    formData.append("contact_no", postRetailerData.contact_no);
    formData.append("gst_no", postRetailerData.gst_no);
    formData.append("pan_no", postRetailerData.pan_no);
    formData.append("country", postRetailerData.country);
    formData.append("state", postRetailerData.state);
    formData.append("city", postRetailerData.city);
    formData.append("address", postRetailerData.address);
    formData.append("registration_no", postRetailerData.registration_no);
    formData.append("pincode", postRetailerData.pincode);
    let configdata = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const postData = await axios.post(
      `${config.URL}/addretailers`,
      formData,
      configdata
    );
    console.log("formDatwewewa", formData);
    console.log("postDataasaswwe", postData);
    navigate("/viewretailers");
  };

  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <>
      <div className="container w-75 mt-3 shadow">
        <h1 className="text-center fs-4 fw-bolder">Add Retailer</h1>
        <div className="form-body">
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label className="fs-6 fw-bolder">Owner Name</Form.Label>
                <Form.Control
                  type="text"
                  name="owner_name"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className="fs-6 fw-bolder">Shop Name</Form.Label>
                <Form.Control
                  type="text"
                  name="shop_name"
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label className="fs-6 fw-bolder">Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className="fs-6 fw-bolder">Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label className="fs-6 fw-bolder">Mobile No:</Form.Label>
                <Form.Control
                  type="number"
                  name="contact_no"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className="fs-6 fw-bolder">GST No:</Form.Label>
                <Form.Control
                  type="text"
                  name="gst_no"
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label className="fs-6 fw-bolder">Pancard No:</Form.Label>
                <Form.Control
                  type="number"
                  name="pan_no"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className="fs-6 fw-bolder">
                  Registration No:
                </Form.Label>
                <Form.Control
                  type="text"
                  name="registration_no"
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label className="fs-6 fw-bolder">Country</Form.Label>
                <Form.Select
                  defaultValue="Choose..."
                  name="country"
                  onChange={(e) => handleCountry(e)}
                  // onChange={handleChange}
                  // onChange={(event) => {
                  //   setPostRetailerData({
                  //     ...postRetailerData,
                  //     country: event.target.value,
                  //   });
                  // }}
                >
                  <option>Choose...</option>
                  {Country.map((country, i) => {
                    return (
                      <>
                        <option key={i} value={country}>
                          {country}
                        </option>
                      </>
                    );
                  })}
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className="fs-6 fw-bolder">State</Form.Label>
                <Form.Select
                  defaultValue="Choose..."
                  name="state"
                  onChange={(e) => handleState(e)}
                  // onChange={handleChange}
                >
                  <option>Choose...</option>
                  {getState &&
                    getState.map((state, i) => {
                      return (
                        <>
                          <option key={i} value={state}>
                            {state}
                          </option>
                        </>
                      );
                    })}
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label className="fs-6 fw-bolder">City</Form.Label>
                <Form.Select
                  defaultValue="Choose..."
                  name="city"
                  onChange={handleChange}
                >
                  <option>Choose...</option>
                  {getCities &&
                    getCities.map((city, i) => {
                      return (
                        <>
                          <option key={i}>{city.name}</option>
                        </>
                      );
                    })}
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className="fs-6 fw-bolder">Pincode</Form.Label>
                <Form.Control
                  type="text"
                  name="pincode"
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label className="fs-6 fw-bolder">Address</Form.Label>
              <Form.Control
                as="textarea"
                name="address"
                onChange={handleChange}
                rows={3}
              />
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label className="fs-6 fw-bolder">
                  Registration docs
                </Form.Label>
                <Form.Control
                  type="file"
                  name="registration_doc"
                  onChange={(e) => {
                    setRregistrationDocs(e.target.files[0]);
                  }}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className="fs-6 fw-bolder">
                  Registration doc Preview
                </Form.Label>
                <Form.Control type="" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label className="fs-6 fw-bolder">
                  Profile Photo
                </Form.Label>
                <Form.Control
                  type="file"
                  name="profile_photo"
                  onChange={(e) => {
                    setProfilePhoto(e.target.files[0]);
                  }}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className="fs-6 fw-bolder">
                  Profile Photo Preview
                </Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Add_Retailers;

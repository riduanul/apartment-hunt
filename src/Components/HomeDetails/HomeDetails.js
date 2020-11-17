import React from "react";
import NavBar from "../Home/NavBar/NavBar";
import "./HomeDetails.css";
import fakeData from "../../FakeData/FakeData";
import { useParams } from "react-router-dom";

const HomeDetails = () => {
  const { name } = useParams();

  const data = fakeData;

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="img-viewDetail text-white text-center text">
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Apartment</h1>
      </div>
      <div className="mt-5 container">
        <div className="row">
          <div className="col-md-8">
            {data
              .filter((home) => home.name === name)
              .map((home) => (
                <div className="home-img">
                  <img src={home.img} alt="" className="mb-3" />
                  <div className="row">
                    <div className="col-md-3 "><img src={home.img1} alt="" width='140'/></div>
                    <div className="col-md-3"><img src={home.img2} alt="" width='140'/></div>
                    <div className="col-md-3"><img src={home.img3} alt="" width='140'/></div>
                    <div className="col-md-3"><img src={home.img4} alt="" width='140'/></div>
                    
                  </div>
                  <div className="d-flex justify-content-between mt-5">
                    <div>
                      {" "}
                      <h4 style={{ fontWeight: "800" }}>{home.name}</h4>{" "}
                    </div>
                    <div>
                      <h4 style={{ fontWeight: "800", color: "#275A53" }}>
                        ${home.price}
                      </h4>
                    </div>
                  </div>
                  <p>{home.description}</p> <br/> <br/>
                  <h4 style={{ fontWeight: "800" }}>Price Details-</h4>
                    <p>{home.priceDetails}</p> <br/> <br/>
                    <h4 style={{ fontWeight: "800" }}>Property Details-</h4>
                    <p>{home.property}</p>
                </div>
              ))}
          </div>

          <div className="col-md-4 request">
            <form action="">
              <input type="text" placeholder="Name" />
              <input type="number" placeholder="Phone No." />
              <input type="text" placeholder="Email address" />
              <textarea
                placeholder="Message"
                cols="80"
                rows="4"
              ></textarea>{" "}
              <br />
              <button class="btn btn-primary" type="submit">
                Request Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDetails;

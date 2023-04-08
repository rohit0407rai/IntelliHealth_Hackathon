import React from "react";
import { Link } from 'react-router-dom'
import Blogs from "../Blogs/Blogs";

const DoctorCard = ({ menuData }) => {
  //   console.log(menuData);

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, category, image, location, rating } = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <div className="flex flex-row-reverse justify-between">
                      <span className="card-author card-rating subtle">{rating}&#11088;</span>

                      <span className="card-author card-category subtle"> {category}</span>
                    </div>

                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">
                      {location}
                    </span>
                  </div>
                  <img src={image} alt="images" className="card-media" />
                  <Link to='dprofile'>
                  </Link>

                  <span className="card-tag subtle"><button className=""><Link to='/appointment' className="text-blue-500 ">Book appointment</Link></button></span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default DoctorCard;
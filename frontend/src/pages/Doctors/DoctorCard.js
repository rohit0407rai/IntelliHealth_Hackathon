import React from "react";

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
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author card-rating subtle"> {rating}</span>

                    <span className="card-author card-category subtle"> {category}</span>

                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">
                      {location}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="images" className="card-media" />

                  <span className="card-tag  subtle">Book appointment</span>
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
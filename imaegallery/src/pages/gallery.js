import React, { useState } from "react";
import dog1 from "../images/dog1.jpg";
import dog2 from "../images/dog2.jpg";
import dog3 from "../images/dog3.jpg";
import dog4 from "../images/dog4.jpg";
import dog5 from "../images/dog5.jpg";
import dog6 from "../images/dog6.jpg";
import dog7 from "../images/dog7.jpg";
import dog8 from "../images/dog8.jpg";
import dog10 from "../images/dog10.jpg";
import "./gallery.css";
import allimages from "../images/imagesdata";

function Gallery() {
  const [imgnew, setNewImage] = useState(dog10);
  const [alldata, setAlldat] = useState(allimages);
  const imageClick = (imge) => {
    setNewImage(imge);
  };

  console.log(allimages, ">>>>>>");
  return (
    <div>
      <div className="container">
        <img src={imgnew} className="selected" alt="selected" />
      </div>

      <br />
      <div
        style={{
          // display: "flex",
          // justifyContent: "space-between",
          display: "block",
          cursor: "pointer",
        }}
      >
        <img
          src={dog1}
          width="100px"
          background-color="red"
          onClick={() => imageClick(dog1)}
          height="100px"
          alt="BigCo Inc. logo"
        />
        <img
          src={dog2}
          width="100px"
          onClick={() => imageClick(dog2)}
          height="100px"
          alt="BigCo Inc. logo"
        />
        <img
          src={dog3}
          width="100px"
          onClick={() => imageClick(dog3)}
          height="100px"
          alt="BigCo Inc. logo"
        />
        <img
          src={dog4}
          width="100px"
          height="100px"
          onClick={() => imageClick(dog4)}
          alt="BigCo Inc. logo"
        />
        <img
          src={dog5}
          width="100px"
          height="100px"
          onClick={() => imageClick(dog5)}
          alt="BigCo Inc. logo"
        />
        <img
          src={dog6}
          width="100px"
          height="100px"
          onClick={() => imageClick(dog6)}
          alt="BigCo Inc. logo"
        />
        <img
          src={dog7}
          width="100px"
          height="100px"
          onClick={() => imageClick(dog7)}
          alt="BigCo Inc. logo"
        />
        <img
          src={dog8}
          width="100px"
          height="100px"
          onClick={() => imageClick(dog8)}
          alt="BigCo Inc. logo"
        />
        <img
          src={dog10}
          width="100px"
          height="100px"
          onClick={() => imageClick(dog10)}
          alt="BigCo Inc. logo"
        />
        <img
          src={dog8}
          width="100px"
          height="100px"
          onClick={() => imageClick(dog8)}
          alt="BigCo Inc. logo"
        />
      </div>
    </div>
  );
}

export default Gallery;

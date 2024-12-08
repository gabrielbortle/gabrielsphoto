import React from "react";
import Package from ".././Package/Package" // Import the Package component
import "./ServicesContainer.css";
//images

import Couple1 from '../../assets/couple1.jpg';
import Couple2 from '../../assets/couple2.jpg';
import Family from '../../assets/family.jpg';
import Grad1 from '../../assets/grad1.jpg';
import Grad2 from '../../assets/grad2.jpg';


const ServicesContainer = () => {
  return (
    <div className="container">
      <Package
        imageSrc= {Couple1}
        title="COUPLE PHOTOS / PORTRAITS"
        includes="1 Hour Session<br/>1 Outfit<br/>50 Edited Images<br/>Free High Resolution Download<br/>Online Album Delivery And Store Access<br/>14 Day Turnaround"
        price="($150)"
      />
      <Package
        imageSrc= {Couple2}
        title="FULL COUPLE PHOTOS / PORTRAITS"
        includes="1 Hour Session<br/>2 Outfits<br/>75 Edited Images<br/>Free high Resolution Download<br/>Online Album Delivery And Store Access<br/>7 Day Turnaround"
        price="($185)"
      />
      <Package
        imageSrc= {Grad1}
        title="GRADUATION PHOTOS / PORTRAITS"
        includes="1 Hour Session<br/>2 Outfits<br/>50 Edited Images<br/>Free High Resolution Download<br/>Online Album Delivery And Store Access<br/>14 Day Turnaround"
        price="($140)"
      />
      <Package
        imageSrc= {Grad2}
        title="FULL GRADUATION / PORTRAITS"
        includes="1 Hour Session<br/>75 Edited Images<br/>2 Outfit Changes<br/>Free High Resolution Download<br/>Online Album Delivery And Store Access<br/>7 Day Turnaround"
        price="($170)"
      />
      <Package
        imageSrc= {Family}
        title="FAMILY PORTRAITS"
        includes="1 Hour Session<br/>1 Outfit<br/>Up to 5 People<br/>75 Edited Images<br/>Free High Resolution Download<br/>Online Album Delivery And Store Access<br/>14 Day Turnaround"
        price="($180) (+1 extra person = $5)"
      />
    </div>
  );
};

export default ServicesContainer;

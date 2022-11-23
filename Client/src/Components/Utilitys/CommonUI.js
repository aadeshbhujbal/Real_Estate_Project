import React from "react";
import "../Styles/commonui.css";
export default function CommonUI() {
  return (
    // <div className="Common">
    //     <div className="Header">
    //         <img src="./public/logo.png"/>
    //         <a>UserId:</a>
    //         <a>UserName</a>
    //     </div>
    // <div className="Common-middle">
    // <div className="Aside">
    //         <div className="list">
    //         <ul>
    //             <li>Property</li>
    //             <li>Assistance</li>
    //             <li>Received Intrest</li>
    //             <li>Sent Intrest</li>
    //             <li>Property Views</li>
    //             <li>Tariff Plan</li>
    //         </ul>
    //         </div>
    //     </div>
    //     <div className="Info-Pages">
    //         <div className="P">
    //             <p>ADD NEW PROPERTY</p>
    //         </div>
    //         <div className="info-page-buttons">
    //             <button>BasicInfo</button>
    //             <button>Property detail</button>
    //             <button>General info</button>
    //             <button>Loaction info</button>
    //         </div>
    //     </div>
    // </div>

    // </div>
    <div className="Common">
      <div className="aside">
        <div className="Logo">
          <img src="../public/logo.png" />
        </div>
        <div className="List">
          <div className="Property">
            <img src="" />
            <p>Property</p>
            <p>Property</p>
          </div>
          <div className="Assistance">
            <img src="" />
            <p>Assistance</p>
          </div>
          <div className="Received Interest">
            <img src="" />
            <p>Received Interest</p>
          </div>
          <div className="Save Interest">
            <img src="" />
            <p>Save Interest</p>
          </div>
          <div className="Propert Views">
            <img src="" />
            <p>Property views</p>
          </div>
          <div className="Tariff Plan">
            <img src="" />
            <p>Tariff Plan</p>
          </div>
        </div>
      </div>
      <div className="remaining">
        <div className="Header">
          <p>UserId:</p>
          <p>UserName:</p>
        </div>
        <div className="P">ADD NEW PROPERTY</div>
        <div className="Info-Bar">
          <p>1.Basic Info</p>
          <p>2.Property detail</p>
          <p>3.General info </p>
          <p>4.Loaction info</p>
        </div>
      </div>
    </div>
  );
}

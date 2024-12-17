// import React from "react";
// import "./style.css";
// import { Helmet, HelmetProvider } from "react-helmet-async";
// import { Container, Row, Col } from "react-bootstrap";
// import { datasponsors, meta } from "../../content_option";

// export const Sponsor = () => {
//   const getDynamicLink = (data) => {
//     const userAgent = navigator.userAgent || navigator.vendor || window.opera;

//     // Check for iOS
//     if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
//       return data.ios; // Replace with your Apple Store link
//     }

//     // Default to Google Play Store
//     return data.link; // Replace with your Google Play Store link
//   };
//   return (
//     <HelmetProvider>
//       <Container className="About-header">
//         <Helmet>
//           <meta charSet="utf-8" />
//           <title> Sponsors | {meta.title} </title>{" "}
//           <meta name="description" content={meta.description} />
//         </Helmet>
//         <Row className="mb-5 mt-3 pt-md-3">
//           <Col lg="8">
//             <h1 className="display-4 mb-4"> Sponsors </h1>{" "}
//             <hr className="t_border my-4 ml-0 text-left" />
//           </Col>
//         </Row>
//         <div className="mb-5 po_items_ho">
//           {datasponsors.map((data, i) => {
//             return (
//               <div key={i} className="po_item">
//                 <img src={data.img} alt="" />
//                 <div className="content">
//                   <p>{data.description}</p>
//                   <a href={getDynamicLink(data)}>Become A Sponsor</a>
//                   {/* <a href="https://github.com/sponsors/Aquarius-blake/card" >test</a> */}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </Container>
//     </HelmetProvider>
//   );
// };

import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { datasponsors, meta } from "../../content_option";

export const Sponsor = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [iframeLink, setIframeLink] = useState("");

  const handleOpenPopup = (data) => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Determine the link dynamically
    let link;
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      link = data.ios; // iOS link
    } else {
      link = data.link; // Google Play Store link
    }

    setIframeLink("https://github.com/sponsors/Aquarius-blake/card"); // Set the iframe link
    setShowPopup(true); // Open the popup
  };

  const handleClosePopup = () => setShowPopup(false); // Close the popup

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Sponsors | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Sponsors </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {datasponsors.map((data, i) => (
            <div key={i} className="po_item">
              <img src={data.img} alt="" />
              <div className="content">
                <p>{data.description}</p>
                <p>{data.name}</p>
                <div
                  className="intro_btn-action pb-5"
                  onClick={() => handleOpenPopup(data)}
                ><div id="button_h" className="ac_btn btn">
                  Become A Sponsor
                  <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Popup Modal */}
        <Modal show={showPopup} onHide={handleClosePopup} size="lg" centered className="transparent-modal" // Custom class for modal content
  backdropClassName="transparent-backdrop" >
          {/* <Modal.Header closeButton>
            <Modal.Title>Become A Sponsor</Modal.Title>
          </Modal.Header> */}
          <Modal.Body>
            {iframeLink && (
              <iframe
                src={iframeLink}
                title="Sponsor Link"
                style={{ width: "100%", height: "400px", border: "none" }}
              ></iframe>
            )}
          </Modal.Body>
        </Modal>
      </Container>
    </HelmetProvider>
  );
};


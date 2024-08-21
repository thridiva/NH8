import React, { useState } from "react";

const branches = [
  {
    name: "Hyderabad",
    address: "Hyderabad, Telangana",
    phone: "+91 123 456 7890",
    hours: "Mon-Sun 9:00 AM - 9:00 PM",
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5186.610584232766!2d81.5208305770553!3d16.808088028824013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37b4b8f9155bd3%3A0xd1cd2da50860f04f!2sTarangini%20residency%20%26%20lodge!5e0!3m2!1sen!2sin!4v1717046382371!5m2!1sen!2sin",
  },
  {
    name: "Chennai",
    address: "Chennai, Tamil Nadu",
    phone: "+91 987 654 3210",
    hours: "10:00 AM - 10:00 PM",
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497512.1577176541!2d80.20901174999999!3d13.04752545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1716966004605!5m2!1sen!2sin",
  },
  {
    name: "Bangalore",
    address: "Bangalore, Karnataka",
    phone: "+91 890 765 4321",
    hours: "11:00 AM - 11:00 PM",
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497699.6983259305!2d77.6309395!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1716966722904!5m2!1sen!2sin",
  },
  {
    name: "Delhi",
    address: "Delhi, India",
    phone: "+91 789 054 7890",
    hours: "12:00 PM - 12:00 AM",
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448194.82162352453!2d77.09323125!3d28.6440836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1716966815105!5m2!1sen!2sin",
  },
  {
    name: "Mumbai",
    address: "Mumbai, Maharashtra",
    phone: "+91 567 890 7890",
    hours: "1:00 PM - 1:00 AM",
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d482633.04050169245!2d72.55150786294598!3d19.082606792130438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1716978633689!5m2!1sen!2sin",
  },
  {
    name: "Kolkata",
    address: "Kolkata, West Bengal",
    phone: "+91 345 678 0987",
    hours: "2:00 PM - 2:00 AM",
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.21689617523!2d88.2649499325727!3d22.535564937891397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1716978601079!5m2!1sen!2sin",
  },
  {
    name: "Nagpur",
    address: "Nagpur, Maharashtra",
    phone: "+91 567 890 7890",
    hours: "3:00 PM - 3:00 AM",
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238129.63924690278!2d78.90769354364717!3d21.16132625913331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1716978159104!5m2!1sen!2sin",
  },
  {
    name: "Madurai",
    address: "Madurai, Tamil Nadu",
    phone: "+91 567 890 7890",
    hours: "4:00 PM - 4:00 AM",
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125766.13086947777!2d78.04042052583013!3d9.917995903978456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f63933!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1716978086336!5m2!1sen!2sin",
  },
];

export function Footer({ branchName = null }) {
  let branchNum = null;

  if (branchName) {
    for (let i = 0; i < branches.length; i++) {
      if (branchName.toLowerCase() === branches[i].name.toLowerCase()) {
        branchNum = i;
      }
    }
  }

  const [selectedBranch, setSelectedBranch] = useState(
    branches[branchName ? branchNum : 0]
  );

  return Number.isInteger(branchNum) ? (
    <RenderOneMap selectedBranch={selectedBranch} />
  ) : (
    <RenderFullMap
      selectedBranch={selectedBranch}
      setSelectedBranch={setSelectedBranch}
    />
  );
}

function RenderOneMap({ selectedBranch }) {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-branch-buttons selected-branchname">
          Contact Information for the {selectedBranch.name} Branch
        </div>
        <div className="footer-content container">
          <div className="footer-branch-map">
            <iframe
              src={selectedBranch.mapLink}
              className="footer-map-iframe"
              allowFullScreen=""
              loading="lazy"
              title={`${selectedBranch.name} map`}
            ></iframe>
          </div>
          <div className="footer-branch-details">
            <p className="footer-branch-address">{selectedBranch.address}</p>
            <p className="footer-branch-phone">{selectedBranch.phone}</p>
            <p className="footer-branch-hours">{selectedBranch.hours}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function RenderFullMap({ selectedBranch, setSelectedBranch }) {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-branch-buttons">
          {branches.map((branch, index) => (
            <button
              className={`footer-branch-button${
                selectedBranch.name === branch.name ? " selected" : ""
              }`}
              key={index}
              onClick={() => setSelectedBranch(branch)}
            >
              {branch.name}
            </button>
          ))}
        </div>
        <div className="footer-content container">
          <div className="footer-branch-map">
            <iframe
              src={selectedBranch.mapLink}
              className="footer-map-iframe"
              allowFullScreen=""
              loading="lazy"
              title="map"
            ></iframe>
          </div>
          <div className="footer-branch-details">
            <p className="footer-branch-address">{selectedBranch.address}</p>
            <p className="footer-branch-phone">{selectedBranch.phone}</p>
            <p className="footer-branch-hours">{selectedBranch.hours}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

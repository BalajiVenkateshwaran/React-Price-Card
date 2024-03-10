import React from "react";
import Card from "./Card";
import "/node_modules/bootstrap/dist/css/bootstrap.css";

function App() {
  let data = [
    {
      planName: "Free",
      price: 0,
      features: [
        {
          userData: "Single User",
          enabled: true,
        },
        {
          storage: "50 GB of storage",
          enabled: true,
        },

        { support: "Unlimited Public Projects", enabled: false },
        {
          accessType: "Community Access",
          enabled: false,
        },
        {
          enabled: false,
          projects: "Unlimited Private Projects",
          phoneSupport: "Dedicated Phone Support",
          subdomainDetails: "Free Subdomain",
          statusReport: "Monthly Status Report",
        },
      ],
    },
    {
      planName: "Plus",
      price: 9,
      features: [
        {
          userData: "5 User",
          enabled: true,
        },
        {
          storage: "50 GB of storage",
          enabled: true,
        },
        {
          support: "Unlimited Public Projects",
          enabled: true,
        },
        {
          accessType: "Community Access",
          enabled: false,
          projects: "Unlimited Private Projects",
          phoneSupport: "Dedicated Phone Support",
          subdomainDetails: "Free Subdomain",
          statusReport: "Monthly Status Report",
        },
      ],
    },
    {
      planName: "Pro",
      price: 49,
      features: [
        {
          userData: "Unlimited Users",
          enabled: true,
        },
        {
          storage: "50 GB of storage",
          enabled: true,
        },
        {
          support: "Unlimited Public Projects",
          enabled: true,
        },
        {
          accessType: "Community Access",
          enabled: true,
        },
        {
          enabled: false,
          projects: "Unlimited Private Projects",
          phoneSupport: "Dedicated Phone Support",
          subdomainDetails: "Free Subdomain",
          statusReport: "Monthly Status Report",
        },
      ],
    },
  ];

  return (
    <div
      className="container"
      style={{
        backgroundColor: "#31ABFE",
        marginTop: "20px",
        paddingTop: "10px",
      }}
    >
      <div className="row">
        {data.map((item, index) => {
          return <Card item={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;

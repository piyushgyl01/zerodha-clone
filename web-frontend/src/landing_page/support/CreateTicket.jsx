import React from "react";

export default function CreateTicket() {
  const sections = [
    {
      title: "Account Opening",
      icon: "fa-user-plus",
      items: [
        "Getting started",
        "Online",
        "Offline",
        "Charges",
        "Company, Partnership and HUF",
        "Non Resident Indian (NRI)"
      ]
    },
    {
      title: "Your Zerodha Account",
      icon: "fa-user-circle",
      items: [
        "Login credentials",
        "Your Profile",
        "Account modification and segment addition",
        "CMR & DP ID",
        "Nomination",
        "Transfer and conversion of shares"
      ]
    },
    {
      title: "Trading and Markets",
      icon: "fa-line-chart",
      items: [
        "Trading FAQs",
        "Kite",
        "Margins",
        "Product and order types",
        "Corporate actions",
        "Kite features"
      ]
    },
    {
      title: "Funds",
      icon: "fa-money-bill",
      items: [
        "Fund withdrawal",
        "Adding funds",
        "Adding bank accounts",
        "eMandates"
      ]
    },
    {
      title: "Console",
      icon: "fa-desktop",
      items: [
        "IPO",
        "Portfolio",
        "Funds statement",
        "Profile",
        "Reports",
        "Referral program"
      ]
    },
    {
      title: "Coin",
      icon: "fa-coins",
      items: [
        "Understanding mutual funds and Coin",
        "Coin app",
        "Coin web",
        "Transactions and reports",
        "National Pension Scheme (NPS)"
      ]
    }
  ];

  return (
    <div className="container">
      <div className="row p-5 mb-5 mt-5">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>
        
        {sections.map((section, index) => (
          <div key={index} className="col-lg-4 col-md-6 p-4">
            <h4>
              <i className={`fa ${section.icon} me-2`} aria-hidden="true"></i>
              {section.title}
            </h4>
            <div className="d-flex flex-column mt-3">
              {section.items.map((item, itemIndex) => (
                <a
                  key={itemIndex}
                  href="#"
                  className="text-decoration-none mb-3"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
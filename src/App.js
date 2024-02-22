import React, { useState } from "react";
import data from "./TemplateData.json";
import './countrySearch.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((val) => {
    if (searchTerm === "") {
      return true;
    } else if (val.currency.toUpperCase().includes(searchTerm)) {
      return val;
    }
  });
  
  return (
    <>
      <div className="templateContainer">
        <div className="search_bar">
          <FontAwesomeIcon icon={faSearch} className="search_icon" />
          <input id="searchInput" type="text"
            placeholder="Search by currency code (e.g. INR, EUR)"
            onChange={(event) => {
              setSearchTerm(event.target.value.toUpperCase());
            }} />
        </div>
        <div className="template_Container">
          {
            filteredData.length > 0 ? (
              filteredData.map((val) => (
                <div className="template" key={val.name}>
                  <img src={val.flag} alt={val.name} />
                  <hr></hr>
                  <div className="info">
                    <h3>{val.name}</h3>
                    <p>Capital : {val.capital}</p>
                    <p>
                      Currency : {val.currency} ({val.currencySymbol})
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <>
              <div className="no-results">The entered currency code is incorrect. Please checkout the document to see correct currency code. </div> 
              <a id="documentLink" href="http://www.etem.de/market/eng/convert/currency_symbols.pdf" target="_blank" rel="noopener noreferrer">Currency document</a>
              </>
            )
          }
        </div>
      </div>
    </>
  )
}

export default App;

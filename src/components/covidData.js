import React, { useEffect, useState } from "react";
  
function CovidData() {
  const [country, setCountry] = useState("");
  const [cases, setCases] = useState("");
  const [recovered, setRecovered] = useState("");
  const [deaths, setDeaths] = useState("");
  const [todayCases, setTodayCases] = useState("");
  const [deathCases, setDeathCases] = useState("");
  const [recoveredCases, setRecoveredCases] = useState("");
  const [userInput, setUserInput] = useState("");
  
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  
  const setData = ({
    country,
    cases,
    deaths,
    recovered,
    todayCases,
    todayDeaths,
    todayRecovered,
  }) => {
    setCountry(country);
    setCases(cases);
    setRecovered(recovered);
    setDeaths(deaths);
    setTodayCases(todayCases);
    setDeathCases(todayDeaths);
    setRecoveredCases(todayRecovered);
  };
  
  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };
  const handleSubmit = (props) => {
    props.preventDefault();
    fetch(`https://disease.sh/v3/covid-19/countries/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  };
  
  return (
      <div className="section">
           <p>COVID-19 CASES COUNTRY WISE</p>
           <form onSubmit={handleSubmit}>
          <input onChange={handleSearch} placeholder="Enter Country Name" />
          <button type="submit">Search</button>
        </form>
           <ul>
              <li className='card' style={{backgroundColor:'yellow'}}>
                 <div className='card__main'>
                    <div className='card__inner'>
                       <p className='card__name'><span>Total</span>CASES</p>
                       <p className='card__total card__small'>{cases}</p>
                    </div>
                 </div>
              </li>
              <li className='card' style={{backgroundColor:'orange'}}>
                 <div className='card__main'>
                    <div className='card__inner'>
                       <p className='card__name'><span>Total</span>DEATHS</p>
                       <p className='card__total card__small'>{deaths}</p>
                    </div>
                 </div>
              </li>
              <li className='card' style={{backgroundColor:'red'}}>
                 <div className='card__main'>
                    <div className='card__inner'>
                       <p className='card__name'><span>Total</span>RECOVERED</p>
                       <p className='card__total card__small'>{recovered}</p>
                    </div>
                 </div>
              </li>
              <li className='card' style={{backgroundColor:'green'}}>
                 <div className='card__main'>
                    <div className='card__inner'>
                       <p className='card__name'><span>Today</span>CASES</p>
                       <p className='card__total card__small'>{todayCases}</p>
                    </div>
                 </div>
              </li><li className='card'  style={{backgroundColor:'blue'}}>
                 <div className='card__main'>
                    <div className='card__inner'>
                       <p className='card__name'><span>Today</span>DEATHS</p>
                       <p className='card__total card__small' >{deathCases}</p>
                    </div>
                 </div>
              </li>
              <li className='card' style={{backgroundColor:'purple'}}>
                 <div className='card__main'>
                    <div className='card__inner'>
                       <p className='card__name'><span>Today</span>RECOVERED</p>
                       <p className='card__total card__small'>{recoveredCases}</p>
                    </div>
                 </div>
              </li>
           </ul>
         </div>
  );
}

  
export default CovidData;
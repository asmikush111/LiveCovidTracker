import {useState, useEffect } from "react";
const Statewise=()=>{
    const [data,setData]=useState([]);
    const getCovidData=async ()=>{
        const res=await fetch('https://data.covid19india.org/data.json');
        const data=await res.json();
        setData(data.statewise);
    }
    useEffect(()=>{
      getCovidData();
    },[]);
   
    return <>
     <div className="container-fluid mt-3">
        <div className="main-heading">
        <p className="mb-3 text-center" style={{fontSize:'20px'}}><span className="font-weight-bold">INDIA</span> COVID-22 Dashboard</p>
        </div>
        <div className="table-responsive">
            <table className="table table-hover">
                <thead className="thead-dark ">
                   <tr>
                    <th>State</th>
                    <th>Confirmed</th>
                    <th>Recovered</th>
                    <th>Deaths</th>
                    <th>Active</th>
                    <th>Updated</th>
                   </tr>
                </thead>
                <tbody> 
                     {
                        data.map((val,i)=>{
                        return <tr key={i}>
                        <td>{val.state}</td>
                        <td>{val.confirmed}</td>
                        <td>{val.recovered}</td>
                        <td>{val.deaths}</td>
                        <td>{val.active}</td>
                        <td>{val.lastupdatedtime}</td>
                       </tr> ;})
                    }
                </tbody>
            </table>
        </div>
     </div>
    </>;
}

export default Statewise;
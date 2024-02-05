import mccData from "./CrudeVetenary/mccData";
import '../../index.scss'
import { useEffect, useState } from "react";
import axios from "axios";


const VetProduction = () => {
  const columns = [
    {
      name: "Sector",
      quantity: "Current Quantity",
      Date: "Month",
      Total: "Total Quantity"
    
    },
  ];

  const [production, setProduction] = useState([]);

  const fetchProduction = ()=>{
    axios({
      method: "GET",
      url: "http://localhost:5678/mpas/milkProduction/allMilkProductions",
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then((response)=>{
      console.log(response)
      setProduction(response.data.milkProduction)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  useEffect(()=>{
    fetchProduction();
  }, [])
  return (
    <>
      <div className="tableWrapper pb-10 mt-28 text-[1.3rem] font-bold mx-4 md:mx-10">
        <div className="flex justify-between items-center">
          <h1 className="mb-5">Employees production is {production.length}</h1>
        </div>
      
        <table
          className="tables pt-2"
        
        >
          <thead>
            {columns.map((col, idx) => {
              return (
                <tr key={idx}>
                  <th className="">{col.name}</th>
                  <th className="">{col.quantity}</th>
                  <th className="">{col.Date}</th>
                  <th className="expand">{col.Total}</th>
                </tr>
              );
            })}
          </thead>
          <tbody className="text-slate-700">
            {production.map((item, idx) => {
              return (
                <>
                  <tr key={idx}>
                    <td>{item.sector}</td>
                    {/* current quantinty will go below this line */}
                    <td>{item.currentQuantity} litres</td>
                    <td>February</td>
                    <td>{item.quantity} litres</td>
                    {/* total quantity is above this line */}
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default VetProduction

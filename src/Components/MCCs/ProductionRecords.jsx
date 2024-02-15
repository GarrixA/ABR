
import '../../index.scss'
import axios from "axios";
import { useEffect, useState } from "react";


const ProductionRecord = () => {
  const columns = [{
    name: "Farmer Name",
    quantity: "Current Quantity",
    Total: "Total Quantity"
  }];

  const [production, setProduction] = useState([]);

  const fetchProduction = () => {
    axios({
      method: "GET",
      url: "https://mpasw.onrender.com/mpas/milkProduction/allMilkProductions",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((response) => {
        // console.log(response)
        setProduction(response.data.farmerProduction)
        console.log(production)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    fetchProduction();
  }, [])


  return (
    <>
      <div className="tableWrapper mt-28 text-[1.3rem] font-bold mx-4 md:mx-10">
        <div className="flex justify-between items-center">
          <h1 className="mb-5"></h1>
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
                    <td>{item.farmerName}</td>
                    <td>{item.currentQuantity} litres</td>
                    <td>{item.quantity} litres</td>
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

export default ProductionRecord

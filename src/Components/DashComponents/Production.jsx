import axios from 'axios';
import '../../index.scss'
import { useEffect, useState } from 'react';


const Production = () => {
  const [productionData, setProductionData] = useState([])
  const columns = [
    {
      province: "Province",
      month: "Month",
      quantity: "Quantity"
    },
  ];

  useEffect(() => {
  
    const data = async () => {
      const access_token = localStorage.getItem('token')
    
      axios.request({
        headers: {
          Authorization: `Bearer ${access_token}`
        },
        method: "GET",
        url: `https://mpasw.onrender.com/mpas/veterian/vet/monthlyStatistics`
      }).then(response => {
      console.log(response.data);
         setProductionData(response.data)});
    }
    data()
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
                  <th className="">{col.province}</th>
                  <th className="">{col.month}</th>
                  <th className="expand">{col.quantity}</th>
                </tr>
              );
            })}
          </thead>
          <tbody className="text-slate-700">
                <tr >
                  <td>{productionData.length !== 0 && productionData.provinceQuantities[0].province}</td>
                  <td>{productionData.length !== 0 && productionData.provinceQuantities[0].monthlyQuantities[0].month} </td>
                  <td>{productionData.length !== 0 && productionData.provinceQuantities[0].quantity} litters</td>
                </tr>
          </tbody>
        </table>


      </div>
    </>
  );
}

export default Production

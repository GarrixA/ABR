
import mprodData from "./CrudeFam/mprodData";
import '../../index.scss'


const ProductionRecord = () => {
  const columns = [
    {
      name: "Name",
      quantity: "Quantity",
      Date: "Date",
      Total: "Total"
    
    },
  ];
  return (
    <>
      <div className="tableWrapper mt-28 text-[1.3rem] font-bold mx-4 md:mx-10">
        <div className="flex justify-between items-center">
          <h1 className="mb-5">Employees</h1>
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
            {mprodData.map((item, idx) => {
              return (
                <>
                  <tr key={idx}>
                    <td>{item.name}</td>
                    <td>{item.quantity} litres</td>
                    <td>{item.date}</td>
                    <td>{item.total} litres</td>
                    
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

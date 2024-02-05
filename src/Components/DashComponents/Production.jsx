import '../../index.scss'


const Production = () => {
  const columns = [
    {
      District: "District",
      month: "Month",
      quantity: "Quantity"
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
                  <th className="">{col.District}</th>
                  <th className="">{col.month}</th>
                  <th className="expand">{col.quantity}</th>
                </tr>
              );
            })}
          </thead>
          <tbody className="text-slate-700">
                <>
                  <tr >
                    <td></td>
                    <td> </td>
                    <td>litres</td>
                    
                  </tr>
                </>
          </tbody>
        </table>
        
      
      </div>
    </>
  );
}

export default Production


const ProductionRegister = () => {
  const farmers = ["Select", "Miggy", "Alya", "Kylie"]
  return (
    <>
    <div className="mt-20 flex items-center justify-center h-screen">
      <div className="formWrapp flex items-center justify-center w-[50%] bg-white p-4 rounded-xl shadow-xl">
        <form className="w-[60%] space-y-2">
          <h1 className="text-center text-2xl p-2 font-bold">Production Registration</h1>
          <div className="farmer flex flex-col">
            <label className="text-xl font-semibold my-1">Farmer</label>
            <select className="px-4 py-1 rounded border border-green-600">
              {farmers.map((fam, idx)=>{
                return (
                  <option key={idx}>{fam}</option>
                )
              })}
            </select>
          </div>
          <div className="quantity flex flex-col">
              <label className="text-xl font-semibold my-1">Quantity</label>
              <input type="number" placeholder="eg: 12" className="px-4 py-1 rounded border border-green-600"/>
          </div>
          <div className="manure flex flex-col">
              <label className="text-xl font-semibold my-1">Manure</label>
              <input type="number" placeholder="eg: 12" className="px-4 py-1 rounded border border-green-600"/>
          </div>
          <div className="my-4">
          <button className="bg-[#1a8cff] rounded uppercase text-white font-semibold w-full py-1   mt-4 mb-4">Register</button>
          </div>
        </form>
      </div>
    </div>
 </>
  )
}

export default ProductionRegister

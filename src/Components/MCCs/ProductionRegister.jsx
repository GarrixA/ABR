import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import  {ToastContainer, toast } from "react-toastify";

const ProductionRegister = () => {
  const [loading, setLoading] = useState()
  const [farmers, setFarmers] = useState([]);
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState();
  
  const navigate = useNavigate()

  const formData = new FormData();
  formData.append("quantity", quantity);
  formData.append("email", email);

  const getFarmers = () => {
    axios({
      method: "GET",
      url: "https://mpasw.onrender.com/mpas/farmerNews/farmer/allFarmers",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        setFarmers(response.data.farmerList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getFarmers();
  }, []);

  let token = localStorage.getItem("token");
  const addProducction = (e) => {
    e.preventDefault();
    setLoading(true)
    axios({
      method: "POST",
      url: "https://mpasw.onrender.com/mpas/milkProduction/addMilkProduction",
      data: formData,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        setLoading(false)
        toast.success("Production added");
        setTimeout(() =>{
          navigate("/mccdashboard/productionrecords")
        },2000)
       
      })
      .catch((error) => {
        console.log(error);
        setLoading(false)
        toast.error("Failed adding production");
      });
  };

  return (
    <>
    <ToastContainer position="left-top" theme="light" />
      <div className="mt-20 flex items-center justify-center h-screen">
        <div className="formWrapp flex items-center justify-center w-[80%] md:w-[50%] bg-white p-4 rounded-xl shadow-xl">
          <form
            className="w-[80%] md:w-[60%] space-y-2"
            onSubmit={addProducction}
          >
            <h1 className="md:text-center text-[1.1rem] md:text-2xl md:p-2 font-bold">
              Production Registration
            </h1>
            <div className="farmer flex flex-col">
              <label className="text-xl font-semibold my-1">Farmer</label>
              <input
                list="data"
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-1 rounded border border-green-600"
              />
              <datalist id="data">
                {farmers.map((item) => (
                  <option key={item._id}>{item.email}</option>
                ))}
              </datalist>
            </div>
            <div className="quantity flex flex-col">
              <label className="text-xl font-semibold my-1">Quantity</label>
              <input
                required
                type="number"
                placeholder="eg: 12"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="px-4 py-1 rounded border border-green-600"
              />
            </div>
            {/* <div className="manure flex flex-col">
              <label className="text-xl font-semibold my-1">date/month</label>
              <input type="number" placeholder="eg: 02.02.2024" className="px-4 py-1 rounded border border-green-600"/>
          </div> */}
            <div className="my-4">
              <button
                className="bg-[#1a8cff] rounded uppercase text-white font-semibold w-full py-1   mt-4 mb-4"
                onClick={addProducction}
              >
                {loading? "Registering...": "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductionRegister;

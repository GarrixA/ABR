import vetData from "./VetArray";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { RiAddCircleFill } from "react-icons/ri";
import "../../index.scss";
import { useEffect, useState } from "react";
import Modal from "./CrudeVetenary/VetModal";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactPaginate from "react-paginate";
import axios from "axios";

const VetMCCs = () => {
  const [openModal, setOpenModal] = useState(false);
  const { famId } = useParams();
  const columns = [
    {
      name: "Name",
      email: "Email",
      phone: "Phone",
      district: "District",
      action: "Actions",
    },
  ];
  const matchModal = () => {
    setOpenModal(!openModal);
  };

  const [farmer, setFarmer] = useState([]);

  const fetchFarmers = ()=>{
    axios({
      method: "GET",
      url:"https://mpasw.onrender.com/mpas/mcc/listOfMcc",
      headers:{
        "Content-Type": "application/json"
      }
    })
    .then((response) => {
      // console.log(response)
      setFarmer(response.data.mccList)
    })
    .catch((error)=>{
      console.log("Error", error)
    })
  }

  useEffect(() =>{
    fetchFarmers()
  },[])

  const handleDelete = (id) =>{
    if(window.confirm("are you sure you want to delete this MCC?")){
      let token = localStorage.getItem('token');
      console.log("to", token)
      axios({
        method: "DELETE",
        url:`https://mpasw.onrender.com/mpas/mcc/deleteMcc?id=${id}`,
        headers: {
          "Content-Type": "application/json",
          Authorization : `Bearer ${token}`
        }
      })
      .then(( response ) => {
        console.log(response)
        setTimeout(()=>{
          location.reload()
        }, 3000)
        toast.success(response.data.message)
      })
      .catch((error)=>{
        console.log(error)
        toast.error("failed to delete Mcc")
      })
    }
  }

  const [pageNumber, setPageNumber] = useState(0);
  const dataPerPage = 10;
  const pageVisited = pageNumber * dataPerPage;
  const pageCount = Math.ceil(farmer.length / dataPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const displayData = farmer
    .slice(pageVisited, pageVisited + dataPerPage)
    .map((item, idx) => {
      return (
        <>
          <tr key={idx}>
            <td>{item.mccName}</td>
            <td>{item.email}</td>
            <td>{item.phoneNumber}</td>
            <td>{item.district}</td>
            <td className="flex justify-evenly">
              <Link to={`/vetdashboard/editemployee/${item._id}`} state={item}>
                <span className="text-green-700 cursor-pointer">
                  <FaEdit />
                </span>
              </Link>
              <span className="text-red-700 cursor-pointer" onClick={()=> handleDelete(item._id)}>
                <MdDelete />
              </span>
            </td>
          </tr>
        </>
      );
    });

  return (
    <>
      <div className="tableWrapper mt-28 text-[1.3rem] font-bold mx-4 md:mx-10">
        <div className="flex justify-between items-center">
          <h1 className="mb-5">Employees</h1>
          <button
            className="md:mx-3 bg-[#006ca5] px-2 py-1 text-white rounded flex items-center space-x-2"
            onClick={matchModal}
          >
            <RiAddCircleFill className="text-[1.8rem]" /> <span>Register</span>
          </button>
        </div>
        
        <Link to={"/vetdashboard/allemployees"}><button className="text-green-700 mx-2 top-28 left-28 md:left-40 absolute px-5">Export</button></Link>
        <table
          className="tables pt-2"
          // ref={(el) => (componentRef.current = el)}
        >
          <thead>
            {columns.map((col, idx) => {
              return (
                <tr key={idx}>
                  <th className="">{col.name}</th>
                  <th className="">{col.email}</th>
                  <th className="">{col.phone}</th>
                  <th className="">{col.district}</th>
                  <th className="expand">{col.action}</th>
                </tr>
              );
            })}
          </thead>
          <tbody className="text-slate-700">{displayData}</tbody>
        </table>
        {openModal && <Modal matchModal={matchModal} />}
        <ToastContainer />
        <div className="mt-10 pb-10">
          <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns flex justify-center  "}
            previousLinkClassName={"previusBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive w-10 h-2"}
          />
        </div>
      </div>
    </>
  );
}

export default VetMCCs

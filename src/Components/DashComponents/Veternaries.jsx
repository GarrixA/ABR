import vetData from "./VetArray";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { RiAddCircleFill } from "react-icons/ri";
import "../../index.scss";
import { useRef, useState } from "react";
import Modal from "./Crude vet/Modal";
import { Link } from "react-router-dom";
import ReactToPrint from "react-to-print";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactPaginate from "react-paginate";

const Veternaries = () => {
  const [openModal, setOpenModal] = useState(false);
  const componentRef = useRef(null);
  const columns = [
    {
      name: "Name",
      email: "Email",
      phone: "Phone",
      district: "District",
      status: "Status",
      action: "Actions",
    },
  ];
  const matchModal = () => {
    setOpenModal(!openModal);
  };

  const [pageNumber, setPageNumber] = useState(0);
  const dataPerPage = 8;
  const pageVisited = pageNumber * dataPerPage;
  const pageCount = Math.ceil(vetData.length / dataPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const displayData = vetData
    .slice(pageVisited, pageVisited + dataPerPage)
    .map((item, idx) => {
      return (
        <>
          <tr key={idx}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.district}</td>
            <td>Active</td>
            <td className="flex justify-evenly">
              <Link to={"/dashboard/editvet"}>
                <span className="text-green-700 cursor-pointer">
                  <FaEdit />
                </span>
              </Link>
              <span className="text-red-700 cursor-pointer">
                <MdDelete />
              </span>
            </td>
          </tr>
        </>
      );
    });

  return (
    <>
      <div className="tableWrapper mt-28 text-[1.3rem] font-bold mx-10">
        <div className="flex justify-between items-center">
          <h1 className="mb-5">Veternaries</h1>
          <button
            className="mx-3 bg-[#006ca5] px-2 py-1 text-white rounded flex items-center space-x-2"
            onClick={matchModal}
          >
            <RiAddCircleFill className="text-[1.8rem]" /> <span>Register</span>
          </button>
        </div>
        
        <Link to={"/dashboard/allvets"}><button className="text-green-700 mx-2 top-28 left-40 absolute px-5">Export</button></Link>
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
                  <th className="">{col.status}</th>
                  <th className="expand">{col.action}</th>
                </tr>
              );
            })}
          </thead>
          <tbody className="text-slate-700">{displayData}</tbody>
        </table>
        {openModal && <Modal matchModal={matchModal} />}
        <ToastContainer />
        <div className="mt-10">
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
};

export default Veternaries;

import vetData from "../VetArray";
import "../../../index.scss";
import { useRef, useState } from "react";
import Modal from "./Modal";
import ReactToPrint from "react-to-print";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllVets = () => {
  const [openModal, setOpenModal] = useState(false);
  const componentRef = useRef(null);
  const columns = [
    {
      name: "Name",
      email: "Email",
      phone: "Phone",
      district: "District",
      status: "Status",
      action: "Province",
    },
  ];
  const matchModal = () => {
    setOpenModal(!openModal);
  };
  

  return (
    <>
      <div className="tableWrapper mt-28 text-[1.3rem] font-bold mx-10">
        <div className="flex justify-between items-center">
          <h1 className="mb-5">Veternaries</h1>
        </div>
        <ReactToPrint
          trigger={() => (
            <button className="text-green-700 mx-2 top-28 left-40 absolute border border-slate-400 px-5">
              Print
            </button>
          )}
          content={() => componentRef.current}
          documentTitle="Veternaries"
          pageStyle="print"
          onAfterPrint={() => toast.success("Document has been printed")}
        />
        <table
          className="tables pt-2"
          ref={(el) => (componentRef.current = el)}
        >
          <thead>
            {columns.map((col, idx) => {
              return (
                <tr key={idx}>
                  <th className="">{col.name}</th>
                  <th className="">{col.email}</th>
                  <th className="">{col.phone}</th>
                  <th className="">{col.district}</th>
                  <th className="">{col.action}</th>
                  <th className="expand">{col.status}</th>
                </tr>
              );
            })}
          </thead>
          <tbody className="text-slate-700">
            {vetData.map((item, idx) => {
              return (
                <>
                  <tr key={idx}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.district}</td>
                    <td>Kigali</td>
                    <td>Active</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        {openModal && <Modal matchModal={matchModal} />}
        <ToastContainer />
      </div>
    </>
  );
};

export default AllVets;

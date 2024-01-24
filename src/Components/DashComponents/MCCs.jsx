import vetData from "./VetArray";
import "../../index.scss";
import { useRef, useState } from "react";
import Modal from "./CrudeVet/Modal";
import ReactToPrint from "react-to-print";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactPaginate from "react-paginate";

const MCCs = () => {
  const [openModal, setOpenModal] = useState(false);
  const componentRef = useRef(null);
  const columns = [
    {
      name: "Name",
      email: "Email",
      phone: "Phone",
      district: "District",
      status: "Status",
      Province: "Province",
      NationalId: "National Id",
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
            <td>{item.Province}</td>
            <td>{item.district}</td>
            <td>{item.NationalId}</td>
            <td>{item.NationalId}</td>
            <td>{item.status}</td>
          </tr>
        </>
      );
    });

  return (
    <>
      <div className="tableWrapper mt-28  font-bold mx-10 border">
        <div className="flex justify-between items-center">
          <h1 className="mb-5 text-[1.3rem]">MCCs</h1>
        </div>
        <ReactToPrint
          trigger={() => (
            <button className="text-green-700 mx-2 top-28 left-40 absolute border border-slate-400 px-5">
              Print
            </button>
          )}
          content={() => componentRef.current}
          documentTitle="New Doc"
          pageStyle="print"
          onAfterPrint={() => toast.success("Document has been printed")}
        />
        <table
          className="tables pt-2"
          ref={(el) => (componentRef.current = el)}
        >
          <thead className="text-[1.1rem]">
            {columns.map((col, idx) => {
              return (
                <tr key={idx}>
                  <th className="">{col.name}</th>
                  <th className="">{col.email}</th>
                  <th className="">{col.phone}</th>
                  <th className="">{col.Province}</th>
                  <th className="">{col.district}</th>
                  <th className="">{col.NationalId}</th>
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
}

export default MCCs

import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import * as XLSX from "xlsx";
import type { InitFormInterface } from "../interface";

interface Props {
  data: InitFormInterface[];
}

const DataTable: React.FC<Props> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleExportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
    XLSX.writeFile(workbook, "data.xlsx");
  };

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  const displayedData = filteredData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="overflow-x-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleExportExcel}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
        >
          Export Excel
        </button>
      </div>
      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-b text-left">Name</th>
            <th className="py-2 px-4 border-b text-left">Phone</th>
            <th className="py-2 px-4 border-b text-left">Message</th>
          </tr>
        </thead>
        <tbody>
          {displayedData.length > 0 ? (
            displayedData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{item.name}</td>
                <td className="py-2 px-4 border-b">{item.phone}</td>
                <td className="py-2 px-4 border-b">{item.message}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="text-center py-4">
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"flex justify-center mt-4"}
        pageClassName={"mx-1"}
        pageLinkClassName={"px-3 py-1 border border-gray-300 rounded"}
        previousClassName={"mx-1"}
        nextClassName={"mx-1"}
        activeClassName={"bg-blue-500 text-white"}
        disabledClassName={"text-gray-400"}
      />
    </div>
  );
};

export default DataTable;

import React, { useEffect, useState } from "react";
import { handleSaveSystem } from "../utils";
import { interCustomerInterface } from "../interface";
import ConfirmDialogUpdate from "./confirmDialog";
import AddUserDialog from "./addUserDialog";

interface CustomerProps {
  Customer?: interCustomerInterface[];
}

const Customer: React.FC<CustomerProps> = ({ Customer = [] }) => {
  const [isClient, setIsClient] = useState(false);
  const [customer, setCustomer] = useState<interCustomerInterface[]>([]);
  const [updateMode, setUpdateMode] = useState(false);
  const [showDialogUpdate, setShowDialogUpdate] = useState(false);
  const [showAddUserDialog, setShowAddUserDialog] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setCustomer(Customer);
  }, [Customer]);

  if (!isClient) {
    return null;
  }

  const handleConfirmUpdate = async () => {
    await handleSaveSystem(customer);
    setShowDialogUpdate(false);
  };

  const deleteUser = (id: number) => {
    setCustomer(customer.filter((item) => item.id !== id));
  };

  const handleCancelUpdate = () => {
    setShowDialogUpdate(false);
    setCustomer(Customer ?? []);
  };

  const handleAddUser = async (user: interCustomerInterface) => {
    const updatedCustomer = [...customer, user];
    setCustomer(updatedCustomer);
    setShowAddUserDialog(false);
    await handleSaveSystem(updatedCustomer);
  };

  const handleCancelAddUser = () => {
    setShowAddUserDialog(false);
  };

  return (
    <div className="p-8 bg-gradient-to-br from-white to-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Customer Management
      </h1>
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setShowAddUserDialog(true)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition duration-300"
        >
          Create New Customer
        </button>

        <AddUserDialog
          isOpen={showAddUserDialog}
          onAdd={handleAddUser}
          onCancel={handleCancelAddUser}
          code={customer.length + 1}
        />

        <button
          className={`${
            updateMode ? "bg-blue-500" : "bg-yellow-500"
          } text-white px-4 py-2 rounded-lg shadow hover:bg-opacity-80 transition duration-300`}
          onClick={() => {
            if (updateMode) {
              setShowDialogUpdate(true);
            }
            setUpdateMode(!updateMode);
          }}
        >
          {updateMode ? "Save Changes" : "Enter Update Mode"}
        </button>

        <ConfirmDialogUpdate
          isOpen={showDialogUpdate}
          onConfirm={handleConfirmUpdate}
          onCancel={handleCancelUpdate}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Code</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Phone</th>
              <th className="py-3 px-6 text-left">Confirmed</th>
              {updateMode && <th className="py-3 px-6 text-left">Action</th>}
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {customer.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-300 hover:bg-gray-100 transition duration-150"
              >
                <td className="py-3 px-6 text-left">{item.id}</td>
                <td className="py-3 px-6 text-left">{item.name}</td>
                <td className="py-3 px-6 text-left">{item.phone}</td>
                <td className="py-3 px-6 text-left">
                  {item.confirmed ? "True" : "False"}
                </td>
                {updateMode && (
                  <td className="py-3 px-6 text-left">
                    <button
                      className="text-red-500 hover:text-red-700 transition duration-200"
                      onClick={() => deleteUser(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customer;

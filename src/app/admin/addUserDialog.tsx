import React, { useState } from "react";

interface AddUserDialogProps {
  isOpen: boolean;
  onAdd: (user: {
    id: number;
    name: string;
    phone: string;
    confirmed: boolean;
  }) => void;
  onCancel: () => void;
  code: number;
}

const AddUserDialog: React.FC<AddUserDialogProps> = ({
  isOpen,
  onAdd,
  onCancel,
  code,
}) => {
  const [id, setId] = useState(code);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleAdd = () => {
    onAdd({ id, name, phone, confirmed });
    setId(id + 1);
    setName("");
    setPhone("");
    setConfirmed(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded shadow-lg">
        <h2 className="text-lg font-bold mb-4">Add New User</h2>
        <div className="mb-2">
          <label className="block mb-1">ID:</label>
          <input
            type="text"
            value={id}
            readOnly={true}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Confirmed:</label>
          <input
            type="checkbox"
            checked={confirmed}
            onChange={(e) => setConfirmed(e.target.checked)}
          />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200 mr-2"
            onClick={handleAdd}
          >
            Add
          </button>
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition duration-200"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUserDialog;

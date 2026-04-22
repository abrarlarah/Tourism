// components/Modals.jsx
import React, { useState, useEffect } from 'react';

const Modals = ({ selectedItem, type, onClose, onSave }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [days, setDays] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (selectedItem) {
      setName(selectedItem.name);
      setDescription(selectedItem.description || '');
      setPrice(selectedItem.price || '');
      setDays(selectedItem.days || '');
      setImage(null); // Reset image input for new uploads
    } else {
      setName('');
      setDescription('');
      setPrice('');
      setDays('');
      setImage(null);
    }
  }, [selectedItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemData = {
      id: selectedItem ? selectedItem.id : undefined,
      name,
      description: type === 'destinations' ? description : undefined,
      price: type === 'packages' ? price : undefined,
      days: type === 'packages' ? days : undefined,
      image: selectedItem ? selectedItem.image : null,
    };
    onSave(itemData, image);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">
          {selectedItem ? `Edit ${type.slice(0, -1)}` : `Add ${type.slice(0, -1)}`}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded mt-2"
              required
            />
          </div>
          {type === 'destinations' && (
            <div className="mb-4">
              <label className="block text-gray-700">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded mt-2"
                required
              ></textarea>
            </div>
          )}
          {type === 'packages' && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700">Price</label>
                <input
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Days</label>
                <input
                  type="text"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
            </>
          )}
          <div className="mb-4">
            <label className="block text-gray-700">Image</label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full px-4 py-2 border border-gray-300 rounded mt-2"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {selectedItem ? 'Update' : 'Add'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modals;

// pages/admin/Destinations.jsx
import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/AdminLayout';
import Modals from '../../components/Modals';
import { supabase } from '../../utils/supabaseClient';

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    const { data, error } = await supabase.from('destinations').select('*');
    if (error) {
      console.error('Error fetching destinations:', error);
    } else {
      setDestinations(data);
    }
  };

  const handleEdit = (destination) => {
    setSelectedDestination(destination);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    const { error } = await supabase.from('destinations').delete().eq('id', id);
    if (error) {
      console.error('Error deleting destination:', error);
    } else {
      fetchDestinations();
    }
  };

  const handleSave = async (newDestination, imageFile) => {
    // ❌ Remove any unused imageData
    let imageUrl = newDestination.image;
  
    if (imageFile) {
      const fileName = `${Date.now()}_${imageFile.name}`;
      const { error: uploadError } = await supabase.storage
        .from('destination-images')
        .upload(fileName, imageFile);
  
      if (uploadError) {
        console.error('Error uploading image:', uploadError);
        return;
      }
  
      imageUrl = `${supabase.storageUrl}/destination-images/${fileName}`;
    }
  
    const { error } = newDestination.id
      ? await supabase
          .from('destinations')
          .update({ name: newDestination.name, description: newDestination.description, image: imageUrl })
          .eq('id', newDestination.id)
      : await supabase.from('destinations').insert({ name: newDestination.name, description: newDestination.description, image: imageUrl });
  
    if (error) {
      console.error('Error saving destination:', error);
    } else {
      fetchDestinations();
    }
  
    setModalOpen(false);
  };
  
  return (
    <AdminLayout>
      <h2 className="text-3xl font-bold text-yellow-500 mb-6">Manage Destinations</h2>
      <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg" onClick={() => setModalOpen(true)}>
        Add Destination
      </button>
      <div className="overflow-x-auto">
        <table className="min-w-full mt-4 bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {destinations.map((dest) => (
              <tr key={dest.id}>
                <td className="px-4 py-2">{dest.name}</td>
                <td className="px-4 py-2">{dest.description}</td>
                <td className="px-4 py-2">
                  <button className="text-yellow-500 mr-2" onClick={() => handleEdit(dest)}>
                    Edit
                  </button>
                  <button className="text-red-500" onClick={() => handleDelete(dest.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <Modals
          selectedItem={selectedDestination}
          type="destinations"
          onClose={() => setModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </AdminLayout>
  );
};

export default Destinations;

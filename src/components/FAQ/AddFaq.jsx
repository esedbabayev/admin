import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddFaq = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
  
    const handleAddFaq = async (e) => {
      e.preventDefault();
  
      try {
        const newFaq = {
            title,
            description,
        };
  
        const response = await fetch('http://localhost:8000/faq', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newFaq),
        });
  
        if (!response.ok) {
          throw new Error('Failed to add faq');
        }
  
        // Clear form fields
        setTitle('');
        setDescription('');

  
        // Redirect or show success message
        navigate('/faqs');
      } catch (err) {
        console.error(err);
        alert('An error occurred while adding the faq.');
      }
    };
  
    return (
      <div className="my-8 mx-8">
        <form onSubmit={handleAddFaq} className="mb-8">
          <div className="grid grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="title" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              className="border p-2" 
              required 
            />
            <input 
              type="text" 
              placeholder="Description" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              className="border p-2" 
              required 
            />
       
           
          </div>
          <button 
            type="submit" 
            className="mt-4 p-2 relative h-[50px] w-40 overflow-hidden border border-green-900 bg-white text-green-900 shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-green-900 before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-green-900 after:duration-500 hover:text-white hover:shadow-green-900 hover:before:h-2/4 hover:after:h-2/4"
          >
            <span className="relative z-10">Add Faq</span>
          </button>
        </form>
      </div>
    );
  };
export default AddFaq

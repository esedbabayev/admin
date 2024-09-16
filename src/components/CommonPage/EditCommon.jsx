import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditCommon = () => {
    const navigate = useNavigate();
    const { _id } = useParams(); // URL'den kategori ID'sini al
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        content: '',
        code: '',
    });

    // Belirli ID'ye sahip kategori verilerini al
    const getCommonById = async (id) => {
        try {
            const resp = await fetch(`http://localhost:8000/common/${id}`);
            if (!resp.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await resp.json();
            setFormData(data);
        } catch (error) {
            console.error('Error fetching common:', error);
        }
    };

    useEffect(() => {
        getCommonById(_id);
    }, [_id]);

    // Form verilerindeki değişiklikleri işleyin
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Formu gönderme işlemi
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const updatedData = {
                title: formData.title,
                description: formData.description,
                content: formData.content,
                code: formData.code,
            };

            const response = await fetch(`http://localhost:8000/common/${_id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData),
            });

            if (!response.ok) {
                throw new Error('Failed to update common');
            }

            navigate('/commons'); // Başarıyla güncelleme sonrası yönlendirme
        } catch (error) {
            console.error('Error updating common:', error);
        }
    };

    return (
        <div className="my-8 mx-8">
            <form onSubmit={handleSubmit} className="mb-8">
                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="Title"
                        className="border px-4"
                        required
                    />
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Description"
                        className="border px-4"
                        required
                    />
                    <input
                        type="text"
                        name="content"
                        value={formData.content}
                        onChange={handleInputChange}
                        placeholder="Content"
                        className="border px-4"
                        required
                    />
                    <input
                        type="text"
                        name="code"
                        value={formData.code}
                        onChange={handleInputChange}
                        placeholder="Code"
                        className="border px-4"
                        required
                    />
                </div>
                <button 
                    type='submit' 
                    className="mt-4 relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-800 text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56"
                >
                    <span className="relative z-10">Update Common</span>
                </button>
            </form>
        </div>
    );
}

export default EditCommon;

import React, { useState } from 'react';
import './Home.css';

const StudentSubmissionForm = () => {


    const [formData, setFormData] = useState({
        prn: '',
        name: '',
        contact: '',
        email: '',
        content: '',
        language: '',
        file: null
    });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, file: e.target.files[0] });
    };


        const handleSubmit = async (e) => {
            e.preventDefault();

            // Create a FormData object to handle file upload
            const data = new FormData();
            data.append('prn', formData.prn);
            data.append('name', formData.name);
            data.append('contact', formData.contact);
            data.append('email', formData.email);
            data.append('content', formData.content);
            data.append('language', formData.language);
            if (formData.file) {
                data.append('file', formData.file);
            }

            try {
                // Replace the URL with your server endpoint
                const response = await fetch('https://your-api-endpoint.com/submit', {
                    method: 'POST',
                    body: data,
                });

                if (response.ok) {
                    console.log('Form submitted successfully!');
                    // Reset form after successful submission
                    setFormData({
                        prn: '',
                        name: '',
                        contact: '',
                        email: '',
                        content: '',
                        language: '',
                        file: null,
                    });
                } else {
                    console.error('Error submitting form:', response.statusText);
                }
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        };


    return (
        <>
        <div className='font-black'>
            hi there how 
        </div>
        <form onSubmit={handleSubmit} className='h-200'>
                <div>
                    <label className='mt-2 bg-red'>PRN:</label>
                    <input
                        type="text"
                        name="prn"
                        onChange={handleChange}
                        placeholder="PRN number" required />
                </div>


            <div>
                <label>Name:</label>
            <input 
                type="text" 
                name="name" 
                onChange={handleChange} 
                placeholder="Name" required />
            </div>

            <div>
                <label>Contact:</label>
            <input 
                type="number" 
                name="contact" 
                onChange={handleChange} 
                placeholder="Contact" required />
            </div>

            <div>
                <label>Email:</label>
            <input 
                type="email" 
                name="email" 
                onChange={handleChange} 
                placeholder="Email" required />
            </div>

            <div>
                <label>Content:</label>
            <input 
                type="text" 
                name="content" 
                onChange={handleChange} 
                placeholder="Content" required />
            </div>

            <div>
                <label>Language:</label>
            <input 
                type="text" 
                name="language" 
                onChange={handleChange} 
                placeholder="Content Language" required />
            </div>

            <div>
                <label>File:</label>
            <input 
                type="text" 
                name="prn" 
                onChange={handleChange} 
                placeholder="PRN number" required />
            </div>

                <div>
                    <label>Upload File:</label>
                    <input
                        type="file"
                        name="file"
                        onChange={handleFileChange}
                         />
                </div>

            <button type="submit">Submit</button>
        </form>
        </>
    );
};

export default StudentSubmissionForm;

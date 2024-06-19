import React, { useState } from 'react';

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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send formData to backend for verification and storage
        console.log(formData);
        // Reset form after submission
        setFormData({
            prn: '',
            name: '',
            contact: '',
            email: '',
            content: '',
            language: '',
            file: null
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="prn" value={formData.prn} onChange={handleChange} placeholder="PRN number" required />
            {/* Other input fields */}
            <button type="submit">Submit</button>
        </form>
    );
};

export default StudentSubmissionForm;

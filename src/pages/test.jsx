

import React, { useState } from 'react';
import './Home.css';

const Testing1 = () => {

     
    const [formData, setFormData] = useState({
        prn: '',
        name: '',
        contact: '',
        email: '',
        content: '',
        language: '',
        file: null
    });


    return(
        <>
        <h1>
            hkjhjafhnajlsdf
        </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>PRN:</label>
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
                        placeholder="Upload File" required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )

   
};

export default Testing1;

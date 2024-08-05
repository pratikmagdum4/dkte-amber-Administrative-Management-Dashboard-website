import React, { useState } from 'react';
import Navbar from '../../navbar/Navbar';
import { HomeLink } from '../../../components/variables/variables';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from '../../../api';
const ImageForm = () => {
  const [formData, setFormData] = useState({
    stdname: '',
    contact: '',
    email: '',
    prn: '',
    branch: '',
    year: '',
    title: '',
    imageUrl: null,
    selfImage: null,
    isVerified: false,
    imageType:''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    stdname: '',
    contact: '',
    email: '',
    prn: '',
    branch: '',
    year: '',
    title: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };
  const validate = () => {
    let errors = {};

    if (!formData.stdname) {
      errors.stdname = 'Name is required';
    } else if (formData.stdname.length < 3) {
      errors.stdname = 'Name must be at least 3 characters';
    }

    const contactPattern = /^\d{10}$/;
    if (!formData.contact) {
      errors.contact = 'Contact number is required';
    } else if (!contactPattern.test(formData.contact)) {
      errors.contact = 'Contact number must be a valid 10-digit number';
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!emailPattern.test(formData.email)) {
      errors.email = 'Email must be a valid email address';
    }

    if (!formData.prn) {
      errors.rollNumber = 'PRN is required';
    }

    if (!formData.branch) {
      errors.branch = 'Branch is required';
    }

    const validYears = ['1', '2', '3', '4'];
    if (!formData.year) {
      errors.year = 'Year is required';
    } else if (!validYears.includes(formData.year)) {
      errors.year = 'Year must be one of: 1, 2, 3, 4';
    }

    if (!formData.title) {
      errors.title = 'Title is required';
    } else if (formData.title.length < 3) {
      errors.title = 'Title must be at least 3 characters';
    }

    if (!formData.image) {
      errors.image = 'Image is required';
    } else if (!formData.image.type.startsWith('image/')) {
      errors.image = 'File must be an image';
    } else if (formData.image.size > 10 * 1024 * 1024) { // 2MB limit
      errors.image = 'Image must be less than 2MB';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true)
    if (!validate()) {
      return;
    }

    const formDataObj = new FormData();
    Object.keys(formData).forEach(key => {
      formDataObj.append(key, formData[key]);
    });

    try {

      const response = await axios.post(`${BASE_URL}/api/submit/imgupload`, formDataObj, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert("upload successfully")
      toast.success("Form Submitted Successfully");
      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
      
    }
    finally {
      setIsSubmitting(false);
    }
  };


  return (
    <>
      <Navbar links={HomeLink} />

      <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">

        <h2 className="text-2xl font-bold mb-6">Image Submission Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-left text-sm font-medium text-gray-700">Student Name:</label>
            <input
              type="text"
              name="stdname"
              value={formData.stdname}
              onChange={handleChange}
              required
              className={`mt-1 block w-full px-3 py-2 border ${errors.stdname ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {errors.stdname && <p className="text-red-500 text-xs mt-1">{errors.stdname}</p>}
          </div>
          <div>
            <label className="block text-left text-sm font-medium text-gray-700">Contact:</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              className={`mt-1 block w-full px-3 py-2 border ${errors.contact ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {errors.contact && <p className="text-red-500 text-xs mt-1">{errors.contact}</p>}
          </div>
          <div>
            <label className="block text-left text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-left text-sm font-medium text-gray-700">Roll Number:</label>
            <input
              type="text"
              name="prn"
              value={formData.prn}
              onChange={handleChange}
              required
              className={`mt-1 block w-full px-3 py-2 border ${errors.prn ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {<errors className="prn"></errors> && <p className="text-red-500 text-xs mt-1">{errors.prn}</p>}
          </div>
          <div>
            <label className="block text-left text-sm font-medium text-gray-700">Branch:</label>
            <input
              type="text"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              required
              className={`mt-1 block w-full px-3 py-2 border ${errors.branch ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {errors.branch && <p className="text-red-500 text-xs mt-1">{errors.branch}</p>}
          </div>
          <div>
            <label className="block text-left text-sm font-medium text-gray-700">Year:</label>
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
              className={`mt-1 block w-full px-3 py-2 border ${errors.year ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            >
              <option value="" disabled>Select Year</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            {errors.year && <p className="text-red-500 text-xs mt-1">{errors.year}</p>}
          </div>
          <div>
            <label className="block text-left text-sm font-medium text-gray-700">Image Type Sketch or PhotoGraphy:</label>
            <select
              name="imageType"
              value={formData.imageType}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="sketch">Sketch</option>
              <option value="photography">PhotoGraphy</option>
             
            </select>
          </div>
          <div>
            <label className="block text-left text-sm font-medium text-gray-700">Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className={`mt-1 block w-full px-3 py-2 border ${errors.title ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
          </div>
          <div>
            <label className="block text-left text-sm font-medium text-gray-700">Self Image:</label>
            <input
              type="file"
              name="selfImage"
              accept="image/*"
              onChange={handleChange}
              required
              className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-left text-sm font-medium text-gray-700">Image:</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              required
              className={`mt-1 block w-full px-3 py-2 border ${errors.image ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${isSubmitting ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </>
  );
};

export default ImageForm;

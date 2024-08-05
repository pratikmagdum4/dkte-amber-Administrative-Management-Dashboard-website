import React, { useState } from 'react';
import Navbar from '../../navbar/Navbar';
import { HomeLink } from '../../../components/variables/variables';
import axios from 'axios';
import { BASE_URL } from '../../../api';

const ArticleForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    stdname: '',
    prn: '',
    email: '',
    contact: '',
    branch: '',
    year: '',
    language: 'english',
    content: null,
    selfImage: null,
    isVerified: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Form Data Submitted:', formData);
    const formDataObj = new FormData();
    Object.keys(formData).forEach(key => {
      formDataObj.append(key, formData[key]);
    });

    try {
      const response = await axios.post(`${BASE_URL}/api/submit/article`, formDataObj, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert("Success!");
      console.log('Server response:', response.data);
      setIsSubmitting(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar links={HomeLink} />
      <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-6">Article Submission Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Form fields */}
          <div>
            <label className="block text-left text-sm font-medium text-gray-700">Student Name:</label>
            <input
              type="text"
              name="stdname"
              value={formData.stdname}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <label className="block text-left text-sm font-medium text-gray-700">PRN:</label>
            <input
              type="text"
              name="prn"
              value={formData.prn}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <label className="block text-left text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <label className="block text-left text-sm font-medium text-gray-700">Contact:</label>
            <input
              type="number"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <label className="block text-left text-sm font-medium text-gray-700">Branch:</label>
            <input
              type="text"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <div>
              <label className="block text-left text-sm font-medium text-gray-700">Year:</label>
              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="" disabled>Select Year</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <label className="block text-left text-sm font-medium text-gray-700">Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-left text-sm font-medium text-gray-700">Language:</label>
            <select
              name="language"
              value={formData.language}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="marathi">Marathi</option>
            </select>
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
            <label className="block text-left text-sm font-medium text-gray-700">Article File (Word File):</label>
            <input
              type="file"
              name="content"
              onChange={handleChange}
              required
              className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'}`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </>
  );
};

export default ArticleForm;

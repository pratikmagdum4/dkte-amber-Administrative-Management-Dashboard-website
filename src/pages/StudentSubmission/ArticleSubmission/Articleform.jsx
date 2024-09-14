import React, { useEffect, useState } from 'react';
import Navbar from '../../navbar/Navbar';
import { HomeLink } from '../../../components/variables/variables';
import axios from 'axios';
import { BASE_URL } from '../../../api';
import { toast } from 'react-toastify';

const ArticleForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    stdname: '',
    prn: '',
    email: '',
    contact: '',
    branch: '',
    year: '',
    articleType: '',
    language: 'english',
    content: null,
    contentPdf: null,
    selfImage: null,
    isVerified: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    const { content, contentPdf, selfImage, stdname, branch } = formData;

    // Function to update file name
    const updateFileName = (file) => {
      if (file && stdname && branch) {
        const newFileName = `${stdname},${branch.toUpperCase()}`;
    
        return new File([file], newFileName, { type: file.type });
      }
      return file;
    };

    setFormData((prevFormData) => ({
      ...prevFormData,
      content: updateFileName(content),
      contentPdf: updateFileName(contentPdf),
      selfImage: updateFileName(selfImage),
    }));
  }, [formData.stdname, formData.branch]);
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setFormData({
        ...formData,
        [name]: files[0],
      });
      // if (formData.content) {
      //  console.log("The name of file is ", formData.content.name);
      // }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (!formData.content || !formData.contentPdf || !formData.selfImage) {
      
      alert("Please upload all required files")
      toast.error("Please upload all required files");
      setIsSubmitting(false);
      return;
    }
   
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
      toast.success("Data submitted successfully")
      alert("Data submitted successfully!");
      
      setIsSubmitting(false);
      setFormData({
        title: '',
        stdname: '',
        prn: '',
        email: '',
        contact: '',
        branch: '',
        year: '',
        articleType: '',
        language: 'english',
        content: null,
        contentPdf: null,
        selfImage: null,
        isVerified: false,
      });
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
            {/* <input
              type="text"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            /> */}
            <select
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >

              <option value="" disabled>Select Year</option>
              <option value="cse">Computer Science & Engineering</option>
              <option value="aiml">Computer Science(AIML)</option>
              <option value="aids">Artificial Intelligence and Data Science</option>
              <option value="antc">Electronics and Telecommunication Engineering</option>
              <option value="ele">Electrical Engineering </option>
              <option value="mech">Mechanical Engineering</option>
              <option value="civil">Civil Engineering</option>
              <option value="tt">Textile Technology</option>
              <option value="tc">Textile Chemistry</option>
              <option value="tp">Textile Plant Engineering</option>
              <option value="mmtt">Man-Made Textile Technology</option>
              <option value="ft">Fashion Technology</option>
              <option value="diploma">Diploma</option>
              <option value="mba">MBA Technology</option>

            </select>
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
              <option value="">Select</option>
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="marathi">Marathi</option>
            </select>
          </div>
          <div>
            <label className="block text-left text-sm font-medium text-gray-700">Type (Article or Poem):</label>
            <select
              name="articleType"
              value={formData.articleType}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select</option>
              <option value="sketch">Article</option>
              <option value="photography">Poem</option>

            </select>
          </div>
          <div>
            <label className="block text-left text-sm font-medium text-gray-700">Your Photo :</label>
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
            <label className="block text-left text-sm font-medium text-gray-700">Submit Both Files pdf and docx:</label>
            <label className="block text-left text-sm font-medium text-gray-700"> Article File (Only Word File Accepted here):</label>
            <input
              type="file"
              name="content"
              accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={handleChange}
              required
              className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-left text-sm font-medium text-gray-700"> Article File (Only PDF File Accepted here):</label>
            <input
              type="file"
              name="contentPdf"
              accept=".pdf"
              onChange={handleChange}
              required
              className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <a
              href={"https://www.ilovepdf.com/pdf_to_word"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2  bg-blue-500 text-white rounded"
            >
              Convert PDF to word File
            </a>
          </div>
          <div>
            <a
              href={"https://www.ilovepdf.com/word_to_pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Convert Word File to PDF
            </a>
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

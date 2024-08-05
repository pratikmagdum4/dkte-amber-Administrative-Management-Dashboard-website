import React, { useReducer } from 'react';
import Navbar from '../../navbar/Navbar';
import { HomeLink } from '../../../components/variables/variables';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from '../../../api';

const initialState = {
  formData: {
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
    imageType: ''
  },
  errors: {
    stdname: '',
    contact: '',
    email: '',
    prn: '',
    branch: '',
    year: '',
    title: '',
    image: ''
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FORM_DATA':
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.name]: action.value
        }
      };
    case 'SET_ERRORS':
      return {
        ...state,
        errors: action.errors
      };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
};

const ImageForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    dispatch({
      type: 'SET_FORM_DATA',
      name,
      value: files ? files[0] : value
    });
  };

  const validate = () => {
    let errors = {};

    if (!state.formData.stdname) {
      errors.stdname = 'Name is required';
    } else if (state.formData.stdname.length < 3) {
      errors.stdname = 'Name must be at least 3 characters';
    }

    const contactPattern = /^\d{10}$/;
    if (!state.formData.contact) {
      errors.contact = 'Contact number is required';
    } else if (!contactPattern.test(state.formData.contact)) {
      errors.contact = 'Contact number must be a valid 10-digit number';
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!state.formData.email) {
      errors.email = 'Email is required';
    } else if (!emailPattern.test(state.formData.email)) {
      errors.email = 'Email must be a valid email address';
    }

    if (!state.formData.prn) {
      errors.prn = 'PRN is required';
    }

    if (!state.formData.branch) {
      errors.branch = 'Branch is required';
    }

    const validYears = ['1', '2', '3', '4'];
    if (!state.formData.year) {
      errors.year = 'Year is required';
    } else if (!validYears.includes(state.formData.year)) {
      errors.year = 'Year must be one of: 1, 2, 3, 4';
    }

    if (!state.formData.title) {
      errors.title = 'Title is required';
    } else if (state.formData.title.length < 3) {
      errors.title = 'Title must be at least 3 characters';
    }

    if (!state.formData.image) {
      errors.image = 'Image is required';
    } else if (!state.formData.image.type.startsWith('image/')) {
      errors.image = 'File must be an image';
    } else if (state.formData.image.size > 10 * 1024 * 1024) { // 2MB limit
      errors.image = 'Image must be less than 2MB';
    }

    dispatch({ type: 'SET_ERRORS', errors });
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const formDataObj = new FormData();
    Object.keys(state.formData).forEach(key => {
      formDataObj.append(key, state.formData[key]);
    });

    try {
      const response = await axios.post(`${BASE_URL}/api/submit/imgupload`, formDataObj, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert("upload successfully")
      toast.success("Form Submitted Successfully");
      console.log('Server response:', response.data);
      dispatch({ type: 'RESET_FORM' });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <Navbar links={HomeLink} />
      <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-6">Image Submission Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {Object.keys(state.formData).map((key) => {
            if (key === 'imageType' || key === 'year') {
              return (
                <div key={key}>
                  <label className="block text-left text-sm font-medium text-gray-700">{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
                  <select
                    name={key}
                    value={state.formData[key]}
                    onChange={handleChange}
                    required
                    className={`mt-1 block w-full px-3 py-2 border ${state.errors[key] ? 'border-red-500' : 'border-gray-300'
                      } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  >
                    {key === 'imageType' ? (
                      <>
                        <option value="sketch">Sketch</option>
                        <option value="photography">Photography</option>
                      </>
                    ) : (
                      <>
                        <option value="" disabled>Select Year</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </>
                    )}
                  </select>
                  {state.errors[key] && <p className="text-red-500 text-xs mt-1">{state.errors[key]}</p>}
                </div>
              );
            }

            if (key === 'selfImage' || key === 'image') {
              return (
                <div key={key}>
                  <label className="block text-left text-sm font-medium text-gray-700">{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
                  <input
                    type="file"
                    name={key}
                    accept="image/*"
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  {state.errors[key] && <p className="text-red-500 text-xs mt-1">{state.errors[key]}</p>}
                </div>
              );
            }

            return (
              <div key={key}>
                <label className="block text-left text-sm font-medium text-gray-700">{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
                <input
                  type={key === 'email' ? 'email' : 'text'}
                  name={key}
                  value={state.formData[key]}
                  onChange={handleChange}
                  required
                  className={`mt-1 block w-full px-3 py-2 border ${state.errors[key] ? 'border-red-500' : 'border-gray-300'
                    } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
                {state.errors[key] && <p className="text-red-500 text-xs mt-1">{state.errors[key]}</p>}
              </div>
            );
          })}
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default ImageForm;

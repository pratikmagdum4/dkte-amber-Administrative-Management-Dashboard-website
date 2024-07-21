import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../../navbar/Navbar';
import { HomeLink } from '../../../../components/variables/variables';
import { BASE_URL } from '../../../../api';

const ImgUploadList = () => {
    const [imgUploads, setImgUploads] = useState([]);

    useEffect(() => {
        const fetchImgUploads = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/imgupload/get`);
                const imgUploads = response.data.map(imgUpload => ({
                    ...imgUpload,
                }));
                setImgUploads(imgUploads);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchImgUploads();
    }, []);

    return (
        <>
            <Navbar links={HomeLink} />
            <div className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-bold mb-6">Submitted Articles</h2>
                {imgUploads.length === 0 ? (
                    <p>No articles found.</p>
                ) : (
                    <div className="space-y-6">
                        {imgUploads.map((imgUpload) => (
                            <div key={imgUpload._id} className="p-4 border rounded-md shadow-sm grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="col-span-1 flex flex-col items-center">
                                    {imgUpload.selfImage && (
                                        <img
                                            src={`${imgUpload.selfImage}`}
                                            alt="Self"
                                            className="w-32 h-32 object-cover rounded-full md:w-48 md:h-48"
                                        />
                                    )}
                                    <div className="mt-4 text-center">
                                        <h3 className="text-xl font-bold">{imgUpload.title}</h3>
                                        <p className="text-gray-600">By {imgUpload.stdname}</p>
                                        <p className="text-gray-600">Email: {imgUpload.email}</p>
                                        <p className="text-gray-600">Contact: {imgUpload.contact}</p>
                                        <p className="text-gray-600">Branch: {imgUpload.branch}</p>
                                        <p className="text-gray-600">Year: {imgUpload.year}</p>
                                        <p className="text-gray-600">Language: {imgUpload.language}</p>
                                    </div>
                                </div>
                                <div className="col-span-1 md:col-span-2">
                                    <div className="flex justify-center items-center h-full">
                                        {imgUpload.imageUrl && (
                                            <img
                                                src={`${imgUpload.imageUrl}`}
                                                alt="Uploaded"
                                                className="w-100 h-100 object-cover rounded-md mt-4" // 100px width and height
                                            />
                                        )}  
                                    </div>
                                    {/* <div className="mt-4">
                                        <p>{imgUpload.content}</p>
                                    </div> */}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default ImgUploadList;

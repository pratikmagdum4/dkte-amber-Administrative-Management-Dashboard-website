import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../../navbar/Navbar';
import { AdminVerifyLink } from '../../../../components/variables/variables';
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
                console.error('Error fetching images:', error);
            }
        };

        fetchImgUploads();
    }, []);

    const handleVerify = async (id, isVerified) => {
        try {
            await axios.patch(`${BASE_URL}/api/imgupload/verify/${id}`, { isVerified });
            setImgUploads(prevImgUploads =>
                prevImgUploads.map(imgUpload =>
                    imgUpload._id === id ? { ...imgUpload, isVerified } : imgUpload
                )
            );
        } catch (error) {
            console.error('Error verifying image upload:', error);
        }
    };

    return (
        <>
            <Navbar links={AdminVerifyLink} />
            <div className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-bold mb-6">Submitted Images</h2>
                {imgUploads.length === 0 ? (
                    <p>No images found.</p>
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
                                        <p className="text-gray-600">Verified: {imgUpload.isVerified ? 'Yes' : 'No'}</p>
                                        <button
                                            className={`mt-2 px-4 py-2 rounded ${imgUpload.isVerified ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}
                                            onClick={() => handleVerify(imgUpload._id, !imgUpload.isVerified)}
                                        >
                                            {imgUpload.isVerified ? 'Unverify' : 'Verify'}
                                        </button>
                                    </div>
                                </div>
                                <div className="col-span-1 md:col-span-2">
                                    <div className="flex justify-center items-center h-full">
                                        {imgUpload.imageUrl && (
                                            <div className="flex flex-col items-center">
                                                <img
                                                    src={`${imgUpload.imageUrl}`}
                                                    
                                                    alt="Uploaded"
                                                    className="w-full h-full object-cover rounded-md mt-4"
                                                />
                                                <a
                                                    href={imgUpload.imageUrl}
                                                    
                                                    download={`${imgUpload.stdname},${imgUpload.branch}`}
                                                    target="_blank"
                                                    className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
                                                >
                                                    Download
                                                </a>
                                            </div>
                                        )}
                                    </div>
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

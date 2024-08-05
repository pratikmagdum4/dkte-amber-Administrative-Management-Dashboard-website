import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { AdminDisplayLink } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';

const ImageDisplayList = () => {
    const [imageList, setImageList] = useState([]);
    const [imageType, setImageType] = useState('all');
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/imgupload/getverified`, {
                    params: { imageType: imageType !== 'all' ? imageType : '' }
                });
                const images = response.data.map(image => ({
                    ...image,
                    selfImage: image.selfImage.replace(/^"|"$/g, '') // Remove extra quotes from URL
                }));
                setImageList(images);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, [imageType]);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth <= 640);
        };
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (
        <>
            <Navbar links={AdminDisplayLink} />
            <div className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-bold mb-6">Submitted Images</h2>
                <div className="mb-4">
                    <label htmlFor="imageType" className="block text-sm font-medium text-gray-700">Filter by Type</label>
                    <select
                        id="imageType"
                        value={imageType}
                        onChange={(e) => setImageType(e.target.value)}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                        <option value="all">All</option>
                        <option value="sketch">Sketch</option>
                        <option value="photography">Photography</option>
                    </select>
                </div>
                {imageList.length === 0 ? (
                    <p>No images found.</p>
                ) : (
                    <div className="space-y-6">
                        {imageList.map((image) => (
                            <div key={image._id} className="p-4 border rounded-md shadow-sm grid grid-cols-1 md:grid-cols-3 gap-4">
                                {isSmallScreen ? (<> 
                              
                                    <div className="col-span-2">
                                        <div className="col-span-1 flex justify-center items-center">
                                            <img
                                                src={`${image.selfImage}`}
                                                alt="Self"
                                                className="w-32 h-32 object-cover rounded-full md:w-48 md:h-48"
                                            />

                                        </div>
                                        <h3 className="text-xl font-bold">{image.title}</h3>
                                        <p className="text-gray-600">By {image.stdname}</p>
                                        <p className="text-gray-600">Email: {image.email}</p>
                                        <p className="text-gray-600">Contact: {image.contact}</p>
                                        <p className="text-gray-600">Branch: {image.branch}</p>
                                        <p className="text-gray-600">Year: {image.year}</p>
                                        <p className="text-gray-600">Type: {image.imageType}</p>
                                    </div>

                                    <div className="col-span-3 mt-4 flex space-x-4">

                                        <a
                                            href={`${image.imageUrl}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-blue-500 text-white rounded"
                                        >
                                            View
                                        </a>
                                        <a
                                            href={`${image.imageUrl}`}
                                            download={`${image.stdname},${image.branch}`}
                                            target="_blank"
                                            className="px-4 py-2 bg-green-500 text-white rounded"
                                        >
                                            Download
                                        </a>
                                    </div></>) : (<> <div className="col-span-1 flex justify-center items-center">
                                        <img
                                            src={`${image.selfImage}`}
                                            alt="Self"
                                            className="w-32 h-32 object-cover rounded-full md:w-48 md:h-48"
                                        />

                                    </div>
                                        <div className="col-span-2">

                                            <h3 className="text-xl font-bold">{image.title}</h3>
                                            <p className="text-gray-600">By {image.stdname}</p>
                                            <p className="text-gray-600">Email: {image.email}</p>
                                            <p className="text-gray-600">Contact: {image.contact}</p>
                                            <p className="text-gray-600">Branch: {image.branch}</p>
                                            <p className="text-gray-600">Year: {image.year}</p>
                                            <p className="text-gray-600">Type: {image.imageType}</p>
                                        </div>

                                        <div className="col-span-3 mt-4 flex space-x-4">

                                            <a
                                                href={`${image.imageUrl}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 bg-blue-500 text-white rounded"
                                            >
                                                View
                                            </a>
                                            <a
                                                href={`${image.imageUrl}`}
                                                download={`${image.stdname},${image.branch}`}
                                                target="_blank"
                                                className="px-4 py-2 bg-green-500 text-white rounded"
                                            >
                                                Download
                                            </a>
                                        </div></>)}
                               
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default ImageDisplayList;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { HomeLink } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';

const ImageDisplayList = () => {
    const [ImageList, setImageList] = useState([]);
    const [ImageType, setImageType] = useState('all');

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/imgupload/getverified`, {
                    params: { imageType: ImageType !== 'all' ? ImageType : '' }
                });
                const images = response.data.map(image => ({
                    ...image,
                    selfImage: image.selfImage.replace(/^"|"$/g, '')
                }));
                setImageList(images);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, [ImageType]);

    return (
        <>
            <Navbar links={HomeLink} />
            <div className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-bold mb-6">Submitted Technical Articles</h2>
                <div className="mb-4">
                    <label htmlFor="imageType" className="block text-sm font-medium text-gray-700">Filter by Type</label>
                    <select
                        id="imageType"
                        value={ImageType}
                        onChange={(e) => setImageType(e.target.value)}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                        <option value="all">All</option>
                        <option value="sketch">Sketch</option>
                        <option value="photography">Photography</option>
                    </select>
                </div>
                {ImageList.length === 0 ? (
                    <p>No articles found.</p>
                ) : (
                    <div className="space-y-6">
                        {ImageList.map((ImageComponent) => (
                            <div key={ImageComponent._id} className="p-4 border rounded-md shadow-sm grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="col-span-1 flex justify-center items-center">
                                    <img
                                        src={`${ImageComponent.selfImage}`}
                                        alt="Self"
                                        className="w-32 h-32 object-cover rounded-full md:w-48 md:h-48"
                                    />
                                </div>
                                <div className="col-span-2">
                                    <h3 className="text-xl font-bold">{ImageComponent.title}</h3>
                                    <p className="text-gray-600">By {ImageComponent.stdname}</p>
                                    <p className="text-gray-600">Email: {ImageComponent.email}</p>
                                    <p className="text-gray-600">Contact: {ImageComponent.contact}</p>
                                    <p className="text-gray-600">Branch: {ImageComponent.branch}</p>
                                    <p className="text-gray-600">Year: {ImageComponent.year}</p>
                                    <p className="text-gray-600">Type: {ImageComponent.imageType}</p>
                                </div>
                                <div className="col-span-3 mt-4">
                                    <p>{ImageComponent.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default ImageDisplayList;

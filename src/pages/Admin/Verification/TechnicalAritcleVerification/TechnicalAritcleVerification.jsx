import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../../navbar/Navbar';
import { AdminVerifyLink, FacultyVerifyLink } from '../../../../components/variables/variables';
import { BASE_URL } from '../../../../api';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentRole } from '../../../../redux/auth';

const TechArticleList = () => {
    const [techArticleList, setTechArticleList] = useState([]);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const role = useSelector(selectCurrentRole);
    let NavLinks;
    if (role === "faculty") {
        NavLinks = FacultyVerifyLink;
    }
    else {
        NavLinks = AdminVerifyLink
    }
    useEffect(() => {
        const fetchTechArticles = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/technical/get`);
                const articles = response.data.map(article => ({
                    ...article,
                    selfImage: article.selfImage ? article.selfImage.replace(/^"|"$/g, '') : '' // Remove extra quotes from URL or set empty string if null
                }));
               console.log("THe article ", articles)
                    
                setTechArticleList(articles);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchTechArticles();
    }, []);


    const handleVerify = async (id, isVerified) => {
        try {
            await axios.patch(`${BASE_URL}/api/technical/verify/${id}`, { isVerified });
            setTechArticleList(prevArticles =>
                prevArticles.map(article =>
                    article._id === id ? { ...article, isVerified } : article
                )
            );
        } catch (error) {
            console.error('Error verifying article:', error);
        }
    };

    const handleDelete = async (id) => {
        // Show a confirmation dialog to the user
        const confirmed = window.confirm('Are you sure you want to delete this article?');

        if (confirmed) {
            try {
                await axios.delete(`${BASE_URL}/api/technical/delete/${id}`);
                setTechArticleList(prevArticles => prevArticles.filter(article => article._id !== id));
                toast.success("Successfully deleted")
                alert("Successfully deleted")
            } catch (error) {
                console.error('Error deleting article:', error);
            }
        } else {
            // User canceled the deletion
            
        }
    };


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
            <Navbar links={NavLinks} />
            <div className="max-w-6xl mx-auto mt-14 p-6 bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-bold mb-6">Submitted Technical Articles</h2>
                {techArticleList.length === 0 ? (
                    <p>No articles found.</p>
                ) : (
                    <div className="space-y-6">
                        {techArticleList.map((article) => (
                            <div key={article._id} className="p-4 border rounded-md shadow-sm grid grid-cols-1 md:grid-cols-3 gap-4">
                                {isSmallScreen ? (
                                    <>
                                        <div className="col-span-2">
                                            <div className="col-span-1 flex justify-center items-center">
                                                <img
                                                    src={`${article.selfImage}`}
                                                    alt="Self"
                                                    className="w-32 h-32 object-cover rounded-full"
                                                />
                                            </div>
                                            <h3 className="text-xl font-bold">{article.title}</h3>
                                            <p className="text-gray-600">By {article.stdname}</p>
                                            <p className="text-gray-600">Email: {article.email}</p>
                                            <p className="text-gray-600">Contact: {article.contact}</p>
                                            <p className="text-gray-600">Branch: {article.branch}</p>
                                            <p className="text-gray-600">Year: {article.year}</p>
                                            <p className="text-gray-600">Language: {article.language}</p>
                                            <p className="text-gray-600">Verified: {article.isVerified ? 'Yes' : 'No'}</p>
                                            <button
                                                className={`mt-2 px-4 py-2 rounded ${article.isVerified ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}
                                                onClick={() => handleVerify(article._id, !article.isVerified)}
                                            >
                                                {article.isVerified ? 'Unverify' : 'Verify'}
                                            </button>
                                        </div>
                                        <div className="col-span-3 mt-4 flex justify-center">
                                            <div className="flex space-x-4 mt-2">
                                                <a
                                                    href={article.content}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-4 py-2 bg-blue-500 text-white rounded"
                                                >
                                                    View
                                                </a>
                                                <a
                                                    href={article.content}
                                                    target="_blank"
                                                    download={`${article.stdname},${article.branch}`}
                                                    className="px-4 py-2 bg-green-500 text-white rounded"
                                                >
                                                    Download
                                                </a>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="col-span-1 flex justify-center items-center md:justify-start">
                                            <img
                                                src={`${article.selfImage}`}
                                                alt="Self"
                                                className="w-32 h-32 object-cover rounded-full md:w-48 md:h-48"
                                            />
                                        </div>
                                        <div className="col-span-2 flex flex-col justify-between">
                                            <div>
                                                <h3 className="text-xl font-bold">{article.title}</h3>
                                                <p className="text-gray-600">By {article.stdname}</p>
                                                <p className="text-gray-600">Email: {article.email}</p>
                                                <p className="text-gray-600">Contact: {article.contact}</p>
                                                <p className="text-gray-600">Branch: {article.branch}</p>
                                                <p className="text-gray-600">Year: {article.year}</p>
                                                <p className="text-gray-600">Language: {article.language}</p>
                                                <p className="text-gray-600">Verified: {article.isVerified ? 'Yes' : 'No'}</p>
                                            </div>
                                            <button
                                                className={`mt-2 px-4 py-2 rounded self-start ${article.isVerified ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}
                                                onClick={() => handleVerify(article._id, !article.isVerified)}
                                            >
                                                {article.isVerified ? 'Unverify' : 'Verify'}
                                            </button>
                                        </div>
                                        <div className="col-span-3 mt-4 flex justify-center md:justify-start">
                                            <div className="flex space-x-4 mt-2">
                                                    <Link to={article.contentPdf} className="px-4 py-2 bg-blue-500 text-white rounded">
                                                        View
                                                    </Link>

                                                <a
                                                    href={article.content}
                                                    download={`${article.stdname},${article.branch}`}
                                                    // target="_blank"
                                                    className="px-4 py-2 bg-green-500 text-white rounded"
                                                >
                                                    Download
                                                </a>
                                                <button
                                                    className="px-4 py-2 bg-red-500 text-white rounded"
                                                    onClick={() => handleDelete(article._id)}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default TechArticleList;

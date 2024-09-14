import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../../navbar/Navbar';
import { AdminVerifyLink, departmentMapping } from '../../../../components/variables/variables';
import { BASE_URL } from '../../../../api';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const ArticleList = () => {
    const [ArticleList, setArticleList] = useState([]);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/article/get`);
                const articles = response.data.map(article => ({
                    ...article,
                    if(article) {
                        selfImage: article.selfImage.replace(/^"|"$/g, '')
                    }

                }));
                setArticleList(articles);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchArticles();
    }, []);

    const handleVerify = async (id, isVerified) => {
        try {
            await axios.patch(`${BASE_URL}/api/article/verify/${id}`, { isVerified });
            setArticleList(prevArticles =>
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
        // ('Are you sure you want to delete')
        const confirmed = window.confirm('Are you sure you want to delete this article?');

        if (confirmed) {
            try {
                await axios.delete(`${BASE_URL}/api/article/delete/${id}`);
                setArticleList(prevArticles => prevArticles.filter(article => article._id !== id));
            } catch (error) {
                console.error('Error deleting article:', error);
            }
        } 
        // else {
        //     // User canceled the deletion
        //     ('Article deletion canceled.');
        // }
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
            <Navbar links={AdminVerifyLink} />
            <div className="max-w-6xl mx-auto mt-14 p-6 bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-bold mb-6">Submitted Articles</h2>
                {ArticleList.length === 0 ? (
                    <p>No articles found.</p>
                ) : (
                    <div className="space-y-6">
                        {ArticleList.map((article) => (
                            <div key={article._id} className="p-4 border rounded-md shadow-sm grid grid-cols-1 md:grid-cols-3 gap-4">
                                {isSmallScreen ? (
                                    <>
                                        <div className="col-span-2 flex flex-col justify-between">
                                            <div className="col-span-1 flex justify-center items-center">
                                                <img
                                                    src={article.selfImage}
                                                    alt="Self"
                                                    className="w-32 h-32 object-cover rounded-full"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold">{article.title}</h3>
                                                <p className="text-gray-600">By {article.stdname}</p>
                                                <p className="text-gray-600">Email: {article.email}</p>
                                                <p className="text-gray-600">Contact: {article.contact}</p>
                                                <p className="text-gray-600">Branch: {departmentMapping[article.branch]}</p>
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
                                        <div className="col-span-3 mt-4 flex justify-center">
                                            <div className="flex space-x-4 mt-2">
                                                <Link
                                                    to={article.content}
                                                    className="px-4 py-2 bg-blue-500 text-white rounded"
                                                >
                                                    View
                                                </Link>
                                                <Link
                                                    to={article.content}
                                                    download={`${article.stdname},${article.branch}`}
                                                    className="px-4 py-2 bg-green-500 text-white rounded"
                                                >
                                                    Download
                                                </Link>
                                                <button
                                                    className="px-4 py-2 bg-red-500 text-white rounded"
                                                    onClick={() => handleDelete(article._id)}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="col-span-1 flex justify-center items-center md:justify-start">
                                            <img
                                                src={article.selfImage}
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
                                                <p className="text-gray-600">Branch: {departmentMapping[article.branch]}</p>
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
                                                <Link
                                                    to={article.contentPdf}
                                                    target="_blank"
                                                    className="px-4 py-2 bg-blue-500 text-white rounded"
                                                >
                                                    View
                                                </Link>
                                                <Link
                                                    to={article.content}
                                                    target="_blank"
                                                    download={`${article.stdname},${article.branch}`}
                                                    className="px-4 py-2 bg-green-500 text-white rounded"
                                                >
                                                    Download
                                                </Link>
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

export default ArticleList;

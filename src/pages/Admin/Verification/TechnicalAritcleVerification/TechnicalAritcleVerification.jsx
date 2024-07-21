import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../../navbar/Navbar';
import { HomeLink } from '../../../../components/variables/variables';
import { BASE_URL } from '../../../../api';

const TechArticleList = () => {
    const [techArticleList, setTechArticleList] = useState([]);

    useEffect(() => {
        const fetchTechArticles = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/article/get`);
                const articles = response.data.map(article => ({
                    ...article,
                    selfImage: article.selfImage.replace(/^"|"$/g, '') // Remove extra quotes from URL
                }));
                console.log(articles[0].selfImage),
                    setTechArticleList(articles);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchTechArticles();
    }, []);

    return (
        <>
            <Navbar links={HomeLink} />
            <div className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-bold mb-6">Submitted Articles</h2>
                {techArticleList.length === 0 ? (
                    <p>No articles found.</p>
                ) : (
                    <div className="space-y-6">
                        {techArticleList.map((article) => (
                            <div key={article._id} className="p-4 border rounded-md shadow-sm grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="col-span-1 flex justify-center items-center">
                                    <img
                                        src={`${article.selfImage}`}
                                        alt="Self"
                                        className="w-32 h-32 object-cover rounded-full md:w-48 md:h-48"
                                    />
                                </div>
                                <div className="col-span-2">
                                    <h3 className="text-xl font-bold">{article.title}</h3>
                                    <p className="text-gray-600">By {article.stdname}</p>
                                    <p className="text-gray-600">Email: {article.email}</p>
                                    <p className="text-gray-600">Contact: {article.contact}</p>
                                    <p className="text-gray-600">Branch: {article.branch}</p>
                                    <p className="text-gray-600">Year: {article.year}</p>
                                    <p className="text-gray-600">Language: {article.language}</p>
                                </div>
                                <div className="col-span-3 mt-4">
                                    <p>{article.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default TechArticleList;

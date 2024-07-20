import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../../navbar/Navbar';
import { HomeLink } from '../../../../components/variables/variables';
import { BASE_URL } from '../../../../api';

const ArticleList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/article/get`);
                const articles = response.data.map(article => ({
                    ...article,
                  
                    selfImage: article.selfImage.replace(/^"|"$/g, '') // Remove extra quotes from URL
                }));
                console.log(articles[0].selfImage),
                setArticles(articles);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchArticles();
    }, []);

    return (
        <>
            <Navbar links={HomeLink} />
            <div className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-bold mb-6">Submitted Articles</h2>
                {articles.length === 0 ? (
                    <p>No articles found.</p>
                ) : (
                    <div className="space-y-6">
                        {articles.map((article) => (
                            <div key={article._id} className="p-4 border rounded-md shadow-sm">
                                <h3 className="text-xl font-bold">{article.title}</h3>
                                <p className="text-gray-600">By {article.stdname}</p>
                                <p className="text-gray-600">Email: {article.email}</p>
                                <p className="text-gray-600">Contact: {article.contact}</p>
                                <p className="text-gray-600">Branch: {article.branch}</p>
                                <p className="text-gray-600">Year: {article.year}</p>
                                <p className="text-gray-600">Language: {article.language}</p>
                                <p className="mt-4">{article.content}</p>
                                {article.selfImage && (
                                    <>
                                <h1>image </h1>
                                <a href=""></a>
                                    <img
                                        src="https://dkte-ambar.s3.ap-south-1.amazonaws.com/1721512936384IEEE%20DKTE%20%281%29.png"
                                        alt="Self"
                                        className="mt-4 w-32 h-32 object-cover rounded-full"
                                    />
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

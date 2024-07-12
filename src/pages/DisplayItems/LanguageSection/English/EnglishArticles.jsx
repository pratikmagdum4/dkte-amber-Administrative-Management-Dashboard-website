import React from 'react';
import PersonDetails from '../../../../components/ui/PersonData';
import Navbar from '../../../navbar/Navbar';
import { HomeLink } from '../../../../components/varialbles/variables';
const person = {
    image: 'https://via.placeholder.com/150', // Replace with the actual image URL
    name: 'John Doe',
    branch: 'Computer Science',
    contact: '123-456-7890',
    email: 'johndoe@example.com',
    article: 'This is the content of the article. It can be long and will be displayed in a text area.',
};

const EnglishArticles = () => {
    return (
        <>
            <Navbar links={HomeLink} />
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <PersonDetails person={person} />
        </div>
        </>
    );
};

export default EnglishArticles;

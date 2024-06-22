import React from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
const links = [
    { label: 'Home', url: '/' },
    { label: 'Login', url: '/login' },
    { label: 'Register', url: '/' },
    { label: 'Contact', url: '/' },
   ];
const initialRows1 = [
    { name: '', title: '', agency: '', isbnno: '' },
];
const initialRows2 = [
    { name: '', title: '', agency: '', isbnno: '' ,chapter:''},
];

const columnHeaders1 = [
    { key: 'name', label: 'Name of the Faculty' },
    { key: 'title', label: 'Title of Book/Chapter' },
    { key: 'agency', label: 'Publication Agency' },
    { key: 'isbnno', label: 'ISBN Number' },
    
];

const columnHeaders2 = [
    { key: 'name', label: 'Name of the Faculty' },
    { key: 'title', label: 'Title of Book/Chapter' },
    { key: 'agency', label: 'Publication Agency' },
    { key: 'isbnno', label: 'ISBN Number' },
    { key: 'chapter', label: 'Chapter Number' },
    // { key: 'date', label: 'Date' }, // Example additional column
];

const FacultyBooksPublication = () => {

    const handleSubmit = async (data) => {
        try {
            const response = await axios.post('https://example.com/api/submit', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('Success:', response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <div>
            <Navbar/>
            <AchievementsTable
                initialRows={initialRows1}
                columnHeaders={columnHeaders1}
                title="FACULTY ACHIEVEMENTS IN BOOKS PUBLICATION"
                numberOfColumns={4} 
                onSubmit={handleSubmit}
            />
            <AchievementsTable
                initialRows={initialRows2}
                columnHeaders={columnHeaders2}
                title="FACULTY ACHIEVEMENTS IN BOOKS PUBLICATION"
                numberOfColumns={5}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default FacultyBooksPublication;

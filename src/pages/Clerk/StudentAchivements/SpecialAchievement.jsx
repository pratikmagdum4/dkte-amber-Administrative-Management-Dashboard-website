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
    { srno: '', name: '', class: '' },
];

const columnHeaders1 = [
    { key: 'srno', label: 'Sr No.' },
    { key: 'name', label: 'Name of Students' },
    { key: 'class', label: 'Class' },
    // { key: 'date', label: 'Date' }, // Example additional column
];

const StudentSpecialAchievements = () => {
    

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
                title="GATE EXAM"
                numberOfColumns={3} 
                onSubmit={handleSubmit}
            />
            <AchievementsTable
                initialRows={initialRows1}
                columnHeaders={columnHeaders1}
                title="NIFT EXAM"
                numberOfColumns={3}
                onSubmit={handleSubmit} 
            />
            <AchievementsTable
                initialRows={initialRows1}
                columnHeaders={columnHeaders1}
                title="TOEFL EXAM"
                numberOfColumns={3}
                onSubmit={handleSubmit}
            />
            <AchievementsTable
                initialRows={initialRows1}
                columnHeaders={columnHeaders1}
                title="GRE EXAM"
                numberOfColumns={3} 
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default StudentSpecialAchievements;

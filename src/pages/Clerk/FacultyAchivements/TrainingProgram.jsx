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
const initialRows = [
    { name: '', training: '' },
];

const columnHeaders = [
    { key: 'name', label: 'Faculty Name' },
    { key: 'training', label: 'Details of Training' },
   
];
const stdabroad = true;
const FacultyTrainingProgram = () => {
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
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="TRAINING PROGRAMMES FOR FACULTY IN VACATION "
                numberOfColumns={2}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default FacultyTrainingProgram;

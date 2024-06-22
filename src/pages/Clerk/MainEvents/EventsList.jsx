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
    { srno: '', info: '' },
];

const columnHeaders = [
    { key: 'srno', label: 'Sr.No.' },
    { key: 'info', label: 'Description' },

];
const stdabroad = true;
const MainEventTables = () => {
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
                title="TESTVISION 2K24 AND FASHIONAVA 2K24"
                numberOfColumns={2}
                onSubmit={handleSubmit}
            />
            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="TECHSYMPOSIUM 2K24"
                numberOfColumns={2}
                onSubmit={handleSubmit}
            />
            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="ALUNMI GET-TOGETHER 2023-24"
                numberOfColumns={2}
                onSubmit={handleSubmit}
            />
            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="ENTREPRENEURSHIP DEVELOPMENT CELL"
                numberOfColumns={2}
                onSubmit={handleSubmit}
            />
            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="CAREER GUIDANCE CELL "
                numberOfColumns={2}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default MainEventTables;

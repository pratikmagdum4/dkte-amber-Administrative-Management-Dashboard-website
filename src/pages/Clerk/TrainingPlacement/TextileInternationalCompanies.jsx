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
    { internationalcompanies: '' },
];

const columnHeaders = [
    { key: 'internationalcompanies', label: 'International Companies' },
   
];

const stdabroad = true;



const TextileInternationalCompaniesList = () => {
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
                title="Textile International Companies"
                numberOfColumns={1}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default TextileInternationalCompaniesList;

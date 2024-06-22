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
    { srno: '', sponsors: '' },
];

const columnHeaders = [
    { key: 'srno', label: 'Sr.No.' },
    { key: 'sponsors', label: 'Sponsors Information' },
];

const stdabroad = true;



const SponsorListInfo = () => {
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
                title="SPONSORS"
                numberOfColumns={2}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default SponsorListInfo;

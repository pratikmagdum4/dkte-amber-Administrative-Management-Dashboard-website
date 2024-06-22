import React from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
const initialRows1 = [
    { name: '', title: '', patentno: '', grantdate: '' },
];


const columnHeaders1 = [
    { key: 'name', label: 'Name of the Faculty' },
    { key: 'title', label: 'Title ' },
    { key: 'patentno', label: 'Patent Number' },
    { key: 'grantdate', label: 'Date of Granted' },
];

const FacultyPatentGrant = () => {
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
            <AchievementsTable
                initialRows={initialRows1}
                columnHeaders={columnHeaders1}
                title="FACULTY ACHIEVEMENTS IN PATENT GRANT"
                numberOfColumns={4} 
                onSubmit={handleSubmit}
            />
           
        </div>
    );
};

export default FacultyPatentGrant;

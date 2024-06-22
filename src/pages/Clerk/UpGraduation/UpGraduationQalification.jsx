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
    { srno: '', name: '', designation: '', course: '' },
];

const columnHeaders = [
    { key: 'srno', label: 'Sr.No.' },
    { key: 'name', label: 'Name of the Faculty' },
    { key: 'designation', label: 'Designation' },
    { key: 'course', label: 'Name of the Course' },
   
];

const UpGraduationQalificationList = () => {
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
            <h1>PH.D. Awarded :-</h1>
            <AchievementsTable
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="CONGRATULATION ON UPGRADATION OF QUALIFICATION 2023-24"
                numberOfColumns={4}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default UpGraduationQalificationList;

import React from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { FacultyAchivements } from '../../../components/varialbles/variables';
const initialRows = [
    { name: '', workshopname: '' },
];

const columnHeaders = [
    { key: 'name', label: 'Faculty Name' },
    { key: 'workshopname', label: 'Name of Workshop/STTP/FDP' },
  
];
const stdabroad = true;
const FacultyWorkShop = () => {
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
            <Navbar FacultyAchivements/>
            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="FACULTY ACHIEVEMENTS IN WORKSHOP/STTP/FDP "
                numberOfColumns={2} 
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default FacultyWorkShop;

import React from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
const initialRows = [
    { name: '', event: '', prize: '', date: '' },
];

const columnHeaders = [
    { key: 'name', label: 'Name of the Student' },
    { key: 'event', label: 'Event' },
    { key: 'prize', label: 'Prize' },
    // { key: 'date', label: 'Date' }, // Example additional column
];

const StudentPaperProject = () => {
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
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="STUDENTS ACHIEVEMENTS IN PAPER/PROJECT PRESENTATION CONTESTS"
                numberOfColumns={3} 
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default StudentPaperProject;

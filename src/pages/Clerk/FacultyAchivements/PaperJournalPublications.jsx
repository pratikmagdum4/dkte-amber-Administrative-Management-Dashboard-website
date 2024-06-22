import React from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
const initialRows = [
    { srno: '', info: '' },
];

const columnHeaders = [
    { key: 'srno', label: 'Sr.No.' },
    { key: 'info', label: 'Description' },
    // { key: 'prize', label: 'Prize' },
    // { key: 'date', label: 'Date' }, // Example additional column
];
const stdabroad = true;
const FacultyPaperJournalPublications = () => {
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
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="FACULTY ACHIEVEMENTS IN PAPER PUBLICATION IN INTERNATIONAL AND NATIONAL JOURNALS"
                numberOfColumns={2} 
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default FacultyPaperJournalPublications;

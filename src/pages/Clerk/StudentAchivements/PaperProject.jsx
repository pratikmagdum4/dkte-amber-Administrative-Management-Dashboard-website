import React from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
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
    return (
        <div>
            <AchievementsTable
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="STUDENTS ACHIEVEMENTS IN PAPER/PROJECT PRESENTATION CONTESTS"
                numberOfColumns={3} // Display only the first 2 columns
            />
        </div>
    );
};

export default StudentPaperProject;

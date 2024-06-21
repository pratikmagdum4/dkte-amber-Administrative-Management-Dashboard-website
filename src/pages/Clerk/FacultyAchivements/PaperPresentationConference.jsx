import React from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
const initialRows = [
    { srno: '', info: '' },
];

const columnHeaders = [
    { key: 'srno', label: 'Sr.No.' },
    { key: 'info', label: 'Description' },

];
const stdabroad = true;
const FacultyPaperPresentation = () => {
    return (
        <div>
            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="FACULTY ACHIEVEMENTS IN PAPER PRESENTATION IN NATIONAL/INTERNATIONAL CONFERENCES"
                numberOfColumns={2}
            />
        </div>
    );
};

export default FacultyPaperPresentation;

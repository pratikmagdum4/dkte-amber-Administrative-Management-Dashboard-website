import React from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
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
const StdHigherEducation = () => {
    return (
        <div>
            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="SELECTED STUDENTS FOR HIGHER EDUCATION ABROAD"
                numberOfColumns={2} // Display only the first 2 columns
            />
        </div>
    );
};

export default StdHigherEducation;

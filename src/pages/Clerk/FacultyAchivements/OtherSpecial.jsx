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
const FacultyOtherSpecial = () => {
    return (
        <div>
            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="OTHER SPECIAL ACHIEVEMENTS BY FACULTY"
                numberOfColumns={2} 
            />
        </div>
    );
};

export default FacultyOtherSpecial;

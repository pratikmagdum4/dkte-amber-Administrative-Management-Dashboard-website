import React from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
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
    return (
        <div>
            <AchievementsTable
                initialRows={initialRows1}
                columnHeaders={columnHeaders1}
                title="FACULTY ACHIEVEMENTS IN PATENT GRANT"
                numberOfColumns={4} 
            />
           
        </div>
    );
};

export default FacultyPatentGrant;

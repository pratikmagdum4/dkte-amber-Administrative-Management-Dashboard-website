import React from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
const initialRows = [
    { name: '', workshopname: '' },
];

const columnHeaders = [
    { key: 'name', label: 'Faculty Name' },
    { key: 'workshopname', label: 'Name of Workshop/STTP/FDP' },
    // { key: 'prize', label: 'Prize' },
    // { key: 'date', label: 'Date' }, // Example additional column
];
const stdabroad = true;
const FacultyWorkShop = () => {
    return (
        <div>
            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="FACULTY ACHIEVEMENTS IN WORKSHOP/STTP/FDP "
                numberOfColumns={2} 
            />
        </div>
    );
};

export default FacultyWorkShop;

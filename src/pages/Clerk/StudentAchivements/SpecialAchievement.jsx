import React from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
const initialRows1 = [
    { srno: '', name: '', class: '' },
];

const columnHeaders1 = [
    { key: 'srno', label: 'Sr No.' },
    { key: 'name', label: 'Name of Students' },
    { key: 'class', label: 'Class' },
    // { key: 'date', label: 'Date' }, // Example additional column
];

const StudentSpecialAchievements = () => {
    return (
        <div>
            <AchievementsTable
                initialRows={initialRows1}
                columnHeaders={columnHeaders1}
                title="GATE EXAM"
                numberOfColumns={3} // Display only the first 2 columns
            />
            <AchievementsTable
                initialRows={initialRows1}
                columnHeaders={columnHeaders1}
                title="NIFT EXAM"
                numberOfColumns={3} // Display only the first 2 columns
            />
            <AchievementsTable
                initialRows={initialRows1}
                columnHeaders={columnHeaders1}
                title="TOEFL EXAM"
                numberOfColumns={3} // Display only the first 2 columns
            />
            <AchievementsTable
                initialRows={initialRows1}
                columnHeaders={columnHeaders1}
                title="GRE EXAM"
                numberOfColumns={3} // Display only the first 2 columns
            />
        </div>
    );
};

export default StudentSpecialAchievements;

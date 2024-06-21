import React from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
const initialRows = [
    { name: '', training: '' },
];

const columnHeaders = [
    { key: 'name', label: 'Faculty Name' },
    { key: 'training', label: 'Details of Training' },
   
];
const stdabroad = true;
const FacultyTrainingProgram = () => {
    return (
        <div>
            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="TRAINING PROGRAMMES FOR FACULTY IN VACATION "
                numberOfColumns={2}
            />
        </div>
    );
};

export default FacultyTrainingProgram;

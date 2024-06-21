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
const ClubReports = () => {
    return (
        <div>
            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="ACSES REPORT"
                numberOfColumns={2}
            />
            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="AISA REPORT"
                numberOfColumns={2}
            />
            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="EESA REPORT"
                numberOfColumns={2}
            />
            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="COMSA REPORT"
                numberOfColumns={2}
            />
            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="CESA REPORT"
                numberOfColumns={2}
            />
            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="IET STUDENTS CHAPTER REPORT"
                numberOfColumns={2}
            />
            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="MESA REPORT"
                numberOfColumns={2}
            />
            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="TAIMU REPORT"
                numberOfColumns={2}
            />
        </div>
    );
};

export default ClubReports;

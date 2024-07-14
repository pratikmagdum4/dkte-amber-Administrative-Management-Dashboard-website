import React from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { StaffMembers } from '../../../components/variables/variables';
const initialRows = [
    { name: '', title: '', position: '' },
];
const initialRows1 = [
    { ugpgmba: '', count: '' },
];
const initialRows2 = [
    { namecat: '', positioncount: '' },
];

const columnHeaders = [
    { key: 'name', label: 'Name ' },
    { key: 'position', label: 'Position' },

];
const columnHeaders1 = [
    { key: 'ugpgmba', label: 'UG/PG/MBA' },
    { key: 'count', label: 'Count' },
];
const columnHeaders2 = [
    { key: 'namecat', label: 'Name/Category' },
    { key: 'positioncount', label: 'Position/Count' },
];

const StaffMembersList = () => {

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
            <Navbar links={StaffMembers} />
            <AchievementsTable
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="STAFF MEMBERS 2023-2024"
                numberOfColumns={2}
                onSubmit={handleSubmit}
            />
            <AchievementsTable
                initialRows={initialRows1}
                columnHeaders={columnHeaders1}
                title="STAFF MEMBERS 2023-2024"
                numberOfColumns={2}
                onSubmit={handleSubmit}
            />
            <AchievementsTable
                initialRows={initialRows2}
                columnHeaders={columnHeaders2}
                title="STAFF MEMBERS 2023-2024"
                numberOfColumns={2}
                onSubmit={handleSubmit}
            />

        </div>
    );
};

export default StaffMembersList;

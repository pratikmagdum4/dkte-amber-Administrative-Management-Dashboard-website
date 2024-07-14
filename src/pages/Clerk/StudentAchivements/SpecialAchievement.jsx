import React from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { StudentAchivements } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';
import ErrorBoundary from '../../../components/ErrorBoundry';
const initialRows1 = [
    { srno: '', name: '', class: '' },
];

const columnHeaders1 = [
    { key: 'srno', label: 'Sr No.' },
    { key: 'name', label: 'Name of Students' },
    { key: 'Class', label: 'Class' },
    // { key: 'date', label: 'Date' }, // Example additional column
];

const StudentSpecialAchievements = () => {


    const FetchUrl = `${BASE_URL}/api/studentachievements/specialachievements/getdata`;
    const SubmitUrl = `${BASE_URL}/api/studentachievements/specialachievements/submit`;
    const DeleteUrl = `${BASE_URL}/api/studentachievements/specialachievements`;
    const UpdateUrl = `${BASE_URL}/api/studentachievements/specialachievements`;

    return (
        <ErrorBoundary>
        <div>
            <Navbar links={StudentAchivements} />
            <AchievementsTable
                initialRows={initialRows1}
                columnHeaders={columnHeaders1}
                title="GATE EXAM"
                numberOfColumns={3}
                SubmitUrl={`${SubmitUrl}/gate`}
                FetchUrl={`${FetchUrl}/gate`}
                DeleteUrl={`${DeleteUrl}/gate`}
                UpdateUrl={`${UpdateUrl}/gate`}
            />
            <AchievementsTable
                initialRows={initialRows1}
                columnHeaders={columnHeaders1}
                title="NIFT EXAM"
                numberOfColumns={3}
                SubmitUrl={`${SubmitUrl}/nift`}
                FetchUrl={`${FetchUrl}/nift`}
                DeleteUrl={`${DeleteUrl}/nift`}
                UpdateUrl={`${UpdateUrl}/nift`}
            />
            <AchievementsTable
                initialRows={initialRows1}
                columnHeaders={columnHeaders1}
                title="TOEFL EXAM"
                numberOfColumns={3}
                SubmitUrl={`${SubmitUrl}/toefl`}
                FetchUrl={`${FetchUrl}/toefl`}
                DeleteUrl={`${DeleteUrl}/toefl`}
                UpdateUrl={`${UpdateUrl}/toefl`}
            />
            <AchievementsTable
                initialRows={initialRows1}
                columnHeaders={columnHeaders1}
                title="GRE EXAM"
                numberOfColumns={3}
                SubmitUrl={`${SubmitUrl}/gre`}
                FetchUrl={`${FetchUrl}/gre`}
                DeleteUrl={`${DeleteUrl}/gre`}
                UpdateUrl={`${UpdateUrl}/gre`}
            />
        </div>
        </ErrorBoundary>
    );
};

export default StudentSpecialAchievements;

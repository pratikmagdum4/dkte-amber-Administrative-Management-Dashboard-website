import React from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { ClerkNavLink, TrainingPlacement } from '../../../components/variables/variables';
const initialRows = [
    { srno: '', branch: '', studentforcampus: '', recruitedstd: '', placementpercentage: '' },
];
const initialRows1 = [
    { minmaxavg: '', info: '' },
];
const initialRows2 = [
    { category: '', studentcount: '' },
];

const columnHeaders = [
    { key: 'srno', label: 'Sr.No.' },
    { key: 'branch', label: 'Branch' },
    { key: 'studentforcampus', label: 'No. of Students available for campus Recruitment' },
    { key: 'recruitedstd', label: 'No. of Students Recruited through Campus Interviews' },
    { key: 'placementpercentage', label: 'Percentage of Placement' },

];
const columnHeaders1 = [
    { key: 'minmaxavg', label: 'Min/Max/Avg' },
    { key: 'info', label: 'Package Per Annum' },
];
const columnHeaders2 = [
    { key: 'category', label: 'Category' },
    { key: 'studentcount', label: 'No. of Students ' },
];
import { BASE_URL } from '../../../api';
const TrainingPlacementTextileReport = () => {
    const FetchUrl = `${BASE_URL}/api/textile/placement`;
    const SubmitUrl = `${BASE_URL}/api/textile/placement`;
    const DeleteUrl = `${BASE_URL}/api/textile/placement`;
    const UpdateUrl = `${BASE_URL}/api/textile/placement`;
    return (
        <div>
            <Navbar links={ClerkNavLink} />
            <h1>REPORT ON TRAINING AND PLACEMENT ACTIVITIES</h1>
            <AchievementsTable
                NotDisplayToast={true}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="TEXTILE DEPARTMENTS"
                numberOfColumns={5}
                SubmitUrl={`${SubmitUrl}/departments/submit`}
                FetchUrl={`${FetchUrl}/departments/getdata`}
                DeleteUrl={`${DeleteUrl}/departments`}
                UpdateUrl={`${UpdateUrl}/departments`}
            />
            <AchievementsTable
                NotDisplayToast={true}
                initialRows={initialRows1}
                columnHeaders={columnHeaders1}
                title="Package Offered For Btech Textile "
                numberOfColumns={2}
                SubmitUrl={`${SubmitUrl}/packageoffered/submit`}
                FetchUrl={`${FetchUrl}/packageoffered/getdata`}
                DeleteUrl={`${DeleteUrl}/packageoffered`}
                UpdateUrl={`${UpdateUrl}/packageoffered`}
            />
            <AchievementsTable
                NotDisplayToast={true}
                initialRows={initialRows1}
                columnHeaders={columnHeaders1}
                title="INTERNATIONAL PLACEMENT &SUMMER INTERNSHIP "
                numberOfColumns={2}
                SubmitUrl={`${SubmitUrl}/international/submit`}
                FetchUrl={`${FetchUrl}/international/getdata`}
                DeleteUrl={`${DeleteUrl}/international`}
                UpdateUrl={`${UpdateUrl}/international`}
            />
            <AchievementsTable
                NotDisplayToast={true}
                initialRows={initialRows2}
                columnHeaders={columnHeaders2}
                title="INDUSTRIAL TRAINING "
                numberOfColumns={2}
                SubmitUrl={`${SubmitUrl}/industrialtraining/submit`}
                FetchUrl={`${FetchUrl}/industrialtraining/getdata`}
                DeleteUrl={`${DeleteUrl}/industrialtraining`}
                UpdateUrl={`${UpdateUrl}/industrialtraining`}
            />

        </div>
    );
};

export default TrainingPlacementTextileReport;

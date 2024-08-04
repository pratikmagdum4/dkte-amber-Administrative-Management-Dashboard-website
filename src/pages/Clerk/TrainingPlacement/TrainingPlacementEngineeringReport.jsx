import React from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { TrainingPlacement } from '../../../components/variables/variables';
const initialRows = [
    { branch: '', studentforcampus: '', recruitedstd: '', placementpercentage: '' },
];
const initialRows1 = [
    { minmaxavg: '', info: '' },
];
const initialRows2 = [
    { category: '', studentcount: '' },
];

const columnHeaders = [
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
const TrainingPlacementEngineeringReport = () => {
    const FetchUrl = `${BASE_URL}/api/engineering/placement`;
    const SubmitUrl = `${BASE_URL}/api/engineering/placement`;
    const DeleteUrl = `${BASE_URL}/api/engineering/placement`;
    const UpdateUrl = `${BASE_URL}/api/engineering/placement`;
    return (
        <div>
            <Navbar links={TrainingPlacement} />
            <h1>REPORT ON TRAINING AND PLACEMENT ACTIVITIESdfg</h1>

            <AchievementsTable
                NotDisplayToast={true}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="ENGINEERING DEPARTMENTS"
                numberOfColumns={4}
                SubmitUrl={`${SubmitUrl}/departments/submit`}
                FetchUrl={`${FetchUrl}/departments/getdata`}
                DeleteUrl={`${DeleteUrl}/departments`}
                UpdateUrl={`${UpdateUrl}/departments`}
            />
            <AchievementsTable
                NotDisplayToast={true}
                initialRows={initialRows1}
                columnHeaders={columnHeaders1}
                title="Package Offered "
                numberOfColumns={2}
                SubmitUrl={`${SubmitUrl}/packageoffered/submit`}
                FetchUrl={`${FetchUrl}/packageoffered/getdata`}
                DeleteUrl={`${DeleteUrl}/packageoffered`}
                UpdateUrl={`${UpdateUrl}/packageoffered`}
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

export default TrainingPlacementEngineeringReport;

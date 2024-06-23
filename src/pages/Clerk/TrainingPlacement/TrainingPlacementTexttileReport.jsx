import React from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { TrainingPlacement } from '../../../components/varialbles/variables';
const initialRows = [
    { srno: '', branch:'',studentforcampus: '', recruitedstd: '', placementpercentage: '' },
];
const initialRows1 = [
    { minmaxavg: '', info:''},
];
const initialRows2 = [
    { category: '', studentcount:''},
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

const TrainingPlacementTextileReport = () => {
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
            <Navbar links={TrainingPlacement}/>
            <h1>REPORT ON TRAINING AND PLACEMENT ACTIVITIES</h1>
            <AchievementsTable
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="TEXTILE DEPARTMENTS"
                numberOfColumns={5}
                onSubmit={handleSubmit}
            />
            <AchievementsTable
                initialRows={initialRows1}
                columnHeaders={columnHeaders1}
                title="Package Offered For Btech Textile "
                numberOfColumns={2}
                onSubmit={handleSubmit}
            />
            <AchievementsTable
                initialRows={initialRows1}
                columnHeaders={columnHeaders1}
                title="INTERNATIONAL PLACEMENT &SUMMER INTERNSHIP "
                numberOfColumns={2}
                onSubmit={handleSubmit}
            />
            <AchievementsTable
                initialRows={initialRows2}
                columnHeaders={columnHeaders2}
                title="INDUSTRIAL TRAINING "
                numberOfColumns={2}
                onSubmit={handleSubmit}
            />
            
        </div>
    );
};

export default TrainingPlacementTextileReport;

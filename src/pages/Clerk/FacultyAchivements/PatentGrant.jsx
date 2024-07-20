import React from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { FacultyAchivements } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';
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
    const FetchUrl = `${BASE_URL}/api/facultyachievement/patentgrant/getdata`;
    const SubmitUrl = `${BASE_URL}/api/facultyachievement/patentgrant/submit`;
    const DeleteUrl = `${BASE_URL}/api/facultyachievement/patentgrant`;
    const UpdateUrl = `${BASE_URL}/api/facultyachievement/patentgrant`;
    return (
        <div>
            <Navbar links={FacultyAchivements} />
            <AchievementsTable
                initialRows={initialRows1}
                columnHeaders={columnHeaders1}
                title="FACULTY ACHIEVEMENTS IN PATENT GRANT"
                numberOfColumns={4}
                SubmitUrl={SubmitUrl}
                FetchUrl={FetchUrl}
                DeleteUrl={DeleteUrl}
                UpdateUrl={UpdateUrl}
            />

        </div>
    );
};

export default FacultyPatentGrant;

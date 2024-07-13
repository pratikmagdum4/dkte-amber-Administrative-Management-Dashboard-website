import React from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { FacultyAchivements } from '../../../components/varialbles/variables';
import { BASE_URL } from '../../../api';
const initialRows = [
    { srno: '', info: '' },
];

const columnHeaders = [
    { key: 'srno', label: 'Sr.No.' },
    { key: 'info', label: 'Description' },
    
];
const stdabroad = true;
const FacultyOtherSpecial = () => {
    const FetchUrl = `${BASE_URL}/api/facultyachievementsotherspecial/getData`;
    const SubmitUrl = `${BASE_URL}/api/facultyachievementsotherspecial/submit`;
    const DeleteUrl = `${BASE_URL}/api/facultyachievementsotherspecial`;
    const UpdateUrl = `${BASE_URL}/api/facultyachievementsotherspecial`;
    
    return (
        <div>
            <Navbar links={FacultyAchivements}/>
            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="OTHER SPECIAL ACHIEVEMENTS BY FACULTY"
                numberOfColumns={2} 
                SubmitUrl={SubmitUrl}
                FetchUrl={FetchUrl}
                DeleteUrl={DeleteUrl}
                UpdateUrl={UpdateUrl}
            />
        </div>
    );
};

export default FacultyOtherSpecial;

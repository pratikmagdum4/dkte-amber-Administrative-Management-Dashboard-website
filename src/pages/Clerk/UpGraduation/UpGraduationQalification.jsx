import React, { useRef } from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { ClerkNavLink, UpGraduation } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';
import { generateWordDocument } from '../../../utils/generate';
import { useSelector } from 'react-redux';
import { selectCurrentDept } from '../../../redux/auth';
const initialRows = [
    { srno: '', name: '', designation: '', course: '' },
];

const columnHeaders = [
    { key: 'srno', label: 'Sr.No.' },
    { key: 'name', label: 'Name of the Faculty' },
    { key: 'designation', label: 'Designation' },
    { key: 'course', label: 'Name of the Course' },

];

const UpGraduationQalificationList = () => {
    const dept = useSelector(selectCurrentDept)
    const tableRef = useRef(null);
    const FetchUrl = `${BASE_URL}/api/upgraduation/getdata`;
    const SubmitUrl = `${BASE_URL}/api/upgraduation/submit/${dept}`;
    const DeleteUrl = `${BASE_URL}/api/upgraduation`;
    const UpdateUrl = `${BASE_URL}/api/upgraduation`;

    const handleGenerateWord = () => {
        const table = tableRef.current;
        if (table) {
            const rows = table.rows;
            generateWordDocument(
                "UPGRADATION OF FACULTY",
                rows,
                columnHeaders,
                'Faculty_Upgraduation_qualification'
            );
        }
    };
    return (
        <div className='mt-14'>
            <Navbar links={ClerkNavLink} />
          
            <button onClick={handleGenerateWord} className="mt-4 bg-purple-500 text-white px-4 py-2 rounded">Generate Word Document</button>
            <AchievementsTable
                ref={tableRef}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="CONGRATULATION ON UPGRADATION OF QUALIFICATION 2023-24"
                numberOfColumns={4}
                SubmitUrl={SubmitUrl}
                FetchUrl={FetchUrl}
                DeleteUrl={DeleteUrl}
                UpdateUrl={UpdateUrl}
            />
        </div>
    );
};

export default UpGraduationQalificationList;

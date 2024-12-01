import React, { useRef } from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { ClerkNavLink, StudentAchivements } from '../../../components/variables/variables';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { BASE_URL } from '../../../api';
import { generateWordDocument } from '../../../utils/generate';
import { useSelector } from 'react-redux';
import { selectCurrentDept } from '../../../redux/auth';
const initialRows = [
    { srno: '', info: '' },
];

const columnHeaders = [
    { key: 'srno', label: 'Sr.No.' },
    { key: 'info', label: 'Description' },

];
const stdabroad = true;
const StdInternationalTraining = () => {
    const dept = useSelector(selectCurrentDept)
    const tableRef = useRef(null);
    const FetchUrl = `${BASE_URL}/api/studentachievements/internationaltraining/getdata`;
    const SubmitUrl = `${BASE_URL}/api/studentachievements/internationaltraining/submit/${dept}`;
    const DeleteUrl = `${BASE_URL}/api/studentachievements/internationaltraining`;
    const UpdateUrl = `${BASE_URL}/api/studentachievements/internationaltraining`;
    const handleGenerateWord = () => {
        const table = tableRef.current;
        if (table) {
            const rows = table.rows;
            generateWordDocument(
                "STUDENTS INTERNATIONAL TRAINING ATTENDED/ CERTIFICATION BY STUDENTS",
                rows,
                columnHeaders,
                'Student_International_Training'
            );
        }
    };
    return (
        <div className='mt-14'>
            <Navbar links={ClerkNavLink} IsClerk={true} />
            <button onClick={handleGenerateWord} className="mt-4 bg-purple-500 text-white px-4 py-2 rounded">Generate Word Document</button>
            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="STUDENTS INTERNATIONAL TRAINING ATTENDED/ CERTIFICATION BY STUDENTS"
                numberOfColumns={2}
                SubmitUrl={SubmitUrl}
                FetchUrl={FetchUrl}
                DeleteUrl={DeleteUrl}
                UpdateUrl={UpdateUrl}
                ref={tableRef}
            />
        </div>
    );
};

export default StdInternationalTraining;

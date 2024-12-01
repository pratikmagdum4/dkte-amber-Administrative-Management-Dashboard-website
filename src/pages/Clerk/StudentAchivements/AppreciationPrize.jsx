import React, { useRef } from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import Navbar from '../../navbar/Navbar';
import { ClerkNavLink, StudentAchivements } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
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

const StdAppreciationPrize = () => {
    const tableRef = useRef(null);
    const dept = useSelector(selectCurrentDept);

    const handleGenerateWord = () => {
        const table = tableRef.current;
        if (table) {
            const rows = table.rows;
            generateWordDocument(
                "STUDENT APPRECIATION PRIZE",
                rows,
                columnHeaders,
                'Student_appreciation_prize'
            );
        }
    };
    return (
        <div className='mt-14'>
            <Navbar links={ClerkNavLink} IsClerk={true} />
            <button onClick={handleGenerateWord} className="mt-4 bg-purple-500 text-white px-4 py-2 rounded">
                Generate Word Document
            </button>
            <AchievementsTable
                ref={tableRef}
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="STUDENT APPRECIATION PRIZE"
                numberOfColumns={2}
                SubmitUrl={`${BASE_URL}/api/studentachievements/appreciationprize/submit/${dept}`}
                FetchUrl={`${BASE_URL}/api/studentachievements/appreciationprize/getdata`}
                DeleteUrl={`${BASE_URL}/api/studentachievements/appreciationprize`}
                UpdateUrl={`${BASE_URL}/api/studentachievements/appreciationprize`}

            />
        </div>
    );
};

export default StdAppreciationPrize;



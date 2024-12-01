import React, { useRef } from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { ClerkNavLink, StudentAchivements } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useSelector } from 'react-redux';
import { selectCurrentDept } from '../../../redux/auth';
import { generateWordDocument } from '../../../utils/generate';

const initialRows = [
    { name: '', event: '', prize: '', date: '' },
];

const columnHeaders = [
    { key: 'name', label: 'Name of the Student' },
    { key: 'event', label: 'Event' },
    { key: 'prize', label: 'Prize' },
];

const StudentPaperProject = () => {
    const tableRef = useRef(null);

    const dept = useSelector(selectCurrentDept)

    const FetchUrl = `${BASE_URL}/api/studentachievements/paperproject/getdata`;
    const SubmitUrl = `${BASE_URL}/api/studentachievements/paperproject/submit/${dept}`;
    const DeleteUrl = `${BASE_URL}/api/studentachievements/paperproject`;
    const UpdateUrl = `${BASE_URL}/api/studentachievements/paperproject`;
    const handleGenerateWord = () => {
        const table = tableRef.current;
        if (table) {
            const rows = table.rows;
            generateWordDocument(
                "STUDENTS ACHIEVEMENTS IN PAPER/PROJECT PRESENTATION CONTESTS",
                rows,
                columnHeaders,
                'Student_achievements_paper_project'
            );
        }
    };
    return (
        <div className='mt-14'>
            <Navbar links={ClerkNavLink} IsClerk={true} />
            <button onClick={handleGenerateWord} className="mt-4 bg-purple-500 text-white px-4 py-2 rounded">
                Generate  Word Document
            </button>
            <AchievementsTable
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="STUDENTS ACHIEVEMENTS IN PAPER/PROJECT PRESENTATION CONTESTS"
                numberOfColumns={3}
                SubmitUrl={SubmitUrl}
                FetchUrl={FetchUrl}
                DeleteUrl={DeleteUrl}
                UpdateUrl={UpdateUrl}
                ref={tableRef}
            />

        </div>
    );
};

export default StudentPaperProject;

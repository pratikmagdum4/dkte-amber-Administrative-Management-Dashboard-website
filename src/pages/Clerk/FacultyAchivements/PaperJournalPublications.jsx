// FacultyPaperJournalPublications.jsx
import React, { useRef } from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import Navbar from '../../navbar/Navbar';
import { FacultyAchivements } from '../../../components/variables/variables';
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

const FacultyPaperJournalPublications = () => {
    const tableRef = useRef(null);
    const dept = useSelector(selectCurrentDept)
    const FetchUrl = `${BASE_URL}/api/facultyachievements/paperpublication/getdata`;
    const SubmitUrl = `${BASE_URL}/api/facultyachievements/paperpublication/submit/${dept}`;
    const DeleteUrl = `${BASE_URL}/api/facultyachievements/paperpublication`;
    const UpdateUrl = `${BASE_URL}/api/facultyachievements/paperpublication`;

    const handleGenerateWord = () => {
        const table = tableRef.current;
        if (table) {
            const rows = table.rows;
            generateWordDocument(
                "FACULTY ACHIEVEMENTS IN PAPER PUBLICATION IN INTERNATIONAL AND NATIONAL JOURNALS",
                rows,
                columnHeaders,
                'Faculty_Paper_Journal_Publications'
            );
        }
    };

    return (
        <div>
            <Navbar links={FacultyAchivements} />
            <button onClick={handleGenerateWord} className="mt-4 bg-purple-500 text-white px-4 py-2 rounded">
                Generate Word Document
            </button>
            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="FACULTY ACHIEVEMENTS IN PAPER PUBLICATION IN INTERNATIONAL AND NATIONAL JOURNALS"
                numberOfColumns={2}
                SubmitUrl={SubmitUrl}
                FetchUrl={FetchUrl}
                DeleteUrl={DeleteUrl}
                UpdateUrl={UpdateUrl}
                ref={tableRef} // Pass the ref to the table component
            />
        </div>
    );
};

export default FacultyPaperJournalPublications;

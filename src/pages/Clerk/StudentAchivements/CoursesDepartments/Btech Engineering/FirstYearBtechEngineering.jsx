import React, { useRef } from 'react';
import AchievementsTable from '../../../../../components/ui/TableComponent';
import Navbar from '../../../../navbar/Navbar';
import { ClerkNavLink } from '../../../../../components/variables/variables';
import { BASE_URL } from '../../../../../api';
import { generateMultipleWordDocument } from '../../../../../utils/wordDocumentGenerateMultiple';
import { Document, Packer, Paragraph, Table, TableCell, TableRow, HeadingLevel, AlignmentType } from 'docx';
import { saveAs } from 'file-saver';

const initialRows = [
    { rank: '', stdname: '', cgpa: '', dept: '' },
];

const columnHeaders = [
    { key: 'rank', label: 'Rank' },
    { key: 'stdname', label: 'Student Name' },
    { key: 'cgpa', label: 'CGPA' },
];

const stdabroad = true;
const departments = ["cse", "aiml", "aids", "entc", "ele", "mech", "civil"];

const FirstYearBtechEngineeringTables = () => {
    // const tableRef = useRef(null);
    const year = "First"; 
    const tablesRef = useRef([]);
    
    const generateWord = () => {
        const tables = tablesRef.current.map(table => ({
            title: table.title,
            rows: table.rows,
            columns: columnHeaders,
        }));
        generateMultipleWordDocument(tables, 'First-Year_Btech_Engineering_CGPA');
    };
    return (
        <div className='mt-14'>
            <Navbar links={ClerkNavLink} IsClerk={true} />
            <button onClick={generateWord} className="mt-4 bg-green-500 text-white px-4 py-2 rounded ml-4">
                Generate Word Document
            </button>
            {departments.map((dept,index) => (
                <AchievementsTable
                    key={`${year}-${dept}`}
                    NotDisplayToast={true}
                    stdabroad={stdabroad}
                    initialRows={initialRows}
                    columnHeaders={columnHeaders}
                    title={` ${year.toUpperCase()} Year ${dept.toUpperCase()} DEPARTMENT`}
                    numberOfColumns={4}
                    SubmitUrl={`${BASE_URL}/api/studentscgpa/engi/submit/${year.toLowerCase()}/${dept}`}
                    FetchUrl={`${BASE_URL}/api/studentscgpa/engi/get/${year.toLowerCase()}/${dept}`}
                    DeleteUrl={`${BASE_URL}/api/studentscgpa/engi/${year.toLowerCase()}/${dept}`}
                    UpdateUrl={`${BASE_URL}/api/studentscgpa/engi/${year.toLowerCase()}/${dept}`}
                    ref={el => tablesRef.current[index] = el}
                />
            ))}
        </div>
    );
};

export default FirstYearBtechEngineeringTables;

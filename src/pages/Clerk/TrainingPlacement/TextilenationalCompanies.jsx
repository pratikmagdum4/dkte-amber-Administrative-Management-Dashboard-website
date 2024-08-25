import React from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { ClerkNavLink, TrainingPlacement } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';
import { useSelector } from 'react-redux';
import { selectCurrentDept } from '../../../redux/auth';
import { generateWordDocument } from '../../../utils/generate';
const initialRows = [
    { nationalcompanies: '' },
];

const columnHeaders = [
    { key: 'nationalcompanies', label: 'National Companies' },

];

const stdabroad = true;



const TextileNationalCompaniesList = () => {
    const tableRef = React.useRef(null);
    const dept = useSelector(selectCurrentDept)
    const FetchUrl = `${BASE_URL}/api/textile/companies/national/getdata`;
    const SubmitUrl = `${BASE_URL}/api/textile/companies/national/submit/${dept}`;
    const DeleteUrl = `${BASE_URL}/api/textile/companies/national`;
    const UpdateUrl = `${BASE_URL}/api/textile/companies/national`;
    const handleGenerateWord = () => {
        const table = tableRef.current;
        if (table) {
            const rows = table.rows;
            generateWordDocument(
                "Textile National Companies",
                rows,
                columnHeaders,
                'Textile_National_Companies'
            );
        }
    };
    return (
        <div className='mt-14'>
            <Navbar links={ClerkNavLink} />
            <button onClick={handleGenerateWord} className="mt-4 bg-purple-500 text-white px-4 py-2 rounded">Generate Word Document</button>
            <AchievementsTable
                ref={tableRef}
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="Textile National Companies"
                numberOfColumns={1}
                SubmitUrl={SubmitUrl}
                FetchUrl={FetchUrl}
                DeleteUrl={DeleteUrl}
                UpdateUrl={UpdateUrl}
            />
        </div>
    );
};

export default TextileNationalCompaniesList;

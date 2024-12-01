import React, { useRef } from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
import { BASE_URL } from '../../../api';
import Navbar from '../../navbar/Navbar';
import { ClerkNavLink, TrainingPlacement } from '../../../components/variables/variables';
import { generateWordDocument } from '../../../utils/generate';
import { useSelector } from 'react-redux';
import { selectCurrentDept } from '../../../redux/auth';
const initialRows = [
    { internationalcompanies: '' },
];

const columnHeaders = [
    { key: 'internationalcompanies', label: 'International Companies' },

];

const stdabroad = true;



const TextileInternationalCompaniesList = () => {
    const tableRef = useRef(null);
    const dept = useSelector(selectCurrentDept)
    const FetchUrl = `${BASE_URL}/api/textile/companies/international/getdata`;
    const SubmitUrl = `${BASE_URL}/api/textile/companies/international/submit/${dept}`;
    const DeleteUrl = `${BASE_URL}/api/textile/companies/international`;
    const UpdateUrl = `${BASE_URL}/api/textile/companies/international`;
    const handleGenerateWord = () => {
        const table = tableRef.current;
        if (table) {
            const rows = table.rows;
            generateWordDocument(
                "Textile International Companies",
                rows,
                columnHeaders,
                'Textile_International_Companies'
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
                title="Textile International Companies"
                numberOfColumns={1}
                SubmitUrl={SubmitUrl}
                FetchUrl={FetchUrl}
                DeleteUrl={DeleteUrl}
                UpdateUrl={UpdateUrl}
                ref={tableRef}
            />
        </div>
    );
};

export default TextileInternationalCompaniesList;

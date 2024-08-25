import React, { useRef } from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { ClerkNavLink, TrainingPlacement } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';
import { generateWordDocument } from '../../../utils/generate';
import { useSelector } from 'react-redux';
import { selectCurrentDept } from '../../../redux/auth';
const initialRows = [
    { engineeringcompanies: '' },
];

const columnHeaders = [
    { key: 'engineeringcompanies', label: 'Engineering Companies' },

];

const stdabroad = true;



const EngineeringCompaniesList = () => {
    const tableRef = useRef(null);
    const dept = useSelector(selectCurrentDept)
    const FetchUrl = `${BASE_URL}/api/engineering/companies/getdata`;
    const SubmitUrl = `${BASE_URL}/api/engineering/companies/submit/${dept}`;
    const DeleteUrl = `${BASE_URL}/api/engineering/companies`;
    const UpdateUrl = `${BASE_URL}/api/engineering/companies`;

    const handleGenerateWord = () => {
        const table = tableRef.current;
        if (table) {
            const rows = table.rows;
            generateWordDocument(
                "Engineering Companies",
                rows,
                columnHeaders,
                'Engineering_Companies'
            );
        }
    };

    return (
        <div className='mt-14'>
            <Navbar links={ClerkNavLink} />
            <button onClick={handleGenerateWord} className="mt-4 bg-purple-500 text-white px-4 py-2 rounded">Generate Word Document</button>
            <AchievementsTable
                NotDisplayToast={true}
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="Engineering Companies"
                numberOfColumns={1}
                SubmitUrl={SubmitUrl}
                FetchUrl={FetchUrl}
                DeleteUrl={DeleteUrl}
                UpdateUrl={UpdateUrl}
                ref = {tableRef}
            />
        </div>
    );
};

export default EngineeringCompaniesList;

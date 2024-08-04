import React from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { TrainingPlacement } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';
const initialRows = [
    { nationalcompanies: '' },
];

const columnHeaders = [
    { key: 'nationalcompanies', label: 'National Companies' },

];

const stdabroad = true;



const TextileNationalCompaniesList = () => {
    const FetchUrl = `${BASE_URL}/api/textile/companies/national/getdata`;
    const SubmitUrl = `${BASE_URL}/api/textile/companies/national/submit`;
    const DeleteUrl = `${BASE_URL}/api/textile/companies/national`;
    const UpdateUrl = `${BASE_URL}/api/textile/companies/national`;

    return (
        <div>
            <Navbar links={TrainingPlacement} />
            <AchievementsTable
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

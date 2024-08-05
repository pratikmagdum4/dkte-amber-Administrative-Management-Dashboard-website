import React from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
import { BASE_URL } from '../../../api';
import Navbar from '../../navbar/Navbar';
import { ClerkNavLink, TrainingPlacement } from '../../../components/variables/variables';
const initialRows = [
    { internationalcompanies: '' },
];

const columnHeaders = [
    { key: 'internationalcompanies', label: 'International Companies' },

];

const stdabroad = true;



const TextileInternationalCompaniesList = () => {
    const FetchUrl = `${BASE_URL}/api/textile/companies/international/getdata`;
    const SubmitUrl = `${BASE_URL}/api/textile/companies/international/submit`;
    const DeleteUrl = `${BASE_URL}/api/textile/companies/international`;
    const UpdateUrl = `${BASE_URL}/api/textile/companies/international`;

    return (
        <div>
            <Navbar links={ClerkNavLink} />
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
            />
        </div>
    );
};

export default TextileInternationalCompaniesList;

import React from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { ClerkNavLink, TrainingPlacement } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';
const initialRows = [
    { engineeringcompanies: '' },
];

const columnHeaders = [
    { key: 'engineeringcompanies', label: 'Engineering Companies' },

];

const stdabroad = true;



const EngineeringCompaniesList = () => {
    const FetchUrl = `${BASE_URL}/api/engineering/companies/getdata`;
    const SubmitUrl = `${BASE_URL}/api/engineering/companies/submit`;
    const DeleteUrl = `${BASE_URL}/api/engineering/companies`;
    const UpdateUrl = `${BASE_URL}/api/engineering/companies`;


    return (
        <div>
            <Navbar links={ClerkNavLink} />
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
            />
        </div>
    );
};

export default EngineeringCompaniesList;

import React from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { SponsoresList } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';
const initialRows = [
    { srno: '', sponsors: '' },
];

const columnHeaders = [
    { key: 'srno', label: 'Sr.No.' },
    { key: 'sponsors', label: 'Sponsors Information' },
];

const stdabroad = true;



const SponsorListInfo = () => {
    const FetchUrl = `${BASE_URL}/api/sponsorslist/getdata`;
    const SubmitUrl = `${BASE_URL}/api/sponsorslist/submit`;
    const DeleteUrl = `${BASE_URL}/api/sponsorslist`;
    const UpdateUrl = `${BASE_URL}/api/sponsorslist`;
    return (
        <div>
            <Navbar links={SponsoresList} />
            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="SPONSORS"
                numberOfColumns={2}
                SubmitUrl={SubmitUrl}
                FetchUrl={FetchUrl}
                DeleteUrl={DeleteUrl}
                UpdateUrl={UpdateUrl}
            />
        </div>
    );
};

export default SponsorListInfo;

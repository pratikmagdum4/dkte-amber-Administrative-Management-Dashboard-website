import React from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { SponsoresList } from '../../../components/variables/variables';
const initialRows = [
    { srno: '', sponsors: '' },
];

const columnHeaders = [
    { key: 'srno', label: 'Sr.No.' },
    { key: 'sponsors', label: 'Sponsors Information' },
];

const stdabroad = true;



const SponsorListInfo = () => {
    const handleSubmit = async (data) => {
        try {
            const response = await axios.post('https://example.com/api/submit', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('Success:', response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <Navbar links={SponsoresList} />
            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="SPONSORS"
                numberOfColumns={2}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default SponsorListInfo;

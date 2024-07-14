import React from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { TrainingPlacement } from '../../../components/variables/variables';
const initialRows = [
    { internationalcompanies: '' },
];

const columnHeaders = [
    { key: 'internationalcompanies', label: 'International Companies' },

];

const stdabroad = true;



const TextileInternationalCompaniesList = () => {
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
            <Navbar links={TrainingPlacement} />
            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="Textile International Companies"
                numberOfColumns={1}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default TextileInternationalCompaniesList;

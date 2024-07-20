import React from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { MainEvents } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';
const initialRows = [
    { srno: '', info: '' },
];

const columnHeaders = [
    { key: 'srno', label: 'Sr.No.' },
    { key: 'info', label: 'Description' },

];
const stdabroad = true;
const MainEventTables = () => {
    const FetchUrl = `${BASE_URL}/api/mainevents/getdata`;
    const SubmitUrl = `${BASE_URL}/api/mainevents/submit`;
    const DeleteUrl = `${BASE_URL}/api/mainevents`;
    const UpdateUrl = `${BASE_URL}/api/mainevents`;

    return (
        <div>
            <Navbar links={MainEvents} />
            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="TESTVISION 2K24 AND FASHIONAVA 2K24"
                numberOfColumns={2}
                SubmitUrl={`${SubmitUrl}/testvis`}
                FetchUrl={`${FetchUrl}/testvis`}
                DeleteUrl={`${DeleteUrl}/testvis`}
                UpdateUrl={`${UpdateUrl}/testvis`}
            />

            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="TECHSYMPOSIUM 2K24"
                numberOfColumns={2}
                SubmitUrl={`${SubmitUrl}/techsym`}
                FetchUrl={`${FetchUrl}/techsym`}
                DeleteUrl={`${DeleteUrl}/techsym`}
                UpdateUrl={`${UpdateUrl}/techsym`}
            />
            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="ALUNMI GET-TOGETHER 2023-24"
                numberOfColumns={2}
                SubmitUrl={`${SubmitUrl}/alunmi`}
                FetchUrl={`${FetchUrl}/alunmi`}
                DeleteUrl={`${DeleteUrl}/alunmi`}
                UpdateUrl={`${UpdateUrl}/alunmi`}
            />
            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="ENTREPRENEURSHIP DEVELOPMENT CELL"
                numberOfColumns={2}
                SubmitUrl={`${SubmitUrl}/enterdevop`}
                FetchUrl={`${FetchUrl}/enterdevop`}
                DeleteUrl={`${DeleteUrl}/enterdevop`}
                UpdateUrl={`${UpdateUrl}/enterdevop`}
            />
            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="CAREER GUIDANCE CELL "
                numberOfColumns={2}
                SubmitUrl={`${SubmitUrl}/career`}
                FetchUrl={`${FetchUrl}/career`}
                DeleteUrl={`${DeleteUrl}/career`}
                UpdateUrl={`${UpdateUrl}/career`}
            />
        </div>
    );
};

export default MainEventTables;

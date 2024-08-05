import React from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { ClubList } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';
import ErrorBoundary from '../../../components/ErrorBoundry';

const initialRows = [
    { info: '' },
];

const columnHeaders = [
    // { key: 'srno', label: 'Sr.No.' },
    { key: 'info', label: 'Description' },

];
const stdabroad = true;
const ClubReports = () => {
    const FetchUrl = `${BASE_URL}/api/clubreports/getdata`;
    const SubmitUrl = `${BASE_URL}/api/clubreports/submit`;
    const DeleteUrl = `${BASE_URL}/api/clubreports`;
    const UpdateUrl = `${BASE_URL}/api/clubreports`;
    return (
<ErrorBoundary >
        <div> 
            <Navbar links={ClubList} />
            <AchievementsTable
                NotDisplayToast={true}
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="ACSES REPORT"
                numberOfColumns={2}
                SubmitUrl={`${SubmitUrl}/acses`}
                FetchUrl={`${FetchUrl}/acses`}
                DeleteUrl={`${DeleteUrl}/acses`}
                UpdateUrl={`${UpdateUrl}/acses`}
            />
            <AchievementsTable
                NotDisplayToast={true}
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="AISA REPORT"
                numberOfColumns={2}
                SubmitUrl={`${SubmitUrl}/aisa`}
                FetchUrl={`${FetchUrl}/aisa`}
                DeleteUrl={`${DeleteUrl}/aisa`}
                UpdateUrl={`${UpdateUrl}/aisa`}
            />
            <AchievementsTable
                NotDisplayToast={true}
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="EESA REPORT"
                numberOfColumns={2}
                SubmitUrl={`${SubmitUrl}/eesa`}
                FetchUrl={`${FetchUrl}/eesa`}
                DeleteUrl={`${DeleteUrl}/eesa`}
                UpdateUrl={`${UpdateUrl}/eesa`}
            />
            <AchievementsTable
                NotDisplayToast={true}
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="COMSA REPORT"
                numberOfColumns={2}
                SubmitUrl={`${SubmitUrl}/comsa`}
                FetchUrl={`${FetchUrl}/comsa`}
                DeleteUrl={`${DeleteUrl}/comsa`}
                UpdateUrl={`${UpdateUrl}/comsa`}
            />
            <AchievementsTable
                NotDisplayToast={true}
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="CESA REPORT"
                numberOfColumns={2}
                SubmitUrl={`${SubmitUrl}/cesa`}
                FetchUrl={`${FetchUrl}/cesa`}
                DeleteUrl={`${DeleteUrl}/cesa`}
                UpdateUrl={`${UpdateUrl}/cesa`}
            />
            <AchievementsTable
                NotDisplayToast={true}
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="IET STUDENTS CHAPTER REPORT"
                numberOfColumns={2}
                SubmitUrl={`${SubmitUrl}/iet`}
                FetchUrl={`${FetchUrl}/iet`}
                DeleteUrl={`${DeleteUrl}/iet`}
                UpdateUrl={`${UpdateUrl}/iet`}
            />
            <AchievementsTable
                NotDisplayToast={true}
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="MESA REPORT"
                numberOfColumns={2}
                SubmitUrl={`${SubmitUrl}/mesa`}
                FetchUrl={`${FetchUrl}/mesa`}
                DeleteUrl={`${DeleteUrl}/mesa`}
                UpdateUrl={`${UpdateUrl}/mesa`}
            />
            <AchievementsTable
                NotDisplayToast={true}
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="TAIMU REPORT"
                numberOfColumns={2}
                SubmitUrl={`${SubmitUrl}/taimu`}
                FetchUrl={`${FetchUrl}/taimu`}
                DeleteUrl={`${DeleteUrl}/taimu`}
                UpdateUrl={`${UpdateUrl}/taimu`}
            />
        </div>
        </ErrorBoundary >
    );
};

export default ClubReports;

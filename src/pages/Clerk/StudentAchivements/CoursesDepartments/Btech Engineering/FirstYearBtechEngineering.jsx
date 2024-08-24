import React, { useRef } from 'react';
import StudentCgpaFormTable from '../../../../../components/ui/StudentCgpaForm';
import { BASE_URL } from '../../../../../api';
import Navbar from '../../../../navbar/Navbar';
import { ClerkNavLink } from '../../../../../components/variables/variables';
import AchievementsTable from '../../../../../components/ui/TableComponent';


const initialRows = [
    { rank: '', stdname: '', cgpa: '', dept :''},
];


const columnHeaders = [
    { key: 'rank', label: 'Rank' },
    { key: 'stdname', label: 'Student Name' },
    { key: 'cgpa', label: 'CGPA' },
    { key: 'dept', label: 'Department' },
];
const initialStudentsState = [
    { rank: 1, stdname: '', cgpa: '', dept: 'CSE' },
    { rank: 2, stdname: '', cgpa: '', dept: 'CSE' },
    { rank: 3, stdname: '', cgpa: '', dept: 'CSE' },
    { rank: 4, stdname: '', cgpa: '', dept: 'CSE' },
    { rank: 5, stdname: '', cgpa: '', dept: 'CSE' },
    { rank: 1, stdname: '', cgpa: '', dept: 'CSE AI' },
    { rank: 2, stdname: '', cgpa: '', dept: 'CSE AI' },
    { rank: 3, stdname: '', cgpa: '', dept: 'CSE AI' },
    { rank: 4, stdname: '', cgpa: '', dept: 'CSE AI' },
    { rank: 5, stdname: '', cgpa: '', dept: 'CSE AI' },
    { rank: 1, stdname: '', cgpa: '', dept: 'ENTC' },
    { rank: 2, stdname: '', cgpa: '', dept: 'ENTC' },
    { rank: 3, stdname: '', cgpa: '', dept: 'ENTC' },
    { rank: 4, stdname: '', cgpa: '', dept: 'ENTC' },
    { rank: 5, stdname: '', cgpa: '', dept: 'ENTC' },
    { rank: 1, stdname: '', cgpa: '', dept: 'ELEC' },
    { rank: 2, stdname: '', cgpa: '', dept: 'ELEC' },
    { rank: 3, stdname: '', cgpa: '', dept: 'ELEC' },
    { rank: 4, stdname: '', cgpa: '', dept: 'ELEC' },
    { rank: 5, stdname: '', cgpa: '', dept: 'ELEC' },
    { rank: 1, stdname: '', cgpa: '', dept: 'MECH' },
    { rank: 2, stdname: '', cgpa: '', dept: 'MECH' },
    { rank: 3, stdname: '', cgpa: '', dept: 'MECH' },
    { rank: 4, stdname: '', cgpa: '', dept: 'MECH' },
    { rank: 5, stdname: '', cgpa: '', dept: 'MECH' },
    { rank: 1, stdname: '', cgpa: '', dept: 'AIDS' },
    { rank: 2, stdname: '', cgpa: '', dept: 'AIDS' },
    { rank: 3, stdname: '', cgpa: '', dept: 'AIDS' },
    { rank: 4, stdname: '', cgpa: '', dept: 'AIDS' },
    { rank: 5, stdname: '', cgpa: '', dept: 'AIDS' },
    { rank: 1, stdname: '', cgpa: '', dept: 'CE' },
    { rank: 2, stdname: '', cgpa: '', dept: 'CE' },
    { rank: 3, stdname: '', cgpa: '', dept: 'CE' },
    { rank: 4, stdname: '', cgpa: '', dept: 'CE' },
    { rank: 5, stdname: '', cgpa: '', dept: 'CE' },
    
];
const stdabroad = true;
const FirstYearBtechEngineeringTables = () => {
    const tableRef = useRef(null);

    // const FetchUrl =  `${BASE_URL}/api/btechcgpa/get/first`
    // const SubmitUrl =  `${BASE_URL}/api/btechcgpa/submit/first`
    const year = "First"

    const FetchUrl = `${BASE_URL}/api/studentscgpa/engi`;
    const SubmitUrl = `${BASE_URL}/api/studentscgpa/engi`;
    const DeleteUrl = `${BASE_URL}/api/studentscgpa/engi`;
    const UpdateUrl = `${BASE_URL}/api/studentscgpa/engi`;
    return (
        <div className='mt-14'>
            <Navbar links={ClerkNavLink}/>
            <AchievementsTable 
                NotDisplayToast={true}
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="First Year CSE DEPARTMENT"
                numberOfColumns={4}
                SubmitUrl={`${SubmitUrl}/year1/cse`}
                FetchUrl={`${FetchUrl}/year1/cse`}
                DeleteUrl={`${DeleteUrl}/year1/cse`}
                UpdateUrl={`${UpdateUrl}/year1/cse`}
                ref={tableRef}
            
            />
            <AchievementsTable
                NotDisplayToast={true}
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="First Year AIML DEPARTMENT"
                numberOfColumns={4}
                SubmitUrl={`${SubmitUrl}/year1/aiml`}
                FetchUrl={`${FetchUrl}/year1/aiml`}
                DeleteUrl={`${DeleteUrl}/year1/aiml`}
                UpdateUrl={`${UpdateUrl}/year1/aiml`}
                ref={tableRef}

            />
            <AchievementsTable
                NotDisplayToast={true}
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="First Year AIDS DEPARTMENT"
                numberOfColumns={4}
                SubmitUrl={`${SubmitUrl}/year1/aids`}
                FetchUrl={`${FetchUrl}/year1/aids`}
                DeleteUrl={`${DeleteUrl}/year1/aids`}
                UpdateUrl={`${UpdateUrl}/year1/aids`}
                ref={tableRef}

            />
            <AchievementsTable
                NotDisplayToast={true}
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="First Year ENTC DEPARTMENT"
                numberOfColumns={4}
                SubmitUrl={`${SubmitUrl}/year1/entc`}
                FetchUrl={`${FetchUrl}/year1/entc`}
                DeleteUrl={`${DeleteUrl}/year1/entc`}
                UpdateUrl={`${UpdateUrl}/year1/entc`}
                ref={tableRef}

            />
            <AchievementsTable
                NotDisplayToast={true}
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="First Year ELECTRICAL DEPARTMENT"
                numberOfColumns={4}
                SubmitUrl={`${SubmitUrl}/year1/ele`}
                FetchUrl={`${FetchUrl}/year1/ele`}
                DeleteUrl={`${DeleteUrl}/year1/ele`}
                UpdateUrl={`${UpdateUrl}/year1/ele`}
                ref={tableRef}

            />
            <AchievementsTable
                NotDisplayToast={true}
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="First Year MECHANICAL DEPARTMENT"
                numberOfColumns={4}
                SubmitUrl={`${SubmitUrl}/year1/mech`}
                FetchUrl={`${FetchUrl}/year1/mech`}
                DeleteUrl={`${DeleteUrl}/year1/mech`}
                UpdateUrl={`${UpdateUrl}/year1/mech`}
                ref={tableRef}

            />
            <AchievementsTable
                NotDisplayToast={true}
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="First Year CIVIL DEPARTMENT"
                numberOfColumns={4}
                SubmitUrl={`${SubmitUrl}/year1/civil`}
                FetchUrl={`${FetchUrl}/year1/civil`}
                DeleteUrl={`${DeleteUrl}/year1/civil`}
                UpdateUrl={`${UpdateUrl}/year1/civil`}
                ref={tableRef}

            />
     
            {/* <StudentCgpaFormTable
                title="First Year BTech"
                initialState={initialStudentsState}
                FetchUrl={FetchUrl}
                SubmitUrl={SubmitUrl}
                year={year}
            /> */}
        </div>
    );
};

export default FirstYearBtechEngineeringTables;
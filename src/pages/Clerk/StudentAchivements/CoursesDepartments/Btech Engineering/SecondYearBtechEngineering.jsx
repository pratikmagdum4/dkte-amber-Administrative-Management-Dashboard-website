import React from 'react';
import StudentCgpaFormTable from '../../../../../components/ui/StudentCgpaForm';
import { BASE_URL } from '../../../../../api';
import Navbar from '../../../../navbar/Navbar';
import { ClerkNavLink } from '../../../../../components/variables/variables';
const initialStudentsState = [
    { rank: '', stdname: '', cgpa: '', dept: 'CSE' },
    { rank: '', stdname: '', cgpa: '', dept: 'CSE' },
    { rank: '', stdname: '', cgpa: '', dept: 'CSE' },
    { rank: '', stdname: '', cgpa: '', dept: 'CSE' },
    { rank: '', stdname: '', cgpa: '', dept: 'CSE' },
    { rank: '', stdname: '', cgpa: '', dept: 'CSE AI' },
    { rank: '', stdname: '', cgpa: '', dept: 'CSE AI' },
    { rank: '', stdname: '', cgpa: '', dept: 'CSE AI' },
    { rank: '', stdname: '', cgpa: '', dept: 'CSE AI' },
    { rank: '', stdname: '', cgpa: '', dept: 'CSE AI' },
    { rank: '', stdname: '', cgpa: '', dept: 'ENTC' },
    { rank: '', stdname: '', cgpa: '', dept: 'ENTC' },
    { rank: '', stdname: '', cgpa: '', dept: 'ENTC' },
    { rank: '', stdname: '', cgpa: '', dept: 'ENTC' },
    { rank: '', stdname: '', cgpa: '', dept: 'ENTC' },
    { rank: '', stdname: '', cgpa: '', dept: 'ELEC' },
    { rank: '', stdname: '', cgpa: '', dept: 'ELEC' },
    { rank: '', stdname: '', cgpa: '', dept: 'ELEC' },
    { rank: '', stdname: '', cgpa: '', dept: 'ELEC' },
    { rank: '', stdname: '', cgpa: '', dept: 'ELEC' },
    { rank: '', stdname: '', cgpa: '', dept: 'MECH' },
    { rank: '', stdname: '', cgpa: '', dept: 'MECH' },
    { rank: '', stdname: '', cgpa: '', dept: 'MECH' },
    { rank: '', stdname: '', cgpa: '', dept: 'MECH' },
    { rank: '', stdname: '', cgpa: '', dept: 'MECH' },
    { rank: '', stdname: '', cgpa: '', dept: 'AIDS' },
    { rank: '', stdname: '', cgpa: '', dept: 'AIDS' },
    { rank: '', stdname: '', cgpa: '', dept: 'AIDS' },
    { rank: '', stdname: '', cgpa: '', dept: 'AIDS' },
    { rank: '', stdname: '', cgpa: '', dept: 'AIDS' },
    { rank: '', stdname: '', cgpa: '', dept: 'CE' },
    { rank: '', stdname: '', cgpa: '', dept: 'CE' },
    { rank: '', stdname: '', cgpa: '', dept: 'CE' },
    { rank: '', stdname: '', cgpa: '', dept: 'CE' },
    { rank: '', stdname: '', cgpa: '', dept: 'CE' },
];

const SecondYearBtechEngineeringTables = () => {
    const FetchUrl = `${BASE_URL}/api/btechcgpa/get/second`
    const SubmitUrl = `${BASE_URL}/api/btechcgpa/submit/second`
    const year = "Fourth"
    return (
        <div>
           
            <StudentCgpaFormTable
                title="Second Year BTech"
                initialState={initialStudentsState}
                FetchUrl={FetchUrl}
                SubmitUrl={SubmitUrl}
                year = {year}
            />
        </div>
    );
};

export default SecondYearBtechEngineeringTables;
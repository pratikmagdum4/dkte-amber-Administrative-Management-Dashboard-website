import React from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import Navbar from '../../navbar/Navbar';
import { FacultyAchivements } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';

const FacultyBooksPublication = () => {
    const initialRows = [{ name: '', title: '', agency: '', isbnno: '', chapter: '' }];

    const columnHeaders = [
        { key: 'name', label: 'Name of the Faculty' },
        { key: 'title', label: 'Title of Book/Chapter' },
        { key: 'agency', label: 'Publication Agency' },
        { key: 'isbnno', label: 'ISBN Number' },
        { key: 'chapter', label: 'Chapter Number' },
    ];

    const FetchUrl = `${BASE_URL}/api/facultyachievements/bookpublication/getdata`;
    const SubmitUrl = `${BASE_URL}/api/facultyachievements/bookpublication/submit`;
    const DeleteUrl = `${BASE_URL}/api/facultyachievements/bookpublication`;
    const UpdateUrl = `${BASE_URL}/api/facultyachievements/bookpublication`;

    return (
        <div>
            <Navbar links={FacultyAchivements} />
            <AchievementsTable
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="FACULTY ACHIEVEMENTS IN BOOKS PUBLICATION"
                numberOfColumns={5}
                SubmitUrl={SubmitUrl}
                FetchUrl={FetchUrl}
                DeleteUrl={DeleteUrl}
                UpdateUrl={UpdateUrl}
            />
        </div>
    );
};

export default FacultyBooksPublication;

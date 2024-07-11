import React, { useState, useEffect } from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import Navbar from '../../navbar/Navbar';
import { FacultyAchivements } from '../../../components/varialbles/variables';

const FacultyBooksPublication = () => {
    const initialRows = [{ name: '', title: '', agency: '', isbnno: '', chapter: '' }];

    const columnHeaders = [
        { key: 'name', label: 'Name of the Faculty' },
        { key: 'title', label: 'Title of Book/Chapter' },
        { key: 'agency', label: 'Publication Agency' },
        { key: 'isbnno', label: 'ISBN Number' },
        { key: 'chapter', label: 'Chapter Number' },
    ];

    return (
        <div>
            <Navbar links={FacultyAchivements} />
            <AchievementsTable
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="FACULTY ACHIEVEMENTS IN BOOKS PUBLICATION"
                numberOfColumns={5}
                SubmitUrl="http://localhost:5000/api/facultyAchievements/submit"
                FetchUrl="http://localhost:5000/api/facultyAchievements/getData"
            />
        </div>
    );
};

export default FacultyBooksPublication;

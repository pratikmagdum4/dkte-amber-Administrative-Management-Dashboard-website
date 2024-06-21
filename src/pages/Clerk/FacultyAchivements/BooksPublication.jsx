import React from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
const initialRows1 = [
    { name: '', title: '', agency: '', isbnno: '' },
];
const initialRows2 = [
    { name: '', title: '', agency: '', isbnno: '' ,chapter:''},
];

const columnHeaders1 = [
    { key: 'name', label: 'Name of the Faculty' },
    { key: 'title', label: 'Title of Book/Chapter' },
    { key: 'agency', label: 'Publication Agency' },
    { key: 'isbnno', label: 'ISBN Number' },
    // { key: 'date', label: 'Date' }, // Example additional column
];
const columnHeaders2 = [
    { key: 'name', label: 'Name of the Faculty' },
    { key: 'title', label: 'Title of Book/Chapter' },
    { key: 'agency', label: 'Publication Agency' },
    { key: 'isbnno', label: 'ISBN Number' },
    { key: 'chapter', label: 'Chapter Number' },
    // { key: 'date', label: 'Date' }, // Example additional column
];

const FacultyBooksPublication = () => {
    return (
        <div>
            <AchievementsTable
                initialRows={initialRows1}
                columnHeaders={columnHeaders1}
                title="FACULTY ACHIEVEMENTS IN BOOKS PUBLICATION"
                numberOfColumns={4} 
            />
            <AchievementsTable
                initialRows={initialRows2}
                columnHeaders={columnHeaders2}
                title="FACULTY ACHIEVEMENTS IN BOOKS PUBLICATION"
                numberOfColumns={5}
            />
        </div>
    );
};

export default FacultyBooksPublication;

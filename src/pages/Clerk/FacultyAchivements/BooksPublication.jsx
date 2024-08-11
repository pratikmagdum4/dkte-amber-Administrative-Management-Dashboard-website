import React, { useRef } from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import Navbar from '../../navbar/Navbar';
import { ClerkNavLink } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';
import { useSelector } from 'react-redux';
import { selectCurrentDept } from '../../../redux/auth';
import { Document, Packer, Paragraph, Table, TableCell, TableRow, HeadingLevel, AlignmentType } from 'docx';
import { saveAs } from 'file-saver';

const FacultyBooksPublication = () => {
    const tableRef = useRef(null);
    const dept = useSelector(selectCurrentDept);

    const initialRows = [{ name: '', title: '', agency: '', isbnno: '', chapter: '' }];

    const columnHeaders = [
        { key: 'name', label: 'Name of the Faculty' },
        { key: 'title', label: 'Title of Book/Chapter' },
        { key: 'agency', label: 'Publication Agency' },
        { key: 'isbnno', label: 'ISBN Number' },
        { key: 'chapter', label: 'Chapter Number' },
    ];

    const FetchUrl = `${BASE_URL}/api/facultyachievements/bookpublication/getdata`;
    const SubmitUrl = `${BASE_URL}/api/facultyachievements/bookpublication/submit/${dept}`;
    const DeleteUrl = `${BASE_URL}/api/facultyachievements/bookpublication`;
    const UpdateUrl = `${BASE_URL}/api/facultyachievements/bookpublication`;

    const generateWordDocumentation = () => {
        const table = tableRef.current;

        if (table) {
            const rows = table.rows.map(row => ({
                name: row.name,
                title: row.title,
                agency: row.agency,
                isbnno: row.isbnno,
                chapter: row.chapter,
            }));

            // Create table rows for Word document
            const tableRows = rows.map(row => (
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph(row.name)],
                        }),
                        new TableCell({
                            children: [new Paragraph(row.title)],
                        }),
                        new TableCell({
                            children: [new Paragraph(row.agency)],
                        }),
                        new TableCell({
                            children: [new Paragraph(row.isbnno)],
                        }),
                        new TableCell({
                            children: [new Paragraph(row.chapter)],
                        }),
                    ],
                })
            ));

            // Create a new document
            const doc = new Document({
                sections: [
                    {
                        properties: {},
                        children: [
                            new Paragraph({
                                text: 'FACULTY ACHIEVEMENTS IN BOOKS PUBLICATION',
                                heading: HeadingLevel.HEADING_1,
                                alignment: AlignmentType.CENTER,
                            }),
                            // new Paragraph({
                            //     text: `Department: ${dept}`,
                            //     heading: HeadingLevel.HEADING_2,
                            //     alignment: AlignmentType.LEFT,
                            // }),
                            new Table({
                                rows: [
                                    new TableRow({
                                        children: columnHeaders.map(header => (
                                            new TableCell({
                                                children: [new Paragraph(header.label)],
                                            })
                                        )),
                                    }),
                                    ...tableRows,
                                ],
                            }),
                        ],
                    },
                ],
            });

            // Generate Word document
            Packer.toBlob(doc).then(blob => {
                saveAs(blob, 'Faculty_Books_Publication.docx');
            }).catch(err => {
                console.error('Error packing document:', err);
            });
        }
    };

    return (
        <div>
            <Navbar links={ClerkNavLink} />
            <button onClick={generateWordDocumentation} className='mt-4 bg-purple-500 text-white px-4 py-2 rounded'>
                Generate Word Document
            </button>
            <AchievementsTable
                ref={tableRef}
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

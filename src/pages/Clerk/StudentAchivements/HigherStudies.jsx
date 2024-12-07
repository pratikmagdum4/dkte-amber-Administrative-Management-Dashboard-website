import React, { useRef } from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { ClerkNavLink, StudentAchivements } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';
import { useSelector } from 'react-redux';
import { selectCurrentDept } from '../../../redux/auth';
import { Document, Packer, Paragraph, Table, TableCell, TableRow, TextRun, AlignmentType } from 'docx';
import { saveAs } from 'file-saver';

const initialRows = [
    { srno: '', info: '' },
];

const columnHeaders = [
    { key: 'srno', label: 'Sr.No.' },
    { key: 'info', label: 'Description' },
];

const stdabroad = true;

const StdHigherEducation = () => {
    const tableRef = useRef(null);
    const dept = useSelector(selectCurrentDept);

    const FetchUrl = `${BASE_URL}/api/studentachievements/higherstudies/getdata`;
    const SubmitUrl = `${BASE_URL}/api/studentachievements/higherstudies/submit/${dept}`;
    const DeleteUrl = `${BASE_URL}/api/studentachievements/higherstudies`;
    const UpdateUrl = `${BASE_URL}/api/studentachievements/higherstudies`;

    const generateWordDocument = () => {
        const table = tableRef.current;

        if (table) {
            const rows = table.rows.map(row => ({
                srno: row.srno,
                info: row.info,
            }));

            // Creating table rows for the Word document
            const tableRows = rows.map(row => (
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph(row.srno.toString())],
                        }),
                        new TableCell({
                            children: [new Paragraph(row.info)],
                        }),
                    ],
                })
            ));

            // Creating a new document
            const doc = new Document({
                sections: [
                    {
                        properties: {},
                        children: [
                            new Paragraph({
                                text: 'STUDENTS HIGHER STUDIES',
                                heading: "Title",
                                alignment: AlignmentType.CENTER,
                            }),
    new Table({
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph('Sr.No.')],
                    }),
                    new TableCell({
                        children: [new Paragraph('Description')],
                    }),
                ],
            }),
            ...tableRows,
        ],
                            }),
                        ],
                    },
                ],
            });

            // Generating the Word document
            Packer.toBlob(doc).then(blob => {
                saveAs(blob, "student-higher-studies.docx");
            });
        }
    };

    return (
        <div className='mt-14'>
            <Navbar links={ClerkNavLink} IsClerk={true} />
            <button onClick={generateWordDocument} className="mt-4 bg-purple-500 text-white px-4 py-2 rounded">
                Generate Word Document
            </button>
            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="SELECTED STUDENTS FOR HIGHER EDUCATION ABROAD"
                numberOfColumns={2}
                SubmitUrl={SubmitUrl}
                FetchUrl={FetchUrl}
                DeleteUrl={DeleteUrl}
                UpdateUrl={UpdateUrl}
                ref={tableRef}
            />
        </div>
    );
};

export default StdHigherEducation;

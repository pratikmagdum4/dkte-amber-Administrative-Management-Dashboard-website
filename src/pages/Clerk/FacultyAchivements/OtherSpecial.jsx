import React, { useRef } from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { FacultyAchivements } from '../../../components/variables/variables';
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
const FacultyOtherSpecial = () => {
    const tableRef = useRef(null);
    const dept = useSelector(selectCurrentDept);


    const FetchUrl = `${BASE_URL}/api/facultyachievements/otherspecial/getdata`;
    const SubmitUrl = `${BASE_URL}/api/facultyachievements/otherspecial/submit/${dept}`;
    const DeleteUrl = `${BASE_URL}/api/facultyachievements/otherspecial`;
    const UpdateUrl = `${BASE_URL}/api/facultyachievements/otherspecial`;

    const generateWordDocument = () => {


        const table = tableRef.current;
        if (table) {
            const rows = table.rows.map(row => ({
                srno: row.srno,
                info: row.info,
            }));

            //crate table
            const tableRows = rows.map(row => (
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph(row.srno.toString())],

                        }),
                        new TableCell({
                            children: [new Paragraph(row.info)],
                        })
                    ]
                })
            ));
            //create a new document
            const doc = new Document({
                sections: [
                    {
                        properties: {},
                        children: [
                            new Paragraph({
                                text: 'Student Other Special Achievements',
                                heading: columnHeaders.label,
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
                                                children: [new Paragraph('Student Achievements')],
                                            })
                                        ]
                                    }),
                                    ...tableRows,
                                ]
                            })
                        ]
                    }
                ]
            });
            //generate word doc
            Packer.toBlob(doc).then(blob => {
                saveAs(blob, 'Student Other Special Achievements');
            }).catch(err => {
                console.error(err);
                alert('Failed to generate Word Document');
            })
        }
    }

    return (
        <div className='mt-14'>
            <Navbar links={FacultyAchivements} />
            <button onClick={generateWordDocument} className='text-white bg-purple-500 mt-4 py-2 px-4'>
                Generate Word Document
            </button>
            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="OTHER SPECIAL ACHIEVEMENTS BY FACULTY"
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

export default FacultyOtherSpecial;

import React, { useRef } from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import Navbar from '../../navbar/Navbar';
import { ClerkNavLink } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';
import { Document, Packer, Paragraph, Table, TableCell, TableRow, TextRun, AlignmentType } from 'docx';
import { saveAs } from 'file-saver';
import { useSelector } from 'react-redux';
import { selectCurrentDept } from '../../../redux/auth';

const initialRows = [
    { srno: '', sponsors: '' },
];

const columnHeaders = [
    { key: 'srno', label: 'Sr.No.' },
    { key: 'sponsors', label: 'Sponsors Information' },
];

const stdabroad = true;

const SponsorListInfo = () => {
    const tableRef = useRef(null);
    const dept = useSelector(selectCurrentDept);

    const FetchUrl = `${BASE_URL}/api/sponsorslist/getdata`;
    const SubmitUrl = `${BASE_URL}/api/sponsorslist/submit/${dept}`;
    const DeleteUrl = `${BASE_URL}/api/sponsorslist`;
    const UpdateUrl = `${BASE_URL}/api/sponsorslist`;

    const generateWordDocument = () => {
        const table = tableRef.current;

        if (table) {
            const rows = table.rows.map(row => ({
                srno: row.srno,
                sponsors: row.sponsors,
            }));

            // Create table rows for Word document
            const tableRows = rows.map(row => (
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph(row.srno.toString())],
                        }),
                        new TableCell({
                            children: [new Paragraph(row.sponsors)],
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
                                text: 'SPONSORS',
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
            children: [new Paragraph('Sponsors Information')],
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

            // Generating Word document
            Packer.toBlob(doc).then(blob => {
                saveAs(blob, 'SponsorsList.docx');
            }).catch(err => {
                console.error('Error packing document:', err);
            });
        }
    };

    return (
        <div className='mt-14'>
            <Navbar links={ClerkNavLink} />
            <button onClick={generateWordDocument} className="mt-4 bg-purple-500 text-white px-4 py-2 rounded">
                Generate Word Document
            </button>
            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="SPONSORS"
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

export default SponsorListInfo;

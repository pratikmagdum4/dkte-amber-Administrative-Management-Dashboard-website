import React, { useRef } from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import { BASE_URL } from '../../../api';
import { Document, Packer, Paragraph, Table, TableCell, TableRow, AlignmentType } from 'docx';
import { saveAs } from 'file-saver';
import { useSelector } from 'react-redux';
import { selectCurrentDept } from '../../../redux/auth';
import Navbar from '../../navbar/Navbar';
import { ClerkNavLink } from '../../../components/variables/variables';

const initialRows = [
    { srno: '', sponsors: '' },
];

const columnHeaders = [
    { key: 'srno', label: 'Sr.No.' },
    { key: 'sponsors', label: 'Sponsors Information' },
];

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
            const rows = table.rows.map((row) => ({
                srno: row.srno,
                sponsors: row.sponsors,
            }));

            const tableRows = rows.map(
                (row) =>
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph(row.srno.toString())] }),
                            new TableCell({ children: [new Paragraph(row.sponsors)] }),
                        ],
                    })
            );

            const doc = new Document({
                sections: [
                    {
                        properties: {},
                        children: [
                            new Paragraph({
                                text: 'SPONSORS',
                                heading: 'HEADING_1',
                                alignment: AlignmentType.CENTER,
                            }),
                            new Table({
                                rows: [
                                    new TableRow({
                                        children: [
                                            new TableCell({ children: [new Paragraph('Sr.No.')] }),
                                            new TableCell({ children: [new Paragraph('Sponsors Information')] }),
                                        ],
                                    }),
                                    ...tableRows,
                                ],
                            }),
                        ],
                    },
                ],
            });

            Packer.toBlob(doc)
                .then((blob) => {
                    saveAs(blob, 'SponsorsList.docx');
                })
                .catch((err) => {
                    console.error('Error packing document:', err);
                });
        }
    };

    return (
        <div className="p-8">
            <Navbar links={ClerkNavLink} />
            <h1 className="text-2xl font-bold mb-6">Sponsors List</h1>
            <button
                onClick={generateWordDocument}
                className="mb-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
            >
                Generate Word Document
            </button>
            <AchievementsTable
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

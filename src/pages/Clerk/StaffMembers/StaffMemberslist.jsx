import React, { useRef } from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import Navbar from '../../navbar/Navbar';
import { ClerkNavLink } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { generateMultipleWordDocument } from '../../../utils/wordDocumentGenerateMultiple';
import { useSelector } from 'react-redux';
import { selectCurrentDept } from '../../../redux/auth';

// Initial rows and column headers
const initialRows = [
    { name: '', title: '', position: '' },
];

const initialRows1 = [
    { ugpgmba: '', count: '' },
];

const initialRows2 = [
    { namecat: '', positioncount: '' },
];

const columnHeaders = [
    { key: 'name', label: 'Name' },
    { key: 'position', label: 'Position' },
];

const columnHeaders1 = [
    { key: 'ugpgmba', label: 'UG/PG/MBA' },
    { key: 'count', label: 'Count' },
];

const columnHeaders2 = [
    { key: 'namecat', label: 'Name/Category' },
    { key: 'positioncount', label: 'Position/Count' },
];
// Table configurations


const StaffMembersList = () => {
    const dept = useSelector(selectCurrentDept)

    const tablesRef = useRef([]);
    const tableConfigs = [
        {
            initialRows: initialRows,
            columnHeaders: columnHeaders,
            title: "STAFF MEMBERS 2023-2024",
            fetchUrl: `${BASE_URL}/api/staffmember/list/getdata`,
            submitUrl: `${BASE_URL}/api/staffmember/list/submit/${dept}`,
            deleteUrl: `${BASE_URL}/api/staffmember/list`,
            updateUrl: `${BASE_URL}/api/staffmember/list`,
            numberOfColumns: 3,
        },
        {
            initialRows: initialRows1,
            columnHeaders: columnHeaders1,
            title: "STAFF MEMBERS 2023-2024 - UG/PG/MBA",
            fetchUrl: `${BASE_URL}/api/staffmember/category/getdata`,
            submitUrl: `${BASE_URL}/api/staffmember/category/submit/${dept}`,
            deleteUrl: `${BASE_URL}/api/staffmember/category`,
            updateUrl: `${BASE_URL}/api/staffmember/category`,
            numberOfColumns: 2,
        },
        {
            initialRows: initialRows2,
            columnHeaders: columnHeaders2,
            title: "STAFF MEMBERS 2023-2024 - Position Count",
            fetchUrl: `${BASE_URL}/api/staffmember/positioncount/getdata`,
            submitUrl: `${BASE_URL}/api/staffmember/positioncount/submit/${dept}`,
            deleteUrl: `${BASE_URL}/api/staffmember/positioncount`,
            updateUrl: `${BASE_URL}/api/staffmember/positioncount`,
            numberOfColumns: 2,
        },
    ];
    // Generate PDF document
    const generatePDF = () => {
        const doc = new jsPDF();
        let yOffset = 10;

        tablesRef.current.forEach((table, index) => {
            if (table) {
                const tableColumns = table.columns.map(header => ({ title: header.label, dataKey: header.key }));
                const tableRows = table.rows.map(row => Object.fromEntries(
                    table.columns.map(header => [header.key, row[header.key]])
                ));

                // Add title
                doc.setFontSize(16);
                doc.text(table.title, 10, yOffset);
                yOffset += 10;

                // Add table with autoTable
                doc.autoTable({
                    startY: yOffset,
                    head: [tableColumns.map(col => col.title)],
                    body: tableRows.map(row => Object.values(row)),
                    margin: { top: 10, right: 10, bottom: 10, left: 10 },
                    pageBreak: 'auto',
                    styles: { overflow: 'linebreak' },
                    headStyles: { fillColor: [41, 128, 185] },
                    theme: 'grid',
                    didDrawPage: (data) => {
                        if (data.pageNumber > 1) {
                            yOffset = 10;
                        }
                    }
                });

                yOffset = doc.lastAutoTable.finalY + 20;

                if (index < tablesRef.current.length - 1) {
                    doc.addPage();
                }
            }
        });

        doc.save('staff-members-list.pdf');
    };

    // Generate Word document
    const generateWord = () => {
        const tables = tablesRef.current.map(table => ({
            title: table.title,
            rows: table.rows,
            columns: table.columns,
        }));
        generateMultipleWordDocument(tables, 'StaffMembersList');
    };

    return (
        <div>
            <Navbar links={ClerkNavLink} />
            <div className="mb-4">
                <button onClick={generatePDF} className="bg-purple-500 mt-4 text-white px-4 py-2 rounded">
                    Generate PDF
                </button>
                <button onClick={generateWord} className="bg-blue-500 mt-4 text-white px-4 py-2 rounded ml-4">
                    Generate Word Document
                </button>
            </div>
            <div>
                {tableConfigs.map((config, index) => (
                    <AchievementsTable
                        NotDisplayToast={true}
                        key={index}
                        ref={el => {
                            if (el) {
                                tablesRef.current[index] = {
                                    title: config.title,
                                    rows: el.rows,
                                    columns: config.columnHeaders, // Use the specific columnHeaders from config
                                };
                            }
                        }}
                        initialRows={config.initialRows}
                        columnHeaders={config.columnHeaders}
                        title={config.title}
                        numberOfColumns={config.numberOfColumns}
                        SubmitUrl={config.submitUrl}
                        FetchUrl={config.fetchUrl}
                        DeleteUrl={config.deleteUrl}
                        UpdateUrl={config.updateUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default StaffMembersList;

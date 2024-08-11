import React, { useRef } from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import Navbar from '../../navbar/Navbar';
import { ClerkNavLink } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { generateMultipleWordDocument } from '../../../utils/wordDocumentGenerateMultiple';
import ErrorBoundary from '../../../components/ErrorBoundry';
import { useSelector } from 'react-redux';
import { selectCurrentDept } from '../../../redux/auth';

const initialRows = [
    { srno: '', branch: '', studentforcampus: '', recruitedstd: '', placementpercentage: '' },
];

const initialRows1 = [
    { minmaxavg: '', info: '' },
];

const initialRows2 = [
    { category: '', studentcount: '' },
];

const columnHeaders = [
    { key: 'srno', label: 'Sr.No.' },
    { key: 'branch', label: 'Branch' },
    { key: 'studentforcampus', label: 'No. of Students available for campus Recruitment' },
    { key: 'recruitedstd', label: 'No. of Students Recruited through Campus Interviews' },
    { key: 'placementpercentage', label: 'Percentage of Placement' },
];

const columnHeaders1 = [
    { key: 'minmaxavg', label: 'Min/Max/Avg' },
    { key: 'info', label: 'Package Per Annum' },
];

const columnHeaders2 = [
    { key: 'category', label: 'Category' },
    { key: 'studentcount', label: 'No. of Students' },
];


const TrainingPlacementTextileReport = () => {
    const tablesRef = useRef([]);
    const dept = useSelector(selectCurrentDept)
    const tableConfigs = [
        {
            title: "TEXTILE DEPARTMENTS",
            initialRows: initialRows,
            columnHeaders: columnHeaders,
            fetchUrl: `${BASE_URL}/api/textile/placement/departments/getdata`,
            submitUrl: `${BASE_URL}/api/textile/placement/departments/submit/${dept}`,
            deleteUrl: `${BASE_URL}/api/textile/placement/departments`,
            updateUrl: `${BASE_URL}/api/textile/placement/departments`,
            numberOfColumns: 5,
        },
        {
            title: "Package Offered For Btech Textile",
            initialRows: initialRows1,
            columnHeaders: columnHeaders1,
            fetchUrl: `${BASE_URL}/api/textile/placement/packageoffered/getdata`,
            submitUrl: `${BASE_URL}/api/textile/placement/packageoffered/submit/${dept}`,
            deleteUrl: `${BASE_URL}/api/textile/placement/packageoffered`,
            updateUrl: `${BASE_URL}/api/textile/placement/packageoffered`,
            numberOfColumns: 2,
        },
        {
            title: "INTERNATIONAL PLACEMENT & SUMMER INTERNSHIP",
            initialRows: initialRows1,
            columnHeaders: columnHeaders1,
            fetchUrl: `${BASE_URL}/api/textile/placement/international/getdata`,
            submitUrl: `${BASE_URL}/api/textile/placement/international/submit/${dept}`,
            deleteUrl: `${BASE_URL}/api/textile/placement/international`,
            updateUrl: `${BASE_URL}/api/textile/placement/international`,
            numberOfColumns: 2,
        },
        {
            title: "INDUSTRIAL TRAINING",
            initialRows: initialRows2,
            columnHeaders: columnHeaders2,
            fetchUrl: `${BASE_URL}/api/textile/placement/industrialtraining/getdata`,
            submitUrl: `${BASE_URL}/api/textile/placement/industrialtraining/submit/${dept}`,
            deleteUrl: `${BASE_URL}/api/textile/placement/industrialtraining`,
            updateUrl: `${BASE_URL}/api/textile/placement/industrialtraining`,
            numberOfColumns: 2,
        },
    ];

    const generatePDF = () => {
        const doc = new jsPDF();
        let yOffset = 10;

        tablesRef.current.forEach((table, index) => {
            const tableColumns = table.columnHeaders.map(header => ({ title: header.label, dataKey: header.key }));
            const tableRows = table.rows.map(row => table.columnHeaders.reduce((acc, col) => {
                acc[col.key] = row[col.key];
                return acc;
            }, {}));

            doc.setFontSize(16);
            doc.text(table.title, 10, yOffset);
            yOffset += 10;

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
                yOffset = 10;
            }
        });

        doc.save('TrainingPlacementTextileReport.pdf');
    };

    const generateWord = () => {
        const tables = tablesRef.current.map(table => ({
            title: table.title,
            rows: table.rows,
            columns: table.columnHeaders,
        }));
        generateMultipleWordDocument(tables, 'TrainingPlacementTextileReport');
    };

    return (
        <ErrorBoundary>
            <div>
                <Navbar links={ClerkNavLink} />
                <h1>REPORT ON TRAINING AND PLACEMENT ACTIVITIES</h1>
                <button onClick={generatePDF} className="mt-4 bg-purple-500 text-white px-4 py-2 rounded">
                    Generate PDF
                </button>
                <button onClick={generateWord} className="mt-4 bg-green-500 text-white px-4 py-2 rounded ml-4">
                    Generate Word Document
                </button>
                {tableConfigs.map((config, index) => (
                    <AchievementsTable
                        key={index}
                        NotDisplayToast={true}
                        initialRows={config.initialRows}
                        columnHeaders={config.columnHeaders}
                        title={config.title}
                        numberOfColumns={config.numberOfColumns}
                        SubmitUrl={config.submitUrl}
                        FetchUrl={config.fetchUrl}
                        DeleteUrl={config.deleteUrl}
                        UpdateUrl={config.updateUrl}
                        ref={el => {
                            if (el) {
                                tablesRef.current[index] = {
                                    title: config.title,
                                    rows: el.rows,
                                    columnHeaders: config.columnHeaders,
                                };
                            }
                        }}
                    />
                ))}
            </div>
        </ErrorBoundary>
    );
};

export default TrainingPlacementTextileReport;

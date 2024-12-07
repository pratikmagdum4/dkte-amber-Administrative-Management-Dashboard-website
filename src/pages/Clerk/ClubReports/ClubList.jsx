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
    { info: '' },
];

const columnHeaders = [
    { key: 'info', label: 'Description' },
];

const tableConfigs = [
    { title: "ACSES REPORT", endpoint: "acses" },
    { title: "AISA REPORT", endpoint: "aisa" },
    { title: "EESA REPORT", endpoint: "eesa" },
    { title: "COMSA REPORT", endpoint: "comsa" },
    { title: "CESA REPORT", endpoint: "cesa" },
    { title: "IET STUDENTS CHAPTER REPORT", endpoint: "iet" },
    { title: "MESA REPORT", endpoint: "mesa" },
    { title: "TAIMU REPORT", endpoint: "taimu" }
];

const ClubReports = () => {
    const tablesRef = useRef([]);
    const dept = useSelector(selectCurrentDept)
    const FetchUrl = `${BASE_URL}/api/clubreports/getdata`;
    const SubmitUrl = `${BASE_URL}/api/clubreports/submit`;
    const DeleteUrl = `${BASE_URL}/api/clubreports`;
    const UpdateUrl = `${BASE_URL}/api/clubreports`;

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

        doc.save('ClubReports.pdf');
    };

    const generateWord = () => {
        const tables = tablesRef.current.map(table => ({
            title: table.title,
            rows: table.rows,
            columns: table.columnHeaders,
        }));
        generateMultipleWordDocument(tables, 'ClubReports');
    };

    return (
        <ErrorBoundary>
            <div className='mt-10'>
                <Navbar links={ClerkNavLink} IsClerk={true} />
                <h1>Club Reports</h1>
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
                        stdabroad={true}
                        initialRows={initialRows}
                        columnHeaders={columnHeaders}
                        title={config.title}
                        numberOfColumns={2}
                        SubmitUrl={`${SubmitUrl}/${config.endpoint}/${dept}`}
                        FetchUrl={`${FetchUrl}/${config.endpoint}`}
                        DeleteUrl={`${DeleteUrl}/${config.endpoint}`}
                        UpdateUrl={`${UpdateUrl}/${config.endpoint}`}
                        ref={el => {
                            if (el) {
                                tablesRef.current[index] = {
                                    title: config.title,
                                    rows: el.rows,
                                    columnHeaders: columnHeaders,
                                };
                            }
                        }}
                    />
                ))}
            </div>
        </ErrorBoundary>
    );
};

export default ClubReports;

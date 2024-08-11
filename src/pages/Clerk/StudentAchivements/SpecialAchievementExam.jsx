import React, { useRef } from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import Navbar from '../../navbar/Navbar';
import { ClerkNavLink } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';
import ErrorBoundary from '../../../components/ErrorBoundry';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

import { generateMultipleWordDocument } from '../../../utils/wordDocumentGenerateMultiple';
import { useSelector } from 'react-redux';
import { selectCurrentDept } from '../../../redux/auth';

const initialRows1 = [
    { srno: '', name: '', class: '' },
];

const columnHeaders1 = [
    { key: 'srno', label: 'Sr No.' },
    { key: 'name', label: 'Name of Students' },
    { key: 'class', label: 'Class' },
];

const StudentSpecialAchievements = () => {
    const tablesRef = useRef([]);
const dept = useSelector(selectCurrentDept)
    const FetchUrl = `${BASE_URL}/api/studentachievements/specialachievements/getdata`;
    const SubmitUrl = `${BASE_URL}/api/studentachievements/specialachievements/submit`;
    const DeleteUrl = `${BASE_URL}/api/studentachievements/specialachievements`;
    const UpdateUrl = `${BASE_URL}/api/studentachievements/specialachievements`;

    const generatePDF = () => {
        const doc = new jsPDF();
        let yOffset = 10;

        tablesRef.current.forEach((table, index) => {
            const tableColumns = columnHeaders1.map(header => ({ title: header.label, dataKey: header.key }));
            const tableRows = table.rows.map(row => ({
                srno: row.srno,
                name: row.name,
                class: row.class
            }));

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

        doc.save('Students-Special-Achievement-exam.pdf');
    };

    const generateWord = () => {
        const tables = tablesRef.current.map(table => ({
            title: table.title,
            rows: table.rows,
            columns: columnHeaders1,
        }));
        generateMultipleWordDocument(tables, 'Students-Special-Achievement-exam');
    };

    const tableConfigs = [
        {
            title: "GATE EXAM",
            fetchUrl: `${FetchUrl}/gate`,
            submitUrl: `${SubmitUrl}/gate/${dept}`,
            deleteUrl: `${DeleteUrl}/gate`,
            updateUrl: `${UpdateUrl}/gate`,
        },
        {
            title: "NIFT EXAM",
            fetchUrl: `${FetchUrl}/nift`,
            submitUrl: `${SubmitUrl}/nift/${dept}`,
            deleteUrl: `${DeleteUrl}/nift`,
            updateUrl: `${UpdateUrl}/nift`,
        },
        {
            title: "TOEFL EXAM",
            fetchUrl: `${FetchUrl}/toefl`,
            submitUrl: `${SubmitUrl}/toefl/${dept}`,
            deleteUrl: `${DeleteUrl}/toefl`,
            updateUrl: `${UpdateUrl}/toefl`,
        },
        {
            title: "GRE EXAM",
            fetchUrl: `${FetchUrl}/gre`,
            submitUrl: `${SubmitUrl}/gre/${dept}`,
            deleteUrl: `${DeleteUrl}/gre`,
            updateUrl: `${UpdateUrl}/gre`,
        }
    ];

    return (
        <ErrorBoundary>
            <div>
                <Navbar links={ClerkNavLink} />
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
                        initialRows={initialRows1}
                        columnHeaders={columnHeaders1}
                        title={config.title}
                        numberOfColumns={3}
                        SubmitUrl={config.submitUrl}
                        FetchUrl={config.fetchUrl}
                        DeleteUrl={config.deleteUrl}
                        UpdateUrl={config.updateUrl}
                        ref={el => tablesRef.current[index] = el}
                    />
                ))}
            </div>
        </ErrorBoundary>
    );
};

export default StudentSpecialAchievements;

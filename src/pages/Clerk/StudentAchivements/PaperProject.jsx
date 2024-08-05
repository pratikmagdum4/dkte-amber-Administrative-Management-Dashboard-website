import React, { useRef } from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { ClerkNavLink, StudentAchivements } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const initialRows = [
    { name: '', event: '', prize: '', date: '' },
];

const columnHeaders = [
    { key: 'name', label: 'Name of the Student' },
    { key: 'event', label: 'Event' },
    { key: 'prize', label: 'Prize' },
];

const StudentPaperProject = () => {
    const tableRef = useRef(null);

    const generatePDF = () => {
        const doc = new jsPDF();
        const table = tableRef.current;
        
        const pageHeight = doc.internal.pageSize.height;
        let yOffset = 10; // Start at the top of the page

        if (table) {
           
            const tableColumns = columnHeaders.map(header => ({ title: header.label, dataKey: header.key }));
            const tableRows = table.rows.map(row => ({
                name: row.name,
                event: row.event,
                prize: row.prize
            }));
           
            // Add title
            doc.setFontSize(16);
            doc.text('STUDENTS ACHIEVEMENTS IN PAPER/PROJECT PRESENTATION CONTESTS', 10, yOffset);
            yOffset += 10; // Increase Y offset for table content

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
                    // Adjust yOffset for new pages
                    if (data.pageNumber > 1) {
                        yOffset = 10;
                    }
                }
            });

            // Calculate new Y offset after table is drawn
            yOffset = doc.lastAutoTable.finalY + 20;

            doc.save('Paper-Presentation.pdf');
        }
    };

    const FetchUrl = `${BASE_URL}/api/studentachievements/paperproject/getdata`;
    const SubmitUrl = `${BASE_URL}/api/studentachievements/paperproject/submit`;
    const DeleteUrl = `${BASE_URL}/api/studentachievements/paperproject`;
    const UpdateUrl = `${BASE_URL}/api/studentachievements/paperproject`;

    return (
        <div>
            <Navbar links={ClerkNavLink} />
            <button onClick={generatePDF} className="mt-4 bg-purple-500 text-white px-4 py-2 rounded">
                Generate PDF
            </button>
            <AchievementsTable
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="STUDENTS ACHIEVEMENTS IN PAPER/PROJECT PRESENTATION CONTESTS"
                numberOfColumns={3}
                SubmitUrl={SubmitUrl}
                FetchUrl={FetchUrl}
                DeleteUrl={DeleteUrl}
                UpdateUrl={UpdateUrl}
                ref={tableRef}
            />
            
        </div>
    );
};

export default StudentPaperProject;

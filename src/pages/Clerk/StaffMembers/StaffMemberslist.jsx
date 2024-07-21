import React, { useRef } from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { StaffMembers } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

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
    { key: 'name', label: 'Name ' },
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

const StaffMembersList = () => {
    const tablesRef = useRef([]);

    const generatePDF = () => {
        const doc = new jsPDF();
        const pageHeight = doc.internal.pageSize.height;
        let yOffset = 10; // Start at the top of the page

        tablesRef.current.forEach((table, index) => {
            if (table) {
                const tableColumns = table.columnHeaders.map(header => ({ title: header.label, dataKey: header.key }));
                const tableRows = table.rows.map(row => Object.fromEntries(
                    table.columnHeaders.map(header => [header.key, row[header.key]])
                ));

                // Add title
                doc.setFontSize(16);
                doc.text(table.title, 10, yOffset);
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

                if (index < tablesRef.current.length - 1) {
                    doc.addPage(); // Add new page for the next table
                }
            }
        });

        doc.save('staff-members-list.pdf');
    };

    return (
        <div>
            <Navbar links={StaffMembers} />
            <button onClick={generatePDF} className="mb-4 mt-4 bg-purple-500 text-white px-4 py-2 rounded">
                Generate PDF
            </button>
            <AchievementsTable
                ref={el => tablesRef.current[0] = el}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="STAFF MEMBERS 2023-2024"
                numberOfColumns={2}
                onSubmit={() => { }}
            />
            <AchievementsTable
                ref={el => tablesRef.current[1] = el}
                initialRows={initialRows1}
                columnHeaders={columnHeaders1}
                title="STAFF MEMBERS 2023-2024 - UG/PG/MBA"
                numberOfColumns={2}
                onSubmit={() => { }}
            />
            <AchievementsTable
                ref={el => tablesRef.current[2] = el}
                initialRows={initialRows2}
                columnHeaders={columnHeaders2}
                title="STAFF MEMBERS 2023-2024 - Position Count"
                numberOfColumns={2}
                onSubmit={() => { }}
            />
        </div>
    );
};

export default StaffMembersList;

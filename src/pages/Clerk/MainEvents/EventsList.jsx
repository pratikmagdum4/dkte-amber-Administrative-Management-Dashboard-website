import React, { useRef } from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import Navbar from '../../navbar/Navbar';
import { MainEvents } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Eventscuate1 } from '../../../assets';

const initialRows = [
    { srno: '', info: '' },
];

const columnHeaders = [
    { key: 'srno', label: 'Sr.No.' },
    { key: 'info', label: 'Description' },
];

const stdabroad = true;

const MainEventTables = () => {
    const tablesRef = useRef([]);

    const FetchUrl = `${BASE_URL}/api/mainevents/getdata`;
    const SubmitUrl = `${BASE_URL}/api/mainevents/submit`;
    const DeleteUrl = `${BASE_URL}/api/mainevents`;
    const UpdateUrl = `${BASE_URL}/api/mainevents`;

    const generatePDF = () => {
        const doc = new jsPDF();
        let yOffset = 10; // Initial Y offset for the first title

        tablesRef.current.forEach((table, index) => {
            const tableColumns = columnHeaders.map(header => ({ title: header.label, dataKey: header.key }));
            const tableRows = table.rows.map(row => ({
                srno: row.srno,
                info: row.info
            }));

            // Add title before the table
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
                    // Check if it's a new page, reset Y offset for new page
                    if (data.pageNumber > 1) {
                        yOffset = 10;
                    }
                }
            });

            // Calculate new Y offset after table is drawn
            yOffset = doc.lastAutoTable.finalY + 20;

            if (index < tablesRef.current.length - 1) {
                doc.addPage();
                yOffset = 10; // Reset Y offset for new page title
            }
        });

        doc.save('Main-Events.pdf');
    };

    return (
        <div>
            <Navbar links={MainEvents} />
            <button onClick={generatePDF} className="mt-4 bg-purple-500 text-white px-4 py-2 rounded">
                Generate PDF
            </button>
            <div>
                {[
                    {
                        title: "TESTVISION 2K24 AND FASHIONAVA 2K24",
                        fetchUrl: `${FetchUrl}/testvis`,
                        submitUrl: `${SubmitUrl}/testvis`,
                        deleteUrl: `${DeleteUrl}/testvis`,
                        updateUrl: `${UpdateUrl}/testvis`
                    },
                    {
                        title: "TECHSYMPOSIUM 2K24",
                        fetchUrl: `${FetchUrl}/techsym`,
                        submitUrl: `${SubmitUrl}/techsym`,
                        deleteUrl: `${DeleteUrl}/techsym`,
                        updateUrl: `${UpdateUrl}/techsym`
                    },
                    {
                        title: "ALUNMI GET-TOGETHER 2023-24",
                        fetchUrl: `${FetchUrl}/alunmi`,
                        submitUrl: `${SubmitUrl}/alunmi`,
                        deleteUrl: `${DeleteUrl}/alunmi`,
                        updateUrl: `${UpdateUrl}/alunmi`
                    },
                    {
                        title: "ENTREPRENEURSHIP DEVELOPMENT CELL",
                        fetchUrl: `${FetchUrl}/enterdevop`,
                        submitUrl: `${SubmitUrl}/enterdevop`,
                        deleteUrl: `${DeleteUrl}/enterdevop`,
                        updateUrl: `${UpdateUrl}/enterdevop`
                    },
                    {
                        title: "CAREER GUIDANCE CELL",
                        fetchUrl: `${FetchUrl}/career`,
                        submitUrl: `${SubmitUrl}/career`,
                        deleteUrl: `${DeleteUrl}/career`,
                        updateUrl: `${UpdateUrl}/career`
                    }
                ].map((config, index) => (
                    <AchievementsTable
                        NotDisplayToast={true}
                        key={index}
                        stdabroad={stdabroad}
                        initialRows={initialRows}
                        columnHeaders={columnHeaders}
                        title={config.title}
                        numberOfColumns={2}
                        SubmitUrl={config.submitUrl}
                        FetchUrl={config.fetchUrl}
                        DeleteUrl={config.deleteUrl}
                        UpdateUrl={config.updateUrl}
                        ref={el => tablesRef.current[index] = el}
                    />
                ))}
            </div>
         
          
        </div>
    );
};

export default MainEventTables;

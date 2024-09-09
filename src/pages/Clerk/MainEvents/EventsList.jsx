import React, { useRef, useState } from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import Navbar from '../../navbar/Navbar';
import { ClerkNavLink } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';
import { Document, Packer, Paragraph, Table, TableCell, TableRow } from 'docx';
import { saveAs } from 'file-saver';
import { useSelector } from 'react-redux';
import { selectCurrentDept } from '../../../redux/auth';

const initialRows = [
    { info: '' },
];

const columnHeaders = [
    { key: 'info', label: 'Description' },
];

const stdabroad = true;

const MainEventTables = () => {
    const tablesRef = useRef([]);
    const dept = useSelector(selectCurrentDept);
    const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state

    const FetchUrl = `${BASE_URL}/api/mainevents/getdata`;
    const SubmitUrl = `${BASE_URL}/api/mainevents/submit`;
    const DeleteUrl = `${BASE_URL}/api/mainevents`;
    const UpdateUrl = `${BASE_URL}/api/mainevents`;

    const generateWordDocument = () => {
        try {
            const doc = new Document({
                sections: tablesRef.current.map((table, index) => ({
                    properties: {},
                    children: [
                        new Paragraph({
                            text: table.title,
                        }),
                        new Table({
                            rows: [
                                new TableRow({
                                    children: columnHeaders.map(header => new TableCell({
                                        children: [new Paragraph(header.label)],
                                    })),
                                }),
                                ...table.rows.map(row => new TableRow({
                                    children: columnHeaders.map(header => new TableCell({
                                        children: [new Paragraph(row[header.key] || '')],
                                    })),
                                })),
                            ],
                        }),
                    ],
                })),
            });

            Packer.toBlob(doc).then(blob => {
                saveAs(blob, 'Main-Events.docx');
            }).catch(err => {
                console.error('Error packing document:', err);
            });
        } catch (error) {
            console.error('Error generating Word document:', error);
        }
    };

    return (
        <div className={isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}> {/* Toggle dark/light mode */}
            <Navbar links={ClerkNavLink} />

            {/* Dark Mode Toggle Button */}
            <div className="mt-16">
                <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className={`px-4 py-2 rounded ${isDarkMode ? 'bg-yellow-500' : 'bg-purple-500'} text-white`}
                >
                    Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
                </button>
            </div>

            <button onClick={generateWordDocument} className="mt-4 bg-purple-500 text-white px-4 py-2 rounded">
                Generate Word Document
            </button>

            <div>
                {[
                    {
                        title: "TESTVISION 2K24 AND FASHIONAVA 2K24",
                        fetchUrl: `${FetchUrl}/testvis`,
                        submitUrl: `${SubmitUrl}/testvis/${dept}`,
                        deleteUrl: `${DeleteUrl}/testvis`,
                        updateUrl: `${UpdateUrl}/testvis`
                    },
                    {
                        title: "TECHSYMPOSIUM 2K24",
                        fetchUrl: `${FetchUrl}/techsym`,
                        submitUrl: `${SubmitUrl}/techsym/${dept}`,
                        deleteUrl: `${DeleteUrl}/techsym`,
                        updateUrl: `${UpdateUrl}/techsym`
                    },
                    {
                        title: "ALUNMI GET-TOGETHER 2023-24",
                        fetchUrl: `${FetchUrl}/alunmi`,
                        submitUrl: `${SubmitUrl}/alunmi/${dept}`,
                        deleteUrl: `${DeleteUrl}/alunmi`,
                        updateUrl: `${UpdateUrl}/alunmi`
                    },
                    {
                        title: "ENTREPRENEURSHIP DEVELOPMENT CELL",
                        fetchUrl: `${FetchUrl}/enterdevop`,
                        submitUrl: `${SubmitUrl}/enterdevop/${dept}`,
                        deleteUrl: `${DeleteUrl}/enterdevop`,
                        updateUrl: `${UpdateUrl}/enterdevop`
                    },
                    {
                        title: "CAREER GUIDANCE CELL",
                        fetchUrl: `${FetchUrl}/career`,
                        submitUrl: `${SubmitUrl}/career/${dept}`,
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
                        isDarkMode={isDarkMode} // Pass dark mode state to child component
                    />
                ))}
            </div>
        </div>
    );
};

export default MainEventTables;

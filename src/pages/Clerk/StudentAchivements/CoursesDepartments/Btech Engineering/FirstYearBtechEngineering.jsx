import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../../../../navbar/Navbar';
import { MainEvents } from '../../../../../components/variables/variables';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import StudentFormTable from '../../../../../components/ui/ScoreRankers';
import axios from 'axios';
import { BASE_URL } from '../../../../../api';

const departments = [
    "COMPUTER SCIENCE & ENGINEERING",
    "COMPUTER SCIENCE & ENGINEERING(AI &ML)",
    "ELECTRONICS AND TELECOMMUNICATION ENGG",
    "ELECTRICAL ENGINEERING",
    "MECHANICAL ENGINEERING",
    "ELECTRICAL ENGINEERING",
    "AI AND DATA SCIENCE"
];

const FirstYearBtechEngineeringTables = () => {
    const tablesRef = useRef([]);
    const [departmentData, setDepartmentData] = useState([]);

    useEffect(() => {
        // Fetch data from the backend
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/first/btech/get`);
                setDepartmentData(response.data.departments);
            } catch (error) {
                console.error('Error fetching data:', error);
                alert('Error fetching data. Please try again.');
            }
        };

        fetchData();
    }, []);

    const generatePDF = () => {
        const doc = new jsPDF();
        let yOffset = 10; // Initial Y offset for the first title

        tablesRef.current.forEach((table, index) => {
            const tableColumns = [
                { title: "Rank", dataKey: "rank" },
                { title: "Student Name", dataKey: "name" },
                { title: "CGPA", dataKey: "cgpa" }
            ];
            const tableRows = table.students.map(row => ({
                rank: row.rank,
                name: row.name,
                cgpa: row.cgpa,
            }));

            // Add title before the table
            doc.setFontSize(16);
            doc.text(departments[index], 10, yOffset);
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

    const handleSubmitAll = async (allStudents) => {
        try {
            const response = await axios.post(`${BASE_URL}/api/first/btech/submit`, { departments: allStudents });
            console.log('Data sent successfully:', response.data);
            alert('Data saved successfully!');
        } catch (error) {
            console.error('Error sending data:', error);
            alert('Error saving data. Please try again.');
        }
    };

    return (
        <div>
            <Navbar links={MainEvents} />
            <button onClick={generatePDF} className="mt-4 bg-purple-500 text-white px-4 py-2 rounded">
                Generate PDF
            </button>
            <form onSubmit={(e) => {
                e.preventDefault();
                const allStudents = tablesRef.current.map(ref => ref.students);
                handleSubmitAll(allStudents);
            }}>
                {departments.map((dept, index) => (
                    <StudentFormTable
                        key={index}
                        title={dept}
                        students={departmentData[index]?.students || []}
                        ref={el => tablesRef.current[index] = el}
                    />
                ))}
                <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                    Save All
                </button>
            </form>
        </div>
    );
};

export default FirstYearBtechEngineeringTables;

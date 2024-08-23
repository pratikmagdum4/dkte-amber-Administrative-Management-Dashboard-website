import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../api';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Navbar from '../../pages/navbar/Navbar';
import { ClerkNavLink } from '../variables/variables';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';
import { generateMultipleWordDocument } from '../../utils/wordDocumentGenerateMultiple';

const StudentCgpaFormTable = forwardRef(({ title, initialState, FetchUrl, SubmitUrl, year, isMba }, ref) => {
    const [students, setStudents] = useState(initialState);

    const titles = {
        "CSE": "B.Tech Computer Science Engineering",
        "CSE AI": "B.Tech Computer Science and Engineering (Artificial Intelligence Engineering)",
        "ENTC": "B.Tech Electronics and Communication Engineering ",
        "MECH": "B.Tech Mechanical Engineering ",
        "CE": "B.Tech Civil Engineering ",
        "ELEC": "B.Tech Electrical Engineering ",
        "AIDS": "B.Tech Artificial Intelligence and Data Science ",
        "TT": "B.Tech Textile Technology",
        "MMTT": "B.Tech Man Made Textile Technology",
        "FT": "B.Tech Fashion Technology",
        "TC": "B.Tech Textile Chemistry",
        "FyMba": "MBA",
        "SyMba": "MBA",
    };

    const Years = {
        "First": "First Year ",
        "Second": "Second Year ",
        "Third": "Third Year ",
        "Fourth": "Fourth Year ",
    };

    const getYear = (year) => {
        return Years[year] || year;
    };

    const getTitle = (branch) => {
        return titles[branch] || branch;
    };

    const mergeWithInitialStudents = (fetchedData) => {
        return initialState.map(initialStudent => {
            const existingStudent = fetchedData.find(
                student => student.rank === initialStudent.rank && student.dept === initialStudent.dept
            );
            return existingStudent ? { ...initialStudent, ...existingStudent } : initialStudent;
        });
    };

    const mergeWithInitialStudentsForMba = (fetchedData) => {
        return initialState.map(initialStudent => {
            const existingStudent = fetchedData.find(
                student => student.rank === initialStudent.rank
            );
            return existingStudent ? { ...initialStudent, ...existingStudent } : initialStudent;
        });
    };

    useEffect(() => {
        const fetchStudents = async () => {
            toast.info("The Data if not visible will be available in a minute ");
            try {
                const response = await axios.get(FetchUrl);
                let mergedStudents;
                mergedStudents = mergeWithInitialStudents(response.data);
                setStudents(mergedStudents);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchStudents();
    }, [FetchUrl, initialState, isMba]);

    const handleChange = (index, field, value) => {
        const newStudents = [...students];
        newStudents[index][field] = value;
        setStudents(newStudents);
    };

    useImperativeHandle(ref, () => ({
        students
    }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dataToSend = { students };
        try {
            await axios.post(SubmitUrl, dataToSend);
            alert('Data saved successfully!');
        } catch (error) {
            console.error('Error sending data:', error);
            alert('Error saving data. Please try again.');
        }
    };

    const generatePDF = () => {
        const doc = new jsPDF();
        const departments = [...new Set(students.map(student => student.dept))];

        departments.forEach((dept, deptIndex) => {
            const deptStudents = students.filter(student => student.dept === dept);
            doc.setFontSize(16);
            doc.text(dept, 10, 10);

            doc.autoTable({
                startY: 20,
                head: [['Rank', 'Student Name', 'CGPA']],
                body: deptStudents.map(student => [student.rank, student.stdname, student.cgpa]),
                margin: { top: 10, right: 10, bottom: 10, left: 10 },
                pageBreak: 'auto',
                styles: { overflow: 'linebreak' },
                headStyles: { fillColor: [41, 128, 185] },
                theme: 'grid'
            });

            if (deptIndex < departments.length - 1) {
                doc.addPage();
            }
        });

        doc.save('Student-CGPA.pdf');
    };
   

    const generateWord = () => {
        const departments = [...new Set(students.map(student => student.dept))];

        const sections = departments.map(dept => {
            const deptStudents = students.filter(student => student.dept === dept);

            const rows = deptStudents.map(student => (
                new Paragraph({
                    children: [
                        new TextRun({ text: student.rank.toString(), bold: false, size: 24 }),
                        new TextRun({ text: '\t' }),
                        new TextRun({ text: student.stdname, bold: false, size: 24 }),
                        new TextRun({ text: '\t' }),
                        new TextRun({ text: student.cgpa.toString(), bold: false, size: 24 }),
                    ],
                })
            ));

            return {
                children: [
                    new Paragraph({
                        children: [
                            new TextRun({ text: dept, bold: true, size: 24 }),
                        ],
                    }),
                    new Paragraph({ text: ' ' }), // Empty line for spacing
                    new Paragraph({
                        children: [
                            new TextRun({ text: 'Rank', bold: true, size: 24 }),
                            new TextRun({ text: '\t' }),
                            new TextRun({ text: "Student's Name", bold: true, size: 24 }),
                            new TextRun({ text: '\t' }),
                            new TextRun({ text: 'CGPA', bold: true, size: 24 }),
                        ],
                    }),
                    new Paragraph({ text: ' ' }), // Empty line for spacing
                    ...rows,
                ],
            };
        });

        const doc = new Document({
            creator: "Your Name or App Name",
            title: "Student CGPA Report",
            description: "A document containing student CGPA data by department.",
            sections: sections,
        });

        Packer.toBlob(doc).then(blob => {
            saveAs(blob, 'Student-CGPA.docx');
        });
    };


    return (
        <>
            <Navbar links={ClerkNavLink} />
            <button onClick={generatePDF} className="mt-4 bg-green-500 text-white py-2 px-4 rounded">
                Download PDF
            </button>
            <button onClick={generateWord} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded ml-4">
                Download Word Document
            </button>
            <div className="container mx-auto p-4">
                <h1 className="text-xl font-bold mb-4">{title}</h1>
                <form onSubmit={handleSubmit}>
                    <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                        Save
                    </button>
                    <table className="min-w-full bg-white dark:bg-zinc-800">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">RANK</th>
                                <th className="py-2 px-4 border-b">STUDENT'S NAME</th>
                                <th className="py-2 px-4 border-b">CGPA</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student, index) => (
                                <React.Fragment key={index}>
                                    {index % 5 === 0 && (
                                        <tr className="bg-gray-200">
                                            <td colSpan="3" className="py-2 px-4 border-b text-center font-bold">
                                                {`${getYear(year)}${getTitle(student.dept)}`}
                                            </td>
                                        </tr>
                                    )}
                                    <tr>
                                        <td className="py-2 px-4 border-b text-center">{student.rank}</td>
                                        <td className="py-2 px-4 border-b">
                                            <input
                                                type="text"
                                                value={student.stdname}
                                                onChange={(e) => handleChange(index, 'stdname', e.target.value)}
                                                className="w-full p-2 border rounded"
                                            />
                                        </td>
                                        <td className="py-2 px-4 border-b">
                                            <input
                                                type="text"
                                                value={student.cgpa}
                                                onChange={(e) => handleChange(index, 'cgpa', e.target.value)}
                                                className="w-full p-2 border rounded"
                                            />
                                        </td>
                                    </tr>
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                    <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                        Save
                    </button>
                </form>
            </div>
        </>
    );
});

export default StudentCgpaFormTable;

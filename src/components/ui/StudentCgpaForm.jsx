import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../api';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Navbar from '../../pages/navbar/Navbar';
import { ClerkLink } from '../variables/variables';

const StudentCgpaFormTable = forwardRef(({ title, initialState, FetchUrl, SubmitUrl, year, isMba }, ref) => {
    const [students, setStudents] = useState(initialState);

    const titles = {
        "CSE":"B.Tech Computer Science Engineering",
        "CSE AI":"B.Tech Computer Science and Engineering (Artificial Intelligence Engineering)",
        "ENTC":"B.Tech Electronics and Communication Engineering ",
        "MECH":"B.Tech Mechanical Engineering ",
        "CE":"B.Tech Civil Engineering ",
        "ELEC":"B.Tech Electrical Engineering ",
        "AIDS":"B.Tech Artificial Intelligence and Data Science ",
        "TT":"B.Tech Textile Technology",
        "MMTT":"B.Tech Man Made Textile Technology",
        "FT":"B.Tech Fashion Technology",
        "TC":"B.Tech Textile Chemistry",
    }
    const Years = {
        "First":"First Year ",
        "Second":"Second Year ",
        "Third":"Third Year ",
        "Fourth":"Fourth Year ",
    }
    const getYear = (year) =>{
        return Years[year] || year;
    }

    const getTitle = (branch) =>{
        return titles[branch] || branch;
    }
    const mergeWithInitialStudents = (fetchedData) => {
        const updatedStudents = initialState.map(initialStudent => {
            const existingStudent = fetchedData.find(
                student => student.rank === initialStudent.rank && student.dept === initialStudent.dept
            );
            console.log("Thje exis",existingStudent)
            return existingStudent ? { ...initialStudent, ...existingStudent } : initialStudent;
        });
        
        console.log("The new are",updatedStudents)
        return updatedStudents;
    };
    const mergeWithInitialStudentsForMba = (fetchedData) => {
        console.log("Fetched data for MBA:", fetchedData);

        const updatedStudents = initialState.map(initialStudent => {
            const existingStudent = fetchedData.find(
                student => student.rank === initialStudent.rank 
            );

            if (existingStudent) {
                console.log("Merging data for student:", initialStudent, "with", existingStudent);
            } else {
                console.log("No matching student found for:", initialStudent);
            }

            return existingStudent ? { ...initialStudent, ...existingStudent } : initialStudent;
        });

        console.log("The updated MBA students are", updatedStudents);
        return updatedStudents;
    };

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get(FetchUrl);
                console.log("The data received was: ", response.data);
                let mergedStudents;
                
                    mergedStudents = mergeWithInitialStudents(response.data);
            
                // mergedStudents = mergeWithInitialStudentsForMba(response.data);
                setStudents(mergedStudents);
                console.log("The students are", mergedStudents);
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
        console.log("The student array is ", newStudents);
    };

    useImperativeHandle(ref, () => ({
        students
    }));

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataToSend = { students };
        console.log("The data is ", dataToSend);
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

            // Add title before the table
            doc.setFontSize(16);
            doc.text(dept, 10, 10);

            // Add table with autoTable
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

    return (
        <>
     <Navbar links={ClerkLink}/>
        <div className="container mx-auto p-4">
            <h1 className="text-xl font-bold mb-4">{title}</h1>
            <form onSubmit={handleSubmit}>
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
            <button onClick={generatePDF} className="mt-4 bg-green-500 text-white py-2 px-4 rounded">
                Download PDF
            </button>
        </div>
        </>
    );
});

export default StudentCgpaFormTable;
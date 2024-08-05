import React, { useRef } from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { StudentAchivements } from '../../../components/variables/variables';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { BASE_URL } from '../../../api';
const initialRows = [
    { srno: '', info: '' },
];

const columnHeaders = [
    { key: 'srno', label: 'Sr.No.' },
    { key: 'info', label: 'Description' },

];
const stdabroad = true;
const StdInternationalTraining = () => {

    const tableRef = useRef(null);
const FetchUrl = `${BASE_URL}/api/studentachievements/internationaltraining/getdata`;
    const SubmitUrl = `${BASE_URL}/api/studentachievements/internationaltraining/submit`;
    const DeleteUrl = `${BASE_URL}/api/studentachievements/internationaltraining`;
    const UpdateUrl = `${BASE_URL}/api/studentachievements/internationaltraining`;
const generatePDF = () =>{
    const doc=  new jsPDF();
    const table = tableRef.current;
    const pageHeight = doc.internal.pageSize.height;
    let yOffset  = 10;
    
    if(table)
    {
        const tableColumns = columnHeaders.map(header =>({title:header.label,dataKey:header.key}));
        const tableRows = table.rows.map(row=>({srno:row.srno,
            info:row.info
        }
        ));
        doc.setFontSize(16);
        doc.text("STUDENT ACHIEVEMENT IN INTERNATIONAL TRAINING",10,yOffset);
        yOffset +=10;

        doc.autoTable({
            startY:yOffset,
            head:[tableColumns.map(col =>col.title)],
            body:tableRows.map(row=>Object.values(row)),
            margin:{top:10,right:10,bottom:10,left:10},
            pageBreak:'auto',
            styles:{overflow:'linebreak'},
            headStyles:{fillColor:[41,128,185]},
            theme:'grid',
            didDrawPage:(data) =>{
                if(data.pageNumber >1)
                {
                    yOffset = 10;
                }
            }
        });
        yOffset = doc.lastAutoTable.finalY +20;
        doc.save('Student-International-Training.pdf');

    }
}
    return (
        <div>
            <Navbar links={StudentAchivements} />
            <button onClick = {generatePDF}className="mt-4 bg-purple-500 text-white px-4 py-2 rounded">Generate PDF</button>
            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="STUDENTS INTERNATIONAL TRAINING ATTENDED/ CERTIFICATION BY STUDENTS"
                numberOfColumns={2}
                SubmitUrl={SubmitUrl}
                FetchUrl={FetchUrl}
                DeleteUrl={DeleteUrl}
                UpdateUrl={UpdateUrl}
                ref = {tableRef}
            />
        </div>
    );
};

export default StdInternationalTraining;

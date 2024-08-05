import React from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import Navbar from '../../navbar/Navbar';
import { AdminNavLink, FacultyAchivements } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';

const AdminNotification = () => {
    const initialRows = [{ note: '', deadline: ''}];

    const columnHeaders = [
        { key: 'note', label: 'Description' },
        { key: 'deadline', label: 'DeadLine Date' },
        
    ];

    const FetchUrl = `${BASE_URL}/api/adminnotification/getdata`;
    const SubmitUrl = `${BASE_URL}/api/adminnotification/submit`;
    const DeleteUrl = `${BASE_URL}/api/adminnotification/`;
    const UpdateUrl = `${BASE_URL}/api/adminnotification/`;

    return (
        <div>
            <Navbar links={AdminNavLink} />
            <AchievementsTable
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="Notifications"
                numberOfColumns={2}
                SubmitUrl={SubmitUrl}
                FetchUrl={FetchUrl}
                DeleteUrl={DeleteUrl}
                UpdateUrl={UpdateUrl}
            />
        </div>
    );
};

export default AdminNotification;

import React, { useState, useImperativeHandle, forwardRef, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentDept, selectCurrentRole } from '../../redux/auth';

const AchievementsTable = forwardRef(({ stdabroad, initialRows, columnHeaders, title, numberOfColumns, SubmitUrl, FetchUrl, DeleteUrl, UpdateUrl, NotDisplayToast }, ref) => {
    const [rows, setRows] = useState(initialRows.map(row => ({ ...row, modified: false })));
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const dept = useSelector(selectCurrentDept);

    useImperativeHandle(ref, () => ({
        title,
        rows,
    }));

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                if (!NotDisplayToast) {
                    toast.info("The Data if not visible will be available in a minute ");
                }

                const response = await axios.get(FetchUrl);
                setRows(response.data.length > 0 ? response.data.map(row => ({ ...row, modified: false })) : initialRows.map(row => ({ ...row, modified: false })));
            } catch (error) {
                setRows(initialRows.map(row => ({ ...row, modified: false }))); // set to initialRows if fetching fails
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [FetchUrl, initialRows]);

    const handleAddRow = () => {
        const newRow = columnHeaders.reduce((acc, header) => {
            acc[header.key] = '';
            return acc;
        }, {});
        newRow.modified = true;
        setRows([...rows, newRow]);
    };

    const handleDeleteRow = async (index) => {
        if (window.confirm('Are you sure you want to delete this row?')) {
            const rowToDelete = rows[index];
            if (rowToDelete._id) {
                try {
                    await axios.delete(`${DeleteUrl}/${rowToDelete._id}`, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                } catch (error) {
                    console.error('Error deleting row:', error);
                    toast.error('Error deleting row');
                    return;
                }
            }
            const newRows = [...rows];
            newRows.splice(index, 1);
            setRows(newRows);
        }
    };

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const newRows = [...rows];
        newRows[index][name] = value;
        newRows[index].modified = true;
        setRows(newRows);
    };

    const handleDateChange = (index, date) => {
        const newRows = [...rows];
        newRows[index].deadline = date;
        newRows[index].modified = true;
        setRows(newRows);
    };

    const handleUpdateRow = async (index) => {
        if (window.confirm("Are you sure you want to update the row")) {
            const rowToUpdate = rows[index];
            try {
                await axios.put(`${UpdateUrl}/${rowToUpdate._id}`, rowToUpdate, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const newRows = [...rows];
                newRows[index].modified = false;
                setRows(newRows);
            } catch (error) {
                console.error('Error updating row:', error);
                toast.error('Error updating row');
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const hasUnsavedChanges = rows.some(row => row.modified);
        if (hasUnsavedChanges) {
            if (!window.confirm("There are unsaved changes. Do you want to submit them anyway?")) {
                return;
            }
        }

        if (window.confirm("Are you sure you want to submit?")) {
            try {
                await axios.post(SubmitUrl, rows, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                toast.success('Data submitted successfully');
            } catch (error) {
                console.error('Error submitting data:', error);
                toast.error('Error submitting data');
            }
        }
    };

    const adjustTextareaHeight = (textarea) => {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
    };

    const columnsToDisplay = columnHeaders.slice(0, numberOfColumns);

    return (
        <div>
            <ToastContainer />
            <form onSubmit={handleSubmit} className="p-4">
                <h2 className="text-center font-bold text-xl mb-4">
                    {title}
                </h2>
                <table className="min-w-full border-collapse border border-zinc-400">
                    <thead>
                        <tr>
                            {columnsToDisplay.map(header => (
                                <th key={header.key} className="border border-zinc-400 px-4 py-2">{header.label}</th>
                            ))}
                            <th className="border border-zinc-400 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            Array.from({ length: 5 }).map((_, i) => (
                                <tr key={i}>
                                    {columnsToDisplay.map(header => (
                                        <td key={header.key} className="border border-zinc-400 px-4 py-2">
                                            <Skeleton height={20} />
                                        </td>
                                    ))}
                                    <td className="border border-zinc-400 px-4 py-2 text-center">
                                        <Skeleton height={40} width={100} />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            rows.map((row, index) => (
                                <tr key={index}>
                                    {columnsToDisplay.map(header => (
                                        <td key={header.key} className={`border border-zinc-400 px-4 py-2 ${stdabroad && header.key === 'srno' ? 'w-1/6' : stdabroad && header.key === 'info' ? 'w-5/6' : ''}`}>
                                            {header.key === 'deadline' ? (
                                                <DatePicker
                                                    selected={row[header.key]}
                                                    onChange={(date) => handleDateChange(index, date)}
                                                    dateFormat="dd-MM-yyyy"
                                                    className="w-full p-2 border border-zinc-300 rounded"
                                                />
                                            ) : (
                                                <textarea
                                                    name={header.key}
                                                    value={row[header.key]}
                                                    onChange={(e) => handleChange(index, e)}
                                                    className="w-full p-2 border border-zinc-300 rounded resize-none"
                                                    rows="1"
                                                    onInput={(e) => adjustTextareaHeight(e.target)}
                                                    style={{ overflow: 'hidden' }}
                                                />
                                            )}
                                        </td>
                                    ))}
                                    <td className="border border-zinc-400 px-4 py-2 text-center">
                                        <button
                                            type="button"
                                            onClick={() => handleUpdateRow(index)}
                                            className="bg-yellow-400 text-white px-4 py-2 rounded mr-2 mb-2"
                                        >
                                            Update
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleDeleteRow(index)}
                                            className="bg-red-500 text-white px-5 py-2 rounded"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
                <button
                    type="button"
                    onClick={handleAddRow}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Add Row
                </button>
                <button
                    type="submit"
                    className="mt-4 ml-4 bg-green-500 text-white px-4 py-2 rounded"
                >
                    Submit
                </button>
            </form>
        </div>
    );
});

export default AchievementsTable;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AchievementsTable = ({ stdabroad, initialRows, columnHeaders, title, numberOfColumns, SubmitUrl, FetchUrl, DeleteUrl, UpdateUrl }) => {
   
    const [rows, setRows] = useState(initialRows.map(row => ({ ...row, modified: false })));
    const [unsavedChanges, setUnsavedChanges] = useState(false);
    const [initialrowlength, setInitialRowlength] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(FetchUrl);
                setRows(response.data.length > 0 ? response.data.map(row => ({ ...row, modified: false })) : initialRows.map(row => ({ ...row, modified: false })));
                setInitialRowlength(response.data.length);
            } catch (error) {
                console.error('Error fetching data:', error);
                setRows(initialRows.map(row => ({ ...row, modified: false }))); // Set to initialRows if fetching fails
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

    useEffect(() => {
        if(rows.length==initialRows.length && rows.length>1)
        {
            console.log("hi ther ")
            const hasUnsavedChanges = rows.some(row => row.modified);
            setUnsavedChanges(hasUnsavedChanges);
        }
    }, [rows, initialrowlength]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (unsavedChanges) {
            if (window.confirm("There are unsaved changes. Please update the rows before submitting. Do you want to update them?")) {
                return;
            }
        }

        if (window.confirm("Are you sure you want to submit?")) {
            try {
                const response = await axios.post(SubmitUrl, rows, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                toast.success('Data submitted successfully');
                // window.location.reload();
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
        <form onSubmit={handleSubmit} className="p-4">
            <ToastContainer />
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
                    {rows.map((row, index) => (
                        <tr key={index}>
                            {columnsToDisplay.map(header => (
                                <td key={header.key} className={`border border-zinc-400 px-4 py-2 ${stdabroad && header.key === 'srno' ? 'w-1/6' : stdabroad && header.key === 'info' ? 'w-5/6' : ''}`}>
                                    <textarea
                                        name={header.key}
                                        value={row[header.key]}
                                        onChange={(e) => handleChange(index, e)}
                                        className="w-full p-2 border border-zinc-300 rounded resize-none"
                                        rows="1"
                                        onInput={(e) => adjustTextareaHeight(e.target)}
                                        style={{ overflow: 'hidden' }}
                                    />
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
                    ))}
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
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
            >
                Submit
            </button>
        </form>
    );
};

export default AchievementsTable;

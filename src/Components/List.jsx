import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Modal } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom'
import './List.css'
import { asset } from '../assets/asset';
const List = () => {

    const [value, setValue] = useState([])
    const navigate = useNavigate()

    const [show, setShow] = useState(false);
    const [delID, setDelID] = useState(null)
    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setDelID(id)
        setShow(true)
    };
    const API = import.meta.env.VITE_API_URL;

    const fetchData = async () => {
        try {
            const response = await axios.get(`${API}/bookings`);
            setValue(response?.data);
        } catch (error) {
            console.error(error);
        }
    }

    const deleteFn = () => {
        axios.delete(`${API}/bookings/${delID}`)
            .then((res) => {
                fetchData()
                handleClose()
            }).catch((err) => {
                console.log(err)
            })
    }

    const createFn = () => {
        navigate('/checking')
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (

        <div className="booking-list-container">
            <Table className='table-list' border={10}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>DOB</th>
                        <th>Nationality</th>
                        <th>Tour</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Travelers</th>
                        <th>Room</th>
                        <th>Special</th>
                        <th>Extras</th>
                        <th>Billing</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {value.map((kk) => (
                        <tr key={kk.id} className='table-ans'>
                            <td data-label="Id">{kk.id}</td>
                            <td data-label="Name">{kk.name}</td>
                            <td data-label="Email">{kk.email}</td>
                            <td data-label="Phone">{kk.phone}</td>
                            <td data-label="DOB">{kk.dob}</td>
                            <td data-label="Nationality">{kk.nationality}</td>
                            <td data-label="Tour">{kk.tour}</td>
                            <td data-label="Start Date">{kk.startDate}</td>
                            <td data-label="End Date">{kk.endDate}</td>
                            <td data-label="Travelers">{kk.travelers}</td>
                            <td data-label="Room">{kk.room}</td>
                            <td data-label="Special">{kk.special}</td>
                            <td data-label="Extras">{kk.extras}</td>
                            <td data-label="Billing">{kk.billing}</td>
                            <td data-label="Actions">
                                <button onClick={() => navigate(`/checking/${kk.id}`)}> <img src={asset.edit} width={30} alt="" /> </button>
                                <button onClick={() => handleShow(kk.id)}> <img src={asset.deletes} width={25} alt="" /> </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <button className="create-btn" onClick={createFn}>Create</button>

            {show && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 animate-fadeIn">
                        <div className="flex justify-between items-center border-b pb-3">
                            <h3 className="text-xl font-semibold text-gray-800">Delete</h3>
                            <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
                                ✕
                            </button>
                        </div>
                        <div className="mt-4 text-gray-700">
                            Are you sure you want to delete this?
                        </div>
                        <div className="mt-6 flex justify-end space-x-3">
                            <button
                                onClick={handleClose}
                                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
                            >
                                Close
                            </button>
                            <button
                                onClick={deleteFn}
                                className="px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-red-700 transition"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>

    )
}
export default List
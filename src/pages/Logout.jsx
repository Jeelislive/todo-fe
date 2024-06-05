import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:3000/logout', {
                method: 'GET', 
                credentials: 'include'
            });

            if (response.ok) {
                navigate('/login'); 
            } else {
                console.error('Logout failed');
            }
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <button className='text-white px-4 py-2 rounded' onClick={ handleLogout }>Logout</button>
    );
};

export default Logout;
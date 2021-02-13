import React from 'react';
//My components
import { NavBar } from '../ui/NavBar';
import { Sidebar } from '../ui/Sidebar';
import { MainOptions } from '../options/categories/MainOptions';

export const AdminScreen = () => {
    return (
        <>
            <NavBar />
            <div id="maincontent">
                <div className="columns">
                    <Sidebar />
                    <div className="column-main">
                       <MainOptions />
                    </div>
                </div>
            </div>
        </>
    )
}

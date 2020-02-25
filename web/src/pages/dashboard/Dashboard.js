import React, { useState, useEffect } from "react";
import { Link, withRouter, Route, Switch } from "react-router-dom";
import './Dashboard.css'

const Dashboard = () => {
    return(
        <div className="dashboardContainer">
            <div className="kpiLine">
                <div className="kpiContainer">
                    <div className="kpiObject blue">

                    </div>
                </div>
                <div className="kpiContainer">
                    <div className="kpiObject purple">

                    </div>
                </div>
                <div className="kpiContainer">
                    <div className="kpiObject yellow">

                    </div>
                </div>
                <div className="kpiContainer">
                    <div className="kpiObject green">

                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(Dashboard);
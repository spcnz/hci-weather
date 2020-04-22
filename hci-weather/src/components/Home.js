import React from "react";

import Header from './Header'
import Dashboard from './Dashboard'
import SideBar from './SideBar'

class Home extends React.PureComponent {
    render() {
        return (
            <div>
                <Header />
                <SideBar />
                <Dashboard />
            </div>
        )
    }
}

export default Home;
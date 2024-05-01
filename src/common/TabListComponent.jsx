import React from 'react';
import { Tab, TabList } from 'react-tabs';

const TabListComponent = () => {
    return (
        <TabList className="nav common-tab justify-content-center nav-pills mb-48">
            <Tab className="nav-link">Tab Btn One</Tab>
            <Tab className="nav-link">Tab Btn Two</Tab>
            <Tab className="nav-link">Tab Btn Three</Tab>
            <Tab className="nav-link">Tab Btn Four</Tab>
        </TabList>
    );
};

export default TabListComponent;

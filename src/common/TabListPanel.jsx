import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


const TabListPanel = () => {
    return (
        <>
            <TabPanel><h1>Tab One</h1></TabPanel>
            <TabPanel><h1>Tab Two</h1></TabPanel>
            <TabPanel><h1>Tab Three</h1></TabPanel>
            <TabPanel><h1>Tab Four</h1></TabPanel>
        </>
    );
};

export default TabListPanel;
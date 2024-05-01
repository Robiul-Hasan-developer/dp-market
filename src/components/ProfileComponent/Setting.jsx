import React from 'react';
import SettingSidebar from './SettingSidebar';
import SettingPersonal from './SettingPersonal';
import SettingProfile from './SettingProfile';
import SettingPayment from './SettingPayment';
import SettingEmail from './SettingEmail';
import SettingSocialNetwork from './SettingSocialNetwork';

const Setting = () => {

    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#sidebar-scroll-spy'
      })
    
    return (
        <div className="row gy-4">
            <div className="col-lg-4 pe-xl-5">
                <SettingSidebar settingSidebarClass=""/>
            </div>

            <div className="col-lg-8">
                <div className="setting-content" data-bs-spy="scroll" data-bs-target="#sidebar-scroll-spy">

                    <SettingPersonal/>
                    
                    <SettingProfile/>

                    <SettingPayment/>

                    <SettingEmail/>

                    <SettingSocialNetwork/>
                    
                    <button type="button" className="btn w-100 btn-main btn-md">Save Information</button>

                </div>
            </div>
        </div>
    );
};

export default Setting;
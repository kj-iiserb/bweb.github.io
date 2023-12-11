import React from 'react';
import MemberSection from './MembersSection/MemberSection';
import './GroupMembers.css';
import Navbar from '../NavBar/NavBar';
import Collaborators from './Collaborators/Collaborators';
import Footer from '../Footer/Footer';

const GroupMembers = () => {
    return (
        <>
            <Navbar />
            <div className='memberWrapper'>
                <div className='groupPhoto'>
                </div>
                <MemberSection />
            </div>
            <Collaborators />
            <Footer />
        </>
    );
}

export default GroupMembers;

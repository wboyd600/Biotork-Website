import React from 'react';
import './Home.css';

/* Hero Image and covering text - Using google fonts for the custome text */

/* Company announcements are hard coded in similar format for usage with admin panel */
/* To add company announcements use pre populated elements as template. Replace links and relevant information */
/* The CSS will handle the styling */

function Home() {
    return (
        <>

        <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet"></link>

        /* Hero Image and covering text - Using google fonts for the custome text */
        <div className="bg">
            <p className = "text">Welcome to BioTork <br/>
            <div className = "text2">Evolving beyond the imagination</div></p>
        </div>

        
        <div className="company-announcement">
		<p><strong>Company Announcement:</strong></p>
        <p>October 30th, 2019 – Hans van der Sluijs Joins BioTork as Chief Development Officer – <strong><a title="Hans van der Sluijs joins BioTork as CDO" href="https://biotork.files.wordpress.com/2019/10/hans-van-der-sluijs-joins-biotork-as-cdo.pdf"><span style={{ color: '#008000'}}>News Release</span></a></strong></p>
        <p><strong>Company Announcement:<br></br>
</strong>October 15th, 2019 – Former POET and Domtar Executive Mark DeAndrea Joins BioTork as President and Chief Strategy Officer. – <strong><a title="Mark DeAndrea PR no picture" href="https://biotork.files.wordpress.com/2019/11/mark-deandrea-pr-no-picture.pdf"><span style={{ color: '#008000'}}>News Release</span></a></strong></p>
<p><strong>Company Announcement:<br></br>
</strong>March 11th, 2019 – BioTork and Lallemand Biofuels &amp; Distilled Spirits are pleased to jointly announce the formalization of a collaboration for the development of improved yeast strains for the ethanol industry.<strong> <a href="https://img.pr.com/release-file/1903/778697/BioTork-LBDS-JointPressReleas.pdf"><span style={{ color: '#008000'}}>– News Release</span></a></strong></p>
<p><strong>Company Announcement:</strong><br></br>
December 6th, 2016-&nbsp;BioTork unveils its improvements on yeasts for the whiskey industry. BioTork’s strains can produce about 20% more ethanol with 1-2 days shorter fermentation time than standard yeast strains.<span style={{ color: '#008000'}}> <strong><strong>–&nbsp;<a style={{ color: '#008000'}} title="biotork-whiskey-yeast" href="https://biotork.files.wordpress.com/2016/10/biotork-whiskey-yeast.pdf">News Release</a></strong></strong></span></p>
<p><strong>Company Announcement:</strong><br></br>
October 19th, 2016- BioTork is excited to announce that we have been awarded funding from the Florida Institute for the Commercialization of Public Research, a non-profit organization funded by the state of Florida. The Institute hopes to support us in our endeavors to develop the cost-efficient, sustainable conversion of low-value products into chemical commodities.<span style={{ color: '#008000'}}> <strong><strong>– <a style={{ color: '#008000'}} title="biotork-fl-institute-10-19-16" href="https://biotork.files.wordpress.com/2016/10/biotork-fl-institute-10-19-16.pdf">News Release</a></strong></strong></span></p>

        </div>
        </>
    );
}

export default Home;

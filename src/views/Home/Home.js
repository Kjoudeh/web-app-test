import React from 'react';
import logo from '../../assets/icons/logo.png';
import NavBar from "../../components/Header/NavBar";
import Options from "../../components/Options";
import Services from "../../components/Services";
import './Home.css';

function Home() {
    const textBlock = {         
        fontSize: '1.1vw',
        backgroundColor: 'royalblue',           
        width: '90%',
        margin: 'auto',
        flex: '1',
        marginBottom: '18px',
        marginTop: '18px',
        borderRadius: '20px',
        border: '2px solid'
    }
	
	return (
        <div className="App">
            <input type="text" placeholder="Search"/>
            <div className="head">
            <h1> Welcome to City Traffic </h1>
            </div>
            <NavBar />
            <div className="description">
				<div style={textBlock}>
					<h2>
						This web app's function is to help the user compare
						traffic and accident reports from different cities.
						It also provides information for insurance and weather reports,
						as well as driving tests to earn stars for insurance discounts.
					</h2>
				</div>	
            </div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                </a>
            </header>
            <Options/>
            <Services/>
        </div>
    );
}

export default Home;

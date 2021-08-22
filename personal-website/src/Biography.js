import React from 'react';

//React Biography component

class Biography extends React.Component{
    render(){
        return(
        <>
            <div className="text-container">
            <h1 className="bio-header">SUMMARY:</h1>
            <hr></hr>
                <div className="text-grid">
                    <div className="box0">
                        <h2 className="bio">NAME:</h2>
                    </div>
                    <div className="box1">
                        <h2 className="bio">SETH HAGER</h2>
                    </div>
                    <div className="box2">
                        <h2 className="bio">DOB:</h2>
                    </div>
                    <div className="box3">
                        <h2 className="bio">10/16/1998</h2>
                    </div>
                    <div className="box2">
                        <h2 className="bio">LOCATION:</h2>
                    </div>
                    <div className="box3">
                        <h2 className="bio">UNKNOWN...</h2>
                    </div>
                    <div className="box4">
                        <h2 className="bio">OCCUPATION:</h2>
                    </div>
                    <div className="box5">
                        <h2 className="bio">FULL STACK WEB DEVELEOPER</h2>
                    </div>
                    <div className="box4">
                        <h2 className="bio">EMAIL:</h2>
                    </div>
                    <div className="box5">
                        <a href="mailto:hagerprograms@gmail.com" className="bio">HAGERPROGRAMS@GMAIL.COM</a>
                    </div>
                    <div className="box6">
                        <h2 className="bio">EDUCATION:</h2>
                    </div>
                    <div className="box7">
                        <h2 className="bio">BACHELOR'S OF SCIENCE IN COMPUTER SCIENCE AT NEW MEXICO STATE UNIVERSITY</h2>
                    </div>
                    <div className="box8">
                        <h2 className="bio">SPECIALITIES:</h2>
                    </div>
                    <div className="box9">
                        <h2 className="bio">MONGODB, MYSQL, HTML, CSS, JAVASCRIPT, NODEJS, C#</h2>
                    </div>
                    <div className="box10">
                        <h2 className="bio">HOBBIES:</h2>
                    </div>
                    <div className="box11">
                        <h2 className="bio">WEB DEVELOPMENT, READING/RESEARCH, GAME DESIGN, FILM, CRYPTOCURRENCIES/BLOCKCHAIN, OFF-ROADING</h2>
                    </div>
                    <div onClick={resume} className="div-button">
                        <h2 className="bio-button">RESUME</h2>
                    </div>
                    <div onClick={github} className="div-button">
                        <h2 className="bio-button">GITHUB</h2>
                    </div>
                </div>
            </div>
        </>
        )
    }
}

function resume(){
    window.open("https://docs.google.com/document/d/e/2PACX-1vSXjXli-6eCXXQ-t7kmIxYsPbKOfPikBVoYl5yTGVXNvbcbR2phjYQxpFGastb9jYKfBFMLIsM_c05S/pub")
}

function github(){
    window.open("https://github.com/HagerPrograms/")
}


export default Biography;
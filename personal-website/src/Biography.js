import React from 'react';
import Typed from 'typed.js'
import { CompressedPixelFormat } from 'three';

//React Biography component

class Biography extends React.Component{
    componentDidMount(){
        typed();
    }
    
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
                        <h2 id="0" className="bio"></h2>
                    </div>
                    <div className="box2">
                        <h2 className="bio">DOB:</h2>
                    </div>
                    <div className="box3">
                        <h2 id="1" className="bio"></h2>
                    </div>
                    <div className="box4">
                        <h2 className="bio">LOCATION:</h2>
                    </div>
                    <div className="box5">
                        <h2 id="2" className="bio"></h2>
                    </div>
                    <div className="box6">
                        <h2 className="bio">OCCUPATION:</h2>
                    </div>
                    <div className="box7">
                        <h2 id="3" className="bio"></h2>
                    </div>
                    <div className="box8">
                        <h2 className="bio">EMAIL:</h2>
                    </div>
                    <div className="box9">
                        <a id="4" href="mailto:hagerprograms@gmail.com" className="bio"></a>
                    </div>
                    <div className="box10">
                        <h2 className="bio">EDUCATION:</h2>
                    </div>
                    <div className="box11">
                        <h2 id="5" className="bio"></h2>
                    </div>
                    <div className="box12">
                        <h2 className="bio">SPECIALITIES:</h2>
                    </div>
                    <div className="box13">
                        <h2 id="6" className="bio"></h2>
                    </div>
                    <div className="box14">
                        <h2 className="bio">HOBBIES:</h2>
                    </div>
                    <div className="box15">
                        <h2 id="7" className="bio"></h2>
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

function typed(){

    const strings = ['SETH HAGER','10/16/1998','UNKNOWN...','FULL STACK WEB DEVELEOPER','HAGERPROGRAMS@GMAIL.COM','BACHELOR\'S OF SCIENCE IN COMPUTER SCIENCE AT NEW MEXICO STATE UNIVERSITY', 
    'MONGODB, MYSQL, HTML, CSS, JAVASCRIPT, NODEJS, C#','WEB DEVELOPMENT, READING/RESEARCH, GAME DESIGN, FILM, CRYPTOCURRENCIES/BLOCKCHAIN, OFF-ROADING']; 
    var typed = '';

    
    typed = new Typed(document.getElementById(0), {strings: [strings[0]]});
    typed = new Typed(document.getElementById(1), {strings: [strings[1]]});
    typed = new Typed(document.getElementById(2), {strings: [strings[2]]});
    typed = new Typed(document.getElementById(3), {strings: [strings[3]]});
    typed = new Typed(document.getElementById(4), {strings: [strings[4]]});
    typed = new Typed(document.getElementById(5), {strings: [strings[5]]});
    typed = new Typed(document.getElementById(6), {strings: [strings[6]]});
    typed = new Typed(document.getElementById(7), {strings: [strings[7]]});


    
    
    

}





export default Biography;
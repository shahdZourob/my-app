import React from "react";
function About() {
        return (
            <div>
                <div className="sidenav">
                    <a href="#home">Home</a>
                    <a href="#History">History</a>
                    <a href="#c">Contact</a>
                    <a href="/Maps">Map</a>
                </div>
                <div className="main" >
                    <div id="home">
                        <h3>Welcome To Suez Canal University</h3>
                        <hr/>
                        <p className="font-weight-light">
                            <img src="/images/Capture.JPG" alt="" align='center' width='600' height='300' />
                        </p>
                        <p className="font-weight-light">Suez Canal University helps the students acquire creative abilities and commitment
                        s to lifelong learning. We believe that our students graduate with developed writing, analytical
                        and communication skills essential for them. SCU graduates prosper not just on their first job
                        but through their entire career.SCU University helps develop the students map of thinking to gain
                        a competitive edge. Complexities in today s business environment are accelerated and amplified by
                        digital media and tools. At SCU you will learn how to utilize the triple A advantage, i-e, Agility,
                        Adaptiveness and Alignment, to give your educational path a competitive edge in the digital age .
                        We hope you find the prospect of studying at SCU exciting as we do, feel free to explore this website
                    to learn more about us.</p>

                    </div>
                    <div id="History">
                        <h3>History Of Suez Canal University</h3>
                        <hr />
                        <p className="font-weight-light">The Suez Canal University is an Egyptian university serving the Suez Canal region.
                        Its faculties are located in the three governorates of the Suez Canal Region (Port Said, Ismailia & Suez).
                        It was established in 1974. It is well-known for its non-traditional research.
                     </p>
                        <p className="card-text">
                            It has 48 faculties:
<ul>
                            <li>16 in Ismailia</li><br/>
                            <li>13 in Port Said</li><br/>
                            <li>10 in Suez</li><br/>
                            <li> 9 in  Arish</li><br/>
                                <p>with a total number of students reaching 21,325</p>
                            </ul>

                     </p>

                    </div>


                    <div id="c">
                        <p className="font-weight-light" >
                            <h3>To contact Suez Canal University</h3>
                            <hr/>
                           

                                <li>   Address:   Egypt  Ismailia  4.5 Km the Ring Road </li>
                               
                                <h5 >  To ContactUniversity President office:-</h5>

                                    <li>Tel.: (+2064)3223007  3200125</li><br/>

                                    <li>(+202)22621218  22621216</li><br/>

                                    <li>Fax ( +202)22621217 (+2064)3205208 </li><br/>

                                    <li>Postal Code: 41522 </li><br/>

                                    <li>E-mail: <a href="President_office@suez.edu.eg">President_office@suez.edu.eg </a></li>
                              
                          
                        </p>
                    </div>
                </div>  
         </div>

    );
}
export default About;
    
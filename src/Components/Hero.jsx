import React from "react";
import hero_img from "../Images/profile.jpg";
import "./Style.css";
import "animate.css"

const Hero = () => {
  return (
    <>
      {/* HERO */}
      <div className="container-fluid hero-bg">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 hero">
              <span className="h2 animate__animated animate__bounceInLeft">
                DR. <span className="blue"> WAQAR </span> MEHMOOD
              </span>
              <h4  className="blue animate__animated animate__bounceInLeft">ASSOCIATE PROFESSOR</h4>
              <p className="animate__animated animate__bounceInLeft">
                PAK-AUSTRIA FACHHOSCHULE - INSTITUTE OF APPLED SCIENCES AND
                TECHNOLOGY, MANG, HARIPUR, KPK, PAKISTAN.
              </p>
              <span  className="spec-bl3 bold animate__animated animate__bounceInLeft">
                {" "}
                <ion-icon name="phone-portrait-outline"></ion-icon>+92 (300)
                5220 513
              </span>
              <br />
              <span className="gray bold animate__animated animate__bounceInLeft">
                <ion-icon name="mail-outline"></ion-icon>DRWAQAR81@GMAIL.COM
              </span>
              <br />
              <span  className="spec-bl3 bold animate__animated animate__bounceInLeft">
                <ion-icon name="mail-outline"></ion-icon>
                WAQAR.MEHMOOD@FECID.PAF-IAST.EDU.PK
              </span>
            </div>
            <div className="col-12 col-md-6 hero" id="hero-img">
              <img src={hero_img} alt="" className="animate__animated animate__zoomInUp" width={"300px"} />
            </div>
          </div>
        </div>
      </div>
      <div className="upper">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -10 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L80,208C160,224,320,256,480,229.3C640,203,800,117,960,101.3C1120,85,1280,139,1360,165.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      </div>
      {/* SPECIALIZATION */}
      <div className="container-fluid specialization" id="about">
        <div className="container">
          <div className="row">
            <div className="col  text-center mt-3   animate__animated animate__jackInTheBox" loading="lazy">
              <h1><b className="shadow">ABOUT ME</b></h1>
            </div>
          </div>
          <div className="row">
            <div className="col pt-4">
              <span className="h2">SPECIALIZATION:</span>
            </div>
          </div>
          <div className="row">
            <div className="col speclist">
              <ul>
                <li className="spec bold">SOFTWARE ENGINEERING</li>
                <li className="spec bold"> MODEL-DRIVEN ENGINEERING </li>
                <li className="spec bold"> SOFTWARE CONFIGURATION MANAGEMENT</li>
                <li className="spec bold"> MICROSERVICE REUSABILITY  </li>
                <li className="spec bold"> MICROSERVICE ARCHITECTURE</li>
              </ul>
            </div>
          </div>
          <div className="row pb-3">
            <div className="col ">
              <p className="black">
                At present, I am positioned as an associate professor at
                PAF-IAST. I have also assumed the role of acting chairman for
                the Department of IT & CS. Furthermore, I hold membership in the
                National Computing Education Accreditation Council (NCEAC) under
                the Higher Education Commission (HEC), where I actively
                contribute to the Accreditation Inspection Committee (AIC),
                which evaluates the accreditation of BS (CS/SE) degree programs
                across multiple universities. My involvement extends to serving
                as a member on the Board of Studies at Khawaja Fareed University
                of Engineering & Information Technology (KFUEIT) since the year
                2018. My expertise lies in the realm of Model-driven software
                engineering, substantiated by my Doctorate degree acquired from
                the esteemed University of Innsbruck, Austria. I have further
                enriched my academic pursuits with a Postdoctoral Fellowship in
                Software Reusability and Microservice Architecture at John
                Kepler University, Austria. Throughout my educational journey, I
                have been fortunate to receive prestigious scholarships from
                distinguished organizations, including the Higher Education
                Commission (HEC) Overseas PhD Scholarship, the PAF-IAST Post-Doc
                Scholarship, and the CUST Talent Scholarship for Master's
                studies.
              </p>
              <div className="row text-center">
                <div className="col social-skill">
                  <ul>
                    <li>
                      <a
                        className="media"
                        href="https://www.linkedin.com/in/maqbool-khan/?originalSubdomain=cn"
                      >
                        <ion-icon name="logo-linkedin" className="icon"></ion-icon>
                      </a>
                    </li>
                    <li>
                      <a href="/" className="media">
                        <ion-icon name="logo-facebook"></ion-icon>
                      </a>
                    </li>
                    <li>
                      <a href="http://" className="media">
                        <ion-icon name="logo-twitter"></ion-icon>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:" className="media">
                        <ion-icon name="logo-github"></ion-icon>
                      </a>
                    </li>
                    <li>
                      <a href="http://" className="media">
                        <ion-icon name="school-outline"></ion-icon>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 10 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L80,208C160,224,320,256,480,229.3C640,203,800,117,960,101.3C1120,85,1280,139,1360,165.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
      {/* EXPERIENCE */}
      <div className="container-fluid hero-bg" id="exp">
        <div className="container">
          <div className="row">
            <div className="col text-center mt-5">
              <h1><b className="shadow">EXPERIENCE</b></h1>
            </div>
          </div>
          <div className="row">
            <div className="col speclist-bl">
              <ul>
                <li className="spec-bl bold">
                  <b>PAK-AUSTRIA FACHHOSCHULE - INSTITUTE OF APPLED SCIENCES AND TECHNOLOGY, MANG, HARIPUR, KPK, PAKISTAN.</b><br />
                  <a href="https://paf-iast.edu.pk/personnel/dr-waqar-mehmood/" className="link">https://paf-iast.edu.pk/personnel/dr-waqar-mehmood/</a>
                  <p className="white">Associate Professor (Computer Science)</p>
                </li>
                <li className="spec-bl bold">
                  <b>COMSATS ISLAMABAD, WAH CAMPUS, PAKISTAN</b><br />
                  <a href="https://cuiwah.edu.pk" className="link">www.cuiwah.edu.pk</a>
                  <p className="white">Assistant Professor in Computer Science</p>
                </li>
                <li className="spec-bl bold">
                  <b>COMSATS ISLAMABAD, WAH CAMPUS, PAKISTAN</b><br />
                  <a href="https://cuiwah.edu.pk" className="link">www.cuiwah.edu.pk</a>
                  <p className="white">Lecturer in Computer Science</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="upper">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -10 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L80,208C160,224,320,256,480,229.3C640,203,800,117,960,101.3C1120,85,1280,139,1360,165.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      </div>
      {/* EDUCATION */}
      <div className="container-fluid specialization" id="edu">
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <h1><b className="shadow">EDUCATION</b></h1>
            </div>
          </div> 
          <div className="row">
            <div className="col speclist-edu ">
              <ul>
                <li className="spec-im bold">
                  <h5 className="bold">Post Doc.</h5>
                  <b>Software Reusability and Microservice Architecture (MSA)</b><br />
                  <b>From <span className="blue">2022 </span>To <span className="blue">2023</span></b><br />
                  <b>From University <span className="blue">JKU, Austria</span></b><br />
                </li>
                <li className="spec-im bold">
                  <h5 className="bold">Ph.D.</h5>
                  <b>Software Engineering <br />(Model-driven engineering)</b><br />
                  <b>From <span className="blue">2007 </span>To <span className="blue">2011</span></b><br />
                  <b>From University <span className="blue">Innsbruck University, Austria</span></b><br />

                </li>
                <li className="spec-im bold">
                  <h5 className="bold">M.S</h5>
                  <b>Software Engineering</b><br />
                  <b>From <span className="blue">2002</span>To <span className="blue">2003</span></b><br />
                  <b>From University <span className="blue">CUST, Islamabad, Pakistan</span></b><br />

                </li>
                <li className="spec-im bold">
                  <h5 className="bold">M.Sc.</h5>
                  <b>Computer Science</b><br />
                  <b>From <span className="blue">2000 </span>To <span className="blue">2002</span></b><br />
                  <b>From University <span className="blue">CUST, Islamabad, Pakistan</span></b><br />

                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col speclist-edu">
              <ul>
                <li className="spec-im bold">
                  <h5 className="bold">BSc</h5>
                  <b>Maths, Stats</b><br />
                  <b>From <span className="blue">1998</span>To <span className="blue">2000</span></b><br />
                  <b>From University <span className="blue">Peshawer University, KPK, Pakistan</span></b><br />

                </li>
                <li className="spec-im bold">
                  <h5 className="bold">F. Sc</h5>
                  <b>Pre-Engineering</b><br />
                  <b>From <span className="blue">1997</span>To <span className="blue">1998</span></b><br />
                  <b>From University <span className="blue">B.I.S.E Abbottabad, KPK, Pakistan</span></b><br />
                </li>
                <li className="spec-im bold">
                  <h5 className="bold">S.S.C</h5>
                  <b>Science Group</b><br />
                  <b>In<span className="blue">1998</span></b><br />
                  <b>From University <span className="blue">B.I.S.E Abbottabad, KPK, Pakistan</span></b><br />
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 10 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L80,208C160,224,320,256,480,229.3C640,203,800,117,960,101.3C1120,85,1280,139,1360,165.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
      {/* SKILLS */}
      <div className="container-fluid hero-bg" id="skil">
        <div className="container">
          <div className="row">
            <div className="col text-center mt-5">
              <h1><b className="shadow">EXPERIENCE</b></h1>
            </div>
          </div>
          <div className="row">
            <div className="col mb-5">
            <h3><b className="shadow">WEB DEVELOPMENT SKILLS</b></h3>
              <div className="col social-skill mt-2">
                <ul>
                  <li>
                    <a
                      className="media"
                      href="https://www.linkedin.com/in/maqbool-khan/?originalSubdomain=cn"
                    >
                      <ion-icon name="logo-html5"></ion-icon>
                    </a>
                  </li>
                  <li>
                    <a href="/" className="media">
                    <ion-icon name="logo-css3"></ion-icon>
                    </a>
                  </li>
                  <li>
                    <a href="http://" className="media">
                    <ion-icon name="logo-react"></ion-icon>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:" className="media">
                    <ion-icon name="logo-nodejs"></ion-icon>
                    </a>
                  </li>
                  <li>
                    <a href="http://" className="media">
                    <ion-icon name="logo-wordpress"></ion-icon>
                    </a>
                  </li>
                  <li>
                    <a href="http://" className="media">
                    <ion-icon name="logo-github"></ion-icon>
                    </a>
                  </li>
                </ul>
              </div>
              <h3><b className="shadow"> TEACHING EXPERIENCE</b></h3>
              <ul>
                <li  className="spec-bl3 bold mt-3">12 years Post-PhD experience as Assistant Professor, Computer Science Department, COMSATS University, Wah Campus.</li>
                <li className="gray bold mt-3">2.5 years Pre-PhD experience as Lecturer, Computer Science Department, COMSATS University, Wah Campus.</li>
                <li  className="spec-bl3 bold mt-3">1 year TA experience during MS studies at CUST Islamabad Campus</li>
              </ul>
              <h3><b className="shadow">ACADEMIC EXPERIENCE</b></h3>
              <ul>
                <li  className="spec-bl3 bold mt-3">Ex-Acting Chairman Department of IT & CS, PAF-IAST</li>
                <li className="gray bold mt-3">Member BoS committee, PAF-IAST</li>
                <li  className="spec-bl3 bold mt-3">Member Departmental Graduate Committee (DGC), PAF-IAST</li>
                <li className="gray bold mt-3">Member Guidance and Examination Committee (GEC)</li>
                <li  className="spec-bl3 bold mt-3">Member Inter-Disciplanry Committee (IDC), PAF-IAST</li>
                <li className="gray bold mt-3">Member Grievances Committee KPPRA, PAF-IAST</li>
                <li  className="spec-bl3 bold mt-3">Coordinator Library, Dept of IT & CS, PAF-IAST</li>
                <li className="gray bold mt-3">Coordinator URAAN Event, Dept of IT & CS, PAF-IAST</li>
                <li  className="spec-bl3 bold mt-3">many more........</li>
              </ul>
              <h3><b className="shadow"> RELEVANT ACADEMIC EXTERNAL ROLES</b></h3>
              <ul>
                <li  className="spec-bl3 bold mt-3">Member of HEC National Computing Education Accreditation Council (NCEAC) Accreditation Inspection Committee (AIC) for the accreditation of Universities BS (CS/SE) degree program</li>
                <li className="gray bold mt-3">Member Board of Studies, Khawaja Fareed University of Engineering & Information Technology (KFUEIT), 2018</li>
                <li  className="spec-bl3 bold mt-3">External Examiner for evaluation of MS thesis at CUST Islamabad</li>
                <li className="gray bold mt-3">Reviewer: Frontier of Information Technology (FIT) International Conference organized by COMSATS Institute of Information Technology (CIIT) technically sponsored by IEEE Islamabad Chapter, IEEE Computer Society and IEEE Industrial Electronics Society</li>
              </ul>
              <h3><b className="shadow"> RELEVANT RESEARCH ACTIVITIES ROLES</b></h3>
              <ul>
                <li  className="spec-bl3 bold mt-3">Member Academic Committee 1st International Conference on Communication Networks and Embedded Systems 2023, PAF-IAST</li>
                <li>Member Technical Program Committee (TPC) of Software Engineering track of the 14th International Conference on Frontiers of Information Technology (FIT 2016), COMSATS Isb.</li>
                <li  className="spec-bl3 bold mt-3">Technical Program Committee (TPC) of Tutorial track of the 14th International Conference on Frontiers of Information Technology (FIT 2016), COMSATS Isb.</li>
                <li className="gray bold mt-3">Technical Program Committee (TPC) of Tutorial track of the 14th International Conference on Frontiers of Information Technology (FIT 2016), COMSATS Isb.</li>
                <li  className="spec-bl3 bold mt-3">Reviewer: Sukkur IBA Journal of Computing and Mathematical Sciences- SJCMS</li>
              </ul>


              <h3><b className="shadow">EXPERIENCE</b></h3>
              <ul>
                <li  className="spec-bl3 bold mt-3">C, C++, Java</li>
                <li className="gray bold mt-3">MyEclipse, IntelliJ IDEA</li>
                <li  className="spec-bl3 bold mt-3">Spring Framework, MVC</li>
                <li className="gray bold mt-3">Django Framework, MVT</li>
                <li  className="spec-bl3 bold mt-3">Web Services and APIs</li>
                <li className="gray bold mt-3">Node.js, Vue.js, D3.js</li>
                <li  className="spec-bl3 bold mt-3">Microsoft SQL Server / MySQL / Oracle 9i</li>
              </ul>
              <h3><b className="shadow">CLOUD COMPUTING SKILLS</b></h3>
              <ul>
                <li  className="spec-bl3 bold mt-3">Microservices</li>
                <li className="gray bold mt-3">Microsoft AZURE Cloud Platform</li>
                <li  className="spec-bl3 bold mt-3">API and Services</li>
                <li className="gray bold mt-3">Containers and Kubernetes</li>
              </ul>
            </div>
            <div className="row">
              <h1><b className="shadow">SCHOLARSHIPS AND DISTINCTIONS</b></h1>
              <ul>
                <li  className="spec-bl3 bold mt-3">Post-Doc scholarship PAF-IAST.</li>
                <li className="gray bold mt-3">PhD Scholarship HEC</li>
                <li  className="spec-bl3 bold mt-3">MCS and MS Scholarship – CUST</li>
                <li className="gray bold mt-3">Award of Honorarium for the devoted job performance in year 2016-17</li>
                <li  className="spec-bl3 bold mt-3">COMSATS Research Productivity Awards for years 2014 to 2017</li>
                <li className="gray bold mt-3">Supervised Two ICT Funded BS FYP Project under scheme of National Grassroots ICT Research Initiatives</li>
                <li  className="spec-bl3 bold mt-3">HEC Approved Supervisor</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="upper">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -10 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L80,208C160,224,320,256,480,229.3C640,203,800,117,960,101.3C1120,85,1280,139,1360,165.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      </div>
      {/* REARCH */}
      <div className="container-fluid specialization" id="re">
        <div className="container">

          <div className="row">
            <div className="col">
              <h1 className="text-center mt-4"><b className=" shadow  ">RESEARCHES</b></h1>
              <div className="col speclist">
                <ul>
                  <li className="spec bold">Model-driven Software Engineering</li>
                  <li className="spec bold">Software Reusability</li>
                  <li className="spec bold">Microservice Architecture</li>
                  <li className="spec bold">Software Configuration Management</li>
                  <li className="spec bold">Version Control Systems</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h1 className="text-center  mt-4"><b className="shadow">CERTIFICATES</b></h1>
              <div className="col speclist">
                <ul>
                  <li className="spec bold"> <ion-icon name="trophy-sharp" className="gold"></ion-icon><span><a href="/">Getting Started with Git and GitHub (IBM)</a></span></li>
                </ul>
              </div>
              <h3 className="text-center mt-4">
                <span className="shadow">SPECIALIZATIONS</span>
              </h3>
              <div className="col speclist">
                <ul>
                  <li className="spec bold"> <ion-icon name="trophy-sharp" className="gold"></ion-icon><span><a href="/"> Version Control System - GitHub (IBM)</a></span>
                    <a href="/">Getting Started with Git and GitHub</a>
                  </li>
                  <li className="spec bold"><ion-icon name="arrow-forward-outline"></ion-icon><span><a href="/">Getting Started with Git and GitHub</a></span>
                  </li>

                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 10 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L80,208C160,224,320,256,480,229.3C640,203,800,117,960,101.3C1120,85,1280,139,1360,165.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
      {/* PUBLICATIONS */}
      <div className="container-fluid hero-bg" id="pub">
        <div className="container public">
        <div className="row">
            <div className="col text-center mt-5">
              <h1><b className="shadow">PUBLICATIONS</b></h1>
            </div>
          </div>
          <div className="row">
            <div className="col gap">
              <ul>
                <li className="spec-bl3 bold mt-3">Islam Ali, Waqar Mehmood, et al., CMMI Compliant Workflow Model to Establish Software Configuration Management Integrity, Accepted in Intelligent Automation & Soft Computing (IF 1.26), Nov 2020<a href="" className="link">Link</a></li>
                <li className="gray bold mt-3">Musawwer Khan, Waqar Mehmood, et al., CMMI Compliant Modernization Framework to Transform Legacy Systems, Accepted in Intelligent Automation & Soft Computing (IF 1.26), October 2020.</li>
                <li className="spec-bl3 bold mt-3">Mehmood, Waqar; Jari, Hassan; Tahir, Ali; Aslam, Waqar; Kamran, Muhammad, UCDiff: Difference Detection in Use Case Models of Healthcare System, Journal of Medical Imaging and Health Informatics, Volume 10, Number 10, 1st October 2020, pp. 2369-2377(9), (0.659) DOI:<a href="" className="link">Link</a></li>
                <li className="gray bold mt-3">Mehmood, Waqar; Shafiq, Muhammad; Saleem, Muhammad Qaiser; Alowayr, Ali Saeed; Aslam, Waqar, A Feature-Based Evaluation of Model Merge Methods for e-Health Solutions, Journal of Medical Imaging and Health Informatics, Volume 10, Number 10, 1st October 2020, pp. 2473-2480(8), IF (0.659) DOI: <a href="" className="link"> doi:10.1109/TBDATA.2017.2701817</a></li>
                <li className="spec-bl3 bold mt-3">Touseef Tahir, Ghulam Rasool, Waqar Mehmood, Cigdem Gencel, “An Evaluation of Software Measurement Processes in Pakistani Software Industry”, IEEE Access, Vol 6, pp 57868 – 57896, October 2018. IF (3.24), ISSN: 2169-3536 DOI:<a href="" className="link">10.1109/ACCESS.2018.2872956</a>(SCI)</li>
                <li className="gray bold mt-3">Waqar Mehmood, Nadir Shah, Zahoor-ur-din, Ehsan ullah Munir, “Fine-Granular Model Diff Solution in Model-based Version Control Systems”, Malaysian Journal of Computer Science, Vol. 28, No. 2, pp 152-165, June 2015. (IF 0.60)<a href="/" className="link">Link</a></li>
                <li className="spec-bl3 bold mt-3">Mukhtiar Memon, Waqar Mehmood, et al., “Security modeling for service-oriented systems using security pattern refinement approach”, Software & Systems Modeling , Volume 13, Issue 2, pp 549-572, May 2014 (IF 1.65)<a href="" className="link">Link</a></li>
                <li className="gray bold mt-3">Waqar Mehmood, Nadir Shah, Majid Jamal Khan, Mukhriar Memon, M Ikramullah. “Fine-granular model merge solution for model-based version control system”, Malaysian Journal of Computer Science. Vol. 29(3), pp 225-246. 2016. IF (0.60)<a href="" className="link">Link</a></li>
                <li className="spec-bl3 bold mt-3">Zamir, A., Khan, H.U., Mehmood, W., Iqbal, T. and Akram, A.U. (2020), "A feature-centric spam email detection model using diverse supervised machine learning algorithms", The Electronic Library, Vol. 38 No. 3, pp. 633-657. 4 July 2020. (IF 0.954)<a href="" className="link">Link</a></li>
                <li className="gray bold mt-3">Saliha Zahoor, Ikram Ullah Lali, Muhammad Attique Khan*, Kashif Javed and Waqar Mehmood, “Breast Cancer Detection and Classification using Traditional Computer Vision Techniques: A Comprehensive Review”, Current Medical Imaging (2020) 16: 1. (IF 0.53)<a href="" className="link">Link</a></li>
                <li className="spec-bl3 bold mt-3">Naz, Farah & Kamran, Muhammad & Mehmood, Waqar & Khan, Wilayat & Alkatheiri, Mohammed & Alghamdi, Ahmed & Alshdadi, Abdulrahman. (2019). Automatic identification of sarcasm in tweets and customer reviews. Journal of Intelligent & Fuzzy Systems. 37. 6815-6828. 10.3233/JIFS-190596</li>
                <li className="gray bold mt-3">Saleem Zahid, Nadir Shah, Waqar Mehmood, “Distributed Partition Detection with Dynamic Replication Management in DHT-based MANET”, IEEE Access, Vol: 6(1), March 2018. IF (3.24),<a href="" className="link">Link</a></li>
                <li className="spec-bl3 bold mt-3">Raza Ul Mustafa, M Saqib Nawaz, M Ikram Ullah Lali, Tehseen Zia, Waqar Mehmood, “Predicting The Cricket Match Outcome Using Crowd Opinions On Social Networks: A Comparative Study Of Machine Learning Methods.” Malaysian Journal of Computer Science . Vol. 30 Issue 1, p 63-76. 14p. 2017, IF (0.6),<a href="" className="link">Link</a></li>
                <li className="gray bold mt-3">Amin, Rashid; Shah, Nadir; Mehmood, Waqar, 2019. "Enforcing Optimal ACL Policies Using K-Partite Graph in Hybrid SDN." Electronics 8, no. 6: 604.<a href="" className="link">Link</a></li>
                <li className="spec-bl3 bold mt-3">Waqar Aslam, Farah Ijaz, M. Ikramullah Lali, Waqar Mehmood, “Risk Aware and Quality Enriched Effort Estimation for Mobile Applications in Distributed Agile Software Development”, Journal of Information Science and Engineering, Nov 2017, Vol. 33 No. 6, pp. 1481-1500. IF (0.47)<a href="" className="link">Link</a></li>
                <li className="gray bold mt-3">Nadir Shah, Ayaz Ahmad, Waqar Mehmood, Depei Qian, Rui Wang “An Efficient and Scalable Routing for MANETs”, Wireless Personal Communications, Springer, USA, vol. 75, no. 2, pp. 987-1004, March 2014, (IF= 0.95)<a href="" className="link">Link</a></li>
                <li className="spec-bl3 bold mt-3">Majid Jamal Khan, Dildar Hussain, Waqar Mehmood, "Why do firms adopt enterprise risk management (ERM)? Empirical evidence from France", Management Decision, Vol. 54 Iss: 8, pp.1886 – 1907, 2016 (IF 2.5)<a href="" className="link">Link</a></li>
                <li className="gray bold mt-3">Nadir Shah, Waqar Mehmood “A survey of P2P content sharing in MANETs”, Computer and Electrical Engineering, Elsevier, Volume 57, January 2017, Pages 55–68, IF (1.57) <a href="">Link</a></li>
                <li className="spec-bl3 bold mt-3">W. Mehmood, A. Ali, A. Qayyum, M. E. Quershi, “Model-based Version Management System Framework”, Technical Journal, University of Engineering and Technology (UET) Taxila, April 2015, Vol. 20 No. IV-2015, PP 120-125,<a href="" className="link">Link</a></li>
                <li className="gray bold mt-3">Mussarat Yasmin, Muhammad Sharif, Isma Irum, Waqar Mehmood, Steven Lawrence Fernandes, “Combining Multiple Color And Shape Features For Image Retrieval”, IIOABJ, Vol. 7, No. 3, pp: 97-110.<a href="">Link</a></li>
                <li className="spec-bl3 bold mt-3">Junaid Rashid, Waqar Mehmood, “A Survey of Model Comparison Strategies and Techniques in Model Driven Engineering”, International Journal of Computer, Electrical, Automation, Control and Information Engineering Vol:9, No:6, PP 1377-1385, 2015.<a href="" className="link">Link</a></li>
                <li className="gray bold mt-3">W. Mehmood, A. Ali, A. Qayyum, M. E. Quershi, “Model-based Version Management System Framework”, Technical Journal, University of Engineering and Technology (UET) Taxila, April 2015, Vol. 20 No. IV-2015, PP 120-125,<a href="" className="link">Link</a></li>
                <li className="spec-bl3 bold mt-3">W. Mehmood, A. Ali, A. Qayyum, M. E. Quershi, “Model-based Version Management System Framework”, Technical Journal, University of Engineering and Technology (UET) Taxila, April 2015, Vol. 20 No. IV-2015, PP 120-125,<a href="" className="link">Link</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="upper">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -10 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L80,208C160,224,320,256,480,229.3C640,203,800,117,960,101.3C1120,85,1280,139,1360,165.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      </div>
      {/* PROJECTS */}
      <div className="container-fluid specialization" id="pro">
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <h1><b className="shadow">PROJECTS</b></h1>
            </div>
          </div>
          <div className="row">
            <div className="col speclist-edu ">
              <ul>
                <li className="spec-pro bold">
                  <h5 className="bold">NATIONAL GRASSROOTS ICT RESEARCH INITIATIVES, HEC, PAKISTANAUSTRIA</h5>
                  <b>PROJECT MANAGEMENT AND COLLABORATION TOOL</b><br />
                  <b>Project Fund : <span className="blue"> 40,000 </span>PKR</b><br />
                  <b>From University <span className="blue">JKU, Austria</span></b><br />
                  <b>Student Supervision</b><br />
                  <span className="blue">Muhammad Asim, SP09-BS(CS)-003</span><br />
                  <span className="blue">Session 2012-13</span>
                </li>
                <li className="spec-pro bold">
                  <h5 className="bold">NATIONAL GRASSROOTS ICT RESEARCH INITIATIVES, HEC, PAKISTANAUSTRIA</h5>
                  <b>AN ANDROID BASED PHARMACEUTICAL INVENTORY SYSTEM</b><br />
                  <b>Project Fund : <span className="blue"> 43,000 </span>PKR</b><br />
                  <b>From University <span className="blue">JKU, Austria</span></b><br />
                  <b>Student Supervision</b><br />
                  <span className="blue">Shah Faisal, FA10-BS(CS)-050</span><br />
                  <span className="blue">Session 2013-14</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 10 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L80,208C160,224,320,256,480,229.3C640,203,800,117,960,101.3C1120,85,1280,139,1360,165.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
      {/* LANGUAGES */}
      <div className="container-fluid hero-bg" id="lan">
        <div className="container">
          <div className="row">
            <div className="col text-center mt-5 mb-3">
              <h1><b className="shadow">WORLD EXPLORE</b></h1>
            </div>
          </div>
          <div className="row">
            <div className="col speclist-edu ">
              <ul>
                <li className="spec-bl2 bold"><h5 className="bold">Austria</h5></li>
                <li className="spec-bl2 bold"><h5 className="bold">UK</h5></li>
                <li className="spec-bl2 bold"><h5 className="bold">France</h5></li>
                <li className="spec-bl2 bold"><h5 className="bold">Italy</h5></li>
                <li className="spec-bl2 bold"><h5 className="bold">Germany</h5></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col speclist-edu">
              <ul>
                <li className="spec-bl2 bold"><h5 className="bold"><span className="black">Switzerland</span></h5></li>
                <li className="spec-bl2 bold"><h5 className="bold"><span className="black">Swedeen</span></h5></li>
                <li className="spec-bl2 bold"><h5 className="bold"><span className="black">Finland</span></h5></li>
                <li className="spec-bl2 bold"><h5 className="bold"><span className="black">Czech Republic</span></h5></li>
                <li className="spec-bl2 bold"><h5 className="bold"><span className="black">Saudi Arabia</span></h5></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col text-center mt-5 mb-3">
              <h1><b className="shadow">LANGUAGES</b></h1>
            </div>
          </div>
          <div className="row">
            <div className="col speclist-edu ">
              <ul>
                <li className="spec-bl2 bold"><h5 className="bold"><span className="black">Urdu</span></h5></li>
                <li className="spec-bl2 bold"><h5 className="bold"><span className="black">English</span></h5></li>
                <li className="spec-bl2 bold"><h5 className="bold"><span className="black">German</span></h5></li>
                <li className="spec-bl2 bold"><h5 className="bold"><span className="black">Pushto</span></h5></li>
                <li className="spec-bl2 bold"><h5 className="bold"><span className="black">Hindko</span></h5></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col speclist-edu ">
              <ul>
                <li className="spec-bl2 bold"><h5 className="bold"><span className="black">Punjabi</span></h5></li>
                <li className="spec-bl2 bold"><h5 className="bold"><span className="black">Arabic</span></h5></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col text-center mt-5 mb-3">
              <h1><b className="shadow">SOCIAL WORK</b></h1>
            </div>
            <div className="row">
              <div className="col speclist-bl">
                <ul>
                  <li className="spec-bl3 bold">
                    <b>Conducted three seminar talks on the impact of using “Social media for the promotion of cultural heritage of Khyber Pukhtunkhwa” under the RICH project of Directorate of Culture Govt. of KPK.</b>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="upper">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -10 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L80,208C160,224,320,256,480,229.3C640,203,800,117,960,101.3C1120,85,1280,139,1360,165.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      </div>
      {/* GALLERY */}
      <div className="container-fluid specialization">
        <div className="container">
        <div className="row">
            <div className="col text-center mt-5 mb-3">
              <h1><b className="shadow">GALLERY</b></h1>
            </div>
          </div>
          <div className="row">
            <div className="col gallery">
              <div className="country">
                Austria
              </div>
              <div className="country2">
                Czech
              </div>
              <div className="country3">
                England
              </div>
              <div className="country4">
                France
              </div>
              <div className="country5">
                Finland
              </div>
              <div className="country6">
                Germany
              </div>
              <div className="country7">
                Italy
              </div>
              <div className="country8">
                Pakistan
              </div>
              <div className="country9">
                Saudia Arabia
              </div>
              <div className="country10">
                Swizerland
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
import './footer.css'
import linkedin from '../../assets/linkedin.svg'
import insta from '../../assets/insta.svg'
import github from '../../assets/github.svg'


export default function Footer(){
    return(
            <>
            <div className="footer" >
                <div className="copyright ">
                    <p>&copy;2024 sathish portfolio💚</p>
                </div>
                <div className="links ">
                <a href="https://github.com/SATHISH0412"> <img src={github} alt="githublink" /> </a>
                <a href="https://www.linkedin.com/in/sathish-k-819040229"><img src={linkedin} alt=" linkedin links" /></a>
                <a href="https://www.instagram.com/ksv_krishna/"><img src={insta} alt="insta link" /></a>
                </div>
                <div className="contact ">
                   <h3>CONTACT</h3>
                   <p>Email: sathishksv0412@gmail.com</p>
                   <p>Mobile: +918148913281</p>
                </div>
            </div>
            </>


    );



}
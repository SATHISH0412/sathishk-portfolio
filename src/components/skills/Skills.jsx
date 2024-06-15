import Title from "../title/Title";
import './skills.css'


export default function Skills() {

    const skilldet = [{ topic: "HTML", img:"https://img.icons8.com/?size=100&id=20909&format=png&color=000000" },
                        { topic: "CSS", img: "https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000" },
                        { topic: "java script", img: "https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000" }, 
                        { topic: "MYSQL", img: "https://img.icons8.com/?size=100&id=39855&format=png&color=000000" },
                        { topic: "Mongo DB", img: "https://img.icons8.com/?size=100&id=74402&format=png&color=000000" },
                        { topic: "python", img: "https://img.icons8.com/?size=100&id=l75OEUJkPAk4&format=png&color=000000" },
                        { topic: "React JS", img: "https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000" },
                        { topic: "NODE.JS", img: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000" },
                        { topic: "VS Code", img: "https://img.icons8.com/?size=100&id=9OGIyU8hrxW5&format=png&color=000000" },
                        { topic: "Express JS", img: "https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000" },
                        { topic: "Java", img: "https://img.icons8.com/?size=100&id=lTKW3iI3wIT0&format=png&color=000000" },
                        { topic: "bootstrap", img: "https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000" },
                        { topic: "git", img: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000" }
                     
                     ];


    return (
        <>
            <Title title="myself" />

            <div className="aboutme" id="aboutme">
                <div className="about">
                    <b><h2>ABOUT ME</h2></b>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt voluptates
                        beatae suscipit recusandae, error blanditiis? Totam corporis illum ab quidem
                        vero reiciendis sequi consequuntur
                        quaerat qui, voluptatibus necessitatibus, eos quisquam.</p>
                </div>
                <div className="skills">
                    <h2>SKILLS</h2>
                   <div className="skillval">
                    {skilldet.map((ele)=><p className="skiholder" key={ele.topic}><img src={ele.img} alt="sksico" /><b><span>{ele.topic}</span></b></p>)
                    }
                   </div>
                    
                </div>
            </div>

        </>
    )

}

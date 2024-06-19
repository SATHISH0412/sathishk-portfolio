import './cards.css';


export default function Cards(){

            const  cardinfo =[
                {title:"uml for whastapp using staruml",
                    description:"In this project i draw the Uml diagrams for the whatapp application. The diagram discribes the architecure of the whatsapp. The star UML tools is used for drawing.",
                    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WhatsApp_logo-color-vertical.svg/1280px-WhatsApp_logo-color-vertical.svg.png",
                    certificate:""
                },
                {title:"HR Salary prediction using ml",
                    description:"this project is done for TCS remote internship. i created the ml model and created the userfriendly interface for the project.",
                    img:"https://img.icons8.com/?size=100&id=rZqNJyUlWoA6&format=png&color=000000",
                    certificate:"https://drive.google.com/file/d/1AaERqlQ4rZnbXz2bEV071YLz_z1TjMlj/view?usp=drive_link"
                },
                {title:"kidney disease prediction using ml",
                    description:"This project done Under NaanMudalvan scheme. By Using the dataset we created the model and implemeted in the userinterface using the Python flask framework.",
                    img:"https://img.icons8.com/?size=100&id=uZtyZHcWhwNO&format=png&color=000000",
                    certificate:"https://drive.google.com/file/d/1AiCBOKhq1mHyDoai9f2N6MxiimLIA9no/view?usp=drive_link"
                },
                {title:"covid-19 disease prediction using xray",
                    description:"In this Project I created the CNN model to predict the disease using the unlabeled data.then implemeted into the userinterface using the flask framework.",
                    img:"https://th.bing.com/th/id/OIP.Ev0kB0bztmyHOPTEMysI-wHaFf?rs=1&pid=ImgDetMain",
                    certificate:""
                },
                {title:"attendace system using java",
                    description:"In this projects i used advance java concepts and implemeted in the projectt, in this project we can take attendance an store it in the database using java.For that it has user friendly interface.",
                    img:"https://th.bing.com/th/id/OIP.thEhohDBmsjrKFDW0evApAHaHa?rs=1&pid=ImgDetMain",
                    certificate:""
                },
                {title:"anime recommendation system",
                    description:"This project done under Naso Tech intership.I created the Ml model to get the recommendation. In the front end i helped the team to crate better Ui for the web application",
                    img:"https://th.bing.com/th/id/OIP.woPoCG3H2kadp47bu0k42gAAAA?rs=1&pid=ImgDetMain",
                    certificate:""
                },
                {title:"my portfolio using react-js",
                    description:"I am  learned the react js on my own and created my own portfolio for experience.",
                    img:"https://cdn-icons-png.flaticon.com/512/3399/3399054.png",
                    certificate:""
                },

            ]
    return(
            <>
            {cardinfo.map((info)=>
                <div key={info.title} className="caritem">
                <div className="imgbox" >
                <img src={info.img}  alt="img" />
                </div>
               <div className="content">
               <h3>{info.title}</h3> <br /><p  className="read" href="">  read more</p>
               <p>{info.description} {info.certificate ?<a href={info.certificate}>certificate</a>:''}</p>
               </div>
            </div>
            )}
            
           
         
            </>


    )
}
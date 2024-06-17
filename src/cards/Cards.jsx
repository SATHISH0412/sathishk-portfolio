import './cards.css';


export default function Cards(){

            const  cardinfo =[
                {title:"uml for whastapp using staruml",
                    description:"lorem",
                    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WhatsApp_logo-color-vertical.svg/1280px-WhatsApp_logo-color-vertical.svg.png"
                },
                {title:"HR Salary prediction using ml",
                    description:"lorem",
                    img:"https://img.icons8.com/?size=100&id=rZqNJyUlWoA6&format=png&color=000000"
                },
                {title:"kidney disease prediction using ml",
                    description:"lorem",
                    img:"https://img.icons8.com/?size=100&id=uZtyZHcWhwNO&format=png&color=000000"
                },
                {title:"covid-19 disease prediction using xray",
                    description:"lorem",
                    img:"https://th.bing.com/th/id/OIP.Ev0kB0bztmyHOPTEMysI-wHaFf?rs=1&pid=ImgDetMain"
                },
                {title:"attendace system using java",
                    description:"lorem",
                    img:"https://th.bing.com/th/id/OIP.thEhohDBmsjrKFDW0evApAHaHa?rs=1&pid=ImgDetMain"
                },
                {title:"anime recommendation system",
                    description:"lorem",
                    img:"https://th.bing.com/th/id/OIP.woPoCG3H2kadp47bu0k42gAAAA?rs=1&pid=ImgDetMain"
                },
                {title:"my portfolio using react-js",
                    description:"lorem",
                    img:"https://cdn-icons-png.flaticon.com/512/3399/3399054.png"
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
               <p>{info.description}</p>
               </div>
            </div>
            )}
            
           
         
            </>


    )
}
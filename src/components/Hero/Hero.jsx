import './hero.css'
import df from './df.png'


function Hero(){
  return(
        <div className="hero">
             <div className="pic">
             <img  className="mypic" src={df} alt="imges" />
                </div>
                
            <div className="intro">
                <h2 className='name'>SATHISH K</h2>
                <h6 className='passion'>UI / UX DESIGNER</h6>
                <p className='desc' >Hi ! i am tech passionate person, i love tech. so that is <br/>why i become a ux designer.</p>
                    <div className='connect'>
                        <p>Email: sathishksv0412@gmail.com</p>
                        <button>Hireme</button>

                    </div>            
            
            </div>
           
        </div>
  );
}



export default Hero;
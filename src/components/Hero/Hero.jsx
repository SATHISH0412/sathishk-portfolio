import './hero.css'
import df from './df.png'



function Hero(){
  return(
        <div className="hero">
          <div className='picture'>
             <img className='me' src={df} alt="" />
          </div>
                
            <div className="intro">
                <p className='name'>SATHISH K</p>
                <h6 className='passion'>UI / UX DESIGNER</h6>
                <p className='desc' >Hi ! i am tech passionate person, i love tech. so that is why i become a ux designer.</p>
                    <div className='connect'>
                        <button>Hireme</button>
                    </div>            
            
            </div>
           
        </div>
  );
}



export default Hero;
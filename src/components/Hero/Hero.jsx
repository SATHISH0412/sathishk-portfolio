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
                <p className='desc' >Hi ! i am sathish.i am self taught and motivated person. 
                  i always wanted to explore new things.</p>
                    <div className='connect'>
                       <a href="https://wa.me//+918148913281?text=Hi sathish..!!!"> <button>Hire me 📞</button></a>
                    </div>            
            
            </div>
           
        </div>
  );
}



export default Hero;
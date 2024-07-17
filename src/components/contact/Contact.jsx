import Title from '../title/Title'
import './contact.css'

export default function Contact(){
    return<>
    <Title title="contact form" />
    <section className="contacts" id='contact' >
       <div className='formcontainer'>
       <form action="/feedback" className="feed">
        <input type="text" placeholder="Enter Your Name" />
        <input type="text" placeholder="Enter your Email" />
        <textarea name="" id="" placeholder='Enter You Response...'></textarea>
        <button type='submit'>Submit</button>
        </form>
       </div>
    </section>
    
    </>
} 
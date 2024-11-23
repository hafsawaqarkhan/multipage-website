import React from 'react'

function Contact() {
  return (
    <div>
    <section className='contact'>
        <h3 className='fade-in'>Contact Us</h3>
        <form>
            <input type="text" placeholder='Ful Name'required   />
            <input type="email" placeholder='Email' required />
            <input type="text"  placeholder='Phone no'/>
            <textarea placeholder='Your Message' rows={5} required></textarea>
            <button type='submit'>Submit</button>
        </form>
        </section>  
    </div>
  )
}

export default Contact

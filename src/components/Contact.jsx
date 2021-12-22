import React from 'react'

const Contact = () => {

  
  return (
    <section id="contact" style={{background:'#202c37'}} className="contact py-16 px-4 md:px-10 bg-gray-50 text-white flex flex-col items-center justify-center">
      <h2 className="flex justify-center font-bold lg:text-4xl mb-6">Contact</h2>
      <div className="form-wrapper bg-white w-full max-w-2xl md:max-w-3xl py-16 px-6 sm:px-12">
        <form  action="https://formsubmit.co/hikmayousuph@gmail.com" method="POST">
            <div className="input-group my-4 border-b-2">
              <input type="text" id="name" name="NAME" aria-label="name" className="field focus:outline-none w-full text-black" placeholder="Name" required/>            
            </div>
            <div className="input-group my-4 border-b-2">
              <input type="email" id="email" name="EMAIL" aria-label="email" className="field focus:outline-none w-full text-black" placeholder="Email Address" required/>            
            </div>
            <div className="input-group my-4 border-b-2">
              <textarea  type="text" id="message" name="MESSAGE" aria-label="message" rows="3" className="field focus:outline-none w-full text-black" placeholder="Message" required></textarea>
            </div>
            <input type="hidden" name="_subject" value="My website new submission!"/>
            <div className="input-group flex justify-end">
              <button style={{background:'#0ad7c5'}} type="submit" className="submit-btn w-full md:w-auto px-6 py-4 mt-6 text-black transition-colors cursor-pointer hover:text-white">Submit</button>
            </div>
        </form>
      </div>

    </section>  
  )
}

export default Contact

import React from 'react'

const Contact = () => {

  
  return (
    <section style={{background:'#202c37'}} className="contact py-16 px-4 md:px-10 bg-gray-50 text-white flex flex-col items-center justify-center">
      <h2 className="flex justify-center font-bold lg:text-4xl mb-6">Contact</h2>
      <div className="form-wrapper bg-white w-full max-w-2xl md:max-w-3xl py-16 px-8 sm:px-12">
        <form action="mailto:hikmayousuph@gmail.com" method="POST" encType="multipart/form-data" name="contactForm" className="" id="contact-form">
            <div class="input-group my-4 border-b-2">
              <input type="text" id="name" name="Name" aria-label="name" className="field focus:outline-none w-full text-black" placeholder="Name"/>            
            </div>
            <div class="input-group my-4 border-b-2">
              <input type="text" id="email" name="email" aria-label="email" className="field focus:outline-none w-full text-black" placeholder="Email Address"/>            
            </div>
            <div class="input-group my-4 border-b-2">
              <textarea  type="text" id="message" name="message" aria-label="message" className="field focus:outline-none w-full text-black" placeholder="Message"></textarea>
            </div>
            <div className="input-group flex justify-end">
              <input style={{background:'#0ad7c5'}} type="submit" className="submit-btn w-full md:w-auto px-6 py-4 mt-6 text-black transition-colors cursor-pointer hover:text-white"  value="Submit"/>
            </div>
        </form>
      </div>

    </section>
      
    
  )
}

export default Contact

import React from 'react'
import BgImage from '../assets/ecosystem-water-drop-nature-background-earth-day-campaign.jpg'
const Contact = () => {
  return (
    <div className='w-screen h-screen p-28 flex flex-col justify-between items-center gap-3 ' 
    style={{
      backgroundImage: `url(${BgImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right center',
      backgroundSize: 'cover',
      
    }}
    loading="lazy" >
      <h1 className='text-[#15516d] text-center underline decoration-double decoration-2 decoration-[#15516d] '>Contact Us</h1>
      <div className=' w-full h-full flex flex-col justify-items-start m-auto'>
        <form action="" className='flex flex-col justify-evenly gap-2 rounded-lg p-10 w-1/2 bg-[#5974c62a] border-2 border-[#222284] ' >
          <input type="text" name="senderName" id="senderName" placeholder='Name: ' className='p-2 px-3 placeholder:text-black text-black font-semibold rounded-xl focus:outline-none' />
          <input type="text" name="senderEmail" id="senderEmail"  placeholder='Email: ' className='p-2 px-3 placeholder:text-black text-black font-semibold rounded-xl focus:outline-none' />
          <textarea name="message" id="message" rows={4} placeholder='Message/Feedback' className='p-2 px-3 placeholder:text-black text-black font-semibold rounded-xl focus:outline-none' ></textarea>
          <input type="submit" value="Send" className='p-2 bg-[#0c2937] text-white font-semibold rounded-lg w-1/2 self-end' />
          <hr className='border-5 border-[#154053]' />
          <div className='flex text-white justify-between'>
            <div className='flex flex-col' >
              <h5>Company Location:</h5>
              <p>Lahore</p>
            </div>
            <div className='flex flex-col' >
              <h5>Contact Information:</h5>
              <p>+92 300 *******</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
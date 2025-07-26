import React from 'react'

function Contact() {
  return (
    <section className='w-full border-t-1 py-16 px-12 dark:text-neutral-100'>
      <h2 className="text-2xl mb-4 font-bold text-center">Contact Me!</h2>
      <div className="grid grid-cols-2">
        <div className='mx-auto my-auto'>
          <form action="" className="grid grid-rows-[auto_auto_auto_auto] gap-2">
            <div>
              <input placeholder='Name' type="text" name="" id="name" className="bg-neutral-200 dark:bg-neutral-950 rounded-2xl px-4 py-2 w-100" />
            </div>
            <div>
              <input placeholder='Email' type="text" name="" id="email" className="bg-neutral-200 dark:bg-neutral-950 rounded-2xl px-4 py-2 w-100" />
            </div>
            <div>
              <textarea placeholder={"Message"} name="" id="message" className="bg-neutral-200 dark:bg-neutral-950 rounded-2xl resize-none p-4 w-100 h-40"></textarea>
            </div>
            <div>
              <button type="button" className="bg-neutral-800 dark:bg-neutral-950 py-2 px-8 rounded-full text-neutral-50 hover:bg-neutral-95  0 active:opacity-80 cursor-pointer">Submit</button>
            </div>
          </form>
        </div>
        <div>
          <img src="./src/assets/contact_me.png" className='aspect-square w-100 mx-auto' alt="" />
        </div>
      </div>
    </section>
  )
}

export default Contact
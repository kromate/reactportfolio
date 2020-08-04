import React,{useState} from 'react'

function Contact() {
  let [state, setstate] = useState('Submit')
  const handleSubmit=(e)=>{
    e.preventDefault()
    setstate(state='Sending...')
    const form = document.forms['submit-to-google-sheet'];
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxHtzgmNP5GGoomN1JUwX6UCWwqnEhiUGGwz4BnjYyNYV6PaT8/exec';
      document.querySelector('#btn').disabled = true;
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => { setstate(state = 'Sent')})
        .catch(error => {alert('Error!', error.message)
          setstate(state = 'Submit')
          document.querySelector('#btn').disabled = false;
    
    });
  }
  
  return (
    <div className='grid'>
      <div className='social'>
        <a href="https://twitter.com/kromate_24" target="_blank" rel="noreferrer">
          <div class="cd twitter">
            Twitter
      </div>
        </a>
        <a href="https://kromate.hashnode.dev/" target="_blank" rel="noreferrer">
          <div class="cd github">
            Hashnode
      </div>
        </a>
        <a href="https://www.instagram.com/kromtech_24/" target="_blank" rel="noreferrer">
          <div class="cd instagram">
            Instagram
      </div>
        </a>
        <a href="https://github.com/kromate" target="_blank" rel="noreferrer">
          <div class="cd github">
            Github
      </div>
        </a>
        <a href="https://wa.me/2348146923944" target="_blank" rel="noreferrer">
          <div class="cd whatsapp">
            Whatsapp
      </div>
        </a>
      </div>
      <div className='form'>
        <span>None of this fields are required(<i>feel free to be anonymous</i>) 😉</span>
        <form onSubmit={handleSubmit} action="" name="submit-to-google-sheet">
          <input type='text' placeholder='Name' name='Name'></input>
          <input type='email' placeholder='Email' name='Email'></input>
          <textarea rows='3' cols='22' placeholder='Message' name='Message'></textarea>
          <button id='btn' type='submit'>{state}</button>
       </form>
      </div>
    </div>
  )
  }

export default Contact

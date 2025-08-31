import React from 'react';
import Button from './Button';
import { LuMessageSquareMore } from "react-icons/lu";
import { MdCall, MdMail } from "react-icons/md";
import { useState } from 'react';

const ContactForm = () => {
    const[name,setName]=useState("Anshu");
    const[email,setEmail]=useState("anshuyafav@gmail.com");
    const[text,setText]=useState("i am Anshu");
      const onSubmit=(event)=>{
        event.preventDefault();
        setName(event.target[0].value);
        setEmail(event.target[1].value);
       setText(event.target[2].value);

    
      
    };
  return (
    <section className='container2'>
        <div className='contact_form'>
  <Button text="VIA SUPPORT CHAT" icon={<LuMessageSquareMore />} />
  <Button
  
  text="VIA CALL" icon={<MdCall />}  />

  <div className='email_button_wrapper'>
    <Button text="VIA EMAIL FORM" icon={<MdMail />} isOutLine />
  </div>
</div>
<form
onSubmit={onSubmit}>
    <div className='form_control'>
    <label htmlFor='name'>Name</label>
    <input type='text' name='name'/>
    </div>
     <div className='form_control'>
    <label htmlFor='email'>Email</label>
    <input type='email' name='email'/>
    </div>
     <div className='form_control'>
    <label htmlFor='text'>text</label>
    <textarea type='text' />
    </div>
    <div>
    <Button text="SUBMIT Button"/>
    </div>
    <div>{name +""+ email +"" + text + "" }</div>
</form>
      
      <div className='contact_image'>
        <img src="./image/f.png" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;

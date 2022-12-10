import React,{useRef} from 'react';

import classes from './Contact.module.css';

const Contactus = (props) =>{
    const nameRef = useRef('');
    const emailIdRef = useRef('')
    const enterQueryRef = useRef('');
    const enterNumberRef = useRef('');

    const submitHandler =(event)=>{
        event.preventDefault();

        const queryform = {
            name : nameRef.current.value,
            email:emailIdRef.current.value,
            query:enterQueryRef.current.value,
            number:enterNumberRef.current.value
        }
        props.onAddQuery(queryform)
        console.log(queryform);
    }

    return(
        <>
        <div className='container'>

         <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='Name'>Name</label>
        <input type='text' id='Name'  ref={nameRef} />
      </div>


      <div className={classes.control}>
        <label htmlFor='email'>Email Id</label>
        <input type='email' id='email'ref={emailIdRef} />
      </div>


      <div className={classes.control}>
        <label htmlFor='query'>Enter Query</label>
        <textarea rows='5' id='query'ref={enterQueryRef} ></textarea>
      </div>


      <div className={classes.control}>
        <label htmlFor='number'>Enter Number</label>
        <input type='number' id='number' ref={enterNumberRef} />
      </div>

      <center>
      <button className={classes.submitbutton}>Submit</button>
      </center>
      
    </form>
    </div>
        </>
    )
}

export default Contactus;
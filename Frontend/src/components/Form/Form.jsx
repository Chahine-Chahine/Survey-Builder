/* eslint-disable react/prop-types */
import './Form.css'

const Form = (props) => {
  return <div className='form'>
    <p className='form-title'>{props.title}</p>
    
    {props.children}

  </div>
}

export default Form
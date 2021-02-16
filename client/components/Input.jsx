import React from 'react';

const InputField = (props) => {



  return (
    <div>
    <textarea
      placeholder='your sentence here'
      value={props.sentence}
      onChange={event => props.handleChange(event)}
    >

    </textarea>
    <button
      type='submit'
      onClick={event => props.handleClear(event)}
    >
      clear
    </button>
    <button
      type='submit'
      onClick={event => props.handleSubmit(event)}
    >
      submit
    </button>
    </div>
  )

}

export default InputField;
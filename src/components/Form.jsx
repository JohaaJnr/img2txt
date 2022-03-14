import React from 'react'
import Result from './Result'
const Form = () => {

    const fileUpload = (e) =>{
        e.preventDefault()
        console.log('button clicked')
    }

  return (
    <div>
          <div class="jumbotron">
              <h3 class="display-6">Upload Image</h3>
              <p class="lead">Upload Image to Extract Text from it. This image to text processor is very accurate and used by IT teams to convert images of error screenshots to text</p>
              <hr class="my-4" />
                 
                  <p class="lead">
                      <form className='d-flex' onSubmit={fileUpload}>
                         <input type="file" name='file' />
                         <button className='btn btn-primary' type='submit'>Upload</button>
                      </form>
                  </p>
          </div>
          <Result />
    </div>
  )
}

export default Form
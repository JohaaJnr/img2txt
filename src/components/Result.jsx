import React from 'react'

const Result = () => {
  return (
      <div className='mt-4'>
          <hr className='my-4' />
          <div className='container mt-4 py-4'>
          <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
              <div className="toast-header">
                  <strong className="me-auto">Text</strong>
                  <small>11 mins ago</small>
                  
              </div>
              <div className="toast-body">
                  Hello, world! This is a toast message.
              </div>
          </div>
    </div>
      </div>
    
  )
}

export default Result
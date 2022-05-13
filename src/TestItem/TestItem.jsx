import React from 'react'
import './TestItem.css'

function TestItem(data, index) {
  return (
    <div className="test-item">
        <div>
            <p>content: {data.content}</p>
            <p>index: {data.index}</p>
        </div>
    </div>
  )
}

export default TestItem
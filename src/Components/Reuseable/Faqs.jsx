import React from 'react'
import "../Reuseable/Reuseable.css"

function Faqs(props) {
  return (
    <div className='container py-1 border-b'>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header fnt-set12">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${props.item}`} aria-expanded="false" aria-controls={`flush-collapse${props.item}`}>
              {props.question}
            </button>
          </h2>
          <div id={`flush-collapse${props.item}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the first item's accordion body.</div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Faqs

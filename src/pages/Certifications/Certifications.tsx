import React from 'react'
import {
  certificationInterface,
  certificationList,
} from '../../API/certificationList'

const Certifications: React.FC<certificationInterface> = () => {
  return (
    <div className="flex flex-wrap p-3">
      {certificationList.map((certification) => (
        <div
          key={certification.id}
          className="bg-purple-300  card card-compact flex-auto max-w-80 mx-5 my-5 shadow-xl hover:scale-110"
        >
          <img
            src={certification.img}
            alt={certification.title}
            title={certification.title}
          />
          <div className="card-body">
            <h2 className="card-title underline decoration-solid">
              {certification.title}
            </h2>
            <h3 className="">{certification.skills}</h3>
            <p>{certification.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Certifications

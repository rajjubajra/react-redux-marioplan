import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quo harum consequatur libero aliquid doloribus, ducimus ullam consectetur magni ipsum, quisquam, non porro. Explicabo illo laborum fuga, consequuntur ex amet.</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by The Net Ninja</div>
          <div>2nd Sept, 2pm</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails

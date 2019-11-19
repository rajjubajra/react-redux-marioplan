const initalState = {
  projects: [
    {id: '1', title: 'Project Title One', content: 'Aha Aha Aha'},
    {id: '2', title: 'Project Title Two', content: 'Aha two Aha Aha'},
    {id: '3', title: 'Project Title Three', content: 'Aha Three Aha Aha'},
    {id: '4', title: 'Project Title Four', content: 'Aha Four Aha Aha'}
  ]

}

const projectReducer = (state = initalState, action) => {

  return state;

}

export default projectReducer;
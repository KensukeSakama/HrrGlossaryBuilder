import React from 'react';

const Descriptions = (props) => {
  let temp = [];
  // debugger;
  for (let id in props.descriptions) {
    console.log('props', props.descriptions[id])
    props.descriptions[id].map((description, i) => {
      temp.push(
        <div>
          <h3>{description.label}</h3>
          <h5>{description.uri}</h5>
          <h5>{description.description}</h5>
        </div>
      )
    })
  }

  return (
    <div>
      {temp}
    </div>
  );
}

export default Descriptions;
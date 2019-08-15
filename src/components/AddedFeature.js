import React from 'react';

const AddedFeature = ({ feature, removeFeature }) => {
  return (
    <li>
      <button className="button" onClick={() => removeFeature(feature.id)}>X</button>
      {feature.name}
    </li>
  );
};

export default AddedFeature;

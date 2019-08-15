import React from 'react';
import { connect } from 'react-redux';

import { addFeature, removeFeature } from './actions';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = ({ additionalPrice, car, store, addFeature, removeFeature }) => {
  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={store} addFeature={addFeature} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = ({ additionalPrice, car, store }) => {
  return {
    additionalPrice,
    car,
    store,
  };
};

export default connect(mapStateToProps, { addFeature, removeFeature })(App);

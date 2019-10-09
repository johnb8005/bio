import React from 'react';
import UtilReact from '@nexys/reactutils';
import Utils from '@nexys/utils';

import Textarea from './form/textarea';

import * as Bio from './bio';

const compFunc = typeid => {
  switch(typeid) {
    case 1:
      return Bio.dnaToRna;
    case 2:
      return Bio.anticodon;
    case 3:
      return Bio.codons;
      break;
    default:
      return Bio.dnaToRna;
  }
}

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = { form: {in: ''}, out: null, typeid: null };
  }

  onChange = (a) => {
    const form = Utils.ds.updateObject(this.state.form, a);

    this.setState({form});
  }

  compute = (typeid) => {
    const { form } = this.state;

    const func = compFunc(typeid);
    const out = func(form.in);

    this.setState({out, typeid});
  }

  renderOptions = () => {
    const { typeid } = this.state;
    const options = [
      {typeid: 1, name: 'DNA to RNA'},
      {typeid: 2, name: 'AntiCodon'},
      {typeid: 3, name: 'Codon to AAs'}
    ];

    return <ul className="nav">{options.map(option => {
      const className = typeid === option.typeid ? 'btn-primary' : 'btn-secondary';
      return (<li key={option.typeid} className="nav-item">
        <button className={`btn btn-sm ${className}`} onClick={() => this.compute(option.typeid)}>{option.name}</button>
      </li>);
    })}</ul>;
  } 

  renderResult() {
    const { out } = this.state;

    if (!out || out === '') {
      return null;
    }

    return <React.Fragment>
      <h3>Result</h3>
      <pre>{out}</pre>
    </React.Fragment>;
  }

  render() {
    const { out, form } = this.state;

    return (<div className="container">
        <h1>DNA Manipulations</h1>
        
        <p>Insert input in following textarea</p>

        <Textarea name="in" value={form.in} onChange={this.onChange}/>

        <div className="row"> 
          <div className="col-md-12">
            {this.renderOptions()}
          </div>
        </div>

        <div className="row"> 
          <div className="col-md-12">
            {this.renderResult()}
          </div>
        </div>
      </div>);
  }
}

export default App;

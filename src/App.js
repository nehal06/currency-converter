import React, { Component } from 'react';
import './App.css';
import RosePatels from './Assest/Rose-Petals.svg';
import DollarSvg from './Assest/dollar-symbol.svg';
import RupeeSvg from './Assest/rupee-indian.svg';
import IndiaFlag from './Assest/india.png';
import UsaFlag from './Assest/usa.png';
import Split from './Assest/winding.png';
import Input from './Components/Input';

class App extends Component {
  constructor() {
    super();
    this.state = {
      USD: 0.014,
      INR: 1,
      RATE: 70.83
    };
  }
  inputChange = (e, param) => {
    let rate = this.state.RATE;
    let inr = this.state.INR;
    let usd = this.state.USD;

    if (param == 'INR') {
      if (e.target.value == '') {
        this.setState({ INR: 1 });
      }
      var USD = (e.target.value / rate).toFixed(3);
      this.setState({ USD, INR: e.target.value });
    } else if (param == 'USD') {
      if (e.target.value == '') {
        this.setState({ INR: 1 });
      }
      var INR = (e.target.value * rate).toFixed(3);
      this.setState({ INR, USD: e.target.value });
    }
  };
  render() {
    return (
      <div className="App">
        <div className="background dollar">
          <img src={DollarSvg} className="dollarSvg"/>
        </div>

        <h2 className="heading">Currency Converter</h2>
        <div className="card">
          <div className="contentSection">
            <Input
              inputtype="RATE"
              value={this.state.RATE}
              changeCurrency={e => this.inputChange(e, 'RATE')}
            />
            <br />
            <img src={UsaFlag} className="flag" />
            <Input
              inputtype="USD"
              name="USD"
              changeCurrency={e => this.inputChange(e, 'USD')}
              value={this.state.USD}
            />
            <br />
            <img src={Split} className="split" />
            <br />
            <img src={IndiaFlag} className="flag" />
            <Input
              inputtype="INR"
              changeCurrency={e => this.inputChange(e, 'INR')}
              value={this.state.INR}
            />
          </div>
        </div>
        <div className="background rupee">
          <img src={RupeeSvg} className="rupeeSvg"/>
        </div>
      </div>
    );
  }
}

export default App;

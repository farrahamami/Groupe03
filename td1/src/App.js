import 'font-awesome/css/font-awesome.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Pictogramme from './Composants/Pictogramme';
import Commentaire from './Composants/Commentaire';
import './App.css';

class App extends React.Component {
  render(){
  return (
    <div className="col-6 offset-3">
    <div className="card">
      <div className="card-block">
        <div className="row">
          <div className="col-2">
            <img src="https://thomas-bart.com/wp-content/uploads/2017/03/developper-1680x1201.jpg"  style="rounded float-left" className="img-thumbnail" width="80" height="70" />
          </div>
          <div className="col-10 profile-row">
            <div className="row">
              <a href="#"><h1> Débuter avec React </h1></a>
            </div>
          </div>
        </div>
        <p>Bonne découverte des composants React "Components!!!"</p>
    
        <div>
          <Pictogramme/>;
        </div>
      </div>

      <div className="card-footer text-muted">
       <Commentaire />
      </div>

    </div>
  </div>
  );
}
}
ReactDOM.render(<App/>, document.getElementById("root"))

export default App;

import './App.css';

// import package/distribution folder {dist} /file location/ filename
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
      <div className="container">
        <div className="row">
          <div className="col-6">column number 1</div>
          <div className="col-6">
            <span>
              <i className="fas fa-home"></i>
            </span>
          </div>
        </div>
      </div>
  );
}

export default App;

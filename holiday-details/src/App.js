import './App.css';
import { Header } from './MyComponents/Header';
import { Details } from './MyComponents/Details';
import { Card } from 'antd';


function App() {

  return (
    <div className="container">
    <Card className="App">
    <Header/>
    <Details/>
    </Card>
    </div>
  );
}

export default App;

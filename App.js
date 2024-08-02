import './App.css';
import Name from './Name';
import Description from './Description';
import Image from './Image';
import Price from './Price';

const firstName = "Oluwadamilola";

const App = () =>{
  return (
    <div className="App">
        <div className='card' style={{margin: 'auto', width: '18rem', padding: '20px', border: '2px solid #000000', borderRadius: '20px'}}>
          <Image/>
          <div className='card-body'>
            <Name/>
            <Price/>
            <Description/>
          </div>
        </div>

        <p>
          Hello, {firstName ? firstName : "there"}!
        </p>

         {firstName && <img src="https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=600" alt="This is my Imgage" />}
    </div>
  );
}

export default App;

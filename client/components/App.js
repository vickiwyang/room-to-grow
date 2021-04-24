import React, { useState, useEffect } from "react";

// class App extends Component {
//     constructor(props){
//         super(props);
//     }

//     render() {

//         return (

//             <div>
//                 <h1> HELLO! </h1>
//             </div>
//         )
//     }
// }

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
      document.title = `You clicked ${count} times`;
  });

  return (
    <div className="initial">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default App;

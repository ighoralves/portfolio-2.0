import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";

import './styles/app.scss';

//layout
import Header from "./layout/Header";



function App() {
  return (
    <Router> 
      <Header />

      <Routes>
        <Route>
          
        </Route>
      </Routes>

    </Router>
  )
}

export default App


import './App.css';

import { BrowserRouter  , Route } from "react-router-dom"
import Root from './Root';
function App() {
  return (
 
  
<BrowserRouter>
        <div>
          <Route path={'/'} component={Root} />
        </div>
      </BrowserRouter>


  );
}

export default App;

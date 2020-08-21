import React,{Component} from 'react';

import './App.css'
import Profile from './layout/profile/profile'

class App extends Component {
  state = { 
    currentTab:""
   }

   handleTab=(tabname)=>{
     alert(tabname);
   }
  render() { 
    return ( <div className="App">
      <Profile handleTab={this.handleTab}/>
      </div> );
  }
}
 
export default App;



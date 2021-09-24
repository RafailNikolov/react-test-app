import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch, Redirect, useHistory} from 'react-router-dom';
import {Home} from './Home';
import {Contacts} from './Contacts';
import {About} from './About';
import {NoMatch} from './NoMatch';
import {NavigationBar} from './components/NavigationBar';
import {dictionaryList} from './languages/Languages';
import { useState } from 'react';

 
function App() {

  const [ language, setLanguage ] = useState(localStorage.getItem('lang') ? dictionaryList[localStorage.getItem('lang')] : dictionaryList.gb);
  const changeLang = (lang) => {
    setLanguage(dictionaryList[lang]);
  }

  return (
    <React.Fragment>
      
      <div className="container-fluid">

        <NavigationBar lang={language} changeLang={changeLang} />
        
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={() => (<Home lang={language.home}/>)}></Route>
            <Route exact path='/contacts' component={() => (<Contacts lang={language.contacts}/>)}></Route>
            <Route exact path='/about' component={() => (<About lang={language.about}/>)}></Route>
            <Route component={() => (<NoMatch lang={language.noMmatch}/>)}></Route>
          </Switch>
        </BrowserRouter>

      </div>

    </React.Fragment>
  );
}

export default App;

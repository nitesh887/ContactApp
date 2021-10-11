import React from 'react'
import Contacts from './components/Contacts/Contacts'
import Navbar from './components/elements/Navbar'
import {  Provider } from 'react-redux'
import store from './Store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddContacts from './components/Contacts/AddContacts'

const App = () => {
  return (
    <Provider store = {store}>

<Router>
<Navbar/>


    <Switch>
      <Route exact path ="/" component={Contacts}/>
      <Route exact path ="/contacts/add" component={AddContacts}/>
    </Switch> 
</Router>
   
   
    
    </Provider>
  )
}

export default App

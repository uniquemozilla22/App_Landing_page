import React from 'react'
import Layout from './Components/Layout'
import {Switch,Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import AppLayoutImage from './assets/img/app_preview_1.png'
import BackgroundPattern from './assets/img/bg_hero_1.svg'
function App() {
  return (
      <Layout>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </Layout>
    );
}

export default App;

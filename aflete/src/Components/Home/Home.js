import React from 'react'
import './Home.css'
import AppLayoutImage from '../../assets/img/app_preview_2.png'
const Home = (props) => {
    return (
        <>                
<div class="pattern-1 page-hero-section bg-image hero-home-1">
  <div class="hero-caption pt-5">
    <div class="container h-100">
      <div class="row align-items-center h-100">
        <div class="col-lg-6 wow fadeInUp">
          <div class="badge mb-2" style ={{"color":"rgb(26 61 76)"}}><span class="icon mr-1"><span class="mai-globe" ></span></span> Your Workouts, Your Customers, Your Brand.</div>
          <h1 class="mb-4">Your Workout <span style ={{"color":"#8a39fc"}}>Companion</span></h1>
          <p class="mb-4" >AFLETE is a fitness app exclusively used by influencers <br/>to show their fitness content.</p>
          <a href="#" class="btn btn-primary rounded-pill">Get App Now</a>
        </div>
        <div class="col-lg-6 d-none d-lg-block wow zoomIn">
          <div class="img-place mobile-preview shadow floating-animate">
            <img src={AppLayoutImage} alt="AfeleteImage"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default Home

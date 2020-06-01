import React from 'react'

export const Location = () => {
    return (
        <div class="container">
            <div class="row featurette">
                <div class="col-md-4">
                    <h2 class="featurette-heading">Tastee Top Grill <br/> <span class="text-muted">Cedar Lake, IN</span></h2>
                    <p class="lead">14500 Morse St, 46303<br/>
                    <a href="tel:+1-219-374-7380">(219)-374-7380</a>
                    </p>
                </div>
                <div class="col-md-4">
                    <a target="blank" href="https://www.google.com/maps/place/Tastee+Top+Grill/@41.3551154,-87.4239636,17z/data=!3m1!4b1!4m5!3m4!1s0x8811fbb4df27c617:0xfdd5a4aa8cef5656!8m2!3d41.3551154!4d-87.4217749">
                        <img className="map-img" src={ require('../assets/img/Annotation 2020-05-31 235430.png') } />
                    </a>

                </div>
                <div class="col-md-4">
                <img className="location-img" src={ require('../assets/img/icons8-place-marker-48.png') } />

                </div>
            </div>
            <hr class="featurette-divider"/>
            <footer class="container">
    <p class="float-right"><a href="#">Site created by Christopher Carey</a>  </p>
    <p>Tastee Top Grill Est.2010 ·  · </p>
  </footer>
    
    </div>
    )
}

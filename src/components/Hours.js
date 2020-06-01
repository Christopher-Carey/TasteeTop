import React from 'react'

export const Hours = () => {
return (
<div class="container">
    <div class="row featurette middle">
        <div class="col-md-7 order-md-2 hours-content">
            <h2 class="featurette-heading">Open 7 days a weeks <br/> <span class="text-muted">Try our convenient drive-tru</span>
            </h2>
            <p class="lead">
                We are open Monday-Sunday 11am - 9pm <br/>
                Our grill shuts off 15 minutes before closing time. <br/>
            </p>
        </div>
        <div class="col-md-5 order-md-1">
        
            <img className="hours-img" src={ require('../assets/img/icons8-clock-64.png') } />

        </div>
    </div>
    <hr class="featurette-divider" />

</div>
)
}
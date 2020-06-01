import React from 'react'

export const Menu = () => {
return (
<div class="container">
    <div class="row featurette">
        <div class="col-md-7">
            <h2 class="featurette-heading">Serving a wide variety of Food & Ice Cream <span class="text-muted"></span></h2>
            <p class="lead"></p>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                See Menu
              </button>
        </div>
        <div class="col-md-5">
            <img className="menu-img" src={ require('../assets/img/icons8-restaurant-menu-64.png') } />
        </div>
    </div>
    <hr class="featurette-divider"/>


  
  <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
  
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
  
        <div class="modal-body">
            <img className="menu-img-model" src={ require('../assets/img/Menu 2 4x4 11-26.jpg') } />
            <img className="menu-img-model" src={ require('../assets/img/Menu 4x6 11-26.jpg') } />
        </div>
  
        
  
      </div>
    </div>
  </div>

</div>

)
}
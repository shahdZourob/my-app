import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">

<br />
    <div className="Show">

<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" >
  <ol className="carousel-indicators">
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
  </ol>

<div className="carousel-inner">
  <div className="carousel-item active">
    <img src="/images/suez.JPG" className="d-block w-100" alt="slideShow" />
  </div>

<div className="carousel-item">
  <img src="/images/safe.JPG" className="d-block w-100" alt="slideShow" />
</div>

<div className="carousel-item">
  <img src="http://suez.edu.eg/ar/wp-content/uploads/2020/12/131388559_1002693043550531_2825628651205583726_n.jpg" className="d-block w-100" alt="slideShow" />
</div>
</div>

<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
</a>

<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
</a>

</div>

    </div>


    <br />
    <div class= "welcome">

  <h2 class="text-center" >Welcome to The Suez Canal University in Egypt!</h2> 
  <h6 class="text-center">The miracles of the Egyptian Scientists from seven thousand years ago are still surprising all researchers 
  over the world. The genes of glory-making inherited from the ancestors are reshaping the future and the 
  status that Egypt deserves among nations. </h6>

    </div>    

<br />
    <div class="nav-dark">

<div class="collapse" id="navbarToggleExternalContent">
  <div class="bg-dark p-4">
    <h5 class="text-white h4">Suez Canal University COVID-19 CORONA VIRUS GUIDANCE</h5>

<a href="#" class="btn btn-primary bg-dark"> More Information </a> <br /> <br />
<a href="#" class="btn btn-primary bg-dark"> News </a>
  </div>
</div>

<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>

    </div>

    <div class="container">

<br />
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src={'/images/1.jpg'} class="card-img-top" alt="..." />
          <div class="card-header">
            <a href="#" class="btn btn-primary bg-dark"> Open Day </a>
    </div>
  </div>
</div>

<div class="col">
  <div class="card">
    <img src={'/images/2.jpg'} class="card-img-top" alt="..." />
      <div class="card-header">
        <a href="#" class="btn btn-primary bg-dark"> Admission </a>
    </div>
  </div>
</div>

  <div class="col">
    <div class="card">
      <img src={'/images/3.jpg'} class="card-img-top" alt="..." />
      <div class="card-header">
        <a href="#" class="btn btn-primary bg-dark"> Virtual Tour </a>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card">
      <img src={'/images/4.jpg'} class="card-img-top" alt="..."  />
      <div class="card-header">
        <a href="#" class="btn btn-primary bg-dark"> Student Activities </a>
      </div>
    </div>
  </div>
</div>

    </div>

 
    <br />
    <div class="footer">

<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <img src={'/images/7.jpg'} class="card-img-top" alt="..." />
    </div>
  </div>

  <div class="col-sm-6">
  <div class="card-body">
    <h5 class="card-title">Contact Us</h5>
      <p class="card-text"> 
          <li> Address: Egypt - Ismailia - Kilo Ring Road 4.5 </li><br />
          <li> Email : President_office@suez.edu.eg </li> <br />
          <li> Ismailia : (+2064) 3223007 - 32001258 </li> <br />
          <li> Cairo office : (+202) 22621218 - 22621216 </li> <br />
          <li> Fax : (+202) 22621217 - (+2064) 3205208  </li> <br />
          </p> 


          <div class="input-group mb-3">
    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Email"  /> <br />
<div class="col-12"> <br />
    <button type="button" class="btn btn-primary bg-dark  bg-secondary" data-bs-toggle="button" autocomplete="off" aria-pressed="true">Subscribe for Newsletter</button>
</div>
</div>

  </div>
  </div>

  <div class="under" >
<nav class="navbar navbar-expand-lg navbar-hight bg-light">
  <div class="container-fluid">
    <h5 class="fw-bolder text-dark ">All Rights Reserved© 2019 Suez Canal University - Portal</h5>
  </div>
</nav>
    </div>

















</div>
    </div>    

        

























































































































      </div>
   </div>
  );
}

export default Home;
<template>
    <header class="position-relative p-3 text-center">
          <nav class="navbar navbar-expand-lg" aria-label="Offcanvas navbar large">
            <div class="container">
              <div class="col-md-3 mb-2 mb-md-0" style="text-align: left;">
                <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none ">
                  <img src="@/assets/logo-white.svg" alt="">
                </a>
              </div>
              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                <div class="offcanvas-header">
                  <div class="col-md-3 mb-2 mb-md-0" style="text-align: left;">
                    <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none ">
                      <img src="@/assets/logo-white.svg" alt="">
                    </a>
                  </div>
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body" style="justify-content: flex-end;">
                  <ul class="nav nav-menu col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <RouterLink to="/" class="nav-link px-2 link-secondary text-secondary">Bosh sahifa</RouterLink>
                    <RouterLink to="/platforma-maqsadi" class="nav-link px-2 text-secondary">Platforma maqsadi</RouterLink>
                    <RouterLink to="/qollanma" class="nav-link px-2 text-secondary">Qo'llanmalar</RouterLink>
                    <RouterLink to="/about" class="nav-link px-2 text-secondary">Bog'lanish</RouterLink>
                  </ul>

                  <div class="col-md-auto text-end">
                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                      <div class="btn-group me-2" role="group" aria-label="First group">
                        <a href="/" class="btn d-inline-flex link-body-emphasis text-decoration-none ">
                          <img src="@/assets/flag.svg" alt="">
                        </a>

                        <a href="/" class="btn d-inline-flex link-body-emphasis text-decoration-none ">
                          <img src="@/assets/blazon.svg" alt="">
                        </a>

                        <a href="/" class="btn d-inline-flex link-body-emphasis text-decoration-none ">
                          <img src="@/assets/white-music.svg" alt="">
                        </a>
                      </div>

                      <div class="btn-group me-2" role="group" aria-label="First group">
                        <button type="button" class="btn btn-primary me-2 text-white dropdown-toggle" data-bs-toggle="dropdown">
                          <img src="@/assets/globe-solid.svg" alt="">
                          uz
                        </button>
                        <ul class="dropdown-menu" style="min-width: 4vw; background-color: #0a58ca;">
                          <li><a class="dropdown-item" href="#">en</a></li>
                          <li><a class="dropdown-item" href="#">ru</a></li>
                        </ul>
                      </div>
                      <div class="btn-group me-2" role="group" aria-label="First group">
                        <button type="button" class="btn btn-primary text-white">
                          <RouterLink to="/login" class="nav-link px-2 text-white btn btn-primary">Kirish</RouterLink>
                        </button>
                      </div>
                      <div class="btn-group me-2 d-none" role="group" aria-label="Second group">
                        <button type="button" class="btn btn-primary me-2 text-white  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                          <img src="@/assets/user-solid.svg" alt="">
                          Ahrorbek Davronov
                        </button>
                        <ul class="dropdown-menu" style="background-color: #0a58ca;">
                          <li><a class="dropdown-item" href="#">Darslar</a></li>
                          <li><a class="dropdown-item" href="#">Chiqish</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
    </header>

    
    <section class="container-fluid p-0 bg-naqsh">
      <div class="album py-2">
        <div class="container">
          <div class="row">
            <div class="col-3 col-md-3 mx-auto">
                <h1 class="h3 fw-semibold">Barcha darslar</h1>
                <div class="overflow-auto bg-light" style="max-width: 100%; max-height: 500px;">
                    <div class="d-flex flex-column flex-md-row gap-12 py-md-3 align-items-center justify-content-center">
                        <div class="list-group ">
                            <a href="#" class="list-group-item border-0 list-group-item-action d-flex gap-3 py-3 align-items-center" aria-current="true">
                                <!-- <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0"> -->
                                <i class="fa-solid fa-play"></i>
                                <div class="d-flex gap-2 w-100 justify-content-between">
                                    <div>
                                        <h6 class="mb-0 text-primary">List group item heading</h6>
                                    </div>
                                    <small class="opacity-50 text-nowrap">now</small>
                                </div>
                            </a>
                            <a href="#" class="list-group-item border-0 list-group-item-action d-flex gap-3 py-3 align-items-center" aria-current="true">
                                <!-- <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0"> -->
                                <i class="fa-solid fa-play"></i>
                                <div class="d-flex gap-2 w-100 justify-content-between">
                                    <div>
                                        <h6 class="mb-0 text-primary">Another title here</h6>
                                    </div>
                                    <small class="opacity-50 text-nowrap">3d</small>
                                </div>
                            </a>
                            <a href="#" class="list-group-item border-0 list-group-item-action d-flex gap-3 py-3 align-items-center" aria-current="true">
                                <!-- <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0"> -->
                                <i class="fa-solid fa-play"></i>
                                <div class="d-flex gap-2 w-100 justify-content-between">
                                    <div>
                                        <h6 class="mb-0 text-primary">Third heading</h6>
                                    </div>
                                    <small class="opacity-50 text-nowrap">1w</small>
                                </div>
                            </a>
                            <a href="#" class="list-group-item border-0 list-group-item-action d-flex gap-3 py-3 align-items-center" aria-current="true">
                                <!-- <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0"> -->
                                <i class="fa-solid fa-play"></i>
                                <div class="d-flex gap-2 w-100 justify-content-between">
                                    <div>
                                        <h6 class="mb-0 text-primary">List group item heading</h6>
                                    </div>
                                    <small class="opacity-50 text-nowrap">now</small>
                                </div>
                            </a>
                            <a href="#" class="list-group-item border-0 list-group-item-action d-flex gap-3 py-3 align-items-center" aria-current="true">
                                <!-- <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0"> -->
                                <i class="fa-solid fa-play"></i>
                                <div class="d-flex gap-2 w-100 justify-content-between">
                                    <div>
                                        <h6 class="mb-0 text-primary">Another title here</h6>
                                    </div>
                                    <small class="opacity-50 text-nowrap">3d</small>
                                </div>
                            </a>
                            <a href="#" class="list-group-item border-0 list-group-item-action d-flex gap-3 py-3 align-items-center" aria-current="true">
                                <!-- <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0"> -->
                                <i class="fa-solid fa-play"></i>
                                <div class="d-flex gap-2 w-100 justify-content-between">
                                    <div>
                                        <h6 class="mb-0 text-primary">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h6>
                                    </div>
                                    <small class="opacity-50 text-nowrap">1w</small>
                                </div>
                            </a>
                            <a href="#" class="list-group-item border-0 list-group-item-action d-flex gap-3 py-3 align-items-center" aria-current="true">
                                <!-- <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0"> -->
                                <i class="fa-solid fa-play"></i>
                                <div class="d-flex gap-2 w-100 justify-content-between">
                                    <div>
                                        <h6 class="mb-0 text-primary">List group item heading</h6>
                                    </div>
                                    <small class="opacity-50 text-nowrap">now</small>
                                </div>
                            </a>
                            <a href="#" class="list-group-item border-0 list-group-item-action d-flex gap-3 py-3 align-items-center" aria-current="true">
                                <!-- <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0"> -->
                                <i class="fa-solid fa-play"></i>
                                <div class="d-flex gap-2 w-100 justify-content-between">
                                    <div>
                                        <h6 class="mb-0 text-primary">Another title here</h6>
                                    </div>
                                    <small class="opacity-50 text-nowrap">3d</small>
                                </div>
                            </a>
                            <a href="#" class="list-group-item border-0 list-group-item-action d-flex gap-3 py-3 align-items-center" aria-current="true">
                                <!-- <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0"> -->
                                <i class="fa-solid fa-play"></i>
                                <div class="d-flex gap-2 w-100 justify-content-between">
                                    <div>
                                        <h6 class="mb-0 text-primary">Third heading</h6>
                                    </div>
                                    <small class="opacity-50 text-nowrap">1w</small>
                                </div>
                            </a>
                        </div>
                    </div>


                </div>
                

            </div>

            <div class="col-9 col-md-9 mx-auto">

                <div class="card bg-dark text-white border-0" style="max-width: 100%;">
                    <video src="https://codingyaar.com/wp-content/uploads/video-in-bootstrap-card.mp4" class="card-img-top " muted autoplay loop controls></video>
                </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container-fluid p-0 mt-5" style="background-color: #062A49">
      <div class="container py-5">
        <div class="row justify-content-between py-5">
          <div class="col-md-6 col-12 text-white" style="display: flex; flex-direction: column;">
            <img src="@/assets/logo-white.svg" width="250" alt="">  
            <p class="mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto fugit minus temporibus quae vitae ullam rem repellendus consequatur?</p>
          </div>
          <div class="col-md-3 col-12  text-white" style="display: flex; flex-direction: column;">
            <h4>O'zbek tili darajalari.</h4>
            <p class="text-secondary mt-2 my-1">Beginner</p>
            <p class="text-secondary">Elementary</p>
          </div>
          <div class="col-md-3 col-12 text-white" style="display: flex; flex-direction: column;">
            <h4>Bizning kontaktlarimiz!</h4>
            <p class="text-secondary mt-2 my-1">
              <img src="@/assets/phone-solid.svg" alt="">  
              +998 (55) 502-22-99
            </p>
            <p class="text-secondary my-1">
              <img src="@/assets/phone-solid.svg" alt="">  
              +998 (55) 502-22-99
            </p>
            <p class="text-secondary my-1">
              <img src="@/assets/envelope-solid.svg" alt="">  
              inf@vatandoshlarfondi.uz
            </p>
            <p class="text-secondary my-1">
              <img src="@/assets/envelope-solid.svg" alt="">  
              inf@vatandoshlarfondi.uz
            </p>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
  import { RouterLink } from 'vue-router'

  export default{
  
  }

</script>

<style scoped>
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-thumb {
  background: #6791d1; 
}


.bg-naqsh{
    background-image: url('../../assets/background.png'); 
    background-size: cover; 
    background-repeat: no-repeat;
    background-position: 100%;
}


@media (max-width: 992px) {
  .nav-menu{
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    align-items: flex-start;
  }

  .btn-toolbar {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
  }
  .btn-group{
    margin-bottom: 15px;
  }
}

@media (max-width: 768px) {
  .kirish-button a{
    /* flex-direction: column; */
    font-size: 8px;
  }

}

.dropdown-menu .dropdown-item{
  color: white;
}
.dropdown-menu .dropdown-item:hover{
  background: #0a58ca;
  color: white;
}
.innovation{
  color: #EED468;
  border-bottom: 2px solid #EED468;
}


.header-image-container {
  z-index: -100;
  width:100%;
  height:100%;
  overflow:hidden;
  position:absolute;
  top:0;
  left:0;
  bottom: 0;
  background-image: url('../../assets/image1.jpg'); 
  background-size: cover; 
  background-repeat: no-repeat;
  background-position: 100%;
}

#header-bg{
  height: 50vh;
  background-color: rgb(0 0 0 / 70%);
}
</style>

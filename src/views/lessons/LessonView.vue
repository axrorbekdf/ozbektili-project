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
            <div class="col-lg-12 col-md-12 mx-auto">

                <header class="d-flex justify-content-start py-3">
                    <ul class="nav nav-pills">
                        <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Darslar</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Taqdimotlar</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Materiallar</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Test bajarish</a></li>
                        <li class="nav-item"><a href="#" class="nav-link ">Sertifikat</a></li>
                    </ul>
                </header>
                
                <div class="p-5 mb-4 bg-body-tertiary rounded-3">
                    <div class="container-fluid py-5">
                        <div class="row g-0 align-items-center">
                            
                            <div class="col-8 px-5">
                                <p class="col-md-8 fs-4">Test natijasi</p>
                                <h1 class="display-5 fw-bold">To'g'ri javoblar soni - 10/20</h1>
                                <p class="col-md-8 fs-4">Siz testdan o'ta olmadingiz.</p>
                                
                                <div class="d-grid gap-2 d-md-block">
                                    <button class="btn btn-info mx-2 text-white" type="button">
                                        Darslarga qaytish
                                    </button>
                                    <button class="btn btn-primary text-white" type="button">
                                        Testni qayta ishlash
                                    </button>
                                </div>
                            </div>
                            <div class="col-4">
                                <img src="@/assets/success.jpg" class="img-fluid rounded-start" alt="...">
                            </div>
                        </div>
                    </div>
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

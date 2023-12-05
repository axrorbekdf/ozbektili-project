<template>
  
    <section class="container-fluid p-0 bg-naqsh">
      <div class="album py-2">
        <div class="container">
  
          <div class="row ">
            <div class="col-md-12 mx-auto"> <!-- Profile widget -->
              <div class="bg-white shadow rounded overflow-hidden">
                <div class="px-4 pt-0 pb-5 d-flex justify-content-between" style=" background-image: linear-gradient(to bottom, #6adbf5, #1095e3)">
                  <div class="media align-items-end profile-head">
                    <div class="profile mr-3"><img
                        src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                        alt="..." width="130" class="rounded mb-2 img-thumbnail">
                    </div>
                    <div class="media-body mb-5 text-white">
                      <h4 class="mt-0 mb-0">Ahrorbek Davronov</h4>
                      <p class="small mb-4"> <i class="fas fa-map-marker-alt mr-2"></i> Toshkent</p>
                    </div>
                  </div>
                </div>
                
                <div class="row">
                  <div class="col-lg-3 col-md-2">
                    <div class="flex-shrink-0 p-3">
                      <a href="/"
                        class="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
                        
                        <RouterLink to="/profile" class="nav-link px-0 text-dark">
                            <span class="fs-5 fw-semibold">Asosiy</span>
                        </RouterLink>
                      </a>
                      <ul class="list-unstyled ps-0">
                        <li class="mb-1">
                          <button class="btn btn-toggle d-inline-flex align-items-center fw-medium">
                            Sertifikatlar
                          </button>
                        </li>
                        <li class="mb-1">
                          <button class="btn btn-toggle d-inline-flex align-items-center fw-medium">
                            Elektron kutrubxona
                          </button>
                        </li>
                        <li class="mb-1">
                          <button class="btn btn-toggle d-inline-flex align-items-center fw-medium">
                            Vebinarlar
                          </button>
                        </li>
                        <li class="mb-1">
                          <button class="btn btn-toggle d-inline-flex align-items-center fw-medium">
                            E'lonlar
                          </button>
                        </li>
                        <li class="mb-1">
                          <button class="btn btn-toggle d-inline-flex align-items-center fw-medium">
                            Sozlamalar
                          </button>
                        </li>
  
                        <li>
                          <hr>
                        </li>
                        <li class="mb-1">
                          <button class="btn btn-toggle d-inline-flex align-items-center fw-medium">
                            Chiqish
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
  
                  <div class="col-lg-9 pt-5">
                    <h3>1- Bo‘lim  “Keling, tanishaylik” </h3>
                    <div class="container d-flex flex-wrap">
                        <ul class="nav me-auto">
                            <li class="nav-item"><a href="#" class="nav-link link-body-emphasis text-primary fw-medium px-2 active" aria-current="page">A) Alifbo</a></li>
                            <li class="nav-item"><a href="#" class="nav-link link-body-emphasis fw-medium px-2">B) Qalaysiz? </a></li>
                            <li class="nav-item"><a href="#" class="nav-link link-body-emphasis fw-medium px-2">D) Bu kim? Bu Nima ? </a></li>
                        </ul>
                    </div>

                    <div class="row mt-5">

                        <h3 class="fw-bold text-primary">Kelishik olmoshlari? </h3>
                        <div class="col-4">
                            <div class="card" style="width: 18rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                                <img src="@/assets/ikkidost.png" class="card-img-top" alt="..." width="120px">
                                <div class="card-body text-center">
                                    <h3 class="card-title">Men</h3>
                                    <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="card" style="width: 18rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                                <img src="@/assets/ikkidost.png" class="card-img-top" alt="..." width="120px">
                                <div class="card-body text-center">
                                    <h3 class="card-title">Sen</h3>
                                    <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-4">
                            <div class="card" style="width: 18rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                                <img src="@/assets/ikkidost.png" class="card-img-top" alt="..." width="120px">
                                <div class="card-body text-center">
                                    <h3 class="card-title">U</h3>
                                    <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 mt-4"></div>
                        <div class="col-4">
                            <div class="card" style="width: 18rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                                <img src="@/assets/ikkidost.png" class="card-img-top" alt="..." width="120px">
                                <div class="card-body text-center">
                                    <h3 class="card-title">Siz</h3>
                                    <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="card" style="width: 18rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                                <img src="@/assets/ikkidost.png" class="card-img-top" alt="..." width="120px">
                                <div class="card-body text-center">
                                    <h3 class="card-title">Biz</h3>
                                    <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="card" style="width: 18rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                                <img src="@/assets/ikkidost.png" class="card-img-top" alt="..." width="120px">
                                <div class="card-body text-center">
                                    <h3 class="card-title">Ular</h3>
                                    <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                                </div>
                            </div>
                        </div>
                        
                        
                        
                    </div>

                    <div class="row m-5 p-5">
                        
                        <div class="col-6 p-1">
                            <div class="card" style="max-width: 540px;">
                                <div class="px-3 pt-3">
                                    <i class="fa-solid fa-volume-high"></i>
                                </div>

                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src="@/assets/ikkidost.png" class="img-fluid rounded-start" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <p class="fw-medium">O‘: Assalomu alaykum!</p>
                                            <p class="fw-medium">D: Va alaykum assalom! Yaxshimisiz?</p>
                                            <p class="fw-medium">O‘: Rahmat, yaxshiman</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>

                    <div class="row m-5 p-5">
                        
                        <h4 class="fw-bold">Машклар. Уйланг ва езинг. Саломлашиш </h4>
                        <div class="col-6 p-1">
                            <div class="card" style="max-width: 540px;">
                                <div class="px-3 pt-3">
                                    <i class="fa-solid fa-volume-high"></i>
                                </div>

                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src="@/assets/ikkidost.png" class="img-fluid rounded-start" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <p class="fw-medium">Oybek: Iroda, yaxshimisan?</p>
                                            <p class="fw-medium">Iroda: Rahmat, yaxshiman. O‘zing qalaysan?</p>
                                            <p class="fw-medium">Oybek: Rahmat! Men ham yaxshiman</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                  </div>
                </div>
                
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  
    <Footer />
  </template>
  
  <script>
  import { RouterLink } from 'vue-router'
import Footer from '@/components/layout/Footer.vue';

  
  export default {
    components: { Footer }
  }
  
  </script>
  
  <style scoped>
  
  .profile-head {
      transform: translateY(5rem)
  }
  
  .cover {
      background-image: url(https://images.unsplash.com/photo-1530305408560-82d13781b33a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80);
      background-size: cover;
      background-repeat: no-repeat
  }
  
  .bg-naqsh {
    background-image: url('../../assets/background.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 100%;
  }
  
  
  @media (max-width: 992px) {
    .nav-menu {
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
  
    .btn-group {
      margin-bottom: 15px;
    }
  }
  
  @media (max-width: 768px) {
    .kirish-button a {
      /* flex-direction: column; */
      font-size: 8px;
    }
  
  }
  
  .dropdown-menu .dropdown-item {
    color: white;
  }
  
  .dropdown-menu .dropdown-item:hover {
    background: #0a58ca;
    color: white;
  }
  
  .innovation {
    color: #EED468;
    border-bottom: 2px solid #EED468;
  }
  
  
  .header-image-container {
    z-index: -100;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background-image: url('../../assets/image1.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 100%;
  }
  
  #header-bg {
    height: 50vh;
    background-color: rgb(0 0 0 / 70%);
  }</style>
  
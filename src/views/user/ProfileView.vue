<template>
  

  <section class="container-fluid p-0 bg-naqsh">
    <div class="album py-2">
      <div class="container">

        <div class="row ">
          <div class="col-md-12 mx-auto"> <!-- Profile widget -->
            <div class="bg-white shadow rounded overflow-hidden">
              <div class="px-4 pt-0 pb-5 cover d-flex justify-content-between" style=" background-image: linear-gradient(to bottom, #6adbf5, #1095e3)">
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
                    <a href="#"
                      class="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
                      <span class="fs-5 fw-semibold">Asosiy</span>
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

                <div class="col-lg-9">
                  <div class="py-4 px-4">
                      <div class="d-flex align-items-center justify-content-between mb-3">
                        <h5 class="mb-0">Modullar</h5><a href="#" class="btn btn-link text-muted">Barchasi</a>
                      </div>
                      <div class="row">

                          <div class="col-lg-3 mb-2 pr-lg-1">
                            <div class="card shadow-sm">
                              <img src="@/assets/ikkidost.png" alt="" class="bd-placeholder-img card-img-top mx-auto mt-2" style="width: 180px;">
                              <div class="card-body">

                                <RouterLink to="/module/lesson/1" class="nav-link px-0 text-dark">
                                  <p class="card-text fw-medium">1- Bo‘lim. “Keling, tanishaylik” </p> 
                                </RouterLink>

                                <span class="fw-bold" style="font-size: 10px;">TUGATILDI</span>
                                <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                  <div class="progress-bar bg-info text-dark" style="width: 50%">50%</div>
                                </div>

                                <div class="mt-3 d-flex justify-content-between align-items-center">
                                  <div class="btn-group w-100">
                                    <button type="button" class="btn btn-sm btn-outline-primary">Download Sertifikat</button>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>

                          <div class="col-lg-3 mb-2 pr-lg-1">
                            <div class="card shadow-sm">
                              <img src="@/assets/news-back-left.png" alt="" class="bd-placeholder-img card-img-top" >
                              <div class="card-body">

                                <p class="card-text fw-medium">This is a wider card with supporting text below.</p> 

                                <span class="fw-bold" style="font-size: 10px;">TUGATILDI</span>
                                <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                  <div class="progress-bar bg-info text-dark" style="width: 50%">50%</div>
                                </div>

                                <div class="mt-3 d-flex justify-content-between align-items-center">
                                  <div class="btn-group w-100">
                                    <button type="button" class="btn btn-sm btn-outline-primary">Download Sertifikat</button>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>

                          <div class="col-lg-3 mb-2 pr-lg-1">
                            <div class="card shadow-sm">
                              <img src="@/assets/module-left.png" alt="" class="bd-placeholder-img card-img-top mx-auto" style="width: 120px;">
                              <div class="card-body">

                                <p class="card-text fw-medium">This is a wider card with supporting text below.</p> 

                                <span class="fw-bold" style="font-size: 10px;">TUGATILDI</span>
                                <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                  <div class="progress-bar bg-info text-dark" style="width: 50%">50%</div>
                                </div>

                                <div class="mt-3 d-flex justify-content-between align-items-center">
                                  <div class="btn-group w-100">
                                    <button type="button" class="btn btn-sm btn-outline-primary">Download Sertifikat</button>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>

                          <div class="col-lg-3 mb-2 pr-lg-1">
                            <div class="card shadow-sm">
                              <img src="@/assets/news-back-right.png" alt="" class="bd-placeholder-img card-img-top" >
                              <div class="card-body">

                                <p class="card-text fw-medium">This is a wider card with supporting text below.</p> 

                                <span class="fw-bold" style="font-size: 10px;">TUGATILDI</span>
                                <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                  <div class="progress-bar bg-info text-dark" style="width: 50%">50%</div>
                                </div>

                                <div class="mt-3 d-flex justify-content-between align-items-center">
                                  <div class="btn-group w-100">
                                    <button type="button" class="btn btn-sm btn-outline-primary">Download Sertifikat</button>
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
    </div>
  </section>

  <Footer />
</template>

<script>
import { RouterLink } from 'vue-router'
import Navbar from '../../components/layout/Navbar.vue';
import Footer from '@/components/layout/Footer.vue';

export default {
  components: { Navbar, Footer }
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

<template>
    <header class="position-relative overflow-hidden p-3 text-center">
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
                    <RouterLink to="/" class="nav-link px-2 link-secondary text-white">Bosh sahifa</RouterLink>
                    <RouterLink to="/platforma-maqsadi" class="nav-link px-2 text-white">Platforma maqsadi</RouterLink>
                    <RouterLink to="/qollanma" class="nav-link px-2 text-white">Qo'llanmalar</RouterLink>
                    <RouterLink to="/about" class="nav-link px-2 text-white">Bog'lanish</RouterLink>
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

          <div class="col-md-6 p-lg-5 mx-auto my-md-5 text-white">
            <h1>Alifbo</h1>
            <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
              <ol class="breadcrumb" style="justify-content: center;">
                <li class="breadcrumb-item"><a class="text-white" href="#">Bosh sahifa </a></li>
                <li class="breadcrumb-item active text-white" aria-current="page">Alifbo</li>
              </ol>
            </nav>
          </div>

          <div class="header-image-container">
            <div id="header-bg">
            </div>
          </div>
    </header>

    
    <section class="text-center container-fluid p-0 bg-naqsh">
      <div class="album py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 mx-auto">
                <h1 class="h2 fw-bold">Alifbo harflari</h1>
                <p class="fw-10 mb-3">Build anything you want with Aperture anything you want with Aperture</p>

                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 mt-5">
                  
                  <div class="col-12 col-md-3">
                    <div class="card text-bg-dark word-back-1 justify-content-around align-items-center" >
                        <div class="text-center rounded text-dark" style="background-color: #F0ECEC; margin: 15px;">
                            <div class="card-text text-end m-2">
                              <button @click="toggleAudio('a')" class="btn">
                                <i class="fa-solid fa-volume-high" style="color: blueviolet;"></i> 
                              </button>
                            </div>
                            <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                              <img src="../assets/th-teddy-bear.png" style="width: 15vh;" alt="...">
                              <p class="card-text text-end fw-bold" style="font-size: 55pt; color: blueviolet;">Aa</p>
                            </div>
                            <p class="card-text fw-bold m-0" style="font-size: 50pt; color: blueviolet;"><span style="color: red;">A</span>yiq</p>
                        </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-3">
                    <div class="card text-bg-dark word-back-2 justify-content-around align-items-center">
                        <div class="text-center rounded text-dark" style="background-color: #F0ECEC; margin: 15px;">
                            <div class="card-text text-end m-2">
                              <button @click="toggleAudio('b')" class="btn">
                                <i class="fa-solid fa-volume-high" style="color: orange;"></i> 
                              </button>
                            </div>
                            <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                              <img src="../assets/th-teddy-bear.png" style="width: 15vh;" alt="...">
                              <p class="card-text text-end fw-bold" style="font-size: 55pt; color: orange;">Bb</p>
                            </div>
                            <p class="card-text fw-bold m-0" style="font-size: 50pt; color: orange;"><span style="color: red;">B</span>anan</p>
                        </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-3">
                    <div class="card text-bg-dark word-back-3 justify-content-around align-items-center">
                        <div class="text-center rounded text-dark" style="background-color: #F0ECEC; margin: 15px;">
                            <div class="card-text text-end m-2">
                              <button @click="toggleAudio('d')" class="btn">
                                <i class="fa-solid fa-volume-high" style="color: rgb(21, 183, 112);"></i> 
                              </button>
                            </div>
                            <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                              <p class="card-text text-end fw-bold" style="font-size: 55pt; color: rgb(117, 13, 177);">Dd</p>
                              <img src="../assets/th-teddy-bear.png" style="width: 15vh;" alt="...">
                            </div>
                            <p class="card-text fw-bold m-0" style="font-size: 50pt; color: rgb(20, 71, 198);"><span style="color: red;">D</span>eraza</p>
                        </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-3">
                    <div class="card text-bg-dark word-back-4 justify-content-around align-items-center">
                        <div class="text-center rounded text-dark" style="background-color: #F0ECEC; margin: 15px;">
                            <div class="card-text text-end m-2">
                              <button @click="toggleAudio('e')" class="btn">
                                <i class="fa-solid fa-volume-high" style="color: rgb(43, 115, 215);"></i> 
                              </button>
                            </div>
                            <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                              <img src="../assets/th-teddy-bear.png" style="width: 15vh;" alt="...">
                              <p class="card-text text-end fw-bold" style="font-size: 55pt; color: rgb(13, 191, 201);">Ee</p>
                            </div>
                            <p class="card-text fw-bold m-0" style="font-size: 50pt; color: rgb(194, 29, 97);"><span style="color: red;">E</span>shik</p>
                        </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-3">
                    <div class="card text-bg-dark word-back-2 justify-content-around align-items-center">
                        <div class="text-center rounded text-dark" style="background-color: #F0ECEC; margin: 15px;">
                            <div class="card-text text-end m-2">
                              <button @click="toggleAudio('f')" class="btn">
                                <i class="fa-solid fa-volume-high" style="color: rgb(19, 228, 36);"></i> 
                              </button>
                            </div>
                            <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                              <img src="../assets/th-teddy-bear.png" style="width: 15vh;" alt="...">
                              <p class="card-text text-end fw-bold" style="font-size: 55pt; color: rgb(186, 8, 91);">Ff</p>
                            </div>
                            <p class="card-text fw-bold m-0" style="font-size: 50pt; color: rgba(42, 213, 139, 0.575);"><span style="color: red;">F</span>il</p>
                        </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-3">
                    <div class="card text-bg-dark word-back-3 justify-content-around align-items-center">
                        <div class="text-center rounded text-dark" style="background-color: #F0ECEC; margin: 15px;">
                            <div class="card-text text-end m-2">
                              <button @click="toggleAudio('g')" class="btn">
                                <i class="fa-solid fa-volume-high" style="color: rgb(237, 6, 6);"></i> 
                              </button>
                            </div>
                            <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                              <img src="../assets/th-teddy-bear.png" style="width: 15vh;" alt="...">
                              <p class="card-text text-end fw-bold" style="font-size: 55pt; color: rgb(22, 214, 211);">Gg</p>
                            </div>
                            <p class="card-text fw-bold m-0" style="font-size: 50pt; color: rgba(16, 72, 184, 0.575);"><span style="color: red;">G</span>ilam</p>
                        </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-3">
                    <div class="card text-bg-dark word-back-4 justify-content-around align-items-center">
                        <div class="text-center rounded text-dark" style="background-color: #F0ECEC; margin: 15px;">
                            <div class="card-text text-end m-2">
                              <button @click="toggleAudio('h')" class="btn">
                                <i class="fa-solid fa-volume-high" style="color: rgb(6, 237, 125);"></i> 
                              </button>
                            </div>
                            <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                              <img src="../assets/th-teddy-bear.png" style="width: 15vh;" alt="...">
                              <p class="card-text text-end fw-bold" style="font-size: 55pt; color: rgb(214, 172, 22);">Hh</p>
                            </div>
                            <p class="card-text fw-bold m-0" style="font-size: 50pt; color: rgba(142, 15, 21, 0.575);"><span style="color: red;">H</span>assa</p>
                        </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-3">
                    <div class="card text-bg-dark word-back-1 justify-content-around align-items-center">
                        <div class="text-center rounded text-dark" style="background-color: #F0ECEC; margin: 15px;">
                            <div class="card-text text-end m-2">
                              <button @click="toggleAudio('i')" class="btn">
                                <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                              </button>
                            </div>
                            <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                              <img src="../assets/th-teddy-bear.png" style="width: 15vh;" alt="...">
                              <p class="card-text text-end fw-bold" style="font-size: 55pt; color: rgb(244, 72, 24);">Ii</p>
                            </div>
                            <p class="card-text fw-bold m-0" style="font-size: 50pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">I</span>lon</p>
                        </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-3">
                    <div class="card text-bg-dark word-back-1 justify-content-around align-items-center">
                        <div class="text-center rounded text-dark" style="background-color: #F0ECEC; margin: 15px;">
                            <div class="card-text text-end m-2">
                              <button @click="toggleAudio('j')" class="btn">
                                <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                              </button>
                            </div>
                            <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                              <img src="../assets/th-teddy-bear.png" style="width: 15vh;" alt="...">
                              <p class="card-text text-end fw-bold" style="font-size: 55pt; color: rgb(244, 72, 24);">Jj</p>
                            </div>
                            <p class="card-text fw-bold m-0" style="font-size: 50pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">J</span>o'ja</p>
                        </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-3">
                    <div class="card text-bg-dark word-back-1 justify-content-around align-items-center">
                        <div class="text-center rounded text-dark" style="background-color: #F0ECEC; margin: 15px;">
                            <div class="card-text text-end m-2">
                              <button @click="toggleAudio('l')" class="btn">
                                <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                              </button>
                            </div>
                            <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                              <img src="../assets/th-teddy-bear.png" style="width: 15vh;" alt="...">
                              <p class="card-text text-end fw-bold" style="font-size: 55pt; color: rgb(244, 72, 24);">Ll</p>
                            </div>
                            <p class="card-text fw-bold m-0" style="font-size: 50pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">L</span>ola</p>
                        </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-3">
                    <div class="card text-bg-dark word-back-1 justify-content-around align-items-center">
                        <div class="text-center rounded text-dark" style="background-color: #F0ECEC; margin: 15px;">
                            <div class="card-text text-end m-2">
                              <button @click="toggleAudio('k')" ckass="btn">
                                <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                              </button>
                            </div>
                            <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                              <img src="../assets/th-teddy-bear.png" style="width: 15vh;" alt="...">
                              <p class="card-text text-end fw-bold" style="font-size: 55pt; color: rgb(244, 72, 24);">Kk</p>
                            </div>
                            <p class="card-text fw-bold m-0" style="font-size: 50pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">K</span>itob</p>
                        </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-3">
                    <div class="card text-bg-dark word-back-1 justify-content-around align-items-center">
                        <div class="text-center rounded text-dark" style="background-color: #F0ECEC; margin: 15px;">
                            <div class="card-text text-end m-2">
                              <button @click="toggleAudio('m')" ckass="btn">
                                <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                              </button>
                            </div>
                            <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                              <img src="../assets/th-teddy-bear.png" style="width: 12vh;" alt="...">
                              <p class="card-text text-end fw-bold" style="font-size: 55pt; color: rgb(244, 72, 24);">Mm</p>
                            </div>
                            <p class="card-text fw-bold m-0" style="font-size: 50pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">M</span>ushuk</p>
                        </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-3">
                    <div class="card text-bg-dark word-back-1 justify-content-around align-items-center">
                        <div class="text-center rounded text-dark" style="background-color: #F0ECEC; margin: 15px;">
                            <div class="card-text text-end m-2">
                              <button @click="toggleAudio('n')" ckass="btn">
                                <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                              </button>
                            </div>
                            <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                              <img src="../assets/th-teddy-bear.png" style="width: 15vh;" alt="...">
                              <p class="card-text text-end fw-bold" style="font-size: 55pt; color: rgb(244, 72, 24);">Nn</p>
                            </div>
                            <p class="card-text fw-bold m-0" style="font-size: 50pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">N</span>on</p>
                        </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-3">
                    <div class="card text-bg-dark word-back-1 justify-content-around align-items-center">
                        <div class="text-center rounded text-dark" style="background-color: #F0ECEC; margin: 15px;">
                            <div class="card-text text-end m-2">
                              <button @click="toggleAudio('o')" ckass="btn">
                                <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                              </button>
                            </div>
                            <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                              <img src="../assets/th-teddy-bear.png" style="width: 15vh;" alt="...">
                              <p class="card-text text-end fw-bold" style="font-size: 55pt; color: rgb(244, 72, 24);">Oo</p>
                            </div>
                            <p class="card-text fw-bold m-0" style="font-size: 50pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">O</span>y</p>
                        </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-3">
                    <div class="card text-bg-dark word-back-1 justify-content-around align-items-center">
                        <div class="text-center rounded text-dark" style="background-color: #F0ECEC; margin: 15px;">
                            <div class="card-text text-end m-2">
                              <button @click="toggleAudio('p')" ckass="btn">
                                <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                              </button>
                            </div>
                            <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                              <img src="../assets/th-teddy-bear.png" style="width: 15vh;" alt="...">
                              <p class="card-text text-end fw-bold" style="font-size: 55pt; color: rgb(244, 72, 24);">Pp</p>
                            </div>
                            <p class="card-text fw-bold m-0" style="font-size: 50pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">P</span>iyoz</p>
                        </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-3">
                    <div class="card text-bg-dark word-back-1 justify-content-around align-items-center">
                        <div class="text-center rounded text-dark" style="background-color: #F0ECEC; margin: 15px;">
                            <div class="card-text text-end m-2">
                              <button @click="toggleAudio('q')" ckass="btn">
                                <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                              </button>
                            </div>
                            <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                              <img src="../assets/th-teddy-bear.png" style="width: 15vh;" alt="...">
                              <p class="card-text text-end fw-bold" style="font-size: 55pt; color: rgb(244, 72, 24);">Qq</p>
                            </div>
                            <p class="card-text fw-bold m-0" style="font-size: 50pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">Q</span>alam</p>
                        </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-3">
                    <div class="card text-bg-dark word-back-1 justify-content-around align-items-center">
                        <div class="text-center rounded text-dark" style="background-color: #F0ECEC; margin: 15px;">
                            <div class="card-text text-end m-2">
                              <button @click="toggleAudio('r')" ckass="btn">
                                <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                              </button>
                            </div>
                            <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                              <img src="../assets/th-teddy-bear.png" style="width: 15vh;" alt="...">
                              <p class="card-text text-end fw-bold" style="font-size: 55pt; color: rgb(244, 72, 24);">Rr</p>
                            </div>
                            <p class="card-text fw-bold m-0" style="font-size: 50pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">R</span>aketa</p>
                        </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-3">
                    <div class="card text-bg-dark word-back-1 justify-content-around align-items-center">
                        <div class="text-center rounded text-dark" style="background-color: #F0ECEC; margin: 15px;">
                            <div class="card-text text-end m-2">
                              <button @click="toggleAudio('s')" ckass="btn">
                                <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                              </button>
                            </div>
                            <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                              <img src="../assets/th-teddy-bear.png" style="width: 15vh;" alt="...">
                              <p class="card-text text-end fw-bold" style="font-size: 55pt; color: rgb(244, 72, 24);">Ss</p>
                            </div>
                            <p class="card-text fw-bold m-0" style="font-size: 50pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">S</span>uv</p>
                        </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-3">
                    <div class="card text-bg-dark word-back-1 justify-content-around align-items-center">
                        <div class="text-center rounded text-dark" style="background-color: #F0ECEC; margin: 15px;">
                            <div class="card-text text-end m-2">
                              <button @click="toggleAudio('t')" ckass="btn">
                                <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                              </button>
                            </div>
                            <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                              <img src="../assets/th-teddy-bear.png" style="width: 15vh;" alt="...">
                              <p class="card-text text-end fw-bold" style="font-size: 55pt; color: rgb(244, 72, 24);">Tt</p>
                            </div>
                            <p class="card-text fw-bold m-0" style="font-size: 50pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">T</span>aroq</p>
                        </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-3">
                    <div class="card text-bg-dark word-back-1 justify-content-around align-items-center">
                        <div class="text-center rounded text-dark" style="background-color: #F0ECEC; margin: 15px;">
                            <div class="card-text text-end m-2">
                              <button @click="toggleAudio('U')" ckass="btn">
                                <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                              </button>
                            </div>
                            <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                              <img src="../assets/th-teddy-bear.png" style="width: 15vh;" alt="...">
                              <p class="card-text text-end fw-bold" style="font-size: 55pt; color: rgb(244, 72, 24);">Uu</p>
                            </div>
                            <p class="card-text fw-bold m-0" style="font-size: 50pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">U</span>zum</p>
                        </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-3">
                    <div class="card text-bg-dark word-back-1 justify-content-around align-items-center">
                        <div class="text-center rounded text-dark" style="background-color: #F0ECEC; margin: 15px;">
                            <div class="card-text text-end m-2">
                              <button @click="toggleAudio('v')" ckass="btn">
                                <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                              </button>
                            </div>
                            <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                              <img src="../assets/th-teddy-bear.png" style="width: 15vh;" alt="...">
                              <p class="card-text text-end fw-bold" style="font-size: 55pt; color: rgb(244, 72, 24);">Vv</p>
                            </div>
                            <p class="card-text fw-bold m-0" style="font-size: 50pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">V</span>arrak</p>
                        </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-3">
                    <div class="card text-bg-dark word-back-1 justify-content-around align-items-center">
                        <div class="text-center rounded text-dark" style="background-color: #F0ECEC; margin: 15px;">
                            <div class="card-text text-end m-2">
                              <button @click="toggleAudio('x')" ckass="btn">
                                <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                              </button>
                            </div>
                            <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                              <img src="../assets/th-teddy-bear.png" style="width: 15vh;" alt="...">
                              <p class="card-text text-end fw-bold" style="font-size: 55pt; color: rgb(244, 72, 24);">Xx</p>
                            </div>
                            <p class="card-text fw-bold m-0" style="font-size: 50pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">X</span>o'roz</p>
                        </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-3">
                    <div class="card text-bg-dark word-back-1 justify-content-around align-items-center">
                        <div class="text-center rounded text-dark" style="background-color: #F0ECEC; margin: 15px;">
                            <div class="card-text text-end m-2">
                              <button @click="toggleAudio('y')" ckass="btn">
                                <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                              </button>
                            </div>
                            <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                              <img src="../assets/th-teddy-bear.png" style="width: 15vh;" alt="...">
                              <p class="card-text text-end fw-bold" style="font-size: 55pt; color: rgb(244, 72, 24);">Yy</p>
                            </div>
                            <p class="card-text fw-bold m-0" style="font-size: 50pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">Y</span>ulduz</p>
                        </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-3">
                    <div class="card text-bg-dark word-back-1 justify-content-around align-items-center">
                        <div class="text-center rounded text-dark" style="background-color: #F0ECEC; margin: 15px;">
                            <div class="card-text text-end m-2">
                              <button @click="toggleAudio('z')" ckass="btn">
                                <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                              </button>
                            </div>
                            <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                              <img src="../assets/th-teddy-bear.png" style="width: 15vh;" alt="...">
                              <p class="card-text text-end fw-bold" style="font-size: 55pt; color: rgb(244, 72, 24);">Zz</p>
                            </div>
                            <p class="card-text fw-bold m-0" style="font-size: 50pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">Z</span>ebra</p>
                        </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-3">
                    <div class="card text-bg-dark word-back-1 justify-content-around align-items-center">
                        <div class="text-center rounded text-dark" style="background-color: #F0ECEC; margin: 15px;">
                            <div class="card-text text-end m-2">
                              <button @click="toggleAudio('o`')" ckass="btn">
                                <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                              </button>
                            </div>
                            <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                              <img src="../assets/th-teddy-bear.png" style="width: 13vh;" alt="...">
                              <p class="card-text text-end fw-bold" style="font-size: 55pt; color: rgb(244, 72, 24);">O'o'</p>
                            </div>
                            <p class="card-text fw-bold m-0" style="font-size: 50pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">Z</span>ebra</p>
                        </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-3">
                    <div class="card text-bg-dark word-back-1 justify-content-around align-items-center">
                        <div class="text-center rounded text-dark" style="background-color: #F0ECEC; margin: 15px;">
                            <div class="card-text text-end m-2">
                              <button @click="toggleAudio('g`')" ckass="btn">
                                <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                              </button>
                            </div>
                            <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                              <img src="../assets/th-teddy-bear.png" style="width: 13vh;" alt="...">
                              <p class="card-text text-end fw-bold" style="font-size: 55pt; color: rgb(244, 72, 24);">G'g'</p>
                            </div>
                            <p class="card-text fw-bold m-0" style="font-size: 50pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">G'</span>ildirak</p>
                        </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-3">
                    <div class="card text-bg-dark word-back-1 justify-content-around align-items-center">
                        <div class="text-center rounded text-dark" style="background-color: #F0ECEC; margin: 15px;">
                            <div class="card-text text-end m-2">
                              <button @click="toggleAudio('sh')" ckass="btn">
                                <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                              </button>
                            </div>
                            <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                              <img src="../assets/th-teddy-bear.png" style="width: 13vh;" alt="...">
                              <p class="card-text text-end fw-bold" style="font-size: 40pt; color: rgb(244, 72, 24);">Shsh</p>
                            </div>
                            <p class="card-text fw-bold m-0" style="font-size: 50pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">Sh</span>am</p>
                        </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-3">
                    <div class="card text-bg-dark word-back-1 justify-content-around align-items-center">
                        <div class="text-center rounded text-dark" style="background-color: #F0ECEC; margin: 15px;">
                            <div class="card-text text-end m-2">
                              <button @click="toggleAudio('ch')" ckass="btn">
                                <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                              </button>
                            </div>
                            <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                              <img src="../assets/th-teddy-bear.png" style="width: 13vh;" alt="...">
                              <p class="card-text text-end fw-bold" style="font-size: 40pt; color: rgb(244, 72, 24);">Chch</p>
                            </div>
                            <p class="card-text fw-bold m-0" style="font-size: 50pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">Ch</span>umoli</p>
                        </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-3">
                    <div class="card text-bg-dark word-back-1 justify-content-around align-items-center">
                        <div class="text-center rounded text-dark" style="background-color: #F0ECEC; margin: 15px;">
                            <div class="card-text text-end m-2">
                              <button @click="toggleAudio('ng')" ckass="btn">
                                <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                              </button>
                            </div>
                            <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                              <img src="../assets/th-teddy-bear.png" style="width: 13vh;" alt="...">
                              <p class="card-text text-end fw-bold" style="font-size: 35pt; color: rgb(244, 72, 24);">Ngng</p>
                            </div>
                            <p class="card-text fw-bold m-0" style="font-size: 50pt; color: rgba(10, 39, 182, 0.575);">Bodri<span style="color: red;">ng</span></p>
                        </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-3">
                    <div class="card text-bg-dark word-back-1 justify-content-around align-items-center">
                        <div class="text-center rounded text-dark" style="background-color: #F0ECEC; margin: 8px; padding: 0 50px;">
                            <div class="card-text text-end m-2">
                              <button @click="toggleAudio('tutuq belgisi')" ckass="btn">
                                <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                              </button>
                            </div>
                            <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                              <img src="../assets/th-teddy-bear.png" style="width: 15vh;" alt="...">
                              <p class="card-text text-end fw-bold" style="font-size: 55pt; color: rgb(244, 72, 24);">'</p>
                            </div>
                            <p class="card-text fw-bold m-0" style="font-size: 50pt; color: rgba(10, 39, 182, 0.575);">She<span style="color: red;">'</span>r</p>
                        </div>
                    </div>
                  </div>
                  
                </div>

            </div>
            
          </div>

          
          
        </div>
      </div>
    </section>

    <footer />
</template>

<script>
  import { RouterLink } from 'vue-router'
  import Footer from '@/components/layout/Footer.vue'

  export default{
    methods:{
      toggleAudio(item) {
        const audio = document.createElement("AUDIO");
        audio.src = `/ozbektili-project/src/assets/ovoz/ovoz_qiz/${item}.mp3`;
        // audio.src = `/assets/ovoz/ovoz_qiz/${item}.mp3`;
        if (audio.paused) {
          audio.play();
        } else {
          audio.pause();
        }
      }
    }
  }


</script>

<style scoped>

.bg-naqsh{
    background-image: url('../assets/background.png'); 
    background-size: auto; 
    background-repeat: no-repeat;
    background-position: 100%;
}

.word-back-1{
    background-image: url('../assets/alifbo/word-back-1.png'); 
    background-size: cover; 
    background-repeat: no-repeat;
    background-position: 100%;
}
.word-back-2{
    background-image: url('../assets/alifbo/word-back-2.jpg'); 
    background-size: cover; 
    background-repeat: no-repeat;
    background-position: 100%;
}
.word-back-3{
    background-image: url('../assets/alifbo/word-back-3.png'); 
    background-size: cover; 
    background-repeat: no-repeat;
    background-position: 100%;
}
.word-back-4{
    background-image: url('../assets/alifbo/word-back-4.jpg'); 
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
  background-image: url('../assets/alifbo-background.jpg'); 
  background-size: cover; 
  background-repeat: no-repeat;
  background-position: 100% center;
}

#header-bg{
  height: 50vh;
  background-color: rgb(0 0 0 / 70%);
}
</style>

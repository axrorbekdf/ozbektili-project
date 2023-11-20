<template>
    <header class="position-relative overflow-hidden p-3 text-center video-opacity">
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
                    <RouterLink to="/about" class="nav-link px-2 text-white">Platforma maqsadi</RouterLink>
                    <RouterLink to="/about" class="nav-link px-2 text-white">Qo'llanmalar</RouterLink>
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
                        <button type="button" class="btn btn-primary text-white">
                          <RouterLink to="/register" class="nav-link px-2 text-white btn btn-primary">Ro'yxatdan o'tish</RouterLink>
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

          <div class="col-md-6 p-lg-5 mx-auto my-md-5 video-old-block">
            <h1 class="display-3 fw-bold">O'zbek tilini o'qitish bo'yicha <span class="innovation">innovatsion</span> ta'lim platformasi</h1>
            <p class="fw-10 mb-3 text-white">Build anything you want with Aperture anything you want with Aperture</p>
            <div class="d-flex gap-3 justify-content-center lead fw-normal kirish-button" style="margin-top: 3vw;">
              <a class="btn btn-primary py-md-2 px-md-5 py-sm-1 px-sm-2" href="#">
                Kirish
             </a>
              <a class="btn btn-light py-md-2 px-md-5 py-sm-1 px-sm-2" href="#">
                Ro'yhatdan o'tish
              </a>
            </div>
          </div>

          <div class="video-container">
            <video autoplay loop muted id="video-bg">
              <source src="https://site.vatandoshlarfondi.uz/storage/sliders/November2023/lEWhxQ7xSUR5bniecXGo.mp4" type="video/mp4">
            </video>
          </div>

          
    </header>

    <section class="bg-naqsh" style="padding-bottom: 60px;">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-md-3 col-6" style="display: flex; justify-content: space-around;">
            <div class="header-next-blocks card text-center border-0 p-3" style="background-color: #48D78D;">
              <div class="card-header border-bottom-0 bg-transparent">
                <img src="@/assets/display-solid.svg" class="iconSvg" alt="">
              </div>
              <div class="card-body text-white">
                <h6 class="card-title">Sifatli ta'lim</h6>
                <p class="card-text" style="font-size: 12px;">O'zbek tilini o'rganish imkoniyati</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-6" style="display: flex; justify-content: space-around;">
            <div class="header-next-blocks card text-center border-0 p-3" style="background-color: #1EC1D9;">
              <div class="card-header border-bottom-0 bg-transparent">
                <img src="@/assets/certificate-solid.svg" alt="">
              </div>
              <div class="card-body text-white">
                <h6 class="card-title">Sertifikat</h6>
                <p class="card-text" style="font-size: 12px;">Kurs so’ngida sertifikatga ega bo’lish</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-6" style="display: flex; justify-content: space-around;">
            <div class="header-next-blocks card text-center border-0 p-3" style="background-color: #307AD5;">
              <div class="card-header border-bottom-0 bg-transparent">
                <img src="@/assets/infinity-solid.svg" alt="">
              </div>
              <div class="card-body text-white">
                <h6 class="card-title">Erkin grafik</h6>
                <p class="card-text" style="font-size: 12px;">Siz bo’sh vaqtingizda o’rganasiz</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-6" style="display: flex; justify-content: space-around;">
            <div class="header-next-blocks card text-center border-0 p-3" style="background-color: #EAB830;">
              <div class="card-header border-bottom-0 bg-transparent">
                <img src="@/assets/globe-solid-v2.svg" alt="">
              </div>
              <div class="card-body text-white">
                <h6 class="card-title">24/7 Online</h6>
                <p class="card-text" style="font-size: 12px;">Siz bo’sh vaqtingizda o’rganasiz</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="text-center container-fluid p-0">
  
      <div class="album py-5 bg-body-secondary  module-back">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-8 mx-auto">
                <h1 class="fw-light">Barcha modullar</h1>
                <p class="lead text-body-secondary">Something short and leading about the collection below—its contents</p>

                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                  <div class="col-lg-4">
                    <div class="card shadow-sm text-white  bg-opacity-75" style="border: none; border-radius:15px;">
                        <img class="bd-placeholder-img card-img-top" style="border-radius:15px;" src="@/assets/new-language-01.jpg" alt="">
                        <!-- <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> -->
                        <div class="card-body card-img-overlay for-card-body">
                          <h4 class="card-text">This is a wider</h4>
                          <div class="d-flex justify-content-between align-items-center my-1">
                            <img src="@/assets/display-solid.svg" style="width: 25px" alt="">
                            <h6 class="mx-3">12 ta modul</h6>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="card shadow-sm text-white  bg-opacity-75" style="border: none; border-radius:15px;">
                        <img class="bd-placeholder-img card-img-top" style="border-radius:15px;" src="@/assets/new-language-01.jpg" alt="">
                        <!-- <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> -->
                        <div class="card-body card-img-overlay for-card-body">
                          <h4 class="card-text">This is a wider</h4>
                          <div class="d-flex justify-content-between align-items-center my-1">
                            <img src="@/assets/display-solid.svg" style="width: 25px" alt="">
                            <h6 class="mx-3">12 ta modul</h6>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="card shadow-sm text-white  bg-opacity-75" style="border: none; border-radius:15px;">
                        <img class="bd-placeholder-img card-img-top" style="border-radius:15px;" src="@/assets/new-language-01.jpg" alt="">
                        <!-- <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> -->
                        <div class="card-body card-img-overlay for-card-body">
                          <h4 class="card-text">This is a wider</h4>
                          <div class="d-flex justify-content-between align-items-center my-1">
                            <img src="@/assets/display-solid.svg" style="width: 25px" alt="">
                            <h6 class="mx-3">12 ta modul</h6>
                          </div>
                        </div>
                      </div>
                  </div>

                  <div class="col-lg-4">
                    <div class="card shadow-sm text-white  bg-opacity-75" style="border: none; border-radius:15px;">
                        <img class="bd-placeholder-img card-img-top" style="border-radius:15px;" src="@/assets/new-language-01.jpg" alt="">
                        <!-- <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> -->
                        <div class="card-body card-img-overlay for-card-body">
                          <h4 class="card-text">This is a wider</h4>
                          <div class="d-flex justify-content-between align-items-center my-1">
                            <img src="@/assets/display-solid.svg" style="width: 25px" alt="">
                            <h6 class="mx-3">12 ta modul</h6>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="card shadow-sm text-white  bg-opacity-75" style="border: none; border-radius:15px;">
                        <img class="bd-placeholder-img card-img-top" style="border-radius:15px;" src="@/assets/new-language-01.jpg" alt="">
                        <!-- <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> -->
                        <div class="card-body card-img-overlay for-card-body">
                          <h4 class="card-text">This is a wider</h4>
                          <div class="d-flex justify-content-between align-items-center my-1">
                            <img src="@/assets/display-solid.svg" style="width: 25px" alt="">
                            <h6 class="mx-3">12 ta modul</h6>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="card shadow-sm text-white  bg-opacity-75" style="border: none; border-radius:15px;">
                        <img class="bd-placeholder-img card-img-top" style="border-radius:15px;" src="@/assets/new-language-01.jpg" alt="">
                        <!-- <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> -->
                        <div class="card-body card-img-overlay for-card-body">
                          <h4 class="card-text">This is a wider</h4>
                          <div class="d-flex justify-content-between align-items-center my-1">
                            <img src="@/assets/display-solid.svg" style="width: 25px" alt="">
                            <h6 class="mx-3">12 ta modul</h6>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>

            </div>
            <div class="col-lg-4">
              <div class="card text-start mt-3 mb-md-0 mb-lg-0">
                <div class="card-header pt-4 px-4 bg-primary text-white">
                  <p>Platformadan roʼyxatdan oʼtganlar</p>
                  <h1 class="d-flex justify-content-between">
                    45
                    <img src="@/assets/users-solid.svg" alt="">
                  </h1>
                  <p>Aktiv foydalanuvchilar</p>
                </div>
                <div class="card-body">
                  <p class="mx-2 fw-medium" style="color: #1179C8;">Xorijiy davlatlar kesimida</p>

                  <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center border-0">
                      Turkiya .........................................................
                      <span class="badge bg-primary rounded-pill">14</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center border-0">
                      Qo'zog'iston .........................................................
                      <span class="badge bg-primary rounded-pill">24</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center border-0">
                      Armaniston .........................................................
                      <span class="badge bg-primary rounded-pill">123</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center border-0">
                      Germaniya .........................................................
                      <span class="badge bg-primary rounded-pill">567</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center border-0">
                      BAA .........................................................
                      <span class="badge bg-primary rounded-pill">345</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center border-0">
                      Rossiya .........................................................
                      <span class="badge bg-primary rounded-pill">12</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center border-0">
                      Angliya .........................................................
                      <span class="badge bg-primary rounded-pill">67</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center border-0">
                      Fransiya .........................................................
                      <span class="badge bg-primary rounded-pill">124</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center border-0">
                      AQSH .........................................................
                      <span class="badge bg-primary rounded-pill">78</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>          
        </div>
      </div>
    </section>

    <section class="text-center container-fluid p-0 news-back">

      <div class="container py-4">
        <div class="row justify-content-md-center">
          <div class="col-md-3 col-6" style="display: flex; justify-content: space-around;">
            <div class="module-next-blocks card text-center border-0 p-3 bg-transparent ">
              <div class="card-header border-bottom-0 bg-transparent">
                <h1><Counter :start="452"/></h1>
              </div>
              <div class="card-body">
                <h6 class="card-title">Sifatli ta'lim</h6>
                <p class="card-text" style="font-size: 12px;">O'zbek tilini o'rganish imkoniyati</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-6" style="display: flex; justify-content: space-around;">
            <div class="module-next-blocks card text-center border-0 p-3 bg-transparent ">
              <div class="card-header border-bottom-0 bg-transparent">
                <h1><Counter :start="263"/></h1>
              </div>
              <div class="card-body">
                <h6 class="card-title">Sertifikat</h6>
                <p class="card-text" style="font-size: 12px;">Kurs so’ngida sertifikatga ega bo’lish</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-6" style="display: flex; justify-content: space-around;">
            <div class="module-next-blocks card text-center border-0 p-3 bg-transparent ">
              <div class="card-header border-bottom-0 bg-transparent">
                <h1><Counter :start="321"/></h1>
              </div>
              <div class="card-body">
                <h6 class="card-title">Erkin grafik</h6>
                <p class="card-text" style="font-size: 12px;">Siz bo’sh vaqtingizda o’rganasiz</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-6" style="display: flex; justify-content: space-around;">
            <div class="module-next-blocks card text-center border-0 p-3 bg-transparent ">
              <div class="card-header border-bottom-0 bg-transparent">
                <h1><Counter :start="241"/></h1>
              </div>
              <div class="card-body">
                <h6 class="card-title">24/7 Online</h6>
                <p class="card-text" style="font-size: 12px;">Siz bo’sh vaqtingizda o’rganasiz</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="album py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 mx-auto">
                <h1 class="fw-light">Platforma yangiliklari</h1>
                <p class="lead text-body-secondary">Something short and leading about the collection below—its contents</p>

                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 mt-5">
                  <div class="col-lg-3">
                    <div class="card shadow-sm text-start border-0">
                      <img class="bd-placeholder-img card-img-top" style="border-radius:0" src="@/assets/new-language-01.jpg" alt="">
                      <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                          <small class="text-body-secondary">
                            <img src="@/assets/calendar-regular.svg" alt="" style="margin-right: 5px;">
                            12.12.2002
                          </small>
                          <small class="text-body-secondary">
                            <img src="@/assets/eye-regular.svg" alt="" style="margin-right: 5px;">
                            451
                          </small>
                        </div>
                        <p class="card-text fw-medium mb-0">This is a wider card with supporting text below as a natural.</p>
                        <span class="card-text" style="font-size: 14px;">This is a wider card with supporting text below as a natural.</span>
                        <div class="d-flex justify-content-between align-items-center">
                            <button type="button" class="btn btn-sm bg-body-secondary px-4 py-2 mt-2">Batafsil...</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="card shadow-sm text-start border-0">
                      <img class="bd-placeholder-img card-img-top" style="border-radius:0" src="@/assets/new-language-01.jpg" alt="">
                      <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                          <small class="text-body-secondary">
                            <img src="@/assets/calendar-regular.svg" alt="" style="margin-right: 5px;">
                            12.12.2002
                          </small>
                          <small class="text-body-secondary">
                            <img src="@/assets/eye-regular.svg" alt="" style="margin-right: 5px;">
                            451
                          </small>
                        </div>
                        <p class="card-text fw-medium mb-0">This is a wider card with supporting text below as a natural.</p>
                        <span class="card-text" style="font-size: 14px;">This is a wider card with supporting text below as a natural.</span>
                        <div class="d-flex justify-content-between align-items-center">
                            <button type="button" class="btn btn-sm bg-body-secondary px-4 py-2 mt-2">Batafsil...</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="card shadow-sm text-start border-0">
                      <img class="bd-placeholder-img card-img-top" style="border-radius:0" src="@/assets/new-language-01.jpg" alt="">
                      <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                          <small class="text-body-secondary">
                            <img src="@/assets/calendar-regular.svg" alt="" style="margin-right: 5px;">
                            12.12.2002
                          </small>
                          <small class="text-body-secondary">
                            <img src="@/assets/eye-regular.svg" alt="" style="margin-right: 5px;">
                            451
                          </small>
                        </div>
                        <p class="card-text fw-medium mb-0">This is a wider card with supporting text below as a natural.</p>
                        <span class="card-text" style="font-size: 14px;">This is a wider card with supporting text below as a natural.</span>
                        <div class="d-flex justify-content-between align-items-center">
                            <button type="button" class="btn btn-sm bg-body-secondary px-4 py-2 mt-2">Batafsil...</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="card shadow-sm text-start border-0">
                      <img class="bd-placeholder-img card-img-top" style="border-radius:0" src="@/assets/new-language-01.jpg" alt="">
                      <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                          <small class="text-body-secondary">
                            <img src="@/assets/calendar-regular.svg" alt="" style="margin-right: 5px;">
                            12.12.2002
                          </small>
                          <small class="text-body-secondary">
                            <img src="@/assets/eye-regular.svg" alt="" style="margin-right: 5px;">
                            451
                          </small>
                        </div>
                        <p class="card-text fw-medium mb-0">This is a wider card with supporting text below as a natural.</p>
                        <span class="card-text" style="font-size: 14px;">This is a wider card with supporting text below as a natural.</span>
                        <div class="d-flex justify-content-between align-items-center">
                            <button type="button" class="btn btn-sm bg-body-secondary px-4 py-2 mt-2">Batafsil...</button>
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

.news-back{
  
  background-image: url('../assets/news-back-left.png'), url('../assets/news-back-right.png'), url('../assets/background.png'); 
    background-size: auto, auto, cover; 
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position: -25% 0, 130% 0, 100%;
}
.module-back{
  background-image: url('../assets/module-left.png'), url('../assets/module-right.png'); 
  background-size: auto, auto; 
  background-repeat: no-repeat no-repeat;
  background-position: -25vh 13vh, 133vh -13vh;
}

.bg-naqsh{
    background-image: url('../assets/background.png'); 
    background-size: cover; 
    background-repeat: no-repeat;
}

.for-card-body{
  display: flex;
  align-items: baseline;
  flex-direction: column;
  justify-content: flex-end;
}

.header-next-blocks{
    max-width: 45vw;  
    width: 15vw;
    margin-top: -8vh;
}

.video-old-block{
  height: 60vh; 
  color: white;
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
  .header-next-blocks{
    width: 100%;
    margin-top: 2vh;
  }

  .header-next-blocks .card-header img{
    width: 35px;
  }

  .kirish-button a{
    /* flex-direction: column; */
    font-size: 8px;
  }

  .video-old-block{
    height: 0;
    margin-bottom: 15vh;
  }
  .video-old-block h1{
    font-size: 18px;
  }

  .video-old-block p{
    font-size: 10px;
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

.video-opacity{
  background-color: #00000087;
}

.video-container {
  z-index: -100;
  width:100%;
  height:100%;
  overflow:hidden;
  position:absolute;
  top:0;
  left:0;
  bottom: 0;
}

#video-bg{
  width:100%;
}
</style>

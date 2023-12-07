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
                  <div class="col-md-3 col-12">
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
  
                  <div class="col-md-9 col-12 pt-5">
                    <h3>1- Bo‘lim  “Keling, tanishaylik” </h3>
                    <div class="container d-flex flex-wrap">
                        <ul class="nav me-auto">
                            <li class="nav-item"><a href="#" class="nav-link link-body-emphasis text-primary fw-medium px-2 active" aria-current="page">A) Alifbo</a></li>
                            <li class="nav-item"><a href="#" class="nav-link link-body-emphasis fw-medium px-2">B) Qalaysiz? </a></li>
                            <li class="nav-item"><a href="#" class="nav-link link-body-emphasis fw-medium px-2">D) Bu kim? Bu Nima ? </a></li>
                        </ul>
                    </div>

                    <div class="container">
                      <div class="row mt-5">

                          <h3 class="fw-bold text-primary">Kelishik olmoshlari? </h3>
                          
                          <div class="col-md-4 col-12 mx-auto">
                              <div class="card mb-3" style="width: 18rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                                  <img src="@/assets/ikkidost.png" class="card-img-top" alt="...">
                                  <div class="card-body text-center">
                                      <h3 class="card-title">Men</h3>
                                      <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-4 col-12 mx-auto">
                              <div class="card mb-3" style="width: 18rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                                  <img src="@/assets/ikkidost.png" class="card-img-top" alt="...">
                                  <div class="card-body text-center">
                                      <h3 class="card-title">Sen</h3>
                                      <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-4 col-12 mx-auto">
                              <div class="card mb-3" style="width: 18rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                                  <img src="@/assets/ikkidost.png" class="card-img-top" alt="...">
                                  <div class="card-body text-center">
                                      <h3 class="card-title">U</h3>
                                      <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                                  </div>
                              </div>
                          </div>
                          
                          <div class="col-12 mt-2"></div>

                          <div class="col-md-4 col-12 mx-auto">
                              <div class="card mb-3" style="width: 18rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                                  <img src="@/assets/ikkidost.png" class="card-img-top" alt="...">
                                  <div class="card-body text-center">
                                      <h3 class="card-title">Siz</h3>
                                      <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-4 col-12 mx-auto">
                              <div class="card mb-3" style="width: 18rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                                  <img src="@/assets/ikkidost.png" class="card-img-top" alt="...">
                                  <div class="card-body text-center">
                                      <h3 class="card-title">Biz</h3>
                                      <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-4 col-12 mx-auto">
                              <div class="card mb-3" style="width: 18rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                                  <img src="@/assets/ikkidost.png" class="card-img-top" alt="...">
                                  <div class="card-body text-center">
                                      <h3 class="card-title">Ular</h3>
                                      <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                                  </div>
                              </div>
                          </div>

                          <div class="col-lg-12 mt-4"></div>
                          
                          <div class="col-md-6 col-12">
                            <div class="card mb-3" style="max-width: 540px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                              <div class="row g-0 py-4">
                                <div class="col-md-4">
                                  <img src="@/assets/ikkidost.png" class="img-fluid rounded-start" alt="..." width="120px">
                                </div>
                                <div class="col-md-8">
                                  <div class="card-body">
                                    <p class="card-text"><strong>O‘:</strong> Assalomu alaykum! </p>
                                    <p class="card-text"><strong>D:</strong> Va alaykum assalom! Yaxshimisiz? </p>
                                    <p class="card-text"><strong>O‘:</strong> Rahmat, yaxshiman.</p>

                                    <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-md-6 col-12">
                            <div class="card mb-3" style="max-width: 540px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                              <div class="row g-0 py-4">
                                <div class="col-md-4">
                                  <img src="@/assets/ikkidost.png" class="img-fluid rounded-start" alt="..." width="120px">
                                </div>
                                <div class="col-md-8">
                                  <div class="card-body">
                                    <p class="card-text"><strong>1:</strong> Assalomu alaykum! Yaxshimisiz? </p>
                                    <p class="card-text"><strong>2:</strong> Va alaykum assalom! Rahmat  yaxshimam.</p>
                                    <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-md-6 col-12">
                            <div class="card mb-3" style="max-width: 540px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                              <div class="row g-0 py-4">
                                <div class="col-md-4">
                                  <img src="@/assets/ikkidost.png" class="img-fluid rounded-start" alt="..." width="120px">
                                </div>
                                <div class="col-md-8">
                                  <div class="card-body">
                                    <p class="card-text"><strong>Oybek:</strong> Iroda, yaxshimisan? </p>
                                    <p class="card-text"><strong>Iroda:</strong> Rahmat, yaxshiman. O‘zing qalaysan? </p>
                                    <p class="card-text"><strong>Oybek:</strong> Rahmat! Men ham yaxshiman.</p>
                                    <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-md-6 col-12">
                            <div class="card mb-3" style="max-width: 540px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                              <div class="row g-0 py-4">
                                <div class="col-md-4">
                                  <img src="@/assets/ikkidost.png" class="img-fluid rounded-start" alt="..." width="120px">
                                </div>
                                <div class="col-md-8">
                                  <div class="card-body">
                                    <p class="card-text"><strong>Laylo:</strong> Nima gaplar, Madina? </p>
                                    <p class="card-text"><strong>Madina:</strong> Tinchlik, Hammasi zo‘r. O‘zingda nima gaplar?</p>
                                    <p class="card-text"><strong>Laylo:</strong> Rahmat! Menda ham tinchlik.</p>
                                    <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-md-6 col-12">
                            <div class="card mb-3" style="max-width: 540px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                              <div class="row g-0 py-4">
                                <div class="col-md-4">
                                  <img src="@/assets/ikkidost.png" class="img-fluid rounded-start" alt="..." width="120px">
                                </div>
                                <div class="col-md-8">
                                  <div class="card-body">
                                    <p class="card-text"><strong>O‘:</strong> Assalomu alaykum! </p>
                                    <p class="card-text"><strong>D:</strong> Va alaykum assalom! </p>
                                    <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                      </div>
                    </div>

                    <div class="container">
                      <div class="row mt-5">
                          
                          <h3 class="fw-bold text-primary">Машклар. Уйланг ва езинг. Саломлашиш </h3>
                          <div class="col-5">
                            <div class="card mb-3" style="max-width: 540px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                              <div class="row g-0 py-4">
                                <div class="col-md-4">
                                  <img src="@/assets/ikkidost.png" class="img-fluid rounded-start" alt="..." width="120px">
                                </div>
                                <div class="col-md-8">
                                  <div class="card-body">
                                    <p class="card-text"><strong>O‘:</strong> Assalomu alaykum! </p>
                                    <p class="card-text"><strong>D:</strong> Va alaykum assalom! Yaxshimisiz? </p>
                                    <p class="card-text"><strong>O‘:</strong> Rahmat, yaxshiman.</p>

                                    <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-5">
                            <div class="card mb-3" style="max-width: 540px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                              <div class="row g-0 py-4">
                                <div class="col-md-4">
                                  <img src="@/assets/ikkidost.png" class="img-fluid rounded-start" alt="..." width="120px">
                                </div>
                                <div class="col-md-8">
                                  <div class="card-body">
                                    <p class="card-text"><strong>O‘:</strong> Assalomu alaykum! </p>
                                    <p class="card-text"><strong>D:</strong> Va alaykum assalom! </p>
                                    <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-5">
                            <div class="card mb-3" style="max-width: 540px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                              <div class="row g-0 py-4">
                                <div class="col-md-4">
                                  <img src="@/assets/ikkidost.png" class="img-fluid rounded-start" alt="..." width="120px">
                                </div>
                                <div class="col-md-8">
                                  <div class="card-body">
                                    <p class="card-text"><strong>Oybek:</strong> Iroda, yaxshimisan? </p>
                                    <p class="card-text"><strong>Iroda:</strong> Rahmat, yaxshiman. O‘zing qalaysan? </p>
                                    <p class="card-text"><strong>Oybek:</strong> Rahmat! Men ham yaxshiman.</p>
                                    <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-5">
                            <div class="card mb-3" style="max-width: 540px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                              <div class="row g-0 py-4">
                                <div class="col-md-4">
                                  <img src="@/assets/ikkidost.png" class="img-fluid rounded-start" alt="..." width="120px">
                                </div>
                                <div class="col-md-8">
                                  <div class="card-body">
                                    <p class="card-text"><strong>1:</strong> Assalomu alaykum! Yaxshimisiz? </p>
                                    <p class="card-text"><strong>2:</strong> Va alaykum assalom! Rahmat  yaxshimam.</p>
                                    <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-5">
                            <div class="card mb-3" style="max-width: 540px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                              <div class="row g-0 py-4">
                                <div class="col-md-4">
                                  <img src="@/assets/ikkidost.png" class="img-fluid rounded-start" alt="..." width="120px">
                                </div>
                                <div class="col-md-8">
                                  <div class="card-body">
                                    <p class="card-text"><strong>Laylo:</strong> Nima gaplar, Madina? </p>
                                    <p class="card-text"><strong>Madina:</strong> Tinchlik, Hammasi zo‘r. O‘zingda nima gaplar?</p>
                                    <p class="card-text"><strong>Laylo:</strong> Rahmat! Menda ham tinchlik.</p>
                                    <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                      </div>
                    </div>


                    <div class="row mt-5">
                        
                        <h3 class="fw-bold text-primary">Тингланг, Такрорланг  </h3>
                        <div class="col-5">
                          <div class="card mb-3" style="max-width: 540px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                            <div class="row g-0 py-4">
                              <div class="col-md-4">
                                <img src="@/assets/ikkidost.png" class="img-fluid rounded-start" alt="..." width="120px">
                              </div>
                              <div class="col-md-8">
                                <div class="card-body">
                                  <p class="card-text"><strong>Botir:</strong> Assalomu alaykum!</p>
                                  <p class="card-text"><strong>Murod:</strong> Va alaykum assalom! Ismingiz nima?</p>
                                  <p class="card-text"><strong>Botir:</strong> Botir. </p>
                                  <p class="card-text"><strong>Murod:</strong> Meniki Murod. Tanishganimdan xursandman.</p>
                                  <p class="card-text"><strong>Murod:</strong> Men ham.</p>

                                  <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-5">
                          <div class="card mb-3" style="max-width: 540px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                            <div class="row g-0 py-4">
                              <div class="col-md-4">
                                <img src="@/assets/ikkidost.png" class="img-fluid rounded-start" alt="..." width="120px">
                              </div>
                              <div class="col-md-8">
                                <div class="card-body">
                                  <p class="card-text"><strong>1:</strong> Xush kelibsiz! </p>
                                  <p class="card-text"><strong>2:</strong> Rahmat </p>
                                  <p class="card-text"><strong>1:</strong> Ismingiz nima? </p>
                                  <p class="card-text"><strong>2:</strong> Elezabet Byorg. </p>
                                  <p class="card-text"><strong>1:</strong> Elezabet, qayerdansiz? </p>
                                  <p class="card-text"><strong>2:</strong> Angliyadanman. </p>
                                  <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-5">
                          <div class="card mb-3" style="max-width: 540px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                            <div class="row g-0 py-4">
                              <div class="col-md-4">
                                <img src="@/assets/ikkidost.png" class="img-fluid rounded-start" alt="..." width="120px">
                              </div>
                              <div class="col-md-8">
                                <div class="card-body">
                                  <p class="card-text"><strong>1:</strong> Assalomu aleykum! </p>
                                  <p class="card-text"><strong>2:</strong> Va alaykum assalom! </p>
                                  <p class="card-text"><strong>1:</strong> Ismingiz nima? Qayerliksiz</p>
                                  <p class="card-text"><strong>2:</strong> Andrey. Rossiyalikman</p>
                                  <p class="card-text"><strong>1:</strong> Andrey, O'zbekistonga xush kelibsiz! </p>


                                  <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-5">
                          <div class="card mb-3" style="max-width: 540px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                            <div class="row g-0 py-4">
                              <div class="col-md-4">
                                <img src="@/assets/ikkidost.png" class="img-fluid rounded-start" alt="..." width="120px">
                              </div>
                              <div class="col-md-8">
                                <div class="card-body">
                                  <p class="card-text"><strong>1:</strong> Tanish, bu Sang Vuk </p>
                                  <p class="card-text"><strong>2:</strong> Salom, Sang Vuk.</p>
                                  <p class="card-text"><strong>3:</strong> Salom!</p>
                                  <p class="card-text"><strong>1:</strong> Sang Vuk, bu o'rtog'im Ali!</p>
                                  <p class="card-text"><strong>2:</strong> Tanishganimdan xursandman</p>
                                  <p class="card-text"><strong>3:</strong> Men ham</p>
                                  <p class="card-text"><strong>1:</strong> Sang Vuk Koreyalik</p>
                                  <p class="card-text"><strong>2:</strong> O'zbekistonga xush kelibsiz!</p>

                                  <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                    </div>

                    <div class="row mt-5">
                        
                        <h3 class="fw-bold text-primary">Mashqlar  </h3>
                        <div class="col-5">
                          <div class="card mb-3" style="max-width: 540px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                            <div class="row g-0 py-4">
                              <div class="col-md-4">
                                <img src="@/assets/ikkidost.png" class="img-fluid rounded-start" alt="..." width="120px">
                              </div>
                              <div class="col-md-8">
                                <div class="card-body">
                                  <p class="card-text"><strong>Botir:</strong> Assalomu alaykum!</p>
                                  <p class="card-text"><strong>Murod:</strong> Va alaykum assalom! Ismingiz nima?</p>
                                  <p class="card-text"><strong>Botir:</strong> Botir. </p>
                                  <p class="card-text"><strong>Murod:</strong> Meniki Murod. Tanishganimdan xursandman.</p>
                                  <p class="card-text"><strong>Murod:</strong> Men ham.</p>

                                  <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-5">
                          <div class="card mb-3" style="max-width: 540px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                            <div class="row g-0 py-4">
                              <div class="col-md-4">
                                <img src="@/assets/ikkidost.png" class="img-fluid rounded-start" alt="..." width="120px">
                              </div>
                              <div class="col-md-8">
                                <div class="card-body">
                                  <p class="card-text"><strong>1:</strong> Xush kelibsiz! </p>
                                  <p class="card-text"><strong>2:</strong> Rahmat </p>
                                  <p class="card-text"><strong>1:</strong> Ismingiz nima? </p>
                                  <p class="card-text"><strong>2:</strong> Elezabet Byorg. </p>
                                  <p class="card-text"><strong>1:</strong> Elezabet, qayerdansiz? </p>
                                  <p class="card-text"><strong>2:</strong> Angliyadanman. </p>
                                  <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-5">
                          <div class="card mb-3" style="max-width: 540px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                            <div class="row g-0 py-4">
                              <div class="col-md-4">
                                <img src="@/assets/ikkidost.png" class="img-fluid rounded-start" alt="..." width="120px">
                              </div>
                              <div class="col-md-8">
                                <div class="card-body">
                                  <p class="card-text"><strong>1:</strong> Assalomu aleykum! </p>
                                  <p class="card-text"><strong>2:</strong> Va alaykum assalom! </p>
                                  <p class="card-text"><strong>1:</strong> Ismingiz nima? Qayerliksiz</p>
                                  <p class="card-text"><strong>2:</strong> Andrey. Rossiyalikman</p>
                                  <p class="card-text"><strong>1:</strong> Andrey, O'zbekistonga xush kelibsiz! </p>


                                  <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-5">
                          <div class="card mb-3" style="max-width: 540px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                            <div class="row g-0 py-4">
                              <div class="col-md-4">
                                <img src="@/assets/ikkidost.png" class="img-fluid rounded-start" alt="..." width="120px">
                              </div>
                              <div class="col-md-8">
                                <div class="card-body">
                                  <p class="card-text"><strong>1:</strong> Tanish, bu Sang Vuk </p>
                                  <p class="card-text"><strong>2:</strong> Salom, Sang Vuk.</p>
                                  <p class="card-text"><strong>3:</strong> Salom!</p>
                                  <p class="card-text"><strong>1:</strong> Sang Vuk, bu o'rtog'im Ali!</p>
                                  <p class="card-text"><strong>2:</strong> Tanishganimdan xursandman</p>
                                  <p class="card-text"><strong>3:</strong> Men ham</p>
                                  <p class="card-text"><strong>1:</strong> Sang Vuk Koreyalik</p>
                                  <p class="card-text"><strong>2:</strong> O'zbekistonga xush kelibsiz!</p>

                                  <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                    </div>


                    <div class="row mt-5">

                      <h3 class="fw-bold text-primary">Расмли лугат? </h3>
                      <div class="col-3">
                          <div class="card" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                              <img src="@/assets/ikkidost.png" class="card-img-top" alt="...">
                              <div class="card-body text-center">
                                  <h3 class="card-title">Hamshira</h3>
                                  <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                              </div>
                          </div>
                      </div>
                      <div class="col-3">
                          <div class="card" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                              <img src="@/assets/ikkidost.png" class="card-img-top" alt="...">
                              <div class="card-body text-center">
                                  <h3 class="card-title">Rassom</h3>
                                  <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                              </div>
                          </div>
                      </div>
                      <div class="col-3">
                          <div class="card" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                              <img src="@/assets/ikkidost.png" class="card-img-top" alt="...">
                              <div class="card-body text-center">
                                  <h3 class="card-title">O'quvchi</h3>
                                  <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-12 mt-3"></div>
                      <div class="col-3">
                          <div class="card" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                              <img src="@/assets/ikkidost.png" class="card-img-top" alt="...">
                              <div class="card-body text-center">
                                  <h3 class="card-title">Oshpaz</h3>
                                  <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                              </div>
                          </div>
                      </div>
                      <div class="col-3">
                          <div class="card" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                              <img src="@/assets/ikkidost.png" class="card-img-top" alt="...">
                              <div class="card-body text-center">
                                  <h3 class="card-title">Sartarosh</h3>
                                  <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                              </div>
                          </div>
                      </div>
                      <div class="col-3">
                          <div class="card" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                              <img src="@/assets/ikkidost.png" class="card-img-top" alt="...">
                              <div class="card-body text-center">
                                  <h3 class="card-title">Tennischi</h3>
                                  <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                              </div>
                          </div>
                      </div>

                    </div>

                    <div class="row mt-5">                      
                      <div class="col-md-12">

                        <h3 class="fw-bold text-primary">Грамматика </h3>
                        <div class="table-responsive-sm col-8">
                          <table class="table table-bordered align-middle text-center table-sm">
                            <thead>
                              <tr >
                                <td>Men</td>
                                <td rowspan="6">
                                  <img src="@/assets/ikkidost.png" class="card-img-top" alt="..." style="width: 150px;">
                                </td>
                                <td>-men</td>
                              </tr>
                              <tr>
                                <td>Sen</td>
                                <td>-sen</td>
                              </tr>
                              <tr>
                                <td>U</td>
                                <td>(dir)</td>
                              </tr>
                              <tr>
                                <td>Biz</td>
                                <td>-miz</td>
                              </tr>
                              <tr>
                                <td>Siz</td>
                                <td>-siz</td>
                              </tr>
                              <tr>
                                <td>Ular</td>
                                <td>-lar</td>
                              </tr>
                            </thead>
                          </table>
                        </div>

                        <ol class="list-group list-group-numbered col-8">
                          <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                              <div class="fw-medium">Мен укитувчиман </div>
                            </div>
                            <span class="badge bg-primary rounded-pill"><i class="fa-solid fa-volume-high"></i></span>
                          </li>
                          <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                              <div class="fw-medium">Сен укитувчисан </div>
                            </div>
                            <span class="badge bg-primary rounded-pill"><i class="fa-solid fa-volume-high"></i></span>
                          </li>
                          <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                              <div class="fw-medium">У укитувчидир </div>
                            </div>
                            <span class="badge bg-primary rounded-pill"><i class="fa-solid fa-volume-high"></i></span>
                          </li>
                          <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                              <div class="fw-medium">Биз укитувчидир </div>
                            </div>
                            <span class="badge bg-primary rounded-pill"><i class="fa-solid fa-volume-high"></i></span>
                          </li>
                          <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                              <div class="fw-medium">Сиз укитувчидир </div>
                            </div>
                            <span class="badge bg-primary rounded-pill"><i class="fa-solid fa-volume-high"></i></span>
                          </li>
                          <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                              <div class="fw-medium">Улар укитувчидир </div>
                            </div>
                            <span class="badge bg-primary rounded-pill"><i class="fa-solid fa-volume-high"></i></span>
                          </li>
                        </ol>

                      </div>


                    </div>


                    <div class="row mt-5">

                      <h3 class="fw-bold text-primary">Машклар </h3>
                      <div class="col-3">
                          <div class="card" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                              <img src="@/assets/ikkidost.png" class="card-img-top" alt="...">
                              <div class="card-body text-center">
                                  <p class="card-title">Men ______ man <i class="fa-solid fa-pencil"></i></p>
                              </div>
                          </div>
                      </div>
                      <div class="col-3">
                          <div class="card" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                              <img src="@/assets/ikkidost.png" class="card-img-top" alt="...">
                              <div class="card-body text-center">
                                  <p class="card-title">Sen xamshira ____ <i class="fa-solid fa-pencil"></i></p>
                              </div>
                          </div>
                      </div>
                      <div class="col-3">
                          <div class="card" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                              <img src="@/assets/ikkidost.png" class="card-img-top" alt="...">
                              <div class="card-body text-center">
                                  <p class="card-title">____, ________miz <i class="fa-solid fa-pencil"></i></p>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-12 mt-3"></div>
                      <div class="col-3">
                          <div class="card" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                              <img src="@/assets/ikkidost.png" class="card-img-top" alt="...">
                              <div class="card-body text-center">
                                  <p class="card-title">Siz oshpaz ______ <i class="fa-solid fa-pencil"></i></p>
                              </div>
                          </div>
                      </div>
                      <div class="col-3">
                          <div class="card" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                              <img src="@/assets/ikkidost.png" class="card-img-top" alt="...">
                              <div class="card-body text-center">
                                  <p class="card-title">Ular ________ <i class="fa-solid fa-pencil"></i></p>
                              </div>
                          </div>
                      </div>
                      <div class="col-3">
                          <div class="card" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                              <img src="@/assets/ikkidost.png" class="card-img-top" alt="...">
                              <div class="card-body text-center">
                                  <p class="card-title">Siz _________ <i class="fa-solid fa-pencil"></i></p>
                              </div>
                          </div>
                      </div>

                    </div>


                    <div class="row mt-5">                      
                      <div class="col-md-12">

                        <h3 class="fw-bold text-primary">Грамматика </h3>

                        <ol class="list-group list-group-numbered col-8">
                          <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                              <div class="fw-medium">Мен Узбекистон<span class="text-success fw-bold">ЛИК</span>ман </div>
                            </div>
                            <span class="badge bg-primary rounded-pill"><i class="fa-solid fa-volume-high"></i></span>
                          </li>
                          <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                              <div class="fw-medium">Мен Узбекистон<span class="text-success fw-bold">ДАН</span>ман </div>
                            </div>
                            <span class="badge bg-primary rounded-pill"><i class="fa-solid fa-volume-high"></i></span>
                          </li>
                        </ol>

                      </div>
                    </div>

                    <div class="row mt-5">

                      <h3 class="fw-bold text-primary">Уйланг, ёзинг </h3>
                      <div class="col-3">
                          <div class="card" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                              <img src="@/assets/ikkidost.png" class="card-img-top" alt="...">
                              <div class="card-body text-center">
                                  <p class="card-title">Биз  ______ дан <i class="fa-solid fa-pencil"></i></p>
                              </div>
                          </div>
                      </div>
                      <div class="col-3">
                          <div class="card" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                              <img src="@/assets/ikkidost.png" class="card-img-top" alt="...">
                              <div class="card-body text-center">
                                  <p class="card-title">Южин ____ лик <i class="fa-solid fa-pencil"></i></p>
                              </div>
                          </div>
                      </div>
                      <div class="col-3">
                          <div class="card" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                              <img src="@/assets/ikkidost.png" class="card-img-top" alt="...">
                              <div class="card-body text-center">
                                  <p class="card-title">Улар ________ лик <i class="fa-solid fa-pencil"></i></p>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-12 mt-3"></div>
                      <div class="col-3">
                          <div class="card" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                              <img src="@/assets/ikkidost.png" class="card-img-top" alt="...">
                              <div class="card-body text-center">
                                  <p class="card-title">Siz Сен ______ дан  <i class="fa-solid fa-pencil"></i></p>
                              </div>
                          </div>
                      </div>
                      <div class="col-3">
                          <div class="card" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                              <img src="@/assets/ikkidost.png" class="card-img-top" alt="...">
                              <div class="card-body text-center">
                                  <p class="card-title">Анна ________ лик<i class="fa-solid fa-pencil"></i></p>
                              </div>
                          </div>
                      </div>
                      <div class="col-3">
                          <div class="card" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                              <img src="@/assets/ikkidost.png" class="card-img-top" alt="...">
                              <div class="card-body text-center">
                                  <p class="card-title">Алекс  _________ дан<i class="fa-solid fa-pencil"></i></p>
                              </div>
                          </div>
                      </div>

                    </div>


                    <div class="row mt-5">

                      <h3 class="fw-bold text-primary">Диккат килинг !  </h3>
                      <div class="col-3">
                          <div class="card" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                              <img src="@/assets/ikkidost.png" class="card-img-top" alt="...">
                              <div class="card-body text-center">
                                  <h3 class="card-title">Сог булинг !</h3>
                                  <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                              </div>
                          </div>
                      </div>
                      <div class="col-3">
                          <div class="card" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                              <img src="@/assets/ikkidost.png" class="card-img-top" alt="...">
                              <div class="card-body text-center">
                                  <h3 class="card-title">Ош булсин !</h3>
                                  <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                              </div>
                          </div>
                      </div>
                      <div class="col-3">
                          <div class="card" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                              <img src="@/assets/ikkidost.png" class="card-img-top" alt="...">
                              <div class="card-body text-center">
                                  <h3 class="card-title">Ёкимли иштаха !</h3>
                                  <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-12 mt-3"></div>
                      <div class="col-3">
                          <div class="card" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                              <img src="@/assets/ikkidost.png" class="card-img-top" alt="...">
                              <div class="card-body text-center">
                                  <h3 class="card-title">Хайр </h3>
                                  <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                              </div>
                          </div>
                      </div>
                      <div class="col-3">
                          <div class="card" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                              <img src="@/assets/ikkidost.png" class="card-img-top" alt="...">
                              <div class="card-body text-center">
                                  <h3 class="card-title">Буюрсин !</h3>
                                  <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                              </div>
                          </div>
                      </div>
                      <div class="col-3">
                          <div class="card" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                              <img src="@/assets/ikkidost.png" class="card-img-top" alt="...">
                              <div class="card-body text-center">
                                  <h3 class="card-title">Ок Йул !</h3>
                                  <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-12 mt-3"></div>
                      <div class="col-3">
                          <div class="card" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                              <img src="@/assets/ikkidost.png" class="card-img-top" alt="...">
                              <div class="card-body text-center">
                                  <h3 class="card-title">Хайрли тонг !</h3>
                                  <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                              </div>
                          </div>
                      </div>
                      <div class="col-3">
                          <div class="card" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                              <img src="@/assets/ikkidost.png" class="card-img-top" alt="...">
                              <div class="card-body text-center">
                                  <h3 class="card-title">Хайрли кун  !</h3>
                                  <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                              </div>
                          </div>
                      </div>
                      <div class="col-3">
                          <div class="card" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                              <img src="@/assets/ikkidost.png" class="card-img-top" alt="...">
                              <div class="card-body text-center">
                                  <h3 class="card-title">Хайрли кеч  !</h3>
                                  <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-12 mt-3"></div>
                      <div class="col-3">
                          <div class="card" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                              <img src="@/assets/ikkidost.png" class="card-img-top" alt="...">
                              <div class="card-body text-center">
                                  <h3 class="card-title">Хайрли тун !</h3>
                                  <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                              </div>
                          </div>
                      </div>

                    </div>


                    <div class="row mt-5">
                        <h3 class="fw-bold text-primary">Тингланг! Укинг !</h3>
                        <div class="col-12">
                          <div class="card mb-3" style="max-width: 540px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                            <div class="row g-0 py-4">
                              <div class="col-md-4">
                                <img src="@/assets/ikkidost.png" class="img-fluid rounded-start" alt="..." width="100%">
                              </div>
                              <div class="col-md-8">
                                <div class="card-body">
                                  <p class="card-text"><strong>Zuhra:</strong> Assalomu alaykum! </p>
                                  <p class="card-text"><strong>Zebo</strong> Va alaykum assalom! </p>
                                  <p class="card-text"><strong>Zuhra:</strong> Ismim Zuhra.</p>
                                  <p class="card-text"><strong>Zebo:</strong> Meniki Zebo. Tanishganimdan xursandman</p>
                                  <p class="card-text"><strong>Zuhra:</strong> Men ham xursandman</p>
                                  <p class="card-text"><strong>Zebo:</strong> Zuhra, qayerliksan?</p>
                                  <p class="card-text"><strong>Zuhra:</strong> Buxorolikman. Samarqand universitetining talabasiman.</p>
                                  <p class="card-text"><strong>Zebo:</strong> Men Toshkentlikman. Samarqand universitetining talabasiman.</p>
                                  <p class="card-text"><strong>Zuhra:</strong> Bo'pti Zebo, ko'rishguncha!.</p>
                                  <p class="card-text"><strong>Zebo:</strong> Xayr Zuhra.</p>

                                  <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    
                        <h3 class="fw-bold text-primary">Саволларга жавоб беринг!</h3>
                        <div class="col-12">
                          <div class="card mb-3" style="max-width: 540px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                            <div class="row g-0 py-4">
                              <div class="col-md-8">
                                <div class="card-body">
                                  <p class="card-text"><strong>1: Zuhra qayerlik? </strong></p>
                                  <p class="card-text"> Zuhra __________________.</p>
                                  <p class="card-text"><strong>2: Zebo qayerlik? </strong></p>
                                  <p class="card-text"> Zebo __________________.</p>
                                  <p class="card-text"><strong>3: Zebo o'qituvhi? </strong></p>
                                  <p class="card-text"> Ha        Yo'q</p>
                                  <p class="card-text"><strong>4: Zuhra talaba? </strong></p>
                                  <p class="card-text"> Ha        Yo'q</p>
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
  td{
    text-align:center;
    vertical-align:center
  }
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
  
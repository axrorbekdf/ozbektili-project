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
          <h1>Qo‘llanma</h1>
          <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
            <ol class="breadcrumb" style="justify-content: center;">
              <li class="breadcrumb-item"><a class="text-white" href="#">Bosh sahifa </a></li>
              <li class="breadcrumb-item active text-white" aria-current="page">Qo‘llanma</li>
            </ol>
          </nav>
        </div>

        <div class="header-image-container">
          <div id="header-bg">
          </div>
        </div>
  </header>

  
  <section class=" container-fluid p-0 bg-naqsh">
    <div class="album py-5">
      <div class="container">
        <div class="row">
            <div class="col-lx-12">
                <div class="card">
                    <div class="card-body">
                      <div class="row justify-content-center mt-4">
                          <div class="col-xl-5 col-lg-8">
                              <div class="text-center">
                                  <h3>Platformadan qanday foydalanaman?</h3>
                                  <p class="text-muted">If several languages coalesce, the grammar of the resulting language
                                      is more simple and regular than that of the individual</p>
                                  <div>
                                      <button type="button" class="btn btn-primary me-2">Email Us</button>
                                      <button type="button" class="btn btn-success">Send us a tweet</button>
                                  </div>
                              </div>
                          </div>
                          <!-- end col -->
                      </div>
                      <!-- end row -->
                      <div class="row justify-content-center mt-5">
                          <div class="col-9">
                              <ul class="nav nav-tabs  nav-tabs-custom nav-justified justify-content-center faq-tab-box" id="pills-tab" role="tablist">
                                  <li class="nav-item" role="presentation">
                                      <button class="nav-link active" id="pills-genarel-tab" data-bs-toggle="pill" data-bs-target="#pills-genarel" type="button" role="tab" aria-controls="pills-genarel" aria-selected="true">
                                          <span class="font-size-16">General Questions</span>
                                      </button>
                                  </li>
                                  <li class="nav-item" role="presentation">
                                      <button class="nav-link" id="pills-privacy_policy-tab" data-bs-toggle="pill" data-bs-target="#pills-privacy_policy" type="button" role="tab" aria-controls="pills-privacy_policy" aria-selected="false">
                                          <span class="font-size-16">Privacy Policy</span>
                                      </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                      <button class="nav-link" id="pills-teachers-tab" data-bs-toggle="pill" data-bs-target="#pills-pricing_plan" type="button" role="tab" aria-controls="pills-pricing_plan" aria-selected="false">
                                          
                                          <span class="font-size-16">Pricing &amp; Plans</span>
                                      </button>
                                    </li>
                                </ul>
                          </div>
                          <div class="col-lg-9">
                              <div class="tab-content pt-3" id="pills-tabContent">
                                  <div class="tab-pane fade active show" id="pills-genarel" role="tabpanel" aria-labelledby="pills-genarel-tab">
                                      <div class="row g-4 mt-2">
                                          <div class="col-lg-6">
                                              <h5>What is Lorem Ipsum ?</h5>
                                          <p class="text-muted">If several languages coalesce, the grammar of the resulting language is more simple 
                                              and regular than that of the individual languages. The new common language will be more simple and 
                                              regular than the existing</p>
                                          </div>
                                          <div class="col-lg-6">
                                              <h5>Why do we use it ?</h5>
                                              <p class="text-muted">Their separate existence is a myth. For science, music, sport, etc, 
                                                  Europe uses the same vocabulary.</p>
                                          </div>
                                          <div class="col-lg-6">
                                              <h5>Where does it come from ?</h5>
                                          <p class="text-muted">If several languages coalesce, the grammar of the resulting language is more simple 
                                              and regular than that of the individual languages. The new common language will be more simple and 
                                              regular than the existing
                                          </p>
                                          </div>
                                          <div class="col-lg-6">
                                              <h5>Where can I get some?</h5>
                                              <p class="lg-base">If several languages coalesce, the grammar of the resulting language is more 
                                                  simple and regular than that of the individual languages. </p>
                                          </div>
                                      </div>
                                  </div>

                                  <div class="tab-pane fade" id="pills-privacy_policy" role="tabpanel" aria-labelledby="pills-privacy_policy-tab">
                                      <div class="row g-4 mt-2">
                                          <div class="col-lg-6">
                                              <h5>Where can I get some ?</h5>
                                              <p class="lg-base">If several languages coalesce, the grammar of the resulting language is more simple
                                                  and regular than that of the individual languages. The new common language will be more
                                                  simple and regular than the existing</p>
                                          </div>
                                          <div class="col-lg-6">
                                              <h5>Where does it come from ?</h5>
                                              <p class="lg-base">If several languages coalesce, the grammar of the resulting language is more simple
                                                  and regular than that of the individual languages. The new common language will be more
                                                  simple and regular than the existing</p>
                                          </div>
                                          <div class="col-lg-6">
                                              <h5>Why do we use it ?</h5>
                                              <p class="lg-base">If several languages coalesce, the grammar of the resulting language is more simple
                                                  and regular than that of the individual languages. The new common language will be more
                                                  simple and regular than the existing</p>
                                          </div>
                                          <div class="col-lg-6">
                                              <h5>What is Genius privacy policy</h5>
                                              <p class="lg-base">If several languages coalesce, the grammar of the resulting language is more simple
                                                  and regular than that of the individual languages. The new common language will be more
                                                  simple and regular than the existing</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="tab-pane fade" id="pills-pricing_plan" role="tabpanel">
                                      <div class="row g-4 mt-4">
                                          <div class="col-lg-6">
                                              <h5>Where does it come from ?</h5>
                                          <p class="lg-base">If several languages coalesce, the grammar of the resulting language is more simple
                                              and regular than that of the individual languages. The new common language will be more
                                              simple and regular than the existing</p>
                                          </div>
                                          <div class="col-lg-6">
                                              <h5>Why do we use it ?</h5>
                                              <p class="lg-base">If several languages coalesce, the grammar of the resulting language is more simple
                                                  and regular than that of the individual languages. The new common language will be more
                                                  simple and regular than the existing</p>
                                          </div>
                                          <div class="col-lg-6">
                                              <h5>What is Lorem Ipsum ?</h5>
                                          <p class="lg-base">If several languages coalesce, the grammar of the resulting language is more simple 
                                              and regular than that of the individual languages. The new common language will be more 
                                              simple and regular than the existing</p>
                                          </div>
                                          <div class="col-lg-6">
                                              <h5>What is Lorem Ipsum?</h5>
                                              <p class="lg-base">If several languages coalesce, the grammar of the resulting language is more simple 
                                                  and regular than that of the individual languages. The new common language will be more 
                                                  simple and regular than the existing</p>
                                          </div>
                                      </div>
                                  </div>
                                </div>
                          </div>
                      </div>
                      <!-- end row -->
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
  background-image: url('../assets/background.png'); 
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
  background-image: url('../assets/image1.jpg'); 
  background-size: cover; 
  background-repeat: no-repeat;
  background-position: 100%;
}

#header-bg{
  height: 50vh;
  background-color: rgb(0 0 0 / 70%);
}
</style>

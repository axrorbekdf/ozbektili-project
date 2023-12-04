<template>
  <header class="position-relative overflow-hidden p-3 text-center">
        <Navbar />


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
                <div class="card border-0">
                    <div class="card-body">
                      <div class="row justify-content-center mt-4">
                          <div class="col-xl-8 col-lg-8 mx-auto">
                              <div class="text-center">
                                  <h3>O'zbek tilini o'qitish bo'yicha innovation ta'lim platformasidan foydalanish bo‘yicha video qo‘llanma</h3>
                                  <p class="text-muted d-none">If several languages coalesce, the grammar of the resulting language
                                      is more simple and regular than that of the individual</p>
                              </div>
                          </div>
                          <!-- end col -->
                      </div>
                      <!-- end row -->
                      <div class="row justify-content-center mt-5">
                          <div class="col-12">
                            <div class="card bg-dark text-white border-0" style="max-width: 100%;">
                                <video src="https://codingyaar.com/wp-content/uploads/video-in-bootstrap-card.mp4" class="card-img-top " muted autoplay loop controls></video>
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

  <Footer/>
</template>

<script>
import { RouterLink } from 'vue-router'
import Navbar from '../components/layout/Navbar.vue';
import Footer from '../components/layout/Footer.vue';
export default{
  components:{
    Navbar,
    Footer
  }
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
  height: 60vh;
  background-color: rgb(0 0 0 / 70%);
}
</style>

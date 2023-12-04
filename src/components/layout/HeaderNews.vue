<template>
    <header class="position-relative overflow-hidden p-3 text-center">
          <Navbar/>

          <div class="col-md-6 p-lg-5 mx-auto my-md-5 text-white">
            <h1>Yangiliklar</h1>
            <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
              <ol class="breadcrumb" style="justify-content: center;">
                <li class="breadcrumb-item"><a class="text-white" href="#">Bosh sahifa </a></li>
                <li class="breadcrumb-item active text-white" aria-current="page">Sample blog post</li>
              </ol>
            </nav>
          </div>

          <div class="header-image-container">
            <div id="header-bg">
            </div>
          </div>
    </header>
</template>
<script>
import { RouterLink } from 'vue-router'
import Navbar from './Navbar.vue';
export default {
    components: { Navbar }
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
  #header-bg{
    height: 60vh;
  }
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
  #header-bg{
    height: 60vh;
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
  height: 60vh;
  background-color: rgb(0 0 0 / 70%);
}
</style>
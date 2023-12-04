<template>
    <header class="position-relative overflow-hidden p-3 text-center">
        <Navbar />

          <div class="col-md-6 p-lg-5 mx-auto my-md-5 text-white">
            <h1>Bog'lanish</h1>
            <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
              <ol class="breadcrumb" style="justify-content: center;">
                <li class="breadcrumb-item"><a class="text-white" href="#">Bosh sahifa </a></li>
                <li class="breadcrumb-item active text-white" aria-current="page">Bog'lanish</li>
              </ol>
            </nav>
          </div>

          <div class="header-image-container">
            <div id="header-bg">
            </div>
          </div>
    </header>

    
    <section class="container-fluid p-0 bg-naqsh">
      <div class="album py-5">
        
        <div class="container bootstrap snippets bootdeys">
      <div class="row text-center">
        <div class="col-sm-4">
          <div class="contact-detail-box">
            <i class="fa mb-4 fa-th fa-3x"></i>
            <h4>Bog'lanish uchun</h4>
            Telefon: +(998) 99 123-45-67<br>
            Email: <a href="mailto:email@email.com" class="text-muted">email@email.com</a>
          </div>
        </div><!-- end col -->

        <div class="col-sm-4">
          <div class="contact-detail-box">
            <i class="fa mb-4 fa-map-marker fa-3x"></i>
            <h4>Manzil</h4>

            <address>
              00066, Toshkent sh., Islom <br>
              Karimov ko'chasi, 45-uy
          </address>
          </div>
        </div><!-- end col -->

        <div class="col-sm-4">
          <div class="contact-detail-box">
            <i class="fa mb-4 fa-book fa-3x"></i>
            <h4>24x7</h4>

            <p>Industry's standard dummy text.</p>
            <h4 class="text-muted">1234 567 890</h4>
          </div>
        </div><!-- end col -->

      </div>
      <!-- end row -->


      <div class="row">
        <div class="col-sm-6">
          <div class="contact-map">
            <iframe src="https://www.google.com/maps/embed/v1/place?q=New+York+University&amp;key=AIzaSyBSFRN6WWGYwmFi498qXXsD2UwkbmD74v4" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" style="width: 100%; height: 360px;"></iframe>
          </div>
        </div><!-- end col -->

        <!-- Contact form -->
        <div class="col-sm-6">
          <form role="form" name="ajax-form" id="ajax-form" action="https://formsubmit.io/send/coderthemes@gmail.com" method="post" class="form-main">

            <div class="form-group mb-2">
              <label for="name2">Ism</label>
              <input class="form-control" id="name2" name="name" type="text">
              <div class="error" id="err-name" style="display: none;">Please enter name</div>
            </div> <!-- /Form-name -->

            <div class="form-group mb-2">
              <label for="email2">Email</label>
              <input class="form-control" id="email2" name="email" type="text">
              <div class="error" id="err-emailvld" style="display: none;">E-mail is not a valid format</div> 
            </div> <!-- /Form-email -->

            <div class="form-group mb-2">
              <label for="message2">Xabar</label>
              <textarea class="form-control" id="message2" name="message" rows="5" ></textarea>

              <div class="error" id="err-message" style="display: none;">Please enter message</div>
            </div> <!-- /col -->

            <div class="row mt-3">            
              <div class="col-xs-12">
                <!-- <div id="ajaxsuccess" class="text-success">E-mail was successfully sent.</div>
                <div class="error" id="err-form" style="display: none;">There was a problem validating the form please check!</div>
                <div class="error" id="err-timedout">The connection to the server timed out!</div>
                <div class="error" id="err-state"></div> -->
                <button type="submit" class="btn btn-primary btn-shadow btn-rounded w-md" id="send">Jo'natish</button>
              </div> <!-- /col -->
            </div> <!-- /row -->

          </form> <!-- /form -->
        </div> <!-- end col -->

      </div> <!-- end row -->
          
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

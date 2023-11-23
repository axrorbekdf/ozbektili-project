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

    
    <section class="container-fluid p-0 bg-naqsh">
      <div class="album py-5">
        
        <div class="container bootstrap snippets bootdeys">
      <div class="row text-center">
        <div class="col-sm-4">
          <div class="contact-detail-box">
            <i class="fa fa-th fa-3x text-colored"></i>
            <h4>Get In Touch</h4>
            <abbr title="Phone">P:</abbr> (123) 456-7890<br>
            E: <a href="mailto:email@email.com" class="text-muted">email@email.com</a>
          </div>
        </div><!-- end col -->

        <div class="col-sm-4">
          <div class="contact-detail-box">
            <i class="fa fa-map-marker fa-3x text-colored"></i>
            <h4>Our Location</h4>

            <address>
            795 Folsom Ave, Suite 600<br>
            San Francisco, CA 94107<br>
          </address>
          </div>
        </div><!-- end col -->

        <div class="col-sm-4">
          <div class="contact-detail-box">
            <i class="fa fa-book fa-3x text-colored"></i>
            <h4>24x7 Support</h4>

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

            <div class="form-group">
              <label for="name2">Name</label>
              <input class="form-control" id="name2" name="name" onblur="if(this.value == '') this.value='Name'" onfocus="if(this.value == 'Name') this.value=''" type="text" value="Name">
              <div class="error" id="err-name" style="display: none;">Please enter name</div>
            </div> <!-- /Form-name -->

            <div class="form-group">
              <label for="email2">Email</label>
              <input class="form-control" id="email2" name="email" type="text" onfocus="if(this.value == 'E-mail') this.value='';" onblur="if(this.value == '') this.value='E-mail';" value="E-mail">
              <div class="error" id="err-emailvld" style="display: none;">E-mail is not a valid format</div> 
            </div> <!-- /Form-email -->

            <div class="form-group">
              <label for="message2">Message</label>
              <textarea class="form-control" id="message2" name="message" rows="5" onblur="if(this.value == '') this.value='Message'" onfocus="if(this.value == 'Message') this.value=''">Message</textarea>

              <div class="error" id="err-message" style="display: none;">Please enter message</div>
            </div> <!-- /col -->

            <div class="row">            
              <div class="col-xs-12">
                <div id="ajaxsuccess" class="text-success">E-mail was successfully sent.</div>
                <div class="error" id="err-form" style="display: none;">There was a problem validating the form please check!</div>
                <div class="error" id="err-timedout">The connection to the server timed out!</div>
                <div class="error" id="err-state"></div>
                <button type="submit" class="btn btn-primary btn-shadow btn-rounded w-md" id="send">Submit</button>
              </div> <!-- /col -->
            </div> <!-- /row -->

          </form> <!-- /form -->
        </div> <!-- end col -->

      </div> <!-- end row -->
          
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

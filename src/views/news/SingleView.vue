<template>
    <header class="position-relative overflow-hidden p-3 text-center header-bg">
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

          <div class="col-md-6 p-lg-5 mx-auto my-md-5">
            <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
              <ol class="breadcrumb ">
                <li class="breadcrumb-item text-white"><a href="#">Home</a></li>
                <li class="breadcrumb-item active text-white" aria-current="page">Library</li>
              </ol>
            </nav>
          </div>


          <div class="video-container">
            <div id="video-bg">
            </div>
          </div>
    </header>

    
    <section class="container-fluid p-0 bg-naqsh">
      <div class="album py-5">
        <div class="container">
            <div class="row mt-4">
                <div class="col-12">
                    <h2 class="display-5 link-body-emphasis mb-1">Sample blog post</h2>
                </div>
            </div>
            <div class="row justify-content-between mb-2 mt-2">
                <div class="col-4">
                    <p class="title">May 15, 2021</p>
                </div>
                <div class="col-4">
                    <div class="">
                        
                        <button type="button" class="btn btn-link btn-floating mx-1">
                            <i class="fab fa-facebook-f"></i>
                        </button>
        
                        <button type="button" class="btn btn-link btn-floating mx-1">
                            <i class="fab fa-google"></i>
                        </button>
        
                        <button type="button" class="btn btn-link btn-floating mx-1">
                            <i class="fab fa-twitter"></i>
                        </button>
        
                        <button type="button" class="btn btn-link btn-floating mx-1">
                            <i class="fab fa-github"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-8">
                  <article class="blog-post">
                    <p>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.</p>
                    <hr>
                    <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                    <h2>Blockquotes</h2>
                    <p>This is an example blockquote in action:</p>
                    <blockquote class="blockquote">
                      <p>Quoted text goes here.</p>
                    </blockquote>
                    <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                    <h3>Example lists</h3>
                    <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout. This is an example unordered list:</p>
                    <ul>
                      <li>First list item</li>
                      <li>Second list item with a longer description</li>
                      <li>Third list item to close it out</li>
                    </ul>
                    <p>And this is an ordered list:</p>
                    <ol>
                      <li>First list item</li>
                      <li>Second list item with a longer description</li>
                      <li>Third list item to close it out</li>
                    </ol>
                    <p>And this is a definition list:</p>
                    <dl>
                      <dt>HyperText Markup Language (HTML)</dt>
                      <dd>The language used to describe and define the content of a Web page</dd>
                      <dt>Cascading Style Sheets (CSS)</dt>
                      <dd>Used to describe the appearance of Web content</dd>
                      <dt>JavaScript (JS)</dt>
                      <dd>The programming language used to build advanced Web sites and applications</dd>
                    </dl>
                    <h2>Inline HTML elements</h2>
                    <p>HTML defines a long list of available inline tags, a complete list of which can be found on the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">Mozilla Developer Network</a>.</p>
                    <ul>
                      <li><strong>To bold text</strong>, use <code class="language-plaintext highlighter-rouge">&lt;strong&gt;</code>.</li>
                      <li><em>To italicize text</em>, use <code class="language-plaintext highlighter-rouge">&lt;em&gt;</code>.</li>
                      <li>Abbreviations, like <abbr title="HyperText Markup Language">HTML</abbr> should use <code class="language-plaintext highlighter-rouge">&lt;abbr&gt;</code>, with an optional <code class="language-plaintext highlighter-rouge">title</code> attribute for the full phrase.</li>
                      <li>Citations, like <cite>— Mark Otto</cite>, should use <code class="language-plaintext highlighter-rouge">&lt;cite&gt;</code>.</li>
                      <li><del>Deleted</del> text should use <code class="language-plaintext highlighter-rouge">&lt;del&gt;</code> and <ins>inserted</ins> text should use <code class="language-plaintext highlighter-rouge">&lt;ins&gt;</code>.</li>
                      <li>Superscript <sup>text</sup> uses <code class="language-plaintext highlighter-rouge">&lt;sup&gt;</code> and subscript <sub>text</sub> uses <code class="language-plaintext highlighter-rouge">&lt;sub&gt;</code>.</li>
                    </ul>
                    <p>Most of these elements are styled by browsers with few modifications on our part.</p>
                    <h2>Heading</h2>
                    <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                    <h3>Sub-heading</h3>
                    <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                    <pre><code>Example code block</code></pre>
                    <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
                  </article>
                </div>

                <div class="col-4">
                    <div>
                      <h4 class="fst-italic">Yangiliklar</h4>
                      <ul class="list-unstyled">
                        <li>
                          <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                            <svg class="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
                            <div class="col-lg-8">
                              <h6 class="mb-0">Example blog post title</h6>
                              <small class="text-body-secondary">January 15, 2023</small>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                            <svg class="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
                            <div class="col-lg-8">
                              <h6 class="mb-0">This is another blog post title</h6>
                              <small class="text-body-secondary">January 14, 2023</small>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                            <svg class="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
                            <div class="col-lg-8">
                              <h6 class="mb-0">Longer blog post title: This one has multiple lines!</h6>
                              <small class="text-body-secondary">January 13, 2023</small>
                            </div>
                          </a>
                        </li>
                      </ul>
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
    background-image: url('../../assets/background.png'); 
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

.header-bg{
  /* background-image: url('../../assets/image1.jpg'); 
  background-size: cover; 
  background-repeat: no-repeat;
  background-position: 100%; */
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
  width:25vh;
  background-image: url('../../assets/image1.jpg'); 
  background-size: cover; 
  background-repeat: no-repeat;
  background-position: 100%;
}

</style>

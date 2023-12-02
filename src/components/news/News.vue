<template>
    
    <NavbarV2 />

    <section class="container-fluid p-0 bg-naqsh">
      <div class="album py-5">
        <div class="container">
            <div class="row mt-4">
                <div class="col-12">
                    <h2 class="display-5 link-body-emphasis mb-1">{{ show.name }}</h2>
                </div>
            </div>
            <div class="row justify-content-between mb-2 mt-2">
                <div class="col-12 d-flex justify-content-between align-content-center">
                    <p class="title py-1">
                        <!-- May 15, 2021 -->
                        {{ new Date(show.added_date).toLocaleString('us', {year: 'numeric', month: '2-digit', day: '2-digit'}) }}
                    </p>
                
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
                <div class="col-md-8 col-12">
                  <article class="blog-post">
                    <p v-html="show.description"></p>
                    <hr>
                    <div v-html="show.intro"></div>

                    <!-- <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
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
                    <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p> -->
                  </article>
                </div>

                <div class="col-md-4 col-12">
                    <div>
                      <h4 class="fst-italic">Yangiliklar</h4>
                      <ul class="list-unstyled">
                        
                        <li v-for="item in news.data">
                            <RouterLink :to="'/news/'+item.id" type="button" class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top">
                                <svg class="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
                                <div class="col-lg-8">
                                    <h6 class="mb-0">{{item.name}}</h6>
                                    <small class="text-body-secondary">
                                        <!-- January 15, 2023 -->
                                        {{ new Date(item.added_date).toLocaleString('us', {year: 'numeric', month: '2-digit', day: '2-digit'}) }}
                                    </small>
                                </div>
                            </RouterLink>
                        </li>
                      </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>

    <Footer/>
</template>

<script>
  
  import NavbarV2 from '../layout/NavbarV2.vue'
  import Footer from '../layout/Footer.vue';
  import { mapState } from 'vuex';

  export default{
    components:{
        Footer,
        NavbarV2
    },
    created(){
        this.$store.dispatch('getAll');
        this.$store.dispatch('show', this.$route.params.id)
    },
    computed: {
        ...mapState({
            news: (state) => state.news.news,
            show: (state) => state.news.show,
            isLoading: (state) => state.news.isLoading,
            error: (state) => state.news.errors,
        })
    }
  }

</script>

<style scoped>



</style>

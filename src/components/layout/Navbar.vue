<template>
    <nav class="navbar navbar-expand-lg" aria-label="Offcanvas navbar large">
        <div class="container">
            <div class="col-md-3 mb-2 mb-md-0" style="text-align: left;">
                <RouterLink to="/" class="d-inline-flex link-body-emphasis text-decoration-none">
                    <img v-if="mode == 'white'" src="@/assets/logo-white.svg" alt="">
                    <img v-if="mode == 'dark'" src="@/assets/logo-dark.svg" alt="">
                </RouterLink>
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
                    <RouterLink :class="'text-'+mode" to="/" class="nav-link px-2">Bosh sahifa</RouterLink>
                    <RouterLink :class="'text-'+mode" to="/platforma-maqsadi" class="nav-link px-2">Platforma maqsadi</RouterLink>
                    <RouterLink :class="'text-'+mode" to="/qollanma" class="nav-link px-2">Qo'llanmalar</RouterLink>
                    <RouterLink :class="'text-'+mode" to="/about" class="nav-link px-2">Bog'lanish</RouterLink>
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
                        <img src="@/assets/local/uzb.png" class="left-image" alt="">
                        O'zbekcha
                    </button>
                    <ul class="dropdown-menu" style="min-width: 4vw; background-color: #0a58ca;">
                        <li>
                        <a class="dropdown-item" href="#">
                            <img src="@/assets/local/en.png" class="left-image" alt="">
                            English
                        </a>
                        </li>
                        <li>
                        <a class="dropdown-item" href="#">
                            <img src="@/assets/local/ru.png" class="left-image" alt="">
                            Русский
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div v-if="!isLoggedIn" class="btn-group me-2" role="group" aria-label="First group">
                    <button type="button" class="btn btn-primary text-white">
                        <RouterLink to="/login" class="nav-link px-2 text-white btn btn-primary">Tizimga kirish</RouterLink>
                    </button>
                    <!-- <button type="button" class="btn btn-primary text-white">
                        <RouterLink to="/register" class="nav-link px-2 text-white btn btn-primary">Ro'yxatdan o'tish</RouterLink>
                    </button> -->
                    </div>
                    <div v-else class="btn-group me-2" role="group" aria-label="Second group">
                    <button type="button" class="btn btn-primary me-2 text-white  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="@/assets/user-solid.svg" alt="">
                        {{ currentUser.name }}
                    </button>
                    <ul class="dropdown-menu" style="background-color: #0a58ca;">
                        <RouterLink to="/lesson" class="dropdown-item">Profile</RouterLink>
                        <li><a @click="logout" class="dropdown-item" href="#">Chiqish</a></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </nav>
</template>
<script>
import { mapGetters } from 'vuex';
import {gettersTypes} from '@/modules/types'
export default {
    props:{
        mode:{
            type: String,
            default: 'white'
        }
    },
    computed:{
        ...mapGetters({
            isLoggedIn: gettersTypes.isLoggedIn,
            currentUser: gettersTypes.currentUser
        }),
    }
}
</script>
<style>
.left-image{
  width: 20px;
  height: auto;
  margin-right: 5px;
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

.dropdown-menu .dropdown-item{
  color: white;
}
.dropdown-menu .dropdown-item:hover{
  background: #0a58ca;
  color: white;
}
 
</style>
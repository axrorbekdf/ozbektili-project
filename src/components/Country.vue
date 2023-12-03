<template>
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

                <li v-for="item in countries" class="list-group-item d-flex justify-content-between align-items-center border-0">
                    {{ item.name }} 
                    <span class="badge bg-primary rounded-pill">{{ item.users}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    created(){
        
    },
    computed: {
        ...mapState({
            countries: (state) => state.country.countries,
            isLoading: (state) => state.country.isLoading,
            error: (state) => state.country.errors,
        })
    }
}
</script>
<style>
    
</style>
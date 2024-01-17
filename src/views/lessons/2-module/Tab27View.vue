<template>
    <div class="container">
        <div class="row mt-5">
            <p class="text-danger fw-bold"  style="font-size: 10pt;">{{ error }}</p>
            <h3 class="fw-bold text-primary my-3">O‘qing. </h3>

            <div class="col-6">
                <img src="@/assets/2bolim/images/2151.jpg" class="rounded float-start m-2" alt="...">
            </div>
            <div class="col-6 d-flex align-items-center">
                <p class="fw-semibold">Bu &ndash; O&lsquo;zbekistonning bayrog&lsquo;i. Unda 4 ta rang bor: ko&lsquo;k, qizil, oq va yashil. Bayrog&lsquo;imizda oy va yulduzlar ham bor. Men bayrog&lsquo;imizni yaxshi ko&lsquo;raman.</p>
            </div>
            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab26View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab28View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        error: {
            type: String
        }
    },
    methods:{
        chengeTabView(tab){
            this.$emit('chengeTabView', tab);
        }
    }
}
</script>
<style>
    
</style>
<template>
    <div class="container">
        <div class="row mt-5">
            <p class="text-danger fw-bold"  style="font-size: 10pt;">{{ error }}</p>
            <h3 class="fw-bold text-primary my-3">O’ylang va toping. Tartiblang.</h3>


            <div class="col-12 my-3">
                <button class="btn btn-info mx-3" style="border-radius: 100%;">1</button>
                <button class="btn btn-danger py-1 mx-3" style="border-radius: 0;">televizorni</button>
                <button class="btn btn-danger py-1 mx-3" style="border-radius: 0;">sotib olyapti</button>
                <button class="btn btn-danger py-1 mx-3" style="border-radius: 0;">Akmal</button>
                <button class="btn btn-danger py-1 mx-3" style="border-radius: 0;">supermarketdan</button>
            </div>

            <div class="col-12 my-3">
                <button class="btn btn-info mx-3" style="border-radius: 100%;">2</button>
                <button class="btn btn-danger py-1 mx-3" style="border-radius: 0;">davolayapti</button>
                <button class="btn btn-danger py-1 mx-3" style="border-radius: 0;">shifokor</button>
                <button class="btn btn-danger py-1 mx-3" style="border-radius: 0;">kasalxonada</button>
                <button class="btn btn-danger py-1 mx-3" style="border-radius: 0;">bolalarni</button>
            </div>

            <div class="col-12 my-3">
                <button class="btn btn-info mx-3" style="border-radius: 100%;">3</button>
                <button class="btn btn-danger py-1 mx-3" style="border-radius: 0;">shahardan</button>
                <button class="btn btn-danger py-1 mx-3" style="border-radius: 0;">biz</button>
                <button class="btn btn-danger py-1 mx-3" style="border-radius: 0;">ketyapmiz</button>
                <button class="btn btn-danger py-1 mx-3" style="border-radius: 0;">qishloqqa</button>
            </div>

            <div class="col-12 my-3">
                <button class="btn btn-info mx-3" style="border-radius: 100%;">4</button>
                <button class="btn btn-danger py-1 mx-3" style="border-radius: 0;">jo‘natyaptilar</button>
                <button class="btn btn-danger py-1 mx-3" style="border-radius: 0;">Angliyaga</button>
                <button class="btn btn-danger py-1 mx-3" style="border-radius: 0;">xatlarni</button>
                <button class="btn btn-danger py-1 mx-3" style="border-radius: 0;">ular</button>
            </div>

            <div class="col-12 my-3">
                <button class="btn btn-info mx-3" style="border-radius: 100%;">5</button>
                <button class="btn btn-danger py-1 mx-3" style="border-radius: 0;">beshinchi</button>
                <button class="btn btn-danger py-1 mx-3" style="border-radius: 0;">yashayapti</button>
                <button class="btn btn-danger py-1 mx-3" style="border-radius: 0;">Kamola</button>
                <button class="btn btn-danger py-1 mx-3" style="border-radius: 0;">uyda</button>
            </div>

            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab16View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab17View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Darslarni tugatish <i class="fa-solid fa-arrow-right"></i></button>
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
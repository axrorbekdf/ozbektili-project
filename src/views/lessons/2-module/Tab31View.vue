<template>
    <div class="container">
        <div class="row mt-5">
            <p class="text-danger fw-bold"  style="font-size: 10pt;">{{ error }}</p>
            <h3 class="fw-bold text-primary my-3">Grammatika.</h3>


            

            <div class="col-12 col-md-6">
                <table class="table table-bordered text-center align-middle">
                    <tbody>
                        <tr>
                            <th>1</th>
                            <th>Birinchi</th>
                            <th>1-uy</th>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Ikkinchi</td>
                            <td>2-sinf</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Uchinchi</td>
                            <td>3-o‘rin</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>To‘rtinchi</td>
                            <td>4-hafta</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Beshinchi</td>
                            <td>5-farzand</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Oltinchi</td>
                            <td>6-qator</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Yettinchi</td>
                            <td>7-mo‘jiza</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Sakkizinchi</td>
                            <td>8-chipta</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>To‘qqizinchi</td>
                            <td>9-xona</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>O‘ninchi</td>
                            <td>10-avtobus</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="col-12 col-md-6 d-flex align-items-center">
                <h3 class="alert alert-success text-end">
                    <span>…-nchi/-inchi = -</span>
                </h3>
                <img src="@/assets/2bolim/images/341.jpg" class="img-fluid" alt="...">
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
<template>
    <div class="container">
        <div class="row mt-5">
            <p class="text-danger fw-bold"  style="font-size: 10pt;">{{ error }}</p>
            <h3 class="fw-bold text-primary my-3">O‘ylang va toping.</h3>
            
            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab25View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab27View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>

            <h4 class="text-primary text-center">Boshqotirma</h4>
            <div class="col-2 fw-medium">
                <p>ichmoq</p>
                <p>yashil</p>
                <p>ko&lsquo;k</p>
                <p>ustida</p>
                <p>stol</p>
                <p>o&lsquo;qimoq</p>
                <p>televizor</p>
                <p>mehmonxona</p>
                <p>orqasida</p>
            </div>
            
            <div class="col-8">
                <button @click="generate()">Boshlash</button>
                <button>{{ word }}</button>
                <table class="table table-bordered align-middle" style="text-align:left;">
                    <tbody>
                        <tr>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)">S</td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                        </tr>
                        <tr>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)">A</td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                        </tr>
                        <tr>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)">L</td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                        </tr>
                        <tr>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)">O</td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                        </tr>
                        <tr>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)">M</td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                        </tr>
                        <tr>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                        </tr>
                        <tr>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                        </tr>
                        <tr>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                            <td @click="checkChar($event)"></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="col-2 fw-medium">
                <p>sariq</p>
                <p>uxlamoq</p>
                <p>qora</p>
                <p>oq</p>
                <p>divan</p>
                <p>tagida</p>
                <p>oshxona</p>
                <p>karavot</p>
                <p>tinglamoq</p>
            </div>

            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab25View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab27View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
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
    data(){
        return {
            word: "",
            words: ['salom'],
        }
    },
    methods:{
        chengeTabView(tab){
            this.$emit('chengeTabView', tab);
        },

        generate(){
            for(let node of this.$el.querySelectorAll("td")){
                // node.onclick = function(){
                //     if(node.className == ""){
                //         node.className = "table-success"
                //     }else{
                //         node.className = ""
                //     }
                
                //     this.word = this.word + node.textContent.toLocaleLowerCase();
                //     console.log(this.word);
                //     // console.log((this.words).includes(word))
                // }

                if(node.textContent != "") continue;

                let charcode = Math.round(65+Math.random()*25);

                node.textContent = String.fromCharCode(charcode);
            }
        },

        checkChar(e){

            console.log(e.target.textContent);
            // if(node.className == ""){
            //     node.className = "table-success"
            // }else{
            //     node.className = ""
            // }
        
            // this.word = this.word + node.textContent.toLocaleLowerCase();
            // console.log(this.word);
            // console.log((this.words).includes(word))
        }
    }
}
</script>
<style scoped>
    
</style>
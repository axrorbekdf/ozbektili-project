<template>
    <div class="container">
        <div class="row mt-5">

        <h3 class="fw-bold text-primary my-3">O‘ylang va toping.</h3>

        <div class="col-12 d-flex justify-content-between my-3">
            <button @click="chengeTabView('Tab33View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                <i class="fa-solid fa-arrow-left"></i> Oldingisi 
            </button>
            <button @click="chengeTabView('Tab35View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
        </div>
            

        <h4 class="text-primary text-center">Boshqotirma</h4>
        <div class="col-2 fw-medium">
            <p v-for="item,index in words1" :key="index" v-html="item"></p>
        </div>
        <div class="col-10">
            <div class="d-flex align-items-center  my-2">
                <button v-if="status" @click="generate()" class="btn d-inline" style="background-color: hsla(218, 71%, 51%, 0.711); color: hsl(0, 0%, 98%);">Qayta boshlash</button>
                <h4 class="d-inline pt-2 mx-4" v-if="word.length > 0">So'z: {{ word }}</h4>
            </div>
            <table class="table table-bordered align-middle" style="text-align:center;">
                <tbody>
                    <tr>
                        <td  @click="checkChar($event)">A</td>
                        <td  @click="checkChar($event)">Q</td>
                        <td  @click="checkChar($event)">I</td>
                        <td  @click="checkChar($event)">SH</td>
                        <td  @click="checkChar($event)">A</td>
                        <td  @click="checkChar($event)">J</td>
                        <td  @click="checkChar($event)">U</td>
                        <td  @click="checkChar($event)">M</td>
                        <td  @click="checkChar($event)">A</td>
                        <td  @click="checkChar($event)">B</td>
                    </tr>
                    <tr>
                        <td  @click="checkChar($event)">L</td>
                        <td  @click="checkChar($event)">G</td>
                        <td  @click="checkChar($event)">Y</td>
                        <td  @click="checkChar($event)">A</td>
                        <td  @click="checkChar($event)">K</td>
                        <td  @click="checkChar($event)">SH</td>
                        <td  @click="checkChar($event)">A</td>
                        <td  @click="checkChar($event)">N</td>
                        <td  @click="checkChar($event)">B</td>
                        <td  @click="checkChar($event)">A</td>
                    </tr>
                    <tr>
                        <td  @click="checkChar($event)">J</td>
                        <td  @click="checkChar($event)">D</td>
                        <td  @click="checkChar($event)">E</td>
                        <td  @click="checkChar($event)">R</td>
                        <td  @click="checkChar($event)">I</td>
                        <td  @click="checkChar($event)">B</td>
                        <td  @click="checkChar($event)">A</td>
                        <td  @click="checkChar($event)">H</td>
                        <td  @click="checkChar($event)">O</td>
                        <td  @click="checkChar($event)">R</td>
                    </tr>
                    <tr>
                        <td  @click="checkChar($event)">A</td>
                        <td  @click="checkChar($event)">D</td>
                        <td  @click="checkChar($event)">U</td>
                        <td  @click="checkChar($event)">SH</td>
                        <td  @click="checkChar($event)">A</td>
                        <td  @click="checkChar($event)">N</td>
                        <td  @click="checkChar($event)">B</td>
                        <td  @click="checkChar($event)">A</td>
                        <td  @click="checkChar($event)">R</td>
                        <td  @click="checkChar($event)">O</td>
                    </tr>
                    <tr>
                        <td  @click="checkChar($event)">D</td>
                        <td  @click="checkChar($event)">CH</td>
                        <td  @click="checkChar($event)">O</td>
                        <td  @click="checkChar($event)">R</td>
                        <td  @click="checkChar($event)">SH</td>
                        <td  @click="checkChar($event)">A</td>
                        <td  @click="checkChar($event)">N</td>
                        <td  @click="checkChar($event)">B</td>
                        <td  @click="checkChar($event)">A</td>
                        <td  @click="checkChar($event)">Q</td>
                    </tr>
                    <tr>
                        <td  @click="checkChar($event)">Z</td>
                        <td  @click="checkChar($event)">A</td>
                        <td  @click="checkChar($event)">K</td>
                        <td  @click="checkChar($event)">U</td>
                        <td  @click="checkChar($event)">Z</td>
                        <td  @click="checkChar($event)">SH</td>
                        <td  @click="checkChar($event)">A</td>
                        <td  @click="checkChar($event)">N</td>
                        <td  @click="checkChar($event)">B</td>
                        <td  @click="checkChar($event)">A</td>
                    </tr>
                    <tr>
                        <td  @click="checkChar($event)">B</td>
                        <td  @click="checkChar($event)">P</td>
                        <td  @click="checkChar($event)">A</td>
                        <td  @click="checkChar($event)">Y</td>
                        <td  @click="checkChar($event)">SH</td>
                        <td  @click="checkChar($event)">A</td>
                        <td  @click="checkChar($event)">N</td>
                        <td  @click="checkChar($event)">B</td>
                        <td  @click="checkChar($event)">A</td>
                        <td  @click="checkChar($event)">T</td>
                    </tr>
                    <tr>
                        <td  @click="checkChar($event)">S</td>
                        <td  @click="checkChar($event)">E</td>
                        <td  @click="checkChar($event)">SH</td>
                        <td  @click="checkChar($event)">A</td>
                        <td  @click="checkChar($event)">N</td>
                        <td  @click="checkChar($event)">B</td>
                        <td  @click="checkChar($event)">A</td>
                        <td  @click="checkChar($event)">Y</td>
                        <td  @click="checkChar($event)">O</td>
                        <td  @click="checkChar($event)">Z</td>
                    </tr>
                </tbody>
            </table>
        </div>
        

        <!-- <div class="col-md-3 col-12">
            <div class="card mb-3 mx-auto" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                <img src="@/assets/ikkidost.png" class="card-img-top mx-auto" alt="..." style="width:120px">
                <div class="card-body text-center">
                    <h5 class="card-title">Sog' bo'ling !</h5>
                    <button @click="toggleAudio('sog boling')" class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                    <audio id="sog boling">
                        <source src="@/assets/2dars/qiz/sog boling.mp3" type="audio/mpeg">
                    </audio>
                </div>
            </div>
        </div> -->

        <div class="col-12 d-flex justify-content-between my-3">
            <button @click="chengeTabView('Tab33View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                <i class="fa-solid fa-arrow-left"></i> Oldingisi 
            </button>
            <button @click="chengeTabView('Tab35View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
        </div>

        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            word: "",
            words1: ['bahor',,'kuz','yoz','qish','dushanba','seshanba','chorshanba','payshanba','juma','yakshanba','shanba'],
            words2: ['sariq','uxlamoq','qora','oq','divan','tagida','oshxona','karavot','tinglamoq'],
            nodes: [],
            status: false,
        }
    },
    methods:{
        toggleAudio(item) {
            var audio = document.getElementById(`${item}`);
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        },
        chengeTabView(tab){
            this.$emit('chengeTabView', tab);
        },

        generate(){
            this.word = "";
            for (let index = 0; index < this.nodes.length; index++) { 
                const element = this.nodes[index];

                element.className = "";
            }
            this.nodes = [];
        },

        checkChar(e){
            this.status = true;
            this.nodes.push(e.target);

            if(e.target.className == "" || e.target.className == "table-success"){
                e.target.className = "table-info"
            }else if(e.target.className != "table-success"){ 
                e.target.className = ""
            }
        
            
            if(e.target.className == "table-info"){
                this.word = this.word + e.target.textContent.toLocaleLowerCase(); 
            }

            // let soz = "";
            // for (let index = 0; index < this.nodes.length; index++) { 
            //     const element = this.nodes[index];

            //     if(element.className == "table-info"){ 
            //         soz = soz + element.textContent.toLocaleLowerCase(); 
            //     }else{
            //         this.nodes.slice(index,2);
            //     }
            // }

            // this.word = soz;
            // console.log(this.nodes);
            
            
            if((this.words1).includes(this.word) || (this.words2).includes(this.word)){

                for (let index = 0; index < this.nodes.length; index++) {
                    this.nodes[index].className = "table-success";
                }

                if((this.words1).includes(this.word)){
                    
                    let newArray = [];
                    for (let index = 0; index < this.words1.length; index++) {
                        let element = this.words1[index];
                        if(this.word == element){
                            element = `<span class="badge text-bg-primary">${element}</span>`;
                        }

                        newArray[index] = element;
                    }
                    this.words1 = newArray;
                }

                if((this.words2).includes(this.word)){
                    
                    let newArray = [];
                    for (let index = 0; index < this.words2.length; index++) {
                        let element = this.words2[index];
                        if(this.word == element){
                            element = `<span class="badge text-bg-primary">${element}</span>`;
                        }

                        newArray[index] = element;
                    }
                    this.words2 = newArray;
                }

                this.nodes = [];
                this.word = "";
            }
        },
    }
}
</script>
<style>
    
</style>
<template>
    <div class="container">
        <div class="row mt-5">
            
            <div class="col-6">
                <h3 class="fw-bold text-primary">Alifbo harflari? </h3>
                <p class="text">Tinglang! Takrorlang!</p>
            </div>
            <div class="col-6 d-flex justify-content-end align-items-center ">
                <button @click="chengeTabView('Tab2View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>


            <div class="card overflow-x-auto">
                <OrganizationChart :value="data" collapsible>
                    <template #person="slotProps">
                        <div class="flex flex-column">
                            <div class="flex flex-column align-items-center">
                                <img :alt="slotProps.node.data.name" :src="slotProps.node.data.image" class="mb-3 w-3rem h-3rem" />
                                <span class="font-bold mb-2">{{ slotProps.node.data.name }}</span>
                                <span>{{ slotProps.node.data.title }}</span>
                            </div>
                        </div>
                    </template>
                    <template #default="slotProps">
                        <span>{{ slotProps.node.label }}</span>
                    </template>
                </OrganizationChart>
            </div>

            
            <!-- <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('a')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: blueviolet;"></i> 
                        </button>
                        <audio id="a">
                            <source src="@/assets/ovoz/ovoz_qiz/a.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/ayiq.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: blueviolet;">Aa</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: blueviolet;"><span style="color: red;">A</span>yiq</p>
                </div>
            </div>
            </div> -->
            
            <div class="col-12 d-flex justify-content-end align-items-center my-2">
                <button @click="chengeTabView('Tab2View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div class="col-12 my-3"></div>
            
        </div>
    </div>
</template>
<script>
import OrganizationChart from 'primevue/organizationchart';

export default {
    components:{
        OrganizationChart
    },
    data() {
        return {
            data: {
                key: '0',
                type: 'person',
                styleClass: 'bg-indigo-500 text-white border-round-xl',
                data: {
                    image: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
                    name: 'Amy Elsner',
                    title: 'CEO'
                },
                children: [
                    {
                        key: '0_0',
                        type: 'person',
                        styleClass: 'bg-purple-500 text-white border-round-xl',
                        data: {
                            image: 'https://primefaces.org/cdn/primevue/images/avatar/annafali.png',
                            name: 'Anna Fali',
                            title: 'CMO'
                        },
                        children: [
                            {
                                label: 'Sales',
                                styleClass: 'bg-purple-500 text-white border-round-xl'
                            },
                            {
                                label: 'Marketing',
                                styleClass: 'bg-purple-500 text-white border-round-xl'
                            }
                        ]
                    },
                    {
                        key: '0_1',
                        type: 'person',
                        styleClass: 'bg-teal-500 text-white border-round-xl',
                        data: {
                            image: 'https://primefaces.org/cdn/primevue/images/avatar/stephenshaw.png',
                            name: 'Stephen Shaw',
                            title: 'CTO'
                        },
                        children: [
                            {
                                label: 'Development',
                                styleClass: 'bg-teal-500 text-white border-round-xl'
                            },
                            {
                                label: 'UI/UX Design',
                                styleClass: 'bg-teal-500 text-white border-round-xl'
                            }
                        ]
                    }
                ]
            }
        };
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
        }
    }
}
</script>
<style scoped>
</style>
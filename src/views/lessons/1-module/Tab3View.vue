<template>
    <div class="container">
        <div class="row mt-5">
            
            <div class="col-6">
                <h3 class="fw-bold text-primary">Alifbo harflari? </h3>
                <p class="text">Tinglang! Takrorlang!</p>
            </div>
            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab2View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab4View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>
             
            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('a', 'ayiq')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="a">
                            <source src="@/assets/ovoz/ovoz_qiz/a.mp3" type="audio/mpeg">
                        </audio>
                        <audio id="ayiq">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/ayiq.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/ayiq.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Aa</p>
                    </div>
                    <Latter @chengeLatterStatus="chengeLatterStatusHandler"  :id="6" :current_latter="'A'" :incomplete="'yiq'"/>
                </div>
            </div>
            </div>
            
            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('d', 'deraza')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="d">
                            <source src="@/assets/ovoz/ovoz_qiz/d.mp3" type="audio/mpeg">
                        </audio>
                        <audio id="deraza">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/deraza.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Dd</p>
                        <img src="@/assets/alifbo/image/deraza.png" style="width: 12vh;" alt="...">
                    </div>
                    <Latter @chengeLatterStatus="chengeLatterStatusHandler" :id="7" :current_latter="'D'" :incomplete="'eraza'"/>
                </div>
            </div>
            </div>
            
            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('f', 'fil')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="f">
                            <source src="@/assets/ovoz/ovoz_qiz/f.mp3" type="audio/mpeg">
                        </audio>
                        <audio id="fil">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/fil.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/fill.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Ff</p>
                    </div>
                    <Latter @chengeLatterStatus="chengeLatterStatusHandler" :id="8" :current_latter="'F'" :incomplete="'il'"/>
                </div>
            </div>
            </div>
            

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('i','ilon')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="i">
                            <source src="@/assets/ovoz/ovoz_qiz/i.mp3" type="audio/mpeg">
                        </audio>
                        <audio id="ilon">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/ilon.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/ilon.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Ii</p>
                    </div>
                    
                    <Latter @chengeLatterStatus="chengeLatterStatusHandler" :id="9" :current_latter="'I'" :incomplete="'lon'"/>
                </div>
            </div>
            </div>
            

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('k','kitob')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="k">
                            <source src="@/assets/ovoz/ovoz_qiz/k.mp3" type="audio/mpeg">
                        </audio>
                        <audio id="kitob">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/kitob.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/kitob.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Kk</p>
                    </div>
                    <Latter @chengeLatterStatus="chengeLatterStatusHandler" :id="10" :current_latter="'K'" :incomplete="'itob'"/>
                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('m', 'mushuk')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="m">
                            <source src="@/assets/ovoz/ovoz_qiz/m.mp3" type="audio/mpeg">
                        </audio>
                        <audio id="mushuk">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/mushuk.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/mushuk.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 25pt; color: rgb(244, 72, 24);">Mm</p>
                    </div>
                    <Latter @chengeLatterStatus="chengeLatterStatusHandler" :id="11" :current_latter="'M'" :incomplete="'ushuk'"/>
                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('n', 'non')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="n">
                            <source src="@/assets/ovoz/ovoz_qiz/n.mp3" type="audio/mpeg">
                        </audio>
                        <audio id="non">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/non.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/non.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Nn</p>
                    </div> 
                    <Latter @chengeLatterStatus="chengeLatterStatusHandler" :id="12" :current_latter="'N'" :incomplete="'on'"/>
                </div>
            </div>
            </div>


            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('p', 'piyoz')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="p">
                            <source src="@/assets/ovoz/ovoz_qiz/p.mp3" type="audio/mpeg">
                        </audio>
                        <audio id="piyoz">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/piyoz.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/piyoz.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Pp</p>
                    </div>
                    <Latter @chengeLatterStatus="chengeLatterStatusHandler" :id="13" :current_latter="'P'" :incomplete="'iyoz'"/>
                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('r', 'raketa')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="r">
                            <source src="@/assets/ovoz/ovoz_qiz/r.mp3" type="audio/mpeg">
                        </audio>
                        <audio id="raketa">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/raketa.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/raketa.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Rr</p>
                    </div>
                    <Latter @chengeLatterStatus="chengeLatterStatusHandler" :id="14" :current_latter="'R'" :incomplete="'aketa'"/>
                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('u', 'uzum')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="u">
                            <source src="@/assets/ovoz/ovoz_qiz/u.mp3" type="audio/mpeg">
                        </audio>
                        <audio id="uzum">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/uzum.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/uzum.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Uu</p>
                    </div>
                    <Latter @chengeLatterStatus="chengeLatterStatusHandler" :id="15" :current_latter="'U'" :incomplete="'zum'"/>
                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('x', 'xo`roz')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="x">
                            <source src="@/assets/ovoz/ovoz_qiz/x.mp3" type="audio/mpeg">
                        </audio>
                        <audio id="xo`roz">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/xo`roz.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/xoroz.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Xx</p>
                    </div>
                    <Latter @chengeLatterStatus="chengeLatterStatusHandler" :id="16" :current_latter="'X'" :incomplete="'o\'roz'"/>
                </div>
            </div>
            </div>


            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('z','zebra')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="z">
                            <source src="@/assets/ovoz/ovoz_qiz/z.mp3" type="audio/mpeg">
                        </audio>
                        <audio id="zebra">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/zebra.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/zebra.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Zz</p>
                    </div>
                    <Latter @chengeLatterStatus="chengeLatterStatusHandler" :id="17" :current_latter="'Z'" :incomplete="'ebra'"/>
                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('o`','o`rdak')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="o`">
                            <source src="@/assets/ovoz/ovoz_qiz/o`.mp3" type="audio/mpeg">
                        </audio>
                        <audio id="o`rdak">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/o`rdak.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/ordak.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">O'o'</p>
                    </div>
                    <Latter @chengeLatterStatus="chengeLatterStatusHandler" :id="18" :current_latter="'O`'" :incomplete="'rdak'"/>
                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('g`','g`ildirak')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="g`">
                            <source src="@/assets/ovoz/ovoz_qiz/g`.mp3" type="audio/mpeg">
                        </audio>
                        <audio id="g`ildirak">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/g`ildirak.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/gildirak.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">G'g'</p>
                    </div>
                    <Latter @chengeLatterStatus="chengeLatterStatusHandler" :id="19" :current_latter="'G`'" :incomplete="'ildirak'"/>
                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('sh','sham')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="sh">
                            <source src="@/assets/ovoz/ovoz_qiz/sh.mp3" type="audio/mpeg">
                        </audio>
                        <audio id="sham">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/sham.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/sham.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 25pt; color: rgb(244, 72, 24);">Shsh</p>
                    </div>
                    <Latter @chengeLatterStatus="chengeLatterStatusHandler" :id="20" :current_latter="'Sh'" :incomplete="'am'"/>
                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('ch','chumoli')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="ch">
                            <source src="@/assets/ovoz/ovoz_qiz/ch.mp3" type="audio/mpeg">
                        </audio>
                        <audio id="chumoli">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/chumoli.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/chumoli.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 25pt; color: rgb(244, 72, 24);">Chch</p>
                    </div>
                    <Latter @chengeLatterStatus="chengeLatterStatusHandler" :id="21" :current_latter="'Ch'" :incomplete="'umoli'"/>
                </div>
            </div>
            </div>

            <!-- <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('ng')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="ng">
                            <source src="@/assets/ovoz/ovoz_qiz/ng.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/bodring.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 25pt; color: rgb(244, 72, 24);">Ngng</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: rgba(10, 39, 182, 0.575);">Bodri<span style="color: red;">_</span></p>
                    <Latter :id="7" :current_latter="'D'" :incomplete="'eraza'"/>
                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('tutuq belgisi')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="tutuq belgisi">
                            <source src="@/assets/ovoz/ovoz_qiz/tutuq belgisi.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/ok.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">'</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: rgba(10, 39, 182, 0.575);">She<span style="color: red;">_</span>r</p>
                </div>
            </div>
            </div> -->
            
            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab2View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab4View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            
        </div>
    </div>
</template>
<script>
import Latter from '../../../components/Latter.vue'
export default {
    components:{Latter},
    data(){
        return {
            status: false
        }
    },
    methods:{
        toggleAudio(item, latter = null) {

            var audio = document.getElementById(`${item}`);
            
            if(this.status){
                audio = document.getElementById(`${latter}`);
            }

            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        },

        chengeLatterStatusHandler(){
            this.status = true;
        },

        getcheckWork(){
            this.$store.dispatch('getExercises', {
                module_id: 1, 
                unit_id: 1, 
            });
        },

        chengeTabView(tab){
            this.$emit('chengeTabView', tab);
        },

        
    },

    created(){
        // this.getcheckWork()
        // this.checkAnswerByStatus();
    }
}
</script>
<style scoped>
</style>
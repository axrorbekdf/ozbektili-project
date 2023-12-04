<template>
    <div class="w-100">
        <h2 class="fw-bold">Ro'yhatdan o'tish</h2> 
        <div class="text-start mb-4">
            <p>Akkauntingiz bormi? <RouterLink to="/login" class="link-underline-light">Kiring</RouterLink></p>
        </div>
        <ValidationError v-if="validationErrors" :errors="validationErrors" />
        
        <FormWizard @on-complete="submitHandler" color="#307AD5" nextButtonText="Keyingi" backButtonText="Oldingi" finishButtonText="Ro'yhatdan o'tish">
            <TabContent 
            title="Umumiy ma'lumotlar" 
            customIcon="<i class='fa-regular fa-user'></i>">

                <div style="padding: 2vh 0;">
                    <div class="row">
                    <div class="col-md-6">
                        <div class="form-outline mt-2">
                            <label class="form-label fw-medium" for="form3Example1">Familiyasi *</label>
                            <input v-model="surname" type="text" id="form3Example1" class="form-control" placeholder="Familiya kiriting"/>
                            <ValidationError v-if="validationErrors" :item="'surname'" :errors="validationErrors" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-outline mt-2">
                            <label class="form-label fw-medium" for="form3Example2">Ismi *</label>
                            <input v-model="name" type="text" id="form3Example2" class="form-control" placeholder="Ismi kiriting"/>
                            <ValidationError v-if="validationErrors" :item="'name'" :errors="validationErrors" />
                        </div>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-md-12">
                        <div class="form-outline mt-2">
                            <label class="form-label fw-medium" for="form3Example3">Otasining ismi</label>
                            <input v-model="lastname" type="text" id="form3Example3" class="form-control" placeholder="Otasining ismi kiriting"/>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-outline mt-3">
                            <label class="form-label fw-medium">Jinsi *</label><br>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" selected id="inlineRadio1" value="option1">
                                <label class="form-check-label" for="inlineRadio1">Erkak</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                                <label class="form-check-label" for="inlineRadio2">Ayol</label>
                            </div>
                        
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="flex-auto form-outline mt-3">
                            <label class="form-label fw-medium" for="icondisplay">Tugʼilgan sanasi *</label>
                            <Calendar v-model="date_of_birth" showIcon iconDisplay="input" inputId="icondisplay" class="w-100 sana" placeholder="Sanani tanlang" />
                            <ValidationError v-if="validationErrors" :item="'date_of_birth'" :errors="validationErrors" />
                        </div>
                    </div>
                    </div>
                </div>
            </TabContent>
            <TabContent
            title="Qo'shimcha ma'lumotlar"  
            customIcon="<i class='fa-solid fa-lightbulb'></i>" > 
                <div style="padding: 2vh 0;">
                    <div class="row">
                        <div class="col-md-6 flex justify-content-center">
                            <label class="form-label fw-medium mt-2" for="form3Example6">Bandlik maqomi</label><br>
                            <Dropdown v-model="selectedBandlik" :options="bandlik" optionLabel="name" placeholder="Bandlikni tanlang" class="w-100">
                                <template #value="slotProps">
                                    <div v-if="slotProps.value" class="flex align-items-center ">
                                        {{ slotProps.value.name }}
                                    </div>
                                    <span v-else>
                                        {{ slotProps.placeholder }}
                                    </span>
                                </template>
                                <template #option="slotProps">
                                    <div class="flex align-items-center">
                                        {{ slotProps.option.name }}
                                    </div>
                                </template>
                            </Dropdown>
                        </div>
                    
                        <div class="col-md-6 flex justify-content-center">
                            <label class="form-label fw-medium mt-2" for="form3Example6">Xorijiy davlat *</label><br>
                            <Dropdown v-model="selectedCountry" :options="countries" filter optionLabel="name" placeholder="Davlatni tanlang" class="w-100">
                                <template #value="slotProps">
                                    <div v-if="slotProps.value" class="flex align-items-center ">
                                        <img :alt="slotProps.value.label" :src="slotProps.value.image" style="width: 25px;"  />
                                        {{ slotProps.value.name }}
                                    </div>
                                    <span v-else>
                                        {{ slotProps.placeholder }}
                                    </span>
                                </template>
                                <template #option="slotProps">
                                    <div class="flex align-items-center">
                                        <img :alt="slotProps.option.label" :src="slotProps.option.image" style="width: 25px;" />
                                        {{ slotProps.option.name }}
                                    </div>
                                </template>
                            </Dropdown>
                        </div>

                        
                    </div>
                </div>
            </TabContent>
            <TabContent title="Login va parol" customIcon="<i class='fa-solid fa-passport'></i>">
                <div style="padding: 2vh 0;">
                    <!-- Email input -->
                    <div class="form-outline mt-2">
                        <label class="form-label fw-medium" for="form3Example7">Elektron pochta manzili (login) *</label>
                        <input v-model="email" type="email" id="form3Example7" class="form-control" placeholder="Elektron pochta manzili kiriting"/>
                        <ValidationError v-if="validationErrors" :item="'email'" :errors="validationErrors" />
                    </div>

                    <!-- Email input -->
                    <div class="form-outline mt-2">
                        <label class="form-label fw-medium" for="form3Example8">Parol *</label>
                        <input v-model="password" type="password" id="form3Example8" class="form-control" placeholder="Parol kiriting"/>
                        <ValidationError v-if="validationErrors" :item="'password'" :errors="validationErrors" />
                    </div>

                    <!-- Email input -->
                    <div class="form-outline mt-2">
                        <label class="form-label fw-medium" for="form3Example9">Qaytadan parol *</label>
                        <input  type="password" id="form3Example9" class="form-control" placeholder="Parolni qaytadan kiriting"/>
                    </div>

                    <!-- <ReCaptcha  class="mt-4"/> -->
                    
                    <div class="row g-3 mt-2 align-items-center">
                        <div class="col-auto">
                            <img src="https://pm.gov.uz:8020/api/captcha?v=656999c9ab0c1" width="125" height="27" alt="captcha">
                        </div>
                        <div class="col-auto">
                            <input type="number" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline">
                        </div>
                    </div>
                </div>
                
            </TabContent>
            
        </FormWizard>
    </div>
</template>
<script>
import 'vue3-form-wizard/dist/style.css'
import 'primevue/resources/themes/lara-light-green/theme.css'
import ValidationError from './../validationerror.vue';
import {FormWizard, TabContent} from 'vue3-form-wizard'
import { mapState } from 'vuex';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';

 export default {
    name: "MyFormWizard",
    
    components: {
        FormWizard,
        TabContent,
        Dropdown,
        Calendar,
        ValidationError
    },
    data() {
        return {
            name: '',
            surname: '',
            lastname: '',
            date_of_birth: '',
            gender: 'f',
            employment_status: 1,
            country_id: 1,
            email: '',
            password: '',
            
            selectedBandlik: null,
            bandlik: [
                { "name": "O'quvchi"},
                { "name": "Talaba"},
                { "name": "Ishchi"},
                { "name": "Ishsiz"},

            ],

            selectedCountry: null,
            countries: [
                { "name": "Afghanistan", "code": "AF" },
                { "name": "Åland Islands", "code": "AX" },
                { "name": "Albania", "code": "AL" },
                { "name": "Algeria", "code": "DZ" },
                { "name": "American Samoa", "code": "AS" },
                { "name": "Andorra", "code": "AD" },
                { "name": "Angola", "code": "AO" },
                { "name": "Anguilla", "code": "AI" },
                { "name": "Antarctica", "code": "AQ" },
                { "name": "Antigua and Barbuda", "code": "AG" },
                { "name": "Argentina", "code": "AR" },
                { "name": "Armenia", "code": "AM" },
                { "name": "Aruba", "code": "AW" },
                { "name": "Australia", "code": "AU" },
                { "name": "Austria", "code": "AT" },
                { "name": "Azerbaijan", "code": "AZ" },
                { "name": "Bahamas", "code": "BS" },
                { "name": "Bahrain", "code": "BH" },
                { "name": "Bangladesh", "code": "BD" },
                { "name": "Barbados", "code": "BB" },
                { "name": "Belarus", "code": "BY" },
                { "name": "Belgium", "code": "BE" },
                { "name": "Belize", "code": "BZ" },
                { "name": "Benin", "code": "BJ" },
                { "name": "Bermuda", "code": "BM" },
                { "name": "Bhutan", "code": "BT" },
                { "name": "Bolivia", "code": "BO" },
                { "name": "Bosnia and Herzegovina", "code": "BA" },
                { "name": "Botswana", "code": "BW" },
                { "name": "Bouvet Island", "code": "BV" },
                { "name": "Brazil", "code": "BR" },
                { "name": "British Indian Ocean Territory", "code": "IO" },
                { "name": "Brunei Darussalam", "code": "BN" },
                { "name": "Bulgaria", "code": "BG" },
                { "name": "Burkina Faso", "code": "BF" },
                { "name": "Burundi", "code": "BI" },
                { "name": "Cambodia", "code": "KH" },
                { "name": "Cameroon", "code": "CM" },
                { "name": "Canada", "code": "CA" },
                { "name": "Cape Verde", "code": "CV" },
                { "name": "Cayman Islands", "code": "KY" },
                { "name": "Central African Republic", "code": "CF" },
                { "name": "Chad", "code": "TD" },
                { "name": "Chile", "code": "CL" },
                { "name": "China", "code": "CN" },
                { "name": "Christmas Island", "code": "CX" },
                { "name": "Cocos (Keeling) Islands", "code": "CC" },
                { "name": "Colombia", "code": "CO" },
                { "name": "Comoros", "code": "KM" },
                { "name": "Congo", "code": "CG" },
                { "name": "Congo, The Democratic Republic of the", "code": "CD" },
                { "name": "Cook Islands", "code": "CK" },
                { "name": "Costa Rica", "code": "CR" },
                { "name": "Cote D'Ivoire", "code": "CI" },
                { "name": "Croatia", "code": "HR" },
                { "name": "Cuba", "code": "CU" },
                { "name": "Cyprus", "code": "CY" },
                { "name": "Czech Republic", "code": "CZ" },
                { "name": "Denmark", "code": "DK" },
                { "name": "Djibouti", "code": "DJ" },
                { "name": "Dominica", "code": "DM" },
                { "name": "Dominican Republic", "code": "DO" },
                { "name": "Ecuador", "code": "EC" },
                { "name": "Egypt", "code": "EG" },
                { "name": "El Salvador", "code": "SV" },
                { "name": "Equatorial Guinea", "code": "GQ" },
                { "name": "Eritrea", "code": "ER" },
                { "name": "Estonia", "code": "EE" },
                { "name": "Ethiopia", "code": "ET" },
                { "name": "Falkland Islands (Malvinas)", "code": "FK" },
                { "name": "Faroe Islands", "code": "FO" },
                { "name": "Fiji", "code": "FJ" },
                { "name": "Finland", "code": "FI" },
                { "name": "France", "code": "FR" },
                { "name": "French Guiana", "code": "GF" },
                { "name": "French Polynesia", "code": "PF" },
                { "name": "French Southern Territories", "code": "TF" },
                { "name": "Gabon", "code": "GA" },
                { "name": "Gambia", "code": "GM" },
                { "name": "Georgia", "code": "GE" },
                { "name": "Germany", "code": "DE" },
                { "name": "Ghana", "code": "GH" },
                { "name": "Gibraltar", "code": "GI" },
                { "name": "Greece", "code": "GR" },
                { "name": "Greenland", "code": "GL" },
                { "name": "Grenada", "code": "GD" },
                { "name": "Guadeloupe", "code": "GP" },
                { "name": "Guam", "code": "GU" },
                { "name": "Guatemala", "code": "GT" },
                { "name": "Guernsey", "code": "GG" },
                { "name": "Guinea", "code": "GN" },
                { "name": "Guinea-Bissau", "code": "GW" },
                { "name": "Guyana", "code": "GY" },
                { "name": "Haiti", "code": "HT" },
                { "name": "Heard Island and Mcdonald Islands", "code": "HM" },
                { "name": "Holy See (Vatican City State)", "code": "VA" },
                { "name": "Honduras", "code": "HN" },
                { "name": "Hong Kong", "code": "HK" },
                { "name": "Hungary", "code": "HU" },
                { "name": "Iceland", "code": "IS" },
                { "name": "India", "code": "IN" },
                { "name": "Indonesia", "code": "ID" },
                { "name": "Iran, Islamic Republic Of", "code": "IR" },
                { "name": "Iraq", "code": "IQ" },
                { "name": "Ireland", "code": "IE" },
                { "name": "Isle of Man", "code": "IM" },
                { "name": "Israel", "code": "IL" },
                { "name": "Italy", "code": "IT" },
                { "name": "Jamaica", "code": "JM" },
                { "name": "Japan", "code": "JP" },
                { "name": "Jersey", "code": "JE" },
                { "name": "Jordan", "code": "JO" },
                { "name": "Kazakhstan", "code": "KZ" },
                { "name": "Kenya", "code": "KE" },
                { "name": "Kiribati", "code": "KI" },
                { "name": "Korea, Democratic People'S Republic of", "code": "KP" },
                { "name": "Korea, Republic of", "code": "KR" },
                { "name": "Kuwait", "code": "KW" },
                { "name": "Kyrgyzstan", "code": "KG" },
                { "name": "Lao People'S Democratic Republic", "code": "LA" },
                { "name": "Latvia", "code": "LV" },
                { "name": "Lebanon", "code": "LB" },
                { "name": "Lesotho", "code": "LS" },
                { "name": "Liberia", "code": "LR" },
                { "name": "Libyan Arab Jamahiriya", "code": "LY" },
                { "name": "Liechtenstein", "code": "LI" },
                { "name": "Lithuania", "code": "LT" },
                { "name": "Luxembourg", "code": "LU" },
                { "name": "Macao", "code": "MO" },
                { "name": "Macedonia, The Former Yugoslav Republic of", "code": "MK" },
                { "name": "Madagascar", "code": "MG" },
                { "name": "Malawi", "code": "MW" },
                { "name": "Malaysia", "code": "MY" },
                { "name": "Maldives", "code": "MV" },
                { "name": "Mali", "code": "ML" },
                { "name": "Malta", "code": "MT" },
                { "name": "Marshall Islands", "code": "MH" },
                { "name": "Martinique", "code": "MQ" },
                { "name": "Mauritania", "code": "MR" },
                { "name": "Mauritius", "code": "MU" },
                { "name": "Mayotte", "code": "YT" },
                { "name": "Mexico", "code": "MX" },
                { "name": "Micronesia, Federated States of", "code": "FM" },
                { "name": "Moldova, Republic of", "code": "MD" },
                { "name": "Monaco", "code": "MC" },
                { "name": "Mongolia", "code": "MN" },
                { "name": "Montserrat", "code": "MS" },
                { "name": "Morocco", "code": "MA" },
                { "name": "Mozambique", "code": "MZ" },
                { "name": "Myanmar", "code": "MM" },
                { "name": "Namibia", "code": "NA" },
                { "name": "Nauru", "code": "NR" },
                { "name": "Nepal", "code": "NP" },
                { "name": "Netherlands", "code": "NL" },
                { "name": "Netherlands Antilles", "code": "AN" },
                { "name": "New Caledonia", "code": "NC" },
                { "name": "New Zealand", "code": "NZ" },
                { "name": "Nicaragua", "code": "NI" },
                { "name": "Niger", "code": "NE" },
                { "name": "Nigeria", "code": "NG" },
                { "name": "Niue", "code": "NU" },
                { "name": "Norfolk Island", "code": "NF" },
                { "name": "Northern Mariana Islands", "code": "MP" },
                { "name": "Norway", "code": "NO" },
                { "name": "Oman", "code": "OM" },
                { "name": "Pakistan", "code": "PK" },
                { "name": "Palau", "code": "PW" },
                { "name": "Palestinian Territory, Occupied", "code": "PS" },
                { "name": "Panama", "code": "PA" },
                { "name": "Papua New Guinea", "code": "PG" },
                { "name": "Paraguay", "code": "PY" },
                { "name": "Peru", "code": "PE" },
                { "name": "Philippines", "code": "PH" },
                { "name": "Pitcairn", "code": "PN" },
                { "name": "Poland", "code": "PL" },
                { "name": "Portugal", "code": "PT" },
                { "name": "Puerto Rico", "code": "PR" },
                { "name": "Qatar", "code": "QA" },
                { "name": "Reunion", "code": "RE" },
                { "name": "Romania", "code": "RO" },
                { "name": "Russian Federation", "code": "RU" },
                { "name": "RWANDA", "code": "RW" },
                { "name": "Saint Helena", "code": "SH" },
                { "name": "Saint Kitts and Nevis", "code": "KN" },
                { "name": "Saint Lucia", "code": "LC" },
                { "name": "Saint Pierre and Miquelon", "code": "PM" },
                { "name": "Saint Vincent and the Grenadines", "code": "VC" },
                { "name": "Samoa", "code": "WS" },
                { "name": "San Marino", "code": "SM" },
                { "name": "Sao Tome and Principe", "code": "ST" },
                { "name": "Saudi Arabia", "code": "SA" },
                { "name": "Senegal", "code": "SN" },
                { "name": "Seychelles", "code": "SC" },
                { "name": "Sierra Leone", "code": "SL" },
                { "name": "Singapore", "code": "SG" },
                { "name": "Slovakia", "code": "SK" },
                { "name": "Slovenia", "code": "SI" },
                { "name": "Solomon Islands", "code": "SB" },
                { "name": "Somalia", "code": "SO" },
                { "name": "South Africa", "code": "ZA" },
                { "name": "South Georgia and the South Sandwich Islands", "code": "GS" },
                { "name": "Spain", "code": "ES" },
                { "name": "Sri Lanka", "code": "LK" },
                { "name": "Sudan", "code": "SD" },
                { "name": "Suriname", "code": "SR" },
                { "name": "Svalbard and Jan Mayen", "code": "SJ" },
                { "name": "Swaziland", "code": "SZ" },
                { "name": "Sweden", "code": "SE" },
                { "name": "Switzerland", "code": "CH" },
                { "name": "Syrian Arab Republic", "code": "SY" },
                { "name": "Taiwan, Province of China", "code": "TW" },
                { "name": "Tajikistan", "code": "TJ" },
                { "name": "Tanzania, United Republic of", "code": "TZ" },
                { "name": "Thailand", "code": "TH" },
                { "name": "Timor-Leste", "code": "TL" },
                { "name": "Togo", "code": "TG" },
                { "name": "Tokelau", "code": "TK" },
                { "name": "Tonga", "code": "TO" },
                { "name": "Trinidad and Tobago", "code": "TT" },
                { "name": "Tunisia", "code": "TN" },
                { "name": "Turkey", "code": "TR" },
                { "name": "Turkmenistan", "code": "TM" },
                { "name": "Turks and Caicos Islands", "code": "TC" },
                { "name": "Tuvalu", "code": "TV" },
                { "name": "Uganda", "code": "UG" },
                { "name": "Ukraine", "code": "UA" },
                { "name": "United Arab Emirates", "code": "AE" },
                { "name": "United Kingdom", "code": "GB" },
                { "name": "United States", "code": "US", synonym: ['USA','United States of America'] },
                { "name": "United States Minor Outlying Islands", "code": "UM" },
                { "name": "Uruguay", "code": "UY" },
                { "name": "Uzbekistan", "code": "UZ" },
                { "name": "Vanuatu", "code": "VU" },
                { "name": "Venezuela", "code": "VE" },
                { "name": "Viet Nam", "code": "VN" },
                { "name": "Virgin Islands, British", "code": "VG" },
                { "name": "Virgin Islands, U.S.", "code": "VI" },
                { "name": "Wallis and Futuna", "code": "WF" },
                { "name": "Western Sahara", "code": "EH" },
                { "name": "Yemen", "code": "YE" },
                { "name": "Zambia", "code": "ZM" },
                { "name": "Zimbabwe", "code": "ZW" }
            ]
            
        }
    },
    mounted(){
        if(this.isLoggedIn){
            this.$emit('toHomePage')
        }
    },
    computed:{
        ...mapState({
            isLoading: (state) => state.auth.isLoading,
            isLoggedIn: (state) => state.auth.isLoggedIn,
            validationErrors: (state) => state.auth.errors
        })
    },
    created(){
        
        for (let i = 0; i < this.countries.length; i++) {
            this.countries[i].image = 'https://cdn.jsdelivr.net/npm/svg-country-flags@1.2.10/svg/' + this.countries[i].code.toLowerCase() + '.svg';
        }
    },
    methods: {
        submitHandler(e){
            // e.preventDefault();
            
            const data = {
                name: this.name,
                surname: this.surname,
                email: this.email,
                password: this.password,
                date_of_birth: this.date_of_birth,
                country_id: this.country_id,
                gender: this.gender,
                employment_status: this.employment_status
            }

            this.$store.dispatch('register', data)
            .then(data => {
                this.$router.push({name: 'profile'})
            })
            .catch(data => {
                console.log(data.errors)
            });
        }
    },
 }
</script>

<style>
.p-inputtext {
    font-size: 1rem;
    color: #4b5563;
    background: #ffffff;
    padding: 0.41rem 0.75rem;
    border: 1px solid #d1d5db;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    appearance: none;
    border-radius: 6px;
}
.p-dropdown-items {
    padding: 0;
}
.p-dropdown:not(.p-disabled).p-focus{
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0 rgb(104, 177, 238);
    border-color: rgb(104, 177, 238);
}

.p-dropdown:not(.p-disabled):hover{
    border-color: rgb(104, 177, 238);
}

.p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight {
    color: rgb(104, 177, 238);
    background: #F0FDFA;
}
.p-inputtext {
    font-size: 1rem;
    color: #4b5563;
    background: #ffffff;
    padding: 0.41rem 0.75rem;
    border: none;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    appearance: none;
    border-radius: 6px;
}

.captcha {
    -moz-box-align: center;
    align-items: center;
    cursor: pointer;
}

.captcha, .d-flex {
    display: -moz-box;
    display: flex;
    flex-wrap: wrap;
}
.p-calendar:not(.p-calendar-disabled).p-focus > .p-inputtext {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0 rgb(104, 177, 238);
    border-color: rgb(104, 177, 238);
}

.sana{
    border: 1px solid #dee2e6;
    border-radius: 5px;
}
</style>
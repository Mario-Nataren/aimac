<template>
    <div class="container">
        <div class="columns">
            
            <div class="column is-full">
                <h2><b>Contactanos:</b></h2>
                <span>Mandanos un Correo con tus datos y nos comunicaremos contigo a la brevedad.</span>
                <br>
                <br>
            </div>
        </div>
        <div class="columns">
            <div class="column is-6">
                    <b-field label="Nombre">
                        <b-input v-model="name"></b-input>
                    </b-field>
            </div>
            <div class="column is-6">
                <b-field label="Email"
                type="is-danger"
                message="This email is invalid">
                        <b-input v-model="mail" type="email"
                        maxlength="30">
                        </b-input>
                </b-field>
            </div>
        </div>
        <div class="columns">
            <div class="column is-6">
                    <b-field label="Ciudad/Estado">
                        <b-input v-model="ciudad"></b-input>
                    </b-field>
            </div>
            <div class="column is-6">
                    <b-field label="Empresa">
                        <b-input v-model="empresa"></b-input>
                    </b-field>
            </div>
        </div>
        <div class="columns is-mobile is-centered">
            <div class="column is-6">
                    <b-field label="Telefono">
                        <b-input v-model="telefono"></b-input>
                    </b-field>
            </div>
        </div>   
        <div class="columns">
            <div class="column is-12">
                <b-field label="Mensaje">
                    <b-input v-model="comentarios" maxlength="500" type="textarea"></b-input>
                </b-field>
            </div>
        </div>   
        <div class="columns is-mobile is-centered">
            <div class="column is-3">

                    <button class="button is-primary">SEND</button>
            </div>

        </div>   
    </div>
</template>
<script>
    export default {
        data() {
            return {
                name: '',
                mail: '',
                ciudad:'',
                empresa:'',
                telefono:'',
                comentarios:''
            }
        }
    }
</script>
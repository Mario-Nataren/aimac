<template>
    <div >
        <b-navbar type="is-primary" fixed-top>
            <template slot="brand">
                <b-navbar-item>
                    <figure class="image is-32x32">
                    <img
                        src="../assets/SIMAC.png"
                        alt="Lightweight UI components for Vue.js based on Bulma"
                    >
                    </figure>
                </b-navbar-item>
            </template>
            <template slot="end">
                <b-navbar-item  tag="router-link" :to="{ path: '/home' }">
                    Inicio
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/about' }">
                    Acerca de nosotros
                </b-navbar-item>
                <b-navbar-dropdown label="Servicios" hoverable aria-role="list" >
                      <b-navbar-item   tag="router-link" :to="{ path: '/hvac' }">
                        HVAC
                    </b-navbar-item>
                    <b-navbar-item tag="router-link" :to="{ path: '/cip' }">
                        CIP
                    </b-navbar-item>
                    <b-navbar-item tag="router-link" :to="{ path: '/tratamiento' }">
                        DOSIFICACION
                    </b-navbar-item>
                </b-navbar-dropdown>
            </template>
            <template slot="end">
               <b-navbar-item  tag="router-link" :to="{ path: '/contactanos' }">
                    Contactanos
                </b-navbar-item>
            </template>
            
        </b-navbar>
    </div>
</template>


<script>
export default {

}
</script>

<style>
.navbar-item.is-mega {
	position: static;
}

.navbar-item.is-mega .is-mega-menu-title {
	margin-bottom: 0;
	padding: 0.375rem 1rem;
}

.margen1 {
    padding-left: 1rem;
}

</style>
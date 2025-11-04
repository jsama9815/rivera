<script>
    import SvgIcon from '@jamescoyle/vue-icon';
    import { mdiEmail,mdiMapMarker, mdiPhone, mdiWhatsapp } from '@mdi/js';

    export default {
        name: "my-component",
        components: {
            SvgIcon
        },
        data() {
            return {
                path: {
                    mdiEmail: mdiEmail,
                    mdiMapMarker: mdiMapMarker,
                    mdiPhone: mdiPhone,
                    mdiWhatsapp: mdiWhatsapp
                }
            }
        }
    }
</script>

<template>
    <div class="contactMainBox" id="contact">
        <div class="triangle"></div>
        <div class="contactWrapper">
            <div class="informationMainBox">
                <div class="contactInfo">
                    <h2 class="title">
                        Estamos aqui para ayudarte
                    </h2>
                    <p class="subtitle">
                        ¿Tienes preguntas o necesitas más información? Nuestro equipo está listo para asistirte.
                        <br>
                        ¡Contáctanos y descubre cómo podemos colaborar!
                    </p>
                    <div class="contactDetails">
                        <div class="detailItem">
                            <div class="icon">
                                <svg-icon type="mdi" :path="path.mdiEmail"></svg-icon>
                            </div>
                            <h3 class="detailTitle">E-mail</h3>
                            <p class="detailText">contacto@dulcesrivera.com</p>
                        </div>
                        <!-- <div class="detailItem locationItem">
                            <div class="icon">
                                <svg-icon type="mdi" :path="path.mdiMapMarker"></svg-icon>
                            </div>
                            <h3 class="detailTitle">Ubicacion</h3>
                            <p class="detailText locationText">
                                Calle xxxxxx<br>
                                xxxxxxxxxxx<br>
                                xxxxxxxxxxx
                            </p>
                        </div> -->
                        <div class="detailItem">
                            <div class="icon">
                                <svg-icon type="mdi" :path="path.mdiPhone"></svg-icon>
                            </div>
                            <h3 class="detailTitle">Telefono</h3>
                            <p class="detailText">55 4544 44476</p>
                        </div>
                        <div class="detailItem">
                            <div class="icon">
                                <a 
                                    href="https://wa.me/5215545444476"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg-icon 
                                        type="mdi" 
                                        :path="path.mdiWhatsapp" 
                                        class="whatsapp"
                                    ></svg-icon>
                                </a>
                            </div>
                            <h3 class="detailTitle">Chatea con nostros</h3>
                            <h3 class="detailTitle">por whatsapp</h3>
                        </div>
                    </div>
                </div>
                <!-- <div class="mapColumn">
                    <div class="mapContainer">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.222883163717!2d-99.17141817478748!3d19.359499581904277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffeb38bb3f31%3A0x25235187d9ce5f40!2sM%C3%ADtikah%20Torre%20Residencial!5e0!3m2!1ses-419!2smx!4v1759969123251!5m2!1ses-419!2smx" 
                        width="100%" 
                        height="100%" 
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                      ></iframe>  
                    </div>
                </div> -->
            </div>
        </div>
    </div>

</template>

<style scoped>
    .contactMainBox {
        background-image: linear-gradient(
            135deg, 
            #D76092 0%,
            #EF93A2 40%,
            #F3A77E 80%, 
            #F5C58A 100%
        );
        position: relative;
    }
    .contactWrapper {
        max-width: 1200px;
        margin: 0 auto;
        padding: 80px 20px; 
    }
    .informationMainBox {
        display: flex;
        flex-direction: column;
        gap: 40px;
        align-items: flex-start;
    }
    @media (min-width: 1024px) {
        .informationMainBox {
            flex-direction: row;
            gap: 80px;
        }
    }
    .contactInfo {
        width: 100%;
    }
    @media (min-width: 1024px) {
        .contactInfo {
            flex:1
        }
    }
    .title {
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: italic;
        font-size: 2.5rem;
        line-height: 1.2;
        color: white;
        margin-bottom: 1rem;
    }
    @media (min-width: 768px) {
        .title {
            font-size: 3rem;
        }
    }
    .subtitle {
        font-size: 1.125rem;
        color: white;
        margin-bottom: 2.5rem;
        max-width: 450px;
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: italic;
    }
    .contactDetails {
        display: grid;
        grid-template-columns: 1fr;
        gap: 30px;
    }
    @media (min-width: 640px) {
        .contactDetails {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    .detailItem {
        display: flex;
        flex-direction: column;
    }
    .icon {
        margin-bottom: 0.5rem;
    }
    .detailTitle {
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.9);
        line-height: 1.4;
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: italic;
    }
    .whatsapp {
        cursor: pointer;
    }
    .detailText {
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.9);
        line-height: 1.4;
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: italic;
    }
    .locationText {
        white-space: pre-line;
    }
    .mapColumn {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    @media (min-width: 1024px) {
        .mapColumn {
            flex: 1;
            justify-content: flex-end;
        }
    }
    .mapContainer {
        width: 100%;
        max-width: 450px; 
        height: 350px; 
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        border: 4px solid white; 
    }
    .icon {
        color: purple;
    }
    .triangle {
        position: absolute;
        top: -1%; 
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 40px solid transparent;
        border-right: 40px solid transparent;
        border-top: 40px solid #b7e3ec;
    }
</style>
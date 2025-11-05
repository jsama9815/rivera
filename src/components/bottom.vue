<script>
    import SvgIcon from '@jamescoyle/vue-icon/lib/svg-icon.vue'
    import { mdiInstagram } from '@mdi/js';

    export default {
        name: "InstagramAndFooterSection",
        components: {
          'svg-icon': SvgIcon
        },
        data() {
            return {
                mdiInstagram: mdiInstagram,
            };
        },
    };

</script>

<template>
    <div class="bottomMainBox">
        <div class="instagramSectionBox">
            <div class="socialIcons">
                <a 
                    href="https://www.instagram.com/dulcesriveramx/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <svg-icon class="instagram-icon" type="mdi" :path="mdiInstagram"></svg-icon>
                </a>
                <a 
                    href="https://www.tiktok.com/@dulcesriveramx?lang=es-419" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img 
                        src="/images/icons/tiktok.png" 
                        alt="TikTok"
                        class="tiktok-icon"
                    >
                </a>
            </div>
            <h3 class="followUsTittle">Síguenos</h3>
            <p class="textFollowUs">Dulces historias y más</p>
        </div>
        <footer class="footerSection">
            <div class="footerContent">
                <span class="footerText">© 2025 DULCES RIVERA</span>
                <span class="footerSeparator">|</span>
                <span class="footerText">Todos los derechos reservados.</span>
                <span class="footerSeparator">|</span>
                <span class="footerText">Términos y condiciones</span>
                <span class="footerText">Aviso de privacidad</span>
                <span class="footerText">Política de devoluciones y reembolsos.</span>
            </div>
        </footer>
    </div>
</template>

<style scoped>
    .bottomMainBox {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        min-height: 50vh;
        height: auto;
        background: #dfe5e5;
        padding-top: 20px;
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: italic;
    }
    .instagramSectionBox {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-grow: 1; 
        padding-bottom: 50px;
    }
    .socialIcons {
        display: flex;
        gap: 20px;
        margin-bottom: 15px;
    }

    .instagram-icon,
    .tiktok-icon {
        width: 60px; 
        height: 60px; 
        margin-bottom: 15px;
        cursor: pointer;
    }
    .instagram-icon {
        color: #ff91a4;
    }
    .tiktok-icon {
        fill: #000;
    }

    .followUsTittle {
        font-size: 2.5em;
        color: #4b3c7e;
        margin-bottom: 10px;
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: italic;
    }

    .textFollowUs {
        font-size: 1.3em;
        color: #4b3c7e;
        margin-bottom: 30px;
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: italic;
    }

    .footerSection {
        min-height: 50px;
        width: 100%;
        background-color: #4b3c7e;
        padding: 10px 0;
        color: #ffffff;
        font-size: 0.8em;
        text-align: center;
    }

    .footerContent {
        display: flex;
        flex-wrap: wrap; 
        justify-content: center;
        align-items: center;
        height: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 15px;
    }

    .footerText {
        margin: 0 8px;
        white-space: nowrap;
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: italic; 
    }
    .footerSeparator {
        margin: 0 5px;
        color: rgba(255, 255, 255, 0.6); 
    }
    @media (max-width: 768px) {
    .footerContent {
        flex-direction: column;
    }
    .footerText, .footerSeparator {
        margin: 5px 0; 
    }
    .footerSeparator {
        display: none; 
    }
    }
</style>
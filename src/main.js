import Vue from "vue";
import App from "./App.vue";
/* Font */
import "@fontsource/montserrat";
import "@fontsource/montserrat/100.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/raleway";
import "@fontsource/raleway/100.css";
import "@fontsource/raleway/400.css";
/* FontAwesome */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faDollarSign, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faDollarSign, faGlobe, faHeart);
Vue.component("font-awesome-icon", FontAwesomeIcon);

const bootstrap = require("bootstrap");
Vue.use(bootstrap);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

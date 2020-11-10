import Vue from "vue";

//@ts-ignore
import BSN from "bootstrap.native/dist/bootstrap-native.js";
import "./genetic.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faList, faGraduationCap, faProjectDiagram, faBook, faMicrochip, faDatabase, faServer, faEnvelope, faPhone, faMapMarkerAlt, faFlag, faTerminal, faCode } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faFacebookSquare, faAngular, faVuejs, faPython, faJs, faJava, faPhp, faLinux, faWindows, faGitAlt, faGithub, faGithubSquare, faGitlab, faDocker } from "@fortawesome/free-brands-svg-icons";
import { faSpring, faTs, faKotlin, faNginx, faVscode, faAntlr, faKubernetes, faSwagger, faKafka, faIntellij, faNeo4j, faScrum } from "@/icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import store from "./store";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";

console.log(`
 _______ _       _______        ________________ _       
(  ____ ( \\     (  ___  |\\     /\\__   __(  ____ ( (    /|
| (    \\| (     | (   ) | )   ( |  ) (  | (    \\|  \\  ( |
| (__   | |     | (___) | |   | |  | |  | (__   |   \\ | |
|  __)  | |     |  ___  ( (   ) )  | |  |  __)  | (\\ \\) |
| (     | |     | (   ) |\\ \\_/ /   | |  | (     | | \\   |
| )     | (____/| )   ( | \\   / ___) (__| (____/| )  \\  |
|/      (_______|/     \\|  \\_/  \\_______(_______|/    )_)
`);

library.add(faHome, faList, faGraduationCap, faProjectDiagram, faBook, faMicrochip, faDatabase, faServer, faEnvelope, faPhone, faMapMarkerAlt, faFlag, faTerminal, faCode,
  faLinkedin, faFacebookSquare, faAngular, faVuejs, faPython, faJs, faJava, faPhp, faLinux, faWindows, faGitAlt, faGithub, faGithubSquare, faGitlab, faDocker,
  //@ts-ignore
  faSpring, faTs, faKotlin, faNginx, faVscode, faAntlr, faKubernetes, faSwagger, faKafka, faIntellij, faNeo4j, faScrum);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount("#app");

BSN.initCallback(document.body);

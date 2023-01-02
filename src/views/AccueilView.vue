<template>
    <v-container id="accueil" fluid tag="section">
        <v-row>
            <v-col cols="12" sm="6" lg="4">
                <v-card class="mx-auto px-0" max-width="400">
                  <v-img class="mx-auto" max-height="200px" max-width="200px" src="../assets/logo.png" alt="FCVL logo"/>
                  <v-card-text class="text-center pa-1">
                    <h3 class="display-2 font-weight-light mb-3 black--text">
                      Tournoi en salle U9/U11/U13/U13F
                    </h3>
                    <p class="font-weight-light grey--text">Samedi 07/01/2023 : </p>

                    <p class="font-weight-light grey--text">4 catégories.
                        <br/> <a @click="scrollMeTo('U11')" >U11 : Rdv 9h00 - Début 9h30</a>
                        <br/><a @click="scrollMeTo('U9')" >U9 : Rdv 12h30 - Début 13h</a>
                        <br/>et <v-btn text to="/AccueilU13" class="primary--text ma-0 pa-0 font-size:16px text-no-wrap">U13/U13F : Rdv 14h45 - Début 15h15</v-btn></p>
                    <p class="font-weight-light grey--text">U9/U11 : Temps de jeu 7 minutes, Rotation toutes les 10 minutes</p>
                    <p class="font-weight-light grey--text">U13/U13F : Temps de jeu 7 minutes, Rotation toutes les 8 minutes</p>
                  </v-card-text>
                  <v-card-actions class="pa-1">
                    <v-chip class="ma-2" label link href="pdf/01_ReglementTournoi2023.pdf">
                       <v-icon left>mdi-information-outline</v-icon> Règlement
                    </v-chip>
                    <v-spacer></v-spacer>
                    <v-chip class="ma-2" label @click.stop="dialogMap = true">
                       <v-icon left>mdi-map-outline</v-icon> Plan (Accès)
                    </v-chip>
                    <v-spacer></v-spacer>
                    <v-chip class="ma-2" label @click.stop="dialogQRcode = true">
                       <v-icon left>mdi-share-variant</v-icon> URL QR Code
                    </v-chip>
                  </v-card-actions>
                </v-card>

                <v-dialog v-model="dialogMap" max-width="500">
                  <v-card class="pa-1">
                    <v-card-title class="text-h5 pa-1">
                        <h3 class="display-2 font-weight-light mb-3 black--text">Plan des salles à la Chartre</h3>
                        <h6 class="display-1">6 Rue Jacques Peletier, 72340 La Chartre-sur-le-Loir</h6>

                    </v-card-title>
                    <v-card-text class="pa-1">
                      <v-img class="mx-auto" max-height="450px" max-width="450px" src="img/PlanAcces.JPG" alt="PlanAcces"/>
                    </v-card-text>
                    <v-card-actions class="pa-1 ">
                      <v-btn color="primary" text link href="https://goo.gl/maps/qaZv9G98zxA4RPsTA" @click="dialogMap = false" target="_blank"><v-icon>mdi-map-marker</v-icon>GoogleMap</v-btn>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" text @click="dialogMap = false">Close</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

                <v-dialog v-model="dialogQRcode" max-width="500">
                  <v-card class="pa-1">
                    <v-card-title class="text-h5 pa-1">
                        <h3 class="display-2 font-weight-light mb-3 black--text">TournoiEnSalle FCVL U9/U11/U13/U13G</h3>
                        <h6 class="display-1 black--text">Partager ce site avec ce QRCode ...</h6>
                        <h6 class="display-1 black--text">https://fcvalduloir.pagesperso-orange.fr/TES2023Jeunes/dist/</h6>
                    </v-card-title>
                    <v-card-text class="pa-1">
                      <v-img class="mx-auto" max-height="450px" max-width="450px" src="img/QRsite.png" alt="QRsite"/>
                    </v-card-text>
                    <v-card-actions class="pa-1 ">
                      <v-spacer></v-spacer>
                      <v-btn color="primary" text @click="dialogQRcode = false">Close</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

                <v-dialog v-model="dialogSalles" max-width="520">
                  <v-card class="pa-1">
                    <v-card-title class="text-h5 pa-1">
                        <h3 class="display-2 font-weight-light mb-3 black--text">2 salles</h3>
                    </v-card-title>
                    <v-card-text class="pa-1">
                      <v-container class="pa-0 ma-0">
                          <v-row >
                              <v-col class="pa-1 ma-0 ">
                                  <h5 class="display-1 mb-1 text-center">1-GLC</h5>
                                  <h6 class="display-1 mb-1 grey--text text-center">Gymnase Guy La Croix</h6>
                                  <v-img class="mx-auto" max-height="200px" max-width="200px" src="img/salles/1-GLC-int.png" alt="1-GLC"/>
                              </v-col>
                              <v-col class="pa-1 ma-0">
                                  <h5 class="display-1 mb-1 text-center">2-CCVL</h5>
                                  <h6 class="display-1 mb-1 grey--text text-center">Gymnase CC Val du Loir</h6>
                                  <v-img class="mx-auto" max-height="200px" max-width="200px" src="img/salles/2-CCVL.png" alt="2-CCVL"/>
                              </v-col>
                          </v-row>
                      </v-container>

                    </v-card-text>
                    <v-card-actions class="pa-1 ">
                      <v-spacer></v-spacer>
                      <v-btn color="primary" text @click="dialogSalles = false">Close</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

                <v-card max-width="400" class="mx-auto">
                    <v-img class="mx-auto" max-height="200px" max-width="200px" src="img/pub/acc.png" alt="mma"/>
                    <v-card-title>Annonceurs</v-card-title>
                </v-card>

            </v-col>

            <v-col cols="12" sm="6" lg="4">
                <div ref="U9"/>
                <base-material-card
                      icon="mdi-clipboard-text"
                      title="U9 : Rdv 12h30 - Début 13h"
                      class="px-5 py-3"
                      color="primary"
                    >
                      <v-simple-table>
                        <template v-slot:default>
                        <thead>
                          <tr>
                            <th width="5%" class="text-center">
                              N°
                            </th>
                            <th width="10%" class="text-center">
                              Fanion
                            </th>
                            <th width="85%" class="text-left">
                              Club
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(equipe, n) in equipesU9" :key="equipe.id">
                            <td>{{n+1}}</td>
                            <td><v-img  v-bind:src="'img/fanion/'+equipe.fanion" max-height="30" max-width="30"/></td>
                            <td>{{equipe.nom}}<v-spacer></v-spacer></td>
                          </tr>
                        </tbody>
                      </template>
                      </v-simple-table>
                      <v-divider></v-divider>
                      <v-card-actions class="pa-0 ">
                        <v-chip class="ma-2" label @click.stop="dialogSalles = true">
                           <v-icon left>mdi-home-switch-outline</v-icon> Les Salles
                        </v-chip>
                        <v-spacer></v-spacer>
                        <v-chip class="ma-2" label link to="/U9Poules">
                           <v-icon left>mdi-view-split-vertical</v-icon> Poules
                        </v-chip>
                        <v-spacer></v-spacer>
                        <v-chip class="ma-2" label link to="/U9Finales">
                           <v-icon left>mdi-format-line-weight</v-icon> Finales
                        </v-chip>
                      </v-card-actions>
                    </base-material-card>
            </v-col>

            <v-col cols="12" sm="6" lg="4">
                <div ref="U11"/>
                <base-material-card
                      icon="mdi-clipboard-text"
                      title="U11 : Rdv 9h00 - Début 9h30"
                      class="px-5 py-3"
                      color="primary"
                    >
                      <v-simple-table>
                        <template v-slot:default>
                        <thead>
                          <tr>
                            <th width="5%" class="text-center">
                              N°
                            </th>
                            <th width="10%" class="text-center">
                              Fanion
                            </th>
                            <th width="85%" class="text-left">
                              Club
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(equipe, n) in equipesU11" :key="equipe.id">
                            <td>{{n+1}}</td>
                            <td><v-img  v-bind:src="'img/fanion/'+equipe.fanion" max-height="30" max-width="30"/></td>
                            <td>{{equipe.nom}}<v-spacer></v-spacer></td>
                          </tr>
                        </tbody>
                      </template>
                      </v-simple-table>
                      <v-divider></v-divider>
                      <v-card-actions class="pa-0 ">
                          <v-chip class="ma-2" label @click.stop="dialogSalles = true">
                             <v-icon left>mdi-home-switch-outline</v-icon> Les Salles
                          </v-chip>
                          <v-spacer></v-spacer>
                        <v-chip class="ma-2" label link to="/U11Poules">
                           <v-icon left>mdi-view-split-vertical</v-icon> Poules
                        </v-chip>
                        <v-spacer></v-spacer>
                        <v-chip class="ma-2" label link to="/U11Finales">
                           <v-icon left>mdi-format-line-weight</v-icon> Finales
                        </v-chip>
                      </v-card-actions>
                    </base-material-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios'

export default {
    data() {
      return {
        dialogMap: false,
        dialogQRcode: false,
        dialogSalles: false,
        url: process.env.BASE_URL + "datas/info_tournoi.json",
        equipesU9: null,
        equipesU11: null,
      };
    },
    created() {
      this.loadDataOds();
    },
    methods: {
        update(){
            this.loadDataOds();
        },
        loadDataOds() {
            var url = this.url;
            axios
                .get(url)
                .then(response => {
                  this.equipesU9 = response.data.lesequipes.filter(function (entry){return entry.categorie_id==='U9';})
                  this.equipesU11 = response.data.lesequipes.filter(function (entry){return entry.categorie_id==='U11';})
                }).catch(error => {
                   console.log(error)
                })
          },
        scrollMeTo(refName) {
            var element = this.$refs[refName];
            var top = element.offsetTop;

            window.scrollTo(0, top);
        },
    },
};
</script>
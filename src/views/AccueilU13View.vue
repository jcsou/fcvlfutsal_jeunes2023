<template>
    <v-container id="accueil" fluid tag="section">
        <v-row>
             <v-col cols="12" sm="6" lg="4">
                <div ref="U13G"/>
                <base-material-card
                      icon="mdi-clipboard-text"
                      title="U13G"
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
                          <tr v-for="(equipe, n) in equipesU13G" :key="equipe.id">
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
                        <v-chip class="ma-2" label link to="/U13Poules">
                           <v-icon left>mdi-view-split-vertical</v-icon> Poules
                        </v-chip>
                        <v-spacer></v-spacer>
                        <v-chip class="ma-2" label link to="/U13Finales">
                           <v-icon left>mdi-format-line-weight</v-icon> Finales
                        </v-chip>
                      </v-card-actions>
                    </base-material-card>
            </v-col>

            <v-col cols="12" sm="6" lg="4">
                <div ref="U13F"/>
                <base-material-card
                      icon="mdi-clipboard-text"
                      title="U13F"
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
                          <tr v-for="(equipe, n) in equipesU13F" :key="equipe.id">
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
                        <v-chip class="ma-2" label link to="/U13FPoules">
                           <v-icon left>mdi-view-split-vertical</v-icon> Poules
                        </v-chip>
                        <v-spacer></v-spacer>
                        <v-chip class="ma-2" label link to="/U13FFinales">
                           <v-icon left>mdi-format-line-weight</v-icon> Finales
                        </v-chip>
                      </v-card-actions>
                    </base-material-card>
            </v-col>
            <v-col cols="12" sm="6" lg="4" >
                <v-card max-width="400" class="mx-auto">
                    <v-img class="mx-auto" max-height="200px" max-width="200px" src="img/pub/mma.png" alt="mma"/>
                    <v-card-title>Annonceurs</v-card-title>
                </v-card>

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

            </v-col>

        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios'

export default {
    data() {
      return {
        dialogSalles: false,
        url: process.env.BASE_URL + "datas/info_tournoi.json",
        equipesU13G: null,
        equipesU13F: null,
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
                  this.equipesU13G = response.data.lesequipes.filter(function (entry){return entry.categorie_id==='U13G';})
                  this.equipesU13F = response.data.lesequipes.filter(function (entry){return entry.categorie_id==='U13F';})
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
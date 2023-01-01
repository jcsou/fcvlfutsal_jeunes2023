<template>
    <v-container id="pouleA-match" fluid tag="section">
    <v-row>
    <v-col>
        <v-card class="mx-auto" >
            <v-card dark flat >
                <v-card-title class="pa-2 primary lighten-3">
                    <h3 class="font-weight-light text-center black grow">
                        Ligne de temps - Matchs de Poule
                    </h3>
                </v-card-title>
            </v-card>
            <v-card-text class="pa-1 ma-0">
                <v-timeline align-top dense >

                    <v-timeline-item color="primary" v-for="item in getMatchs" v-bind:key="item.id">
                        <v-card max-width="400" class="pa-0 ma-0">
                            <v-card-title>
                                <strong>{{ item.heureDebut }} - {{ item.salle }}</strong>
                            </v-card-title>

                            <v-card-text class="pa-0 ma-0"  align="center">
                                <h6>N° {{ item.id }}, Catégorie : {{ item.categorie }}</h6>
                                <v-container class="pa-0 ma-0">
                                    <v-row >
                                        <v-col class="pa-1 ma-0">
                                            <h6 class="display-1 mb-1 grey--text">{{ item.displayDom.nomCourt }}</h6>
                                            <v-avatar>
                                                <v-img v-bind:src="'img/fanion/'+item.displayDom.fanion" :alt="item.displayDom.nomCourt" max-height="25" max-width="25"/>
                                            </v-avatar>
                                        </v-col>
                                        <v-col class="pa-4 ma-0">
                                            <v-chip color="grey" ><h6 class="display-1 mb-1 font-weight-bold">{{ item.score }}</h6></v-chip>
                                        </v-col>
                                        <v-col class="pa-1 ma-0">
                                            <h6 class="display-1 mb-1 grey--text">{{ item.displayExt.nomCourt }}</h6>
                                            <v-avatar>
                                                <v-img v-bind:src="'img/fanion/'+item.displayExt.fanion" :alt="item.displayExt.nomCourt" max-height="25" max-width="25"/>
                                            </v-avatar>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>
                </v-timeline>
            </v-card-text>
        </v-card>
    </v-col>
    <v-col>
        <v-card class="mx-auto" >
            <v-card dark flat >
                <v-card-title class="pa-2 secondary lighten-3">
                    <h3 class="font-weight-light text-center black grow">
                        Ligne de temps - Matchs de Classement
                    </h3>
                </v-card-title>
            </v-card>
            <v-card-text class="pa-1 ma-0">
                <v-timeline align-top dense >

                    <v-timeline-item color="secondary" v-for="item in getMatchsFinales" v-bind:key="item.id">
                        <v-card max-width="400" class="pa-0 ma-0">
                            <v-card-title>
                                <strong>{{ item.heureDebut }} - {{ item.salle }}</strong>
                            </v-card-title>

                            <v-card-text class="pa-0 ma-0"  align="center">
                                <h6>N° {{ item.id }}, Catégorie : {{ item.categorie }}, {{ item.nom }}</h6>
                                <v-container class="pa-0 ma-0">
                                    <v-row >
                                        <v-col class="pa-1 ma-0">
                                            <h6 class="display-1 mb-1 grey--text">{{ item.displayDom.nomCourt }}</h6>
                                            <v-avatar>
                                                <v-img v-bind:src="'img/fanion/'+item.displayDom.fanion" :alt="item.displayDom.nomCourt" max-height="25" max-width="25"/>
                                            </v-avatar>
                                        </v-col>
                                        <v-col class="pa-4 ma-0">
                                            <v-chip color="grey" ><h6 class="display-1 mb-1 font-weight-bold">{{ item.score }}</h6></v-chip>
                                        </v-col>
                                        <v-col class="pa-1 ma-0">
                                            <h6 class="display-1 mb-1 grey--text">{{ item.displayExt.nomCourt }}</h6>
                                            <v-avatar>
                                                <v-img v-bind:src="'img/fanion/'+item.displayExt.fanion" :alt="item.displayExt.nomCourt" max-height="25" max-width="25"/>
                                            </v-avatar>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>
                </v-timeline>
            </v-card-text>
        </v-card>
    </v-col>
    </v-row>
    </v-container>
</template>



<script>
import axios from 'axios'

export default {
    data() {
      return {
        urlF_c1_PouleA: process.env.BASE_URL + "datas/F_c1_pouleA.json",
        urlF_c1_PouleB: process.env.BASE_URL + "datas/F_c1_pouleB.json",
        urlU15F_c2_Poule: process.env.BASE_URL + "datas/U15F_c2_pouleA.json",

        urlF_c1_finales: process.env.BASE_URL + "datas/F_c1_finales.json",
        urlU15F_c2_finales: process.env.BASE_URL + "datas/U15F_c2_finales.json",

        urlEquipe: process.env.BASE_URL + "datas/info_tournoi.json",

        lesmatchs_c1_pA: [],
        lesmatchs_c1_pB: [],
        lesmatchs_c2_p: [],

        lesmatchs_c1_final: [],
        lesmatchs_c2_final: [],

        lesequipeskey: {},

        headersMatch: [
          {
            sortable: false,
            text: 'Salle/Heure',
            value: 'id',
            align: 'center',
            class: 'px-1',
            cellClass: 'px-1',
          },
          {
            sortable: false,
            text: 'Match',
            value: 'nom',
            align: 'center',
            class: 'px-1',
            cellClass: 'px-1',
          },
          {
            sortable: false,
            text: 'Equipe Domicile',
            value: 'displayDom.fanion',
            align: 'center',
            class: 'px-1',
            cellClass: 'px-1',
          },
          {
            sortable: false,
            text: 'Score',
            value: 'score',
            align: 'center',
            class: 'font-weight-bold px-0',
            cellClass: 'px-1',
          },
          {
            sortable: false,
            text: 'Equipe Exterieur',
            value: 'displayExt.fanion',
            align: 'center',
            class: 'px-1',
            cellClass: 'px-1',
          },
        ],
      }
    },
    created() {
      this.loadDataOds();
    },
    methods: {
      update(){
        this.loadDataOds();
      },
      loadDataOds() {
            // Load Equipes
            var urlEquipe = this.urlEquipe;
            axios
              .get(urlEquipe)
              .then(response => {
                var equipes = response.data.lesequipes
                for (var n in equipes) {
                    this.lesequipeskey[equipes[n].id] = equipes[n]
                }
                //console.log(this.lesequipeskey)
              }).catch(error => {
                 console.log(error)
              });

            // Load PoulesA
            var urlF_c1_PouleA = this.urlF_c1_PouleA;
            axios
                .get(urlF_c1_PouleA)
                .then(response => {
                  this.lesmatchs_c1_pA = response.data.lesmatchs

                  for (var n in this.lesmatchs_c1_pA ) {
                    this.lesmatchs_c1_pA[n].score = this.lesmatchs_c1_pA[n].equipeDom.but+" - "+this.lesmatchs_c1_pA[n].equipeExt.but
                    this.lesmatchs_c1_pA[n].displayDom = this.lesequipeskey[this.lesmatchs_c1_pA[n].equipeDom.id]
                    this.lesmatchs_c1_pA[n].displayExt = this.lesequipeskey[this.lesmatchs_c1_pA[n].equipeExt.id]
                    this.lesmatchs_c1_pA[n].categorie = "Senior F / U18F / PA"
                  }
                }).catch(error => {
                   console.log(error)
                })

            // Load PoulesB
            var urlF_c1_PouleB = this.urlF_c1_PouleB;
            axios
                .get(urlF_c1_PouleB)
                .then(response => {
                  this.lesmatchs_c1_pB = response.data.lesmatchs

                  for (var n in this.lesmatchs_c1_pB ) {
                    this.lesmatchs_c1_pB[n].score = this.lesmatchs_c1_pB[n].equipeDom.but+" - "+this.lesmatchs_c1_pB[n].equipeExt.but
                    this.lesmatchs_c1_pB[n].displayDom = this.lesequipeskey[this.lesmatchs_c1_pB[n].equipeDom.id]
                    this.lesmatchs_c1_pB[n].displayExt = this.lesequipeskey[this.lesmatchs_c1_pB[n].equipeExt.id]
                    this.lesmatchs_c1_pB[n].categorie = "Senior F / U18F / PB"
                  }
                }).catch(error => {
                   console.log(error)
                })

            // Load C2_P
            var urlU15F_c2_Poule = this.urlU15F_c2_Poule;
            axios
                .get(urlU15F_c2_Poule)
                .then(response => {
                  this.lesmatchs_c2_p = response.data.lesmatchs

                  for (var n in this.lesmatchs_c2_p ) {
                    this.lesmatchs_c2_p[n].score = this.lesmatchs_c2_p[n].equipeDom.but+" - "+this.lesmatchs_c2_p[n].equipeExt.but
                    this.lesmatchs_c2_p[n].displayDom = this.lesequipeskey[this.lesmatchs_c2_p[n].equipeDom.id]
                    this.lesmatchs_c2_p[n].displayExt = this.lesequipeskey[this.lesmatchs_c2_p[n].equipeExt.id]
                    this.lesmatchs_c2_p[n].categorie = "U15F"
                  }
                }).catch(error => {
                   console.log(error)
                })


            // Load C1_F
            var urlF_c1_finales = this.urlF_c1_finales;
            axios
                .get(urlF_c1_finales)
                .then(response => {
                  this.lesmatchs_c1_final = response.data.lesmatchs
                  var blancEquipe = {"categorie_id": "","id": "","nom": "","nomCourt": "","fanion": ""}

                  for (var n in this.lesmatchs_c1_final ) {
                    this.lesmatchs_c1_final[n].score = this.lesmatchs_c1_final[n].equipeDom.but+" - "+this.lesmatchs_c1_final[n].equipeExt.but

                    if (this.lesmatchs_c1_final[n].equipeDom.id)
                        this.lesmatchs_c1_final[n].displayDom = this.lesequipeskey[this.lesmatchs_c1_final[n].equipeDom.id]
                    else
                        this.lesmatchs_c1_final[n].displayDom = blancEquipe

                    if (this.lesmatchs_c1_final[n].equipeExt.id)
                        this.lesmatchs_c1_final[n].displayExt = this.lesequipeskey[this.lesmatchs_c1_final[n].equipeExt.id]
                    else
                        this.lesmatchs_c1_final[n].displayExt = blancEquipe

                    this.lesmatchs_c1_final[n].categorie = "SeniorsF/U18F"
                  }
                }).catch(error => {
                   console.log(error)
                })

            // Load C2_F
            var urlU15F_c2_finales = this.urlU15F_c2_finales;
            axios
                .get(urlU15F_c2_finales)
                .then(response => {
                  this.lesmatchs_c2_final = response.data.lesmatchs
                  var blancEquipe = {"categorie_id": "","id": "","nom": "","nomCourt": "","fanion": ""}

                  for (var n in this.lesmatchs_c2_final ) {
                    this.lesmatchs_c2_final[n].score = this.lesmatchs_c2_final[n].equipeDom.but+" - "+this.lesmatchs_c2_final[n].equipeExt.but

                    if (this.lesmatchs_c2_final[n].equipeDom.id)
                        this.lesmatchs_c2_final[n].displayDom = this.lesequipeskey[this.lesmatchs_c2_final[n].equipeDom.id]
                    else
                        this.lesmatchs_c2_final[n].displayDom = blancEquipe

                    if (this.lesmatchs_c2_final[n].equipeExt.id)
                        this.lesmatchs_c2_final[n].displayExt = this.lesequipeskey[this.lesmatchs_c2_final[n].equipeExt.id]
                    else
                        this.lesmatchs_c2_final[n].displayExt = blancEquipe

                    this.lesmatchs_c2_final[n].categorie = "U15F"
                  }
                }).catch(error => {
                   console.log(error)
                })

      }
    },
    computed: {
        getMatchs() {
            var lesmatchs = this.lesmatchs_c1_pA.concat(this.lesmatchs_c1_pB).concat(this.lesmatchs_c2_p)
            for (var n in lesmatchs) {
                lesmatchs[n].keytime = lesmatchs[n].heureDebut.replace(":", "")
            }
            return lesmatchs.sort((p1, p2) => (p1.keytime > p2.keytime) ? 1 : (p1.keytime < p2.keytime) ? -1 : (p1.id > p2.id) ? 1 :(p1.id < p2.id) ? -1 : 0)
        },
        getMatchsFinales() {
            var lesmatchs = this.lesmatchs_c1_final.concat(this.lesmatchs_c2_final)
            for (var n in lesmatchs) {
                lesmatchs[n].keytime = lesmatchs[n].heureDebut.replace(":", "")
            }
            return lesmatchs.sort((p1, p2) => (p1.keytime > p2.keytime) ? 1 : (p1.keytime < p2.keytime) ? -1 : (p1.id > p2.id) ? 1 :(p1.id < p2.id) ? -1 : 0)
        },
    }
};
</script>


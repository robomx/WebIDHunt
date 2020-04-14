<template>
    <div>
      <div class="searchbar">
        <input v-model="query" type="text" id="fname" name="fname" />
        <button @click="inputChange()">Check</button>
      </div>

      <div class="container">
        <div v-for="cat of category" v-bind:key="category.indexOf(cat) + 'cat'">
             <h1 class="title has-pad-down">{{cat.toUpperCase()}} <div class="bounce-shimmer bounce-animate" v-if="category.length == 0"></div></h1>
              <div class="columns is-multiline"> 
                 <div class="column" v-for="card of cards[cat]" v-bind:key="cards[cat].indexOf(card) + cat">
                    <a :href="card.endpoint.replace('<username>', query)" class="has-text-centered">
                        <h2 class="subtitle">
                          {{card['name']}}
                        </h2>
                        {{cards[cat][cards[cat].indexOf(card)]['shimmer']}}
                        <h2 class="subtitle" v-if="cards[cat][cards[cat].indexOf(card)]['shimmer']">
                          <div class="simple-animate" style="height: 19px;width: 149px; margin:auto"></div>
                        </h2>
                        <figure class="image is-128x128 has-img-centered" >
                            <img :src="card.logo">
                        </figure>
                        
                  <div class="simple-animate" style="height: 130px;width: 149px; margin:auto;">
                      <figure class="image is-128x128 has-img-centered" >
                      </figure>
                  </div>

                    </a>
                </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import list from '~/static/list';
import axios from 'axios';

export default {
    data: () => ({
        query: '',
        cards: [],
        category: [],
        showShimmer: true,
        hapyproxy: 'http://localhost:5050/'
    }),
    created: function() {
        this.cards = list.domains
        this.category = Object.keys(list.domains)
    },
    methods: {
        inputChange() {
            this.searchUsername()
        },
        searchUsername() {
            this.cards = list.domains;
            this.category.forEach(cat => {
                this.cards['social'].forEach(card => {
                    this.cards['social'][this.cards['social'].indexOf(card)]['shimmer'] = true
                    this.cards['social'][this.cards['social'].indexOf(card)]['available'] = false
                    var url = this.cards['social'][this.cards['social'].indexOf(card)]['endpoint'].replace('<username>', this.query)
                    this.checkEndpoint(this.cards['social'][this.cards['social'].indexOf(card)], cat, url)
                })
            })
        },
        checkEndpoint(card, cat, url) {
            console.log(url)

            axios.get(this.hapyproxy + url).then((Response) => {
                if (Response.status == 200) {
                    this.updateCard(card, cat, false, true)
                } else {
                    this.updateCard(card, cat, false, false)
                }
            }, (Err) => {
                console.log(Err)
                this.updateCard(card, cat, false, false)
            })
        },
        updateCard(card, category, shimmerEffect, available) {
            card['shimmer'] = shimmerEffect
            card['available'] = available
            // update list
            this.cards[category][this.cards[category].indexOf(card)] = card
        }
    }
}
</script>

<style scoped>
.searchbar {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  padding: 5px;
}
input {
  height: 29px;
  width: 283px;
  border: 3px solid #0a173e;
  background-color: #fff;
}
button {
  margin-left: -1px;
  height: 29px;
  margin-top: 0px;
  outline: none;
  border: 3px solid #0a173e;
  background-color: #0a173e;
  font-size: 1em;
  color: white;
}
.container {
    padding: 10%;
}

.column {
    padding: 30px;
}
.has-img-centered {
  margin: auto ;
}
.has-pad-down {
      padding-top: 23px;
}
.simple-animate {
    background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
    background-position: 1000px 100%;
    animation: simpleshim 8s linear infinite;
}

@keyframes simpleshim {
    0% {
        background-position: -1000px 0;
    }
    50%{
        transform: scale(1);
    }
    100% {
        background-position: 1000px 0;
    }
}


</style>
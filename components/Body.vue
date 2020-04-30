<template>
  <div>
    <div class="searchbar">
      <form v-on:submit.prevent="prevent()">
        <input v-model="query" v-on:keyup="enterTrigger" id="fname" name="fname" />

        <button @click="inputChange()">Check</button>
      </form>
    </div>
    <div class="container">
      <div v-for="cat of category" v-bind:key="category.indexOf(cat) + 'cat'">
        <h1 class="title has-pad-down">{{cat.toUpperCase()}}</h1>
        <div class="columns is-multiline mobile">
          <div
            class= "column is-2 is-5-mobile" 
            v-for="card of lists[cat]"
            v-bind:key="lists[cat].indexOf(card) + cat"
          >
            <a
              :href="card.endpoint.replace('<username>', query)" target="_blank"
              class="has-text-centered no-event"
            >
              <div v-if="shimmer
               == 'hide'" v-bind:class = "(lists[cat][lists[cat].indexOf(card)]['available'] == ''? 'blur': '')">
               
                <h2 class="subtitle has-text-centered" >{{card['name']}}</h2>

                <figure class="image is-128x128 has-img-centered">
                  <img :src="card.logo"  class="img-resize"/>
                </figure>
              </div>

              <div class="shimmer" v-else >

                <h2 class="subtitle">
                  <div class="simple-animate" style="height: 19px;width: 99px; margin:auto"></div>
                </h2>
                <div class="simple-animate" style="height: 101px;width: 101px; margin:auto;"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import list from '~/static/list'
import axios from 'axios'

export default {
  data: () => ({
    query: '',
    cards: [],
    lists: [],
    category: [],
    shimmer: 'hide',
    a: '',
    hayproxy: 'https://hayproxy.herokuapp.com/'

  }),
  created: function() {
    this.cards = list.domains
    this.category = Object.keys(list.domains)
    Object.keys(this.cards).forEach((c, i)=> {
      this.cards[c].forEach((l, j) =>  {
        this.cards[c][j]['shimmer'] = 'hide';
        this.cards[c][j]['available'] = 'none';
      })
    })
    console.log(this.cards)

    this.lists = this.cards   
  },
  methods: {
 
    enterTrigger: function(e) {
      if (e.keyCode === 13) {
        this.inputChange()
      }
    },
    prevent() {},
    inputChange() {
      this.searchUsername()
    },
    eventRemove() {
      var er = document.getElementsByClassName('no-event')[0];
      if(er) {
        er.classList.remove('no-event');
      }
    },
 
    searchUsername() {
      this.shimmer
      = 'show'
      this.lists = this.cards   
      this.category.forEach(cat => {
        this.lists[cat].forEach(card => {
         
          this.lists[cat][this.lists[cat].indexOf(card)]['available'] = ''
          var url = this.lists[cat][this.lists[cat].indexOf(card)][
            'endpoint'
          ].replace('<username>', this.query)
          this.checkEndpoint(
            this.lists[cat][this.lists[cat].indexOf(card)],
            cat,
            url
          )
        })
      })
    },
    checkEndpoint(card, cat, url) {
      axios.get(this.hayproxy + url).then(
        Response => {
          if (Response.status == 200) {
            this.updateCard(card, cat, 'hide', '')
          } else {
            this.updateCard(card, cat, 'hide', 'none')
          }
       this.eventRemove();
        },
        Err => {
          this.updateCard(card, cat, 'hide', 'none')
        }
      )
    },
    updateCard(card, category, shimmerEffect, available) {
      this.shimmer
       = shimmerEffect

      card['available'] = available
      // update list
      this.lists[category][this.lists[category].indexOf(card)] = card
    },
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

* {
 font-family: 'Roboto', sans-serif;
}
.blur {
  filter: blur(2.5px);
}
.no-event {
  cursor: not-allowed;
  pointer-events: none;
  filter: blur(2px);
}
.event {
  opacity: 1;
}
.searchbar {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  padding: 5px;
}
input {
  height: 29px;
  width: 224px;
  border: 3px solid #0a173e;
  background-color: #fff;
}
button {
  height: 29px;
  position: relative;
  left: -5px;
  top: 1px;
  outline: none;
  border: 3px solid #0a173e;
  background-color: #0a173e;
  font-size: 1em;
  color: white;
}
.container {
  padding: 10%;
}
.has-img-centered {
  margin: auto;
}
.simple-animate {
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-position: 1000px 100%;
  animation: simpleshim 8s linear infinite;
}
.img-resize {
  height: 70px;
  width: 70px;
  margin: auto;
}
@keyframes simpleshim {
  0% {
    background-position: -1000px 0;
  }
  50% {
    transform: scale(1);
  }
  100% {
    background-position: 1000px 0;
  }
}

@media screen and (max-width: 768px) {
  .mobile {
    flex-wrap: wrap !important;
    display: flex !important;
    justify-content: center !important;
  }
}

.subtitle {
  white-space: nowrap;

}
</style>
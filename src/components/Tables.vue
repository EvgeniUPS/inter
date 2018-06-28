<template>
  
  <v-container fluid grid-list-md>
    

    
    <input type="text" class="form-control" placeholder="Поиск" aria-label="Username" aria-describedby="basic-addon1"  v-model="searchName" autofocus>
    <v-layout row wrap>
    <v-flex v-if="name.showItem == 1" d-flex xs12 sm6 v-for="name in filteredNames" :key="name.id">
       <v-card >
          <v-card-title primary-title>
          <div>
            <div class="headline"> {{name.model}} ({{name.cover}}) </div>
          </div>
        </v-card-title>
        <v-card-media
          :src="name.image"
          height="500px"
        >
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <div class="headline"> {{name.model}} ({{name.cover}}) </div>
            <span class="grey--text">Цена: {{name.firstPrice | price}} грн. </span>
              <v-spacer></v-spacer>
            <span class="red--text headline">После скидки: {{name.finalPrice | price}} грн. </span>
          </div>
        </v-card-title>
        <v-card-actions>
          <!-- <v-btn flat>Share</v-btn> -->
          <v-btn flat color="purple">Explore</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show">
            {{name.description}}
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
     </v-layout>

  </v-container>
  </template>

<script>
export default {
  data() {
    return {
      show: false,
      //////

      names: [
        /////////////////
        {
          id: "158517",
          showItem: "1",
          factory: "OFFERTA",
          model: "B179-70",
          cover: "grey",
          description: "Стол раскладной",
          art: "B179-70 Table col. grey",
          stock: "4",
          firstPrice: "8589",
          finalPrice: "6441.75",
          image: "/static/img/tables/158517.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "Италия",
          tags: ""
        },
        {
          id: "158518",
          showItem: "1",
          factory: "OFFERTA",
          model: "B179-70",
          cover: "white",
          description: "Стол раскладной",
          art: "B179-70 Table col. white",
          stock: "12",
          firstPrice: "8589",
          finalPrice: "6441.75",
          image: "/static/img/tables/158518.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "Италия",
          tags: ""
        },
        {
          id: "158519",
          showItem: "1",
          factory: "OFFERTA",
          model: "B179-76",
          cover: "grey",
          description: "Стол раскладной",
          art: "B179-76 Table col. grey",
          stock: "3",
          firstPrice: "6084",
          finalPrice: "4563",
          image: "/static/img/tables/158519.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "Италия",
          tags: ""
        },
        {
          id: "158525",
          showItem: "1",
          factory: "OFFERTA",
          model: "DC-107",
          cover: "25 FABRIC",
          description: "Стул",
          art: "DC-107 Chair col. 25 FABRIC",
          stock: "4",
          firstPrice: "1253",
          finalPrice: "939.75",
          image: "/static/img/tables/158525.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "Италия",
          tags: ""
        },
        {
          id: "160231",
          showItem: "1",
          factory: "OFFERTA",
          model: "DC-119-2",
          cover: "12B,powder coating legs",
          description: "Стул",
          art: "DC-119-2 PU leather col.12B,powder coating legs",
          stock: "1",
          firstPrice: "1298",
          finalPrice: "973.5",
          image: "/static/img/tables/160231.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "Италия",
          tags: ""
        },
        {
          id: "160232",
          showItem: "1",
          factory: "OFFERTA",
          model: "DC-119-2",
          cover: "36B,powder coating legs",
          description: "Стул",
          art: "DC-119-2 PU leather col.36B,powder coating legs",
          stock: "4",
          firstPrice: "1298",
          finalPrice: "973.5",
          image: "/static/img/tables/160232.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "Италия",
          tags: ""
        },
        {
          id: "158530",
          showItem: "1",
          factory: "OFFERTA",
          model: "DC-133",
          cover: "grey",
          description: "Стул",
          art: "DC-133 Chair col.grey",
          stock: "6",
          firstPrice: "2103",
          finalPrice: "1577.25",
          image: "/static/img/tables/158530.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "Италия",
          tags: ""
        },
        {
          id: "158527",
          showItem: "1",
          factory: "OFFERTA",
          model: "DC-138",
          cover: "grey",
          description: "Стул",
          art: "DC-138 Chair col.grey",
          stock: "3",
          firstPrice: "1387",
          finalPrice: "1040.25",
          image: "/static/img/tables/158527.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "Италия",
          tags: ""
        },
        {
          id: "158528",
          showItem: "1",
          factory: "OFFERTA",
          model: "DC-138",
          cover: "White",
          description: "Стул",
          art: "DC-138 Chair col.White",
          stock: "33",
          firstPrice: "1387",
          finalPrice: "1040.25",
          image: "/static/img/tables/158528.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "Италия",
          tags: ""
        },
        {
          id: "158523",
          showItem: "1",
          factory: "OFFERTA",
          model: "DC-40",
          cover: "Dark Brown",
          description: "Стул",
          art: "DC-40 Chair col.Dark Brown",
          stock: "1",
          firstPrice: "1298",
          finalPrice: "973.5",
          image: "/static/img/tables/158523.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "Италия",
          tags: ""
        },
        {
          id: "158524",
          showItem: "1",
          factory: "OFFERTA",
          model: "DC-40",
          cover: "grey",
          description: "Стул",
          art: "DC-40 Chair col.grey",
          stock: "3",
          firstPrice: "1298",
          finalPrice: "973.5",
          image: "/static/img/tables/158524.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "Италия",
          tags: ""
        },
        {
          id: "158526",
          showItem: "1",
          factory: "OFFERTA",
          model: "DC-96",
          cover: "grey",
          description: "Стул",
          art: "DC-96 Chair col.grey",
          stock: "3",
          firstPrice: "1432",
          finalPrice: "1074",
          image: "/static/img/tables/158526.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "Италия",
          tags: ""
        },
        {
          id: "160233",
          showItem: "1",
          factory: "OFFERTA",
          model: "DC-96",
          cover: "36B,chrome legs",
          description: "Стул",
          art: "DC-96 PU leather col.36B,chrome legs",
          stock: "6",
          firstPrice: "1432",
          finalPrice: "1074",
          image: "/static/img/tables/160233.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "Италия",
          tags: ""
        },
        {
          id: "158520",
          showItem: "1",
          factory: "OFFERTA",
          model: "DT-44",
          cover: "white",
          description: "Стул",
          art: "DT-44 Table col. white",
          stock: "1",
          firstPrice: "14761",
          finalPrice: "11070.75",
          image: "/static/img/tables/158520.jpg",
          sizeW: "180(220)",
          sizeD: "",
          sizeH: "",
          country: "Италия",
          tags: ""
        },
        {
          id: "158531",
          showItem: "1",
          factory: "OFFERTA",
          model: "Y-217",
          cover: "White",
          description: "Стул",
          art: "Y-217 Chair col.White",
          stock: "5",
          firstPrice: "1790",
          finalPrice: "1342.5",
          image: "/static/img/tables/158531.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "Италия",
          tags: ""
        },
        {
          id: "160229",
          showItem: "1",
          factory: "OFFERTA",
          model: "В179-76",
          cover: "№1, powder coating finish",
          description: "Стол раскладной",
          art:
            "В179-76 cappucino  tempered glass 6 mm  col.№1, powder coating finish",
          stock: "1",
          firstPrice: "6084",
          finalPrice: "4563",
          image: "/static/img/tables/160229.jpg",
          sizeW: "",
          sizeD: "",
          sizeH: "",
          country: "Италия",
          tags: ""
        }

        /////////////////
      ],
      searchName: "",
      carName: "",
      carYear: 2018,
      cars: []
    };
  },
  methods: {
    createCar() {
      const car = {
        name: this.carName,
        year: this.carYear
      };

      this.$http
        .post("http://localhost:3000/cars", car)
        .then(response => {
          return response.json();
        })
        .then(newCar => {
          console.log(newCar);
        });
    },
    loadCars() {
      this.$http
        .get("http://localhost:3000/cars")
        .then(response => {
          return response.json();
        })
        .then(cars => {
          this.cars = cars;
          console.log(cars);
        });
    }
  },

  filters: {
    lowercase(value) {
      return value.toLowerCase();
    }
  },
  computed: {
    filteredNames() {
      return this.names.filter(name => {
        return (
          name.id.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1 ||
          name.factory.toLowerCase().indexOf(this.searchName.toLowerCase()) !==
            -1 ||
          name.model.toLowerCase().indexOf(this.searchName.toLowerCase()) !==
            -1 ||
          name.cover.toLowerCase().indexOf(this.searchName.toLowerCase()) !==
            -1 ||
          name.description
            .toLowerCase()
            .indexOf(this.searchName.toLowerCase()) !== -1 ||
          name.art.toLowerCase().indexOf(this.searchName.toLowerCase()) !==
            -1 ||
          name.stock.toLowerCase().indexOf(this.searchName.toLowerCase()) !==
            -1 ||
          name.firstPrice
            .toLowerCase()
            .indexOf(this.searchName.toLowerCase()) !== -1 ||
          name.finalPrice
            .toLowerCase()
            .indexOf(this.searchName.toLowerCase()) !== -1 ||
          name.sizeW.toLowerCase().indexOf(this.searchName.toLowerCase()) !==
            -1 ||
          name.sizeD.toLowerCase().indexOf(this.searchName.toLowerCase()) !==
            -1 ||
          name.sizeH.toLowerCase().indexOf(this.searchName.toLowerCase()) !==
            -1 ||
          name.country.toLowerCase().indexOf(this.searchName.toLowerCase()) !==
            -1 ||
          name.tags.toLowerCase().indexOf(this.searchName.toLowerCase()) !==
            -1 ||
          name.id.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1 ||
          name.factory.toLowerCase().indexOf(this.searchName.toLowerCase()) !==
            -1 ||
          name.tags.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
        );
      });
    }
  }
};
</script>

<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
}

.product-card {
  padding: 2%;
  flex-grow: 1;
  flex-basis: 30%;
  /* position: relative; */
  /* padding-bottom: 170px; */
  font-size: 17px;
}

.product-image img {
  max-width: 100%;
}

.product-info {
  /* position: absolute; */
  bottom: 0px;
}

/* Выбираем первые два товара */
.products .product-card:last-child,
.products .product-card:nth-last-child(2) {
  flex: 2 46%;
}

@media (max-width: 600px) {
  .product-card {
    flex: 1 46%;
  }
}
</style>


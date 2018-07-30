<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list >

        <v-list-tile @click="" to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>


    <v-list-tile @click="" to="/tables">
          <v-list-tile-action>
            <v-icon>keyboard_arrow_right</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Столы</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>



        <v-list-tile @click="" to="/sofas">
          <v-list-tile-action>
            <v-icon>keyboard_arrow_right</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Мягкая</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="" to="/discount">
          <v-list-tile-action>
            <v-icon>keyboard_arrow_right</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Уценка</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="" to="/temp">
          <v-list-tile-action>
            <v-icon>keyboard_arrow_right</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dev</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <!-- <v-list-tile @click="" to="/products">
          <v-list-tile-action>
            <v-icon>keyboard_arrow_right</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Products</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile> -->


        

      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="teal darken-2" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Interqd App v.1.0.1</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
    <router-view></router-view>
 
      </v-container>
    </v-content>
    <!-- <v-footer color="teal darken-2" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer> -->
    <back-to-top >
  <v-btn fixed right bottom fab dark color="cyan darken-3" @click="document.scrollTop = 0"><v-icon>arrow_upward</v-icon></v-btn>
</back-to-top>



  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  }
};
</script>



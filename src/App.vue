<template>
  <v-app>
    <v-navigation-drawer 
      app 
      temporary 
      v-model="drawer"
      >
      
      <v-list>
          <v-list-tile
            v-for="link of links"
            :key="link.title"
            :to="link.url"

          >
            <v-list-tile-action>
              <v-icon>{{link.icon}}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title v-text="link.title"></v-list-tile-title>
            </v-list-tile-content>

          </v-list-tile>
        </v-list>
      
      </v-navigation-drawer>

    <v-toolbar app dark color="primary">
      
      <v-toolbar-side-icon 
        @click="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-toolbar-side-icon>

      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">Interqd app 1.0.1</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        
        <v-btn
          v-for="link in links"
          :key="link.title"
          :to="link.url"
          flat>
          <v-icon left>{{link.icon}}</v-icon>
          {{link.title}}
        </v-btn>

      </v-toolbar-items>
      </v-toolbar>
      
    <v-content>
      <router-view></router-view>
    </v-content>
        <back-to-top >
  <v-btn fixed right bottom fab dark color="cyan darken-3" @click="document.scrollTop = 0"><v-icon>arrow_upward</v-icon></v-btn>
</back-to-top>
  </v-app>
  
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      links: [
        {title: 'Sofas', icon: 'keyboard_arrow_right', url: '/sofas'},
        {title: 'Discount', icon: 'keyboard_arrow_right', url: '/discount'},
        {title: 'Decor', icon: 'keyboard_arrow_right', url: '/decor'},
        {title: 'Registration', icon: 'face', url: '/registration'},
      ]
    }
  }
}
</script>
<style scoped>
  .pointer{
    cursor: pointer;
  }
</style>

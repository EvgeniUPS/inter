<template>

  <div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">

  <div class="collapse navbar-collapse">
    <div class="navbar-nav">
      <router-link></router-link>
      <router-link class="nav-item nav-link" to="/">Bedrooms</router-link>
      <router-link class="nav-item nav-link" :to="'/tables'">Tables</router-link>
      <router-link class="nav-item nav-link" :to="'/temp'">Temp</router-link>
    </div>
  </div>
</nav>

        <router-view></router-view>
</div>


  
      
</template>

<script>
export default {
  data: () => ({
    qqq() {
      console.log(1);
    },
    dialog: false,
    drawer: null,
    items: [
      {
        icon: "keyboard_arrow_up",
        "icon-alt": "keyboard_arrow_down",
        text: "More",
        model: false,
        children: [
          { text: "Home", link: "/" },
          { text: "Столы, стулья", link: "/tables" },
          { text: "Temp", link: "/temp" },
          { text: "Print" },
          { text: "Undo changes" },
          { text: "Other contacts" }
        ]
      },
      { icon: "contacts", text: "Contacts" },
      { icon: "history", text: "Frequently contacted" },
      { icon: "content_copy", text: "Duplicates" },
      {
        icon: "keyboard_arrow_up",
        "icon-alt": "keyboard_arrow_down",
        text: "Labels",
        model: true,
        children: [{ icon: "add", text: "Create label" }]
      },

      { icon: "settings", text: "Settings" },
      { icon: "chat_bubble", text: "Send feedback" },
      { icon: "help", text: "Help" },
      { icon: "phonelink", text: "App downloads" },
      { icon: "keyboard", text: "Go to the old version" }
    ]
  }),
  props: {
    source: String
  }
};
</script>
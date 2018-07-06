<template>
  <div class="container">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  
  <div class="collapse navbar-collapse" >
      <ul class="navbar-nav">
        <!-- <li class="nav-item">
          <router-link class="nav-item nav-link" to="/">Bedrooms</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-item nav-link" :to="'/tables'">Tables</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-item nav-link" :to="'/temp'">Temp</router-link>
        </li> -->

        <router-link tag="li" class="nav-item" exact to="/" active-class="active">
          <a class="nav-link">Home</a>
        </router-link>
        <router-link tag="li" class="nav-item" to="/tables" active-class="active">
          <a class="nav-link">Tables</a>
        </router-link>
        <router-link tag="li" class="nav-item" to="/temp" active-class="active">
          <a class="nav-link">Temp</a>
        </router-link> 
            <router-link tag="li" class="nav-item" to="/discount" active-class="active">
          <a class="nav-link">Уценка</a>
        </router-link> 
            <router-link tag="li" class="nav-item" to="/disc" active-class="active">
          <a class="nav-link">Уценка ВСЯ</a>
        </router-link> 
    
      </ul>
    </div>
  </nav>
  <router-view></router-view>
</div>
     
</template>

<script>
export default {
  data: () => ({
    qqq: 1
  }),
  props: {
    source: String
  }
};
</script>
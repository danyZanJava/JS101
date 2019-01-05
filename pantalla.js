<html>
<head>
<!-- VER: https://bootstrap-vue.js.org/docs/components/ -->
<link type="text/css" rel="stylesheet" href="//unpkg.com/bootstrap/dist/css/bootstrap.min.css"/>
<link type="text/css" rel="stylesheet" href="//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.css"/>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="//unpkg.com/babel-polyfill@latest/dist/polyfill.min.js"></script>
<script src="//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.js"></script>

</head>
<body>
    <!-- Our application root element -->
    <div id="app">
      <b-container>
        <b-jumbotron header="DanyZanWebMaster"
                     lead="Masaje Relajante-Descontracturante-Adultos Mayores"
        >
          <p>For more information visit our website</p>
          <b-btn variant="primary" href="https://bootstrap-vue.js.org/">More Info</b-btn>
        </b-jumbotron>

<div>
  <b-card title="Ejemplo Card básico"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Imagen ilustrativa"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
      Venite a Podemos Aprender
    </p>
    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
    
    
    <b-card title="Ejemplo Card"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Imagen ilustrativa"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
      Venite a los masajes
    </p>
    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</div>

        <b-form-group horizontal
                      :label-cols="4"
                      description="Let us know your name."
                      label="Enter your name"
        >
           <b-form-input v-model.trim="name"></b-form-input>
        </b-form-group>

        <b-alert variant="success" :show="showAlert">
          Hello {{ name }}
        </b-alert>
      </b-container>
    </div>

<!-- Start running your app -->
    <script>
      window.app = new Vue({
        el: "#app",
        data: {
          name: ''
        },
        computed: {
          showAlert() {
            return this.name.length > 4 ? true : false;
          }
        }
      })
    </script>
</body>
</html>

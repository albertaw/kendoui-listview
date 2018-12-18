<template>
  <div id="app">
    <kendo-listview :data-source="dataSource" :template="template">
    </kendo-listview>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      dataSource: [
        {
          name: 'Jane', 
          surname: 'Doe', 
          gender: 'female', 
          region: 'United States'
        },
        {
          name: 'John', 
          surname: 'Doe',
          gender: 'male',
          region: 'United States'
        }
      ],
      template: `
      <div class="card">
        <div class="card-body">
          <span>First Name:</span> #:name#<br>
          <span>Last Name:</span> #:surname#<br>
          <span>Gender:</span> #:gender#<br>
          <span>Region:</span> #:region#<br>
        </div>
      </div>
      `,
    }
  }
}
</script>

<style>
#app {
  width: 50%;
  min-width: 360px;
  margin: 0 auto;
  font-family: 'helvetica';
}

.k-listview {
 background-color: #3f51b5; 
}

.card {
  background: #fff;
  font-size: 16px;
  width: 75%;
  min-width: 286px;
  margin: 2em auto;
  padding: 1.25em;
  border-radius: 4px;
  box-shadow: 0 3px 1px -2px rgba(0,0,0,0.2), 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12);
}

.card-header {
  height: 2em;
}
.card-controls {
  float: right;
}

.card-body span {
  width: 100px;
  display: inline-block;
  font-weight: bold;
}
</style>

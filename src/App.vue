<template>
  <div id="app">
    <kendo-datasource ref="dataSource"
      :transport-read-url="'https://uinames.com/api/?amount=20&region=united+states'"
      :transport-read-data-type="'json'"
      :page-size="4">
    </kendo-datasource>
    <kendo-pager :data-source-ref="'dataSource'">
    </kendo-pager>

    <kendo-listview 
      :data-source-ref="'dataSource'" 
      :template="template"
      :edit-template="editTemplate">
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
        <div class="card-header">
          <div class="card-controls">
            <button class="k-button k-edit-button"><span class="k-icon k-i-edit"></span></button>
            <button class="k-button k-delete-button"><span class="k-icon k-i-close"></span></button>
          </div>
        </div>
        <div class="card-body">
          <span>First Name:</span> #:name#<br>
          <span>Last Name:</span> #:surname#<br>
          <span>Gender:</span> #:gender#<br>
          <span>Region:</span> #:region#<br>
        </div>
      </div>
      `,
      editTemplate: `
      <div class="card"> 
        <div class="card-header">
          <div class="card-controls">
            <a class="k-button k-update-button"><span class="k-icon k-i-check"></span></a>
            <a class="k-button k-cancel-button"><span class="k-icon k-i-cancel"></span></a>
          </div>
        </div>
        <div class="card-body">
          <div>
            <label>First Name:</label>
            <input type="text" class="k-textbox" data-bind="value:name" name="name">
          </div>
          <div>
            <label>Last Name:</label>
            <input type="text" class="k-textbox" data-bind="value:surname" name="surname">
          </div>
          <div>
            <label>Gender:</label>
            <input type="text" class="k-textbox" data-bind="value:gender" name="gender">
          </div>
          <div>
            <label>Region:</label>
            <input type="text" class="k-textbox" data-bind="value:region" name="region">
          </div>
        </div>
      </div>
      `
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

.card-body span, .card-body label {
  width: 100px;
  display: inline-block;
  font-weight: bold;
}

.card-header {
  height: 2.5em;
}
.card-controls {
  float: right;
}

</style>

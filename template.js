module.exports = `<!doctype html>
<html>
  <head>
    <title>Front-End Carioca</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- vendor:css -->
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,600' rel='stylesheet' type='text/css'>
    <link href="css/vendor/bootstrap/bootstrap.min.css" rel="stylesheet" />
    <!-- endinject -->
    <!-- inject:css -->
    <link rel="stylesheet" href="css/styles.css" />
    <!-- endinject -->
  </head>
  <body>
    <div class="svgstore">
      <!-- inject:svg -->
      <!-- endinject -->
    </div>
    <div id="app">
      <%- html %>
    </div>
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDy1ZjCjd1rEOOtfFqCdtWXDm2dIrUrsQk&v=3.exp&libraries=geometry,drawing,places"></script>
    <% for (var chunk in assets) { -%>
    <script src="<%= assets[chunk] %>"></script>
    <% } -%>
  </body>
</html>`;

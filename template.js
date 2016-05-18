module.exports = `<!doctype html>
<html>
  <head>
    <title>Front-End Carioca</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- vendor:css -->
    <link href='https://fonts.googleapis.com/css?family=Roboto:400,300,600' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600' rel='stylesheet' type='text/css'>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="dist/css/vendor/bootstrap/bootstrap.min.css" rel="stylesheet" />
    <link href="dist/css/vendor/bootstrap/bootstrap.theme.min.css" rel="stylesheet" />
    <!-- endinject -->
    <!-- inject:css -->
    <link rel="stylesheet" href="dist/css/styles.css" />
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
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDPEH6mfQpteKni2Yy6jD71vA6kXsIKeKU&v=3.exp&libraries=geometry,drawing,places"></script>
    <% for (var chunk in assets) { -%><script src="<%= assets[chunk] %>"></script><% } -%>
  </body>
</html>`;

module.exports = `<!doctype html>
<html>
  <head>
    <title>Sample App</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- vendor:css -->
    <link rel="stylesheet" href="css/vendor/bootstrap/bootstrap.min.css" />
    <link rel="stylesheet" href="css/vendor/bootstrap/bootstrap.theme.min.css" />
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600' rel='stylesheet' type='text/css'>
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
    <% for (var chunk in assets) { -%>
    <script src="<%= assets[chunk] %>"></script>
    <% } -%>
  </body>
</html>`;
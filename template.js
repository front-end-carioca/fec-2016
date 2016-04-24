module.exports = `<!doctype html>
<html>
  <head>
    <title>Sample App</title>
    <!-- vendor:css -->
    <link rel="stylesheet" href="css/vendor/bootstrap/bootstrap.min.css" />
    <link rel="stylesheet" href="css/vendor/bootstrap/bootstrap.theme.min.css" />
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
<!DOCTYPE html>
<html lang="en-us">
<head>
  <meta charset="UTF-8">
  <title>Moment JS Exercises</title>
</head>
<body>
  <!-- jQuery -->
  <script src="https://code.jquery.com/jquery.js"></script>
  <!-- Link to Moment.js should go here -->
  <script src="https://cdn.jsdelivr.net/momentjs/2.12.0/moment.min.js"></script>
  <!-- Script -->
  <script>
var date = new Date('2014/12/31');
var dateString = moment(date).add(1, 'day').format;
console.log(dateString);
console.log(date);


    
  </script>
</body>
</html>
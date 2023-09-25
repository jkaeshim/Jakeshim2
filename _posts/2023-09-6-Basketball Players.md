---
toc: true
comments: false
layout: post
title: BasketballPlayers
Description:
type: tangibles
courses: { compsci: {week: 3} }
---
<!DOCTYPE html>
<html>
<head>
  <title>NBA API Example</title>
  <style>
    #responseData {
      background-color: black;
      color: white;
      padding: 10px;
      border-radius: 5px;
      font-family: monospace;
    }
  </style>
</head>
<body>
  <label for="teamName">Enter NBA Team Name:</label>
  <input type="text" id="teamName">
  <button id="fetchData">Fetch Team Data</button>
  <pre id="responseData"></pre>

  <script>
    document.getElementById('fetchData').addEventListener('click', function() {
      const api_key = '102ce5e804msh0bcc957ccbd7b35p105d4ejsn021be17875a4';
      const teamName = document.getElementById('teamName').value.trim();
      const endpoint_url = `https://api-sports.io/v2/nba/Teams?name=${encodeURIComponent(teamName)}`;

      if (teamName === '') {
        alert('Please enter a team name.');
        return;
      }

      const xhr = new XMLHttpRequest();
      xhr.open('GET', endpoint_url, true);
      xhr.setRequestHeader('x-apisports-key', api_key);

      xhr.onload = function() {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          document.getElementById('responseData').textContent = JSON.stringify(response, null, 2);
        } else {
          document.getElementById('responseData').textContent = `Error: ${xhr.status}`;
        }
      };

      xhr.send();
    });
  </script>
</body>
</html>

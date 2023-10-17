function drawTeams() {
    var playersInput = document.getElementById('players').value;
    var players = playersInput.split('\n').map(function (player) {
      return player.trim();
    });
  
    players = players.filter(function (player) {
      return player !== '';
    });
  
    if (players.length < 2) {
      alert('Please enter at least two players.');
      return;
    }
  
    players = shuffleArray(players);
  
    var numberOfTeams = 2;
    var teams = [];
    for (var i = 0; i < numberOfTeams; i++) {
      teams.push([]);
    }
  
    for (var j = 0; j < players.length; j++) {
      var indexTeam = j % numberOfTeams;
      teams[indexTeam].push(players[j]);
    }
  
    var teamsElement = document.getElementById('teams');
    teamsElement.innerHTML = '';
    teams.forEach(function (team, index) {
      var listItem = document.createElement('li');
      listItem.textContent = 'Team ' + (index + 1) + ': ' + team.join(', ');
      teamsElement.appendChild(listItem);
    });
  }
  
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
fetch("data/challenges.json")
.then(res => res.json())
.then(data => {

const list = document.getElementById("list");

data.forEach(level => {

const item = document.createElement("div");
item.className = "challenge";

item.innerHTML = `
<h2>#${level.rank} ${level.name}</h2>
<p>Creator: ${level.creator}</p>
<p>Difficulty: ${level.difficulty}/10</p>
<a href="${level.video}" target="_blank">Proof Video</a>
`;

list.appendChild(item);

});

});

fetch("levels.json")
.then(res => res.json())
.then(data => {

const list = document.getElementById("list");

data.forEach((level, index) => {

const div = document.createElement("div");
div.className = "challenge";

div.innerHTML = `
<h2>#${index+1} ${level.name}</h2>
<p>Creator: ${level.creator}</p>
<a href="${level.video}" target="_blank">Video</a>
`;

list.appendChild(div);

});

});

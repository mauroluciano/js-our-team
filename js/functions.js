// creazione array
const team = [
  {
    name: "Wayne Barnett",
    position: "Founder & CEO",
    pic: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    position: "Chief Editor",
    pic: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    position: "Office Manager",
    pic: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    position: "Social Media Manager",
    pic: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    position: "Developer",
    pic: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    position: "Graphic Designer",
    pic: "barbara-ramos-graphic-designer.jpg",
  },
];

const theTeam = document.getElementById("theTeam");

for (const myTeam of team) {
  theTeam.innerHTML += `
  <div class="col-3">
    <div class="card mt-3">
    <img src="./img/${myTeam.pic}" />

      <h2>${myTeam.name}</h2>
      <p>${myTeam.position}</p>
    </div>
    </div>

    `;
}
//"Nome: " + myTeam.name + " <br/>"

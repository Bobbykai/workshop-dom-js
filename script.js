

var names = ["Quarisse", "SauceBiggie", "Kwoak", "LETEUTEU","LCALECHIBRE"];


var generateMessage = names => {
return `
  <button onclick="message('${names}')">${names}
</button>`;
};
var container = document.getElementById('container');
for (let i = 0; i < names.length; i++) {
  const person = names[i];
  container.innerHTML += generateMessage(person);
}
var message = names  => {
  console.log(`Hello ${names}, ca va aujourd'hui? `);
};

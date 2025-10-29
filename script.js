let users = [];

for (let i = 1; i <= 10; i++) {
  let user = new Object();

  user.id = i;
  user.name = prompt(`Foydalanuvchi ${i} ismini kiriting!`);
  user.age = +prompt(`Foydalanuvchi ${i} yoshini kiriting!`);

  users.push(user);
}

for (let i = 0; i < users.length; i++) {
  console.log(`Foydalanuvchi ${users[i].id}`);
  console.log(`Ismi: ${users[i].name}`);
  console.log(`Yoshi: ${users[i].age}`);
}

console.log("Butun obyekt (baza):");
console.log(users);
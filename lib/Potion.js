<<<<<<< HEAD
class Potion {
  constructor(name) {
    this.types = ['strength', 'agility', 'health'];
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

    if (this.name === 'health') {
      this.value = Math.floor(Math.random() * 10 + 30);
    } else {
      this.value = Math.floor(Math.random() * 5 + 7);
    }
  }
}

module.exports = Potion;
=======
function Potion(name) {
  this.types = ['strength', 'agility', 'health'];
  this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

  if (this.name === 'health') {
    this.value = Math.floor(Math.random() * 10 + 30);
  } else {
    this.value = Math.floor(Math.random() * 5 + 7);
  }
}

module.exports = Potion;
>>>>>>> 3e2f17456411809ca5b4484e44ee04c6af6847aa

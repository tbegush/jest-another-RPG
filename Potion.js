function Potion(name) {
  this.types = ['strength', 'agility', 'health'];
  this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

  if (this.name === 'health') {
    this.value = Math.floor(Math.random() * 10 + 30);
  } else {
    this.value = Math.floor(Math.random() * 5 + 7);
  }
}
Player.prototype.isAlive = function() {
    if (this.health === 0) {
      return false;
    }
    return true;
  };
module.exports = Potion;

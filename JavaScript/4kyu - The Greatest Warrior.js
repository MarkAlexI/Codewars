const ranks = ['Pushover', 'Novice', 'Fighter',
               'Warrior', 'Veteran', 'Sage',
               'Elite', 'Conqueror', 'Champion',
               'Master', 'Greatest'];
class Warrior {
  constructor() {
    this._level = 1;
    this._experience = 100;
    this._achievments = [];
  }
  level() {this._level = ~~(this._experience/100); return Math.min(100, this._level);}
  rank() {return ranks[~~(this._level/10)] || ranks[ranks.length - 1];}
  achievements() {return this._achievments;}
  experience() {return Math.min(10000, this._experience);}
  training([text, exp, level]) {
    if (this._level < level) return 'Not strong enough';
    this._achievments.push(text);
    this._experience += exp;
    this._level = ~~(this._experience/100);
    return text;
  }
  battle(enemyLevel) {
    if (enemyLevel < 1 || enemyLevel > 100) return 'Invalid level';
    const getScores = () => {
      if (enemyLevel - this._level > 4 && this.rank() !== ranks[~~(enemyLevel/10)]) {
        return 'You\'ve been defeated';
      }
      if (enemyLevel - 1 >= this._level) {
        this._experience += 20 * ((enemyLevel - this._level) ** 2);
        return 'An intense fight';
      }
      if (enemyLevel + 1 === this._level) {
        this._experience += 5;
        return 'A good fight';
      }
      if (enemyLevel === this._level) {
        this._experience += 10;
        return 'A good fight';
      }
      return 'Easy fight';
    }
    const aftermath = getScores();
    this._level = ~~(this._experience/100);
    return aftermath;
  }
}

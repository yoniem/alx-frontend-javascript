// 5-building.js
class Building {
  constructor(sqft) {
    this.sqft = sqft;
  }

  evacuationWarningMessage() {
    return `Evacuate the building!`;
  }
}

export default Building;

class Building {
  constructor(height) {
    this._height = height;
  }

  get height() {
    return this._height;
  }

  evacuationWarningMessage() {
    return `Evacuate ${this.height} meters!`;
  }
}

class SkyScraper extends Building {
  constructor(height, floors) {
    super(height);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    // If the method should use `this` and should not be static, no change is needed.
    return `Evacuate ${this.height} meters!`;
  }
}

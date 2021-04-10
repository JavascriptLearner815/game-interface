const fallbackBasePlayerObject = {
  maxHP: 200,
  initialHP: this.maxHP,
  firstLevelXP: 15,
  XPMultiplier: 2,
  onAll(e) {
    
  },
  onWin(e) {
    
  },
  onLose(e) {
    
  },
  onAttackGive(e) {
    
  },
  onAttackReceive(e) {
    
  },
}

module.exports = {
  Player: class Player {
    constructor(basePlayerObject) {
      this.base = basePlayerObject || fallbackBasePlayerObject // This should be the same memory address. "??" is not used here since we don't want falsy values anyway.
      if (this.base === fallbackBasePlayerObject) console.warn("An instanceof Player was created, but the basePlayerObject provided was falsy. Using fallbackBasePlayerObject.")
      if (typeof this.base !== "object") console.warn(`An instanceof Player was created, but the basePlayerObject provided was not an object, and instead ${typeof basePlayerObject}. Using fallbackBasePlayerObject.`)
      this.maxHP = Number.parseInt(this.base.maxHP)
      this.initialHP = Number.parseInt(this.base.initialHP)
      this.HP = this.initialHP
      this.firstLevelXP = Number.parseInt(this.base.firstLevelXP)
      this.XPMultiplier = Number.parseFloat(this.base.XPMultiplier)
      this.onAll = this.onAll
      this.onWin = this.onWin
      this.onLose = this.onLose
      this.onAttackGive = this.onAttackGive
      this.onAttackReceive = this.onAttackReceive
  },
}

import { CharacterState } from '../enums/character_states.js';
import { CharacterLevel } from '../enums/character_levels.js';

export default class Character {
  constructor() {
    this.state = CharacterState.NORMAL;
    this.level = CharacterLevel.EGG;
    this.stateAnimations = [];
  } 
}
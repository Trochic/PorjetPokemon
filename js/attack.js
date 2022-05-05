class Attack {
    static all_attacks = [];
    constructor(moveSet) {
        this.critical_chance = moveSet['critical_chance'];
        this.duration = moveSet['duration']
        this.energy_delta = moveSet['energy_delta']
        this.move_id = moveSet['move_id']
        this.name = moveSet['name']
        this.power = moveSet['power']
        this.stamina_loss_scaler = moveSet['stamina_loss_scaler']
        this.type = moveSet['type']
    }
}
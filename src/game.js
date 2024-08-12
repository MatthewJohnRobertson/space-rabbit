import Phaser from 'phaser';

class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene');
    }

    preload() {
        this.load.image('logo', 'https://labs.phaser.io/assets/sprites/phaser3-logo.png');
    }

    create() {
        const logo = this.add.image(400, 300, 'logo');

        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2000,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: MainScene
};

new Phaser.Game(config);
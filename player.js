class Player {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.drawpos = createVector(window.innerWidth/2-15, window.innerHeight/2-15);
    this.weapons = {
      slot1: "fists",
      slot2: "revolver"
    };
    this.weaponChose = 2;
  }

  draw() {
    // angleMode(DEGREES);
    // rotate(this.trig);
    // translate(width / 2, height / 2);
    fill(79, 79, 79);
    circle(this.drawpos.x+20, this.drawpos.y+20, 40);
    fill(209,191,120)
    ellipse(this.drawpos.x+20, this.drawpos.y+20, 32, 50)
    circle(this.drawpos.x+20, this.drawpos.y+20, 25)
  }

  setAngle() {
    this.trig = atan2(mouseY - height / 2, mouseX - width / 2);
  }

  update() {
    if (keyIsDown(LEFT_ARROW)) {
      this.pos.x -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.pos.x += 5;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.pos.y += 5;
    }
    if (keyIsDown(UP_ARROW)) {
      this.pos.y -= 5;
    }
    if (keyIsDown(49)) {
      this.weaponChose = 1;
    }
    if (keyIsDown(50)) {
      this.weaponChose = 2;
    }
    this.setAngle();
  }

  displayWeapon() {
    
    if (this.weaponChose === 1) {
      this.currentWeapon = this.weapons.slot1;
    }

    if (this.weaponChose === 2) {
      this.currentWeapon = this.weapons.slot2;
    }
    
    if (this.currentWeapon === "empty") {
      this.currentWeapon = "fists";
    }
    
    // angleMode(DEGREES);
    // rotate(this.trig);
    // translate(width / 2, height / 2);

    if (this.currentWeapon === "fists") {
      fill(60);
        fill(60)
      circle(this.drawpos.x+37,this.drawpos.y+5,15)
      circle(this.drawpos.x+3, this.drawpos.y +5, 15)
    }

    if (this.currentWeapon === "shotgun") {
      fill(128, 89, 0);
      rect(this.drawpos.x+37,this.drawpos.y+15,25, 8);
      fill(153);
      rect(this.drawpos.x+47, this.drawpos.y+13, 26, 12);
      line(this.drawpos.x+50, this.drawpos.y+19, this.drawpos.x+73, this.drawpos.y+19);
    }

    if (this.currentWeapon === "revolver") {
      fill(173);
      ellipse(this.drawpos.x+56,this.drawpos.y+19,25,8);
      fill(128, 89, 0);
      rect(this.drawpos.x+38, this.drawpos.y+15.5, 10, 7);
    }

  }

}

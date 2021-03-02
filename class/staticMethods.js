class RemoteControl {
  constructor(tvModel) {
    this.tvModel = tvModel;
    this.volume = 0;
  }

  upVolume() {
    this.volume += 2;
  }

  downVolume() {
    this.volume -= 2;
  }

  // applicated only superclass
  static power() {
    console.log('power');
  }
}

const RemoteControl1 = new RemoteControl('lg');
RemoteControl1.upVolume();
RemoteControl1.upVolume();
RemoteControl1.upVolume();
console.log(RemoteControl1);

RemoteControl.power();

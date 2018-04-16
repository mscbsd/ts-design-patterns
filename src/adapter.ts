interface IPhone {
  useLightning(): any;
}
interface Android {
  useMicroUSB(): any;
}

class Iphone8 implements IPhone {
  useLightning(): any {
    console.log('Using lightning port...');
  }
}

class GooglePixel implements Android {
  useMicroUSB(): any{
    console.log('Using micro usb...');
  }
}

class LightningToMicroUSBAdapter implements Android {

  iphoneDevice: IPhone;

  constructor(iphone: IPhone) {
    this.iphoneDevice = iphone;
  }

  useMicroUSB() {
    console.log('Want to use micro USB, converting to Lightning...');
    this.iphoneDevice.useLightning();
  }

}

let iphone = new Iphone8();
let adapter = new LightningToMicroUSBAdapter(iphone);
adapter.useMicroUSB();


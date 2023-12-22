import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Binding-Project';
  imgUrl1 = "assets/laptop1.avif";
  imgUrl2 = "assets/laptop2.avif";
  imgUrl3 = "assets/laptop3.avif";
  imgUrl4 = "assets/laptop4.avif";
  imgUrl5 = "assets/laptop5.avif";
  heading = 'Macbook Pro M2';
  prize = '₹ 1,19,990';
  about = 'About This Item';
  list1 = 'Apple M2 chip with 8-core CPU, 10-core GPU and 16-core Neural Engine';
  list2 = '33.02 cm (13-inch) Retina display with True Tone';
  list3 = 'Backlit Magic Keyboard - US English';
  list4 = 'Touch Bar and Touch ID';
  list5 = 'Force Touch trackpad';
  list6 = '8GB unified memory';
  list7 = '256GB SSD storage';

  products = 30;
  Checkout(){
    this.products--
    console.log('Checkout Product', this.products);
    alert('Your Product is Just checkout');
  }

  Cancel(){
    this.products++
    console.log('Cancle Product', this.products);
    alert('You just Canclled Your Product');
  };

  disabled = true;
  enableBtn(){
    this.disabled=false;
  };

  input:any;
  input1:any;
  input2:any;

  submit(){
    alert('your Form is Submitted');
    console.log('form submit')
  }
}

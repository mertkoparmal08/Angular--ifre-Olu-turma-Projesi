import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'password';
  //Property binding
  password='';
  length:number=0;
  includeLetters:Boolean= false;
  includeNumbers:boolean=false;
  includeSymbols:boolean=false;

  modifyLetters(){
    this.includeLetters= !this.includeLetters;  
  }

  modifyNumbers(){
    this.includeNumbers= !this.includeNumbers;
  }

  modifySymbols(){
    this.includeSymbols= !this.includeSymbols;
  }

  modifyLength(value:string){
    const parsedValue=parseInt(value);

    if(!isNaN(parsedValue)){
      //debugger;
      this.length=parsedValue;
    }
  }
  //Event Binding
  buttonClick(){
    //this ile üstteki propertye ulaşabiliriz.
    //ButtonClick altında olduğu için Mert, tıklandığında
    //Emre olur.
    //this.password='Emre'

    /*
    console.log(this.includeLetters);
    console.log(this.includeNumbers);
    console.log(this.includeSymbols);
    */
    const numbers='1234567890';
    const letters='abcdefghijklmnopqrstwyvz';
    const symbols='!@#$%&^*()';

    let validChars='';

    if(this.includeLetters){
      validChars += letters;
    }

    if(this.includeNumbers){
      validChars += numbers;
    }

    if(this.includeSymbols){
      validChars += symbols;
    }

    let generatedPassword='';

    for(let i=0;i<this.length;i++){
      const index=Math.floor(Math.random()*validChars.length);

      generatedPassword += validChars[index];
    }

    this.password=generatedPassword;

  }
}

import { Component, OnInit, OnDestroy, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';


@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges {

	condition: boolean = true;
	
	name= "Vladimir";
	@Input() userName:string;
	
	_userAge:number;
	@Input() 
	set userAge (age:number){
		if (age < 0)
			this._userAge = 0;
		else if (age > 100)
			this._userAge = 100;
		else 
			this._userAge = age;
	};
	
	get userAge() { return this._userAge; }
	
	@Output() onChangedFromChild = new EventEmitter<boolean>();
	change(increased:any){
		this.onChangedFromChild.emit(increased);
	}
	
	
  constructor() { 
	this.log("this is constructor ..."); 
  }

  ngOnInit(): void {
	 this.log("this is onInit...");
  }
  
  ngOnDestroy(): void {
	 this.log("this is onDestroy method ....");
  }
  
  ngOnChanges(changes: SimpleChanges){
	  for (let propName in changes) {
        let chng = changes[propName];
        let cur  = JSON.stringify(chng.currentValue);
        let prev = JSON.stringify(chng.previousValue);
        this.log(`FROM CHILD: ${propName}: currentValue = ${cur}, previousValue = ${prev}`);
      }
  }
  
   private log(msg: string) {
        console.log(msg);
   }
   
   public toggle(){
	   this.condition = !this.condition;
   }

}

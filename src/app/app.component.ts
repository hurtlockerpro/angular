import { Component } from '@angular/core';

class Item {
	purchase: string;
	done: boolean;
	price: number;
	
	constructor (purchase: string, price: number){
		this.purchase = purchase;
		this.price = price;
		this.done = false;
	}
}

@Component({
	selector: 'purchase-app',
	template: `
	<div class="page-header">
        <h1> Список покупок </h1>
    </div>
    <div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-8">
                    <input class="form-control" [(ngModel)]="text" placeholder = "Название" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input type="number" class="form-control" [(ngModel)]="price" placeholder="Цена" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="addItem(text, price)">Добавить</button>
                </div>
            </div>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Предмет</th>
                    <th>Цена</th>
                    <th>Куплено</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let item of items">
                    <td>{{item.purchase}}</td>
                    <td>{{item.price}}</td>
                    <td><input type="checkbox" [(ngModel)]="item.done" /></td>
                </tr>
            </tbody>
        </table>
    </div>
	<child [userName]="name" [userAge]="age" (onChangedFromChild)="onChangedFromChild($event)"></child>
	<p>Привет {{name}}</p>
	<input type="text" [(ngModel)]="name" />
	<input type="number" [(ngModel)]="age" /><br><br>
	<h2>Количество кликов: {{clicks}}</h2>
	<div [ngClass]="{verdanaFont:true, VerdanaFont2:false}">heloooooooooo</div>
	<hr>
	<div [ngClass]="{invisible: visibility}">
                    <h1>Hello Angular 10</h1>
                    <p>
                        Angular 10 представляет модульную архитектуру приложения
                    </p>
                </div>
                <button (click)="toggle()">Toggle</button><p bold>Hello Angular 1000000000</p>`,
	styles: [ `.invisible{display:none;}`]
				
})
export class AppComponent{
	text:string;
	price:number = 0;
	name:string = 'Main component NAME from MAIN';
	age:number = 40; 
	clicks:number = 0;
	
	items: Item[] = 
	[
		{purchase: "Leib", done: false, price: 15.9},
		{purchase: "Või", done: false, price: 60.9},
		{purchase: "Kartul", done: false, price: 22.6},
		{purchase: "Juust", done: false, price: 310},
	];
	
	addItem(text: string, price: number): void {
		if (text == null || text.trim() == "" || price == null) return null;
		
		this.items.push(new Item(text, price));
		
	}
	
	onChangedFromChild(increased:any){
		increased == true ? this.clicks++ : this.clicks--;
	}
	
	visibility: boolean = true;
    // переключаем переменную
    toggle(){
        this.visibility=!this.visibility;
    }
}

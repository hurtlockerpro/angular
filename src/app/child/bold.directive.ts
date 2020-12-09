import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
	selector: '[bold]',
	/*
	host: {
		'(mouseenter)':'onMouseEnter()',
		'(mouseleave)':'onMouseLeave()'
	}
	*/
})
export class BoldDirective {
	
	private fontSize:string;
	private fontWeight = 'normal';
	
	@Input() selectedSize = '28px';
	@Input() defaultSize = '36px';
	
	constructor (private elementRef: ElementRef, private renderer: Renderer2){
		//this.elementRef.nativeElement.style.fontWeight = "bold";
		this.renderer.setStyle(this.elementRef.nativeElement, "font-weight", "bold");
	}
	
	ngOnInit() {
		this.fontSize = this.defaultSize;
	}
	
	@HostBinding("style.fontSize") get getFontSize(){
		return this.fontSize;
	}
	
	@HostListener("mouseenter") onMouseEnter() {
		//this.setFontWeight("bold");
		this.fontWeight = "bold";
		this.fontSize = this.selectedSize;
	}
	
	@HostListener("mouseleave") onMouseLeave() {
		//this.setFontWeight("normal");
		this.fontWeight = "normal";
		this.fontSize = this.defaultSize;
		
	}
	/*
	onMouseEnter(){
        this.setFontWeight("bold");
    }
    onMouseLeave(){
        this.setFontWeight("normal");
    }
	*/
	
	private setFontWeight(val: string){
		this.renderer.setStyle(this.elementRef.nativeElement, "font-weight", val);
		this.renderer.setStyle(this.elementRef.nativeElement, "font-size", this.fontSize);
	}
}
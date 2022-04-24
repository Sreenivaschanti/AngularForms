import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appColorChanger]'
})
export class ColorChangerDirective {

  // constructor(private el:ElementRef) {
  //   this.el.nativeElement.style.background='yellow';
  //  }
  constructor(

    private templateRef: TemplateRef<any>,

    private viewContainer: ViewContainerRef) { }

    @Input() set appColorChanger(condition: number) {

        if (condition>=10) {

            this.viewContainer.createEmbeddedView(this.templateRef);

        } else {

            this.viewContainer.clear();        }

    }
}


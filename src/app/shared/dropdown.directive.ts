import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') open: boolean = false;

    @HostListener('click') mouseClick(eventData: Event) {
        this.open = !this.open;
    }
    constructor() {}
}

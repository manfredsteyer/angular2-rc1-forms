import { Component } from '@angular/core';

@Component({
    template: `
        <h1>{{info}}</h1>
    `
})
export class PassagierListComponent {
    
    public info = "Passagier suchen!";
    
}
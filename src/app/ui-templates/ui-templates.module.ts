import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UITemplatesRoutingModule } from './ui-templates-routing.module';
import { UiTemplatesComponent } from './ui-templates.component';

@NgModule({
    declarations: [UiTemplatesComponent],
    imports: [
        CommonModule,
        UITemplatesRoutingModule
    ]
})
export class UITemplatesModule {
}

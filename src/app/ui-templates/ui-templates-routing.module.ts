import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        children: [

            {
                path: 'design-system',
                loadChildren: () => import('./argon-design-system/argon-design-system.module').then(m => m.ArgonDesignSystemModule)
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UITemplatesRoutingModule { }

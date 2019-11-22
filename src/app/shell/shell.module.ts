import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '@app/material.module';
import { MenuNavComponent } from '@app/shell/menu-nav/menu-nav.component';
import { NgPipesModule } from 'angular-pipes';

@NgModule({
  imports: [CommonModule, TranslateModule, NgbModule, RouterModule, MaterialModule, NgPipesModule],
  declarations: [HeaderComponent, ShellComponent, MenuNavComponent]
})
export class ShellModule {}

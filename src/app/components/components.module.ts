import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

export const components = [
  HeaderComponent, MenuComponent, FooterComponent
];

export const modules = [
  SharedModule,
 ]

@NgModule({
  declarations: [...components],
  imports: [],
  exports:[...components]
})
export class ComponentsModule {}

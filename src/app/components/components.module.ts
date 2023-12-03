import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { PageTittleComponent } from './page-tittle/page-tittle.component';
import { CardSelectionComponent } from './card-selection/card-selection.component';
import { CommonModule } from '@angular/common';
import { CardResultComponent } from './card-result/card-result.component';

export const components = [
  HeaderComponent,
  MenuComponent,
  FooterComponent,
  PageTittleComponent,
  CardSelectionComponent,
  CardResultComponent,
];

export const modules = [CommonModule];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components, ...modules],
})
export class ComponentsModule {}

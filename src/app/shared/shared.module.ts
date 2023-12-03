import { NgModule } from '@angular/core';
import { FlowbiteModule } from './lib/flowbite.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';

export const modules = [
  CommonModule,
  ReactiveFormsModule,
  FlowbiteModule,
  ComponentsModule,
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
  providers:[],
})
export class SharedModule {}

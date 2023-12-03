import { NgModule } from '@angular/core';
import { FlowbiteModule } from './lib/flowbite.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

export const modules = [
  CommonModule,
  ReactiveFormsModule,
  FlowbiteModule,
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class SharedModule {}

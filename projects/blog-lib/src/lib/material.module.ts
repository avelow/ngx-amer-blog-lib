import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [FlexLayoutModule, MatButtonModule, MatIconModule],
  exports: [FlexLayoutModule, MatButtonModule, MatIconModule]
})
export class MaterialModule {}

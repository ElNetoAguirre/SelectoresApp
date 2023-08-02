import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CountriesRouting } from "./countries-routing.module";
import { ReactiveFormsModule } from "@angular/forms";

import { SelectorPageComponent } from "./pages/selector-page/selector-page.component";

@NgModule({
  declarations: [
    SelectorPageComponent
  ],

  imports: [
    CommonModule,
    CountriesRouting,
    ReactiveFormsModule,
  ]
})

export class CountriesModule { }

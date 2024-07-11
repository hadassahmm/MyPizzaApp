import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CustomPizzaComponent } from './dashboard/custom-pizza/custom-pizza.component';
import { ClassicPizzasComponent } from './dashboard/classic-pizzas/classic-pizzas.component';
import { FormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout/checkout.component';
import { ClassicPizzaComponent } from './dashboard/classic-pizzas/classic-pizza/classic-pizza.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CustomPizzaComponent,
    ClassicPizzasComponent,
    CheckoutComponent,
    ClassicPizzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

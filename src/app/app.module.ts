import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders} from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrutaComponent} from './fruta/fruta.component';
import { EmpleadoComponent} from './empleado/empleado.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent} from './contacto/contacto.component';
import { CochesComponent} from './coches/coches.component';
import { ConversorPipe} from './pipes/conversor.pipe';
import { PlantillasComponent} from './plantillas/plantillas.component';
@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    HomeComponent,
    ContactoComponent,
    CochesComponent,
    ConversorPipe,
    PlantillasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { GameComponent } from './game/game.component';
import { MinutesecondsPipe } from './pipes/minuteseconds.pipe';
import { UtilservicesService } from './services/utilservices.service';
import { ModalDetailComponent } from './modal-detail/modal-detail.component';
import { ModalFinalComponent } from './modal-final/modal-final.component';
import { RankingComponent } from './ranking/ranking.component';

import { OrderModule } from 'ngx-order-pipe';
import { ComponentsModule } from './components/components.module';
import { GameService } from './services/game.service';
import { CrudService } from './services/crud.service';

const routes:Routes = [
  { path: '', component: StartComponent },
  { path: 'game', component: GameComponent },
  { path: 'ranking', component: RankingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    GameComponent,
    ModalDetailComponent,
    ModalFinalComponent,
    RankingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ComponentsModule,
    HttpModule,
    OrderModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ 
    UtilservicesService, 
    GameService,
    CrudService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

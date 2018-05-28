import { Component, OnInit } from '@angular/core';
import { UtilservicesService } from '../services/utilservices.service';
import { People, BASE_API } from '../../models';
import { error } from 'util';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  private _urlPeople = `${BASE_API}/people/`;

  loading:boolean = false;
  personsOff:any = [];
  points:number = 0;
  count:number = 120;
  timeExecuted = false;
  peoples:People;
  detailPeople;
  pagPrev:string;
  pagNext:string;
  detailModal:boolean = false;
  finalModal:boolean = false;

  constructor(private service: UtilservicesService) { }

  ngOnInit() {
    this.loadPersons(this._urlPeople);
    this.counterGame();
  }

  counterGame() {
    this.timeExecuted = true;
    let loop = setInterval(() => {
      this.count -= 1;
      if (this.count == 0) {
        clearInterval(loop);
        this.timeExecuted = false;
        this.finalModal = true;
      }

    }, 1000);
  }

  
  loadPersons(url) {
    this.loading = true;

    this.service.loadPeople(url)
    .subscribe((data:any) => {

      this.peoples = data.results;

      this.loading = false;
      
      for(let i=0; i<data.results.length; i++) {
        
        // Verificação se o item que está vindo da Api já foi inputado

        if (this.personsOff.length != 0) {

          for (let l = 0; l < this.personsOff.length; l++) {

            if (this.personsOff[l].truesend == this.peoples[i].name) {
              this.peoples[i].asked = true;
              this.peoples[i].answerOff = this.personsOff[l].send;
            }

          }
          
        }


        // Insere a imagem conforme o ID do Personagem
        var idImage = this.service.formatUrl(data.results[i].url);
        this.peoples[i].image = `https://starwars-visualguide.com/assets/img/characters/${idImage}.jpg`;

      }
      
      // Aplica o url de paginação recebida do WebService
      this.pagNext = data.next;
      this.pagPrev = data.previous;
      
    }, error => console.log(error));
  }

  leaveQuestion(people) {

    // Verifica se o nome do personagem e o mesmo que foi digitado
    if (people.name == people.anwser) {

      // Verifica se o usuário teve auxilio do detalhe
      if (!people.open) {
        this.points += 10
      }
      else {
        this.points += 5;
      }
    }

    // Insere no vetor os itens que já foram inputados e os valores corretos
    this.personsOff.push(
      {
        truesend: people.name,
        send: people.anwser
      }
    );

    // Verifica se o usuário saiu do input com um valor digitado
    if (people.anwser != undefined) {
      people.asked = true;
    }
    
  }


  // Método de Detalhe do Personagem
  openDetail(people) {

    people.open = true;
    this.detailModal= true;

    this.detailPeople = people;

    // Retorno da Api com as informações
    this.service.loadDetails(people.species[0], people.homeworld, people.films[0])
    .subscribe(
      data => {
        this.detailPeople.specie = data[0];
        this.detailPeople.planet = data[1];
        this.detailPeople.film = data[2];
      }
    );

  }


  // Fecha o modal
  onClose(event) {
    this.detailModal = event;
    this.finalModal = event;
  }

  pagination(url) {
    this.loadPersons(url);
  }

}

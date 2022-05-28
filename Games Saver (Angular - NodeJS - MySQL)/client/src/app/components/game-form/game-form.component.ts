import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { GamesService } from 'src/app/services/games.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  games: any = [];

  @HostBinding('class') classes = 'row';

  @Input()
  game: any = {
    id: 0,
    title: '',
    description: '',
    image: '',
    create_at: new Date()
  }

  edit: boolean = false;

  constructor(private gamesService: GamesService, private router: Router, private activedRouted: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activedRouted.snapshot.params;
    if (params['id']) {
      const id = params['id'];
      this.gamesService.getGame(id)
        .subscribe(
          res => {
            console.log(res);
            this.games = res;
            this.game = this.games[0];
            this.edit = true;
          },
          err => console.error(err)
        )
    }
  }

  saveNewGame() {
    delete this.game.create_at;
    delete this.game.id;
    this.gamesService.createGame(this.game)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/games']);
        },
        err => console.error(err)
      )
  }

  updateGame() {
    delete this.game.create_at;
    this.gamesService.updateGame(this.game.id, this.game)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/games']);
      },
      err => console.error(err)
    )
  }

}

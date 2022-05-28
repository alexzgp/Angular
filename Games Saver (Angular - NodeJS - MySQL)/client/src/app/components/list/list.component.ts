import { Component, HostBinding, OnInit } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

import { GamesService } from '../../services/games.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

games: any = [];

  @HostBinding('class') classes = 'row';

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.getGames();
  }

  getGames() {
    this.gamesService.getGames()
    .subscribe(
      res => {
        this.games = res;
      },
      err => console.error(err)
    )
  }

  deleteGame(id: number) {
    this.gamesService.deleteGame(id)
    .subscribe(
      res => {
        this.games = res;
        this.getGames();
      },
      err => console.error(err)
    )
  }


}

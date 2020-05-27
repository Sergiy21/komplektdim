import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {

  public colors = [
    {
      title: 'RAL 3005 — Вишневий',
      color: '#8a1124'
    },
    {
      title: 'RAL 3009 — Цеглясто червоний',
      color: '#952124'
    },
    {
      title: 'RAL 7024 — Графітний',
      color: '#29363e'
    },
    {
      title: 'RAL 6020 — Зелений',
      color: '#4a4e3f'
    },
    {
      title: 'RAL 8004 — Цеглястий',
      color: '#b84e38'
    },
    {
      title: 'RAL 8017 — Світло Коричневий',
      color: '#442e23'
    },
    {
      title: 'RAL 8019 — Темно коричневий',
      color: '#322a27'
    },
    {
      title: 'RAL 9005 — Чорний',
      color: '#121212'
    },
    {
      title: 'RAL 9010 — Білий',
      color: '#fff',
      white: true
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}

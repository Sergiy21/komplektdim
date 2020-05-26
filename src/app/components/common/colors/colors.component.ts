import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {

  public colors = [
    {
      title: 'RAL 3005 — красное вино',
      color: '#8a1124'
    },
    {
      title: 'RAL 3009 — красный',
      color: '#952124'
    },
    {
      title: 'RAL 7024 — графит',
      color: '#29363e'
    },
    {
      title: 'RAL 6020 — военный зеленый',
      color: '#4a4e3f'
    },
    {
      title: 'RAL 8004 — кирпичный',
      color: '#b84e38'
    },
    {
      title: 'RAL 8017 — молочный шоколад',
      color: '#442e23'
    },
    {
      title: 'RAL 8019 — темный шоколад',
      color: '#322a27'
    },
    {
      title: 'RAL 9005 — черный (антрацит)',
      color: '#121212'
    },
    {
      title: 'RAL 9010 — чистый белый',
      color: '#fff',
      white: true
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}

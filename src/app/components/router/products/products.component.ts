import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public products = [
    {
      title: 'Заглушка желоба универсальная',
      img: '../../../../assets/img/products/11-768x767.jpg'
    },
    {
      title: 'Соединитель желоба',
      img: '../../../../assets/img/products/soedinital_zheloba-300x244.png'
    },
    {
      title: 'Лейка',
      img: '../../../../assets/img/products/leika.jpg'
    },
    {
      title: 'Колено',
      img: '../../../../assets/img/products/koleno.jpg'
    },
    {
      title: 'Труба 1м',
      img: '../../../../assets/img/products/truba-300x173.png'
    },
    {
      title: 'Труба 3м',
      img: '../../../../assets/img/products/truba-300x173.png'
    },
    {
      title: 'Желоб 1 м',
      img: '../../../../assets/img/products/rinva-300x122.png'
    },
    {
      title: 'Желоб 4 м',
      img: '../../../../assets/img/products/rinva-300x122.png'
    },
    {
      title: 'Внутренний угол желоба 90°',
      img: '../../../../assets/img/products/ugol_vnutri-300x158.png'
    },
    {
      title: 'Внешний угол желоба 90°',
      img: '../../../../assets/img/products/vnesh_ugol-300x158.png'
    },
    {
      title: 'Крюк торцевой',
      img: '../../../../assets/img/products/torcevoi.jpg'
    },
    {
      title: 'Крюк длинный',
      img: '../../../../assets/img/products/dlinnyi-177x300.jpg'
    },
    {
      title: 'Держатель трубы под камень',
      img: '../../../../assets/img/products/derzh_kamin.jpg'
    },
    {
      title: 'Держатель трубы под дерево',
      img: '../../../../assets/img/products/derzh_derevo.jpg'
    },
    {
      title: 'Сливное колено',
      img: '../../../../assets/img/products/sliv.jpg'
    }
  ];

}

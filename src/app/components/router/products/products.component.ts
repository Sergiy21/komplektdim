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
      title: 'Заглушка жолоба',
      img: '../../../../assets/img/products/11-768x767.jpg'
    },
    {
      title: 'З’єднувач жолоба',
      img: '../../../../assets/img/products/soedinital_zheloba-300x244.png'
    },
    {
      title: 'Лійка',
      img: '../../../../assets/img/products/leika.jpg'
    },
    {
      title: 'Коліно',
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
      title: 'Жолоб 1 м',
      img: '../../../../assets/img/products/rinva-300x122.png'
    },
    {
      title: 'Жолоб 4 м',
      img: '../../../../assets/img/products/rinva-300x122.png'
    },
    {
      title: 'Внутрішній кут жолоба 90°',
      img: '../../../../assets/img/products/ugol_vnutri-300x158.png'
    },
    {
      title: 'Зовнішній кут жолоба 90°',
      img: '../../../../assets/img/products/vnesh_ugol-300x158.png'
    },
    {
      title: 'Гак торцевий',
      img: '../../../../assets/img/products/torcevoi.jpg'
    },
    {
      title: 'Гак довгий',
      img: '../../../../assets/img/products/dlinnyi-177x300.jpg'
    },
    {
      title: 'Тримач труби під камінь',
      img: '../../../../assets/img/products/derzh_kamin.jpg'
    },
    {
      title: 'Тримач труби під дерево',
      img: '../../../../assets/img/products/derzh_derevo.jpg'
    },
    {
      title: 'Зливне коліно',
      img: '../../../../assets/img/products/sliv.jpg'
    }
  ];

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss']
})
export class ComponentTwoComponent implements OnInit {

  fakeData = [
    {
      "_id": "5f9984600aa56e6b618d82de",
      "isActive": true,
      "name": "Lindsay Michael",
      "gender": "female",
      "company": "ZENSUS",
      "email": "lindsaymichael@zensus.com",
      "phone": "+1 (952) 516-3494",
      "about": "Do cillum nostrud exercitation voluptate sit nulla duis fugiat sint deserunt incididunt. Eu sunt occaecat duis enim nulla eu nostrud pariatur laboris officia minim aliqua commodo aute. In ex proident mollit nostrud id cupidatat aliquip nulla reprehenderit do cupidatat. Consequat ullamco mollit veniam elit consequat veniam mollit sint elit duis nulla ullamco.\r\n"
    },
    {
      "_id": "5f99846042bb8d3606611170",
      "isActive": false,
      "name": "Dillon Young",
      "gender": "male",
      "company": "PORTICA",
      "email": "dillonyoung@portica.com",
      "phone": "+1 (961) 506-3990",
      "about": "Laboris minim commodo consequat non dolor adipisicing nostrud sit officia velit labore nostrud consectetur. In voluptate eiusmod cillum ex ullamco consequat laborum ipsum est labore Lorem. Est voluptate reprehenderit esse dolor reprehenderit aute exercitation. Proident nulla occaecat amet consequat incididunt consequat proident fugiat tempor commodo est. Laborum culpa incididunt in sit. Id aliqua adipisicing non adipisicing esse anim consequat.\r\n"
    },
    {
      "_id": "5f99846001974fc1fb3a7a1a",
      "isActive": false,
      "name": "Holloway Blair",
      "gender": "male",
      "company": "PYRAMIS",
      "email": "hollowayblair@pyramis.com",
      "phone": "+1 (821) 419-3271",
      "about": "Eu ad id sit veniam mollit. Laboris et dolore quis commodo est consectetur irure duis. Id occaecat tempor do eu consectetur est et exercitation duis. Sunt et nostrud esse elit consectetur non minim pariatur pariatur non consequat. Culpa proident commodo voluptate esse exercitation elit consectetur anim fugiat sit pariatur. Ex eu laboris officia ipsum ea labore aliqua nostrud sit pariatur eu.\r\n"
    },
    {
      "_id": "5f9984603419e2e3e4618425",
      "isActive": false,
      "name": "Combs Cobb",
      "gender": "male",
      "company": "ZOID",
      "email": "combscobb@zoid.com",
      "phone": "+1 (847) 504-2097",
      "about": "Do ullamco laborum laborum adipisicing voluptate magna reprehenderit laboris. Id enim quis commodo enim proident tempor. Consequat pariatur commodo ullamco id magna est culpa ipsum excepteur aute.\r\n"
    },
    {
      "_id": "5f998460dec759d6733fcfab",
      "isActive": false,
      "name": "Holly Conley",
      "gender": "female",
      "company": "LUXURIA",
      "email": "hollyconley@luxuria.com",
      "phone": "+1 (834) 463-2361",
      "about": "Tempor ut consectetur officia officia elit proident aliqua in eu. Laborum anim nostrud ut fugiat ea tempor dolore velit minim aliqua deserunt dolor in irure. Enim adipisicing ut eu consequat sit sunt commodo eiusmod pariatur adipisicing exercitation ullamco proident qui. Aute excepteur officia id et laborum minim id pariatur tempor consequat. Duis commodo laboris consectetur ad sit Lorem Lorem in cupidatat ea irure quis. Ipsum aliqua et nisi nisi qui adipisicing quis in ipsum.\r\n"
    },
    {
      "_id": "5f9984606746104d5892a926",
      "isActive": true,
      "name": "Kari Nichols",
      "gender": "female",
      "company": "ROBOID",
      "email": "karinichols@roboid.com",
      "phone": "+1 (975) 482-2762",
      "about": "Duis proident dolore ut consequat amet mollit sit. Excepteur sit sit cillum sint cupidatat irure ipsum Lorem qui adipisicing ea Lorem. Enim dolore duis ipsum qui sunt irure commodo veniam mollit ut. Commodo ea sint occaecat elit ipsum cillum minim cillum. Excepteur officia Lorem consectetur fugiat sint ipsum minim consequat dolore sit. Nisi consectetur ad duis nostrud reprehenderit nisi. Minim ex velit sit non incididunt culpa cillum incididunt sunt cupidatat.\r\n"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

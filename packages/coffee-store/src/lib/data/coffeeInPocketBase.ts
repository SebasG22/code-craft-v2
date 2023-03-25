// import { CoffeeEntity } from '../domain/entities/coffee.entity';
// import { CoffeeRepository } from '../domain/repositories/coffee.repository';
// import { data } from './data';
// import PocketBase from 'pocketbase';

// export class CoffeeInPocketBase implements CoffeeRepository {
//   pb = new PocketBase('https://brave-continent.pockethost.io');
//   coffees: CoffeeEntity[] = [];

//   constructor() {
//     data.filter((item) => item.availability).map((item) =>
//     CoffeeEntity.create({
//       id: item.id,
//       name: item.name,
//       price: item.price,
//       ingredients: item.recipe,
//     }))
// }

//   async getAll(): Promise<CoffeeEntity[]> {
//     return await this.pb.collection('coffees').getList(1, 100) as unknown as CoffeeEntity[];
//   }

//   async getCoffeeByName(name: string) {
//     // return await this.pb.collection("coffees") { filter: { name}})
//   }

//   save(coffee: CoffeeEntity): void {
//     this.pb.collection('coffess').create(coffee.serializeValue);
//   }
// }

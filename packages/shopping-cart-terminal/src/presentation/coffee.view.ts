import {
  note,
  multiselect,
  isCancel,
  select,
  confirm,
  outro,
} from '@clack/prompts';
import { CoffeeEntity, CoffeeView } from '@code-craft/coffee-store';
import { ShoppingCartEntity } from 'packages/coffee-store/src/lib/domain/entities/shopping-cart.entity';
import { getCoffeePresenter } from './dependenciesLocator';

export class CoffeeTerminalView implements CoffeeView {
  private presenter = getCoffeePresenter(this);

  async showMainMenu(): Promise<string> {
    const userSelection = await select({
      message: 'Welcome to Sebas Valdez coffee. What do you want to do ?',
      options: [
        {
          value: 'coffee-list',
          label: 'Buy some coffees',
          hint: 'recommended',
        },
        {
          value: 'shopping-cart',
          label: 'See the shopping cart',
        },
      ],
    });

    this.operationWasCanceled(userSelection as symbol);
    return userSelection as string;
  }

  async confirmOperation(message: string): Promise<boolean> {
    const shouldContinue = await confirm({
      message,
    });

    this.operationWasCanceled(shouldContinue as symbol);
    return shouldContinue as boolean;
  }

  cancelOperation(): void {
    process.exit(0);
  }

  showEndMessage(message: string) {
    outro(message);
    this.cancelOperation();
  }

  showTotalMessage(message: string): void {
    outro(message);
  }

  async addCoffeeToOrder(coffees: CoffeeEntity[]) {
    const userSelection = await multiselect({
      message: 'Choose your coffees.',
      options: coffees.map((coffee) => ({
        value: coffee.value.id,
        label: coffee.value.name,
        hint: `${coffee.value.price.value} USD`,
      })),
      required: false,
    });

    this.operationWasCanceled(userSelection as symbol);

    return userSelection as { data: { value: string } }[];
  }

  listCoffees(coffees: CoffeeEntity[]): void {
    note('Coffee List');

    if (coffees.length > 0) {
      coffees.forEach((coffee) => {
        note(
          `Id: ${coffee.value.id.value} -  Name: ${coffee.value.name} - Price: ${coffee.value.price.value}`
        );
      });
    } else {
      note('No coffees registered');
    }
  }

  async listShoppingCartItems(cart: ShoppingCartEntity): Promise<void> {
    if (cart.value.items.length > 0) {
      cart.value.items.forEach((item) => {
        note(`Name: ${item.type.value.name} - Quantity: ${item.quantity}`);
      });
      note(`Total: ${cart.totalPrice} USD`);

      // this.presenter.calculateTotal();
      await this.presenter.start();
    } else {
      note('No items registered');

      const answer = await this.confirmOperation('Want to go back ?');
      if (answer) {
        this.presenter.start();
      } else {
        this.showEndMessage('Thanks for being with us');
      }
    }
  }

  operationWasCanceled(value: symbol) {
    if (isCancel(value)) {
      //   this.presenter.onDestroy();
    }
  }
}

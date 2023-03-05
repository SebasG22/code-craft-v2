import { CoffeeTerminalView } from "./presentation/coffee.view";
import { getCoffeePresenter } from "./presentation/dependenciesLocator";

console.log('Hello World');
const view = new CoffeeTerminalView();
const presenter = getCoffeePresenter(view);
presenter.start();


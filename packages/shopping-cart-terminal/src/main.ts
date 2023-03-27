import { CoffeeTerminalView } from './presentation/coffee.view';
import { getCoffeePresenter } from './presentation/dependenciesLocator';

const view = new CoffeeTerminalView();
const presenter = getCoffeePresenter(view);
presenter.start();

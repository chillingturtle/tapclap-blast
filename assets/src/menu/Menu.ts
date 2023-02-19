import { _decorator, Component, director, EventTouch } from "cc";
const { ccclass } = _decorator;

const enum MenuButtonEvents {
  CONTINUE = "continue",
  NEW = "new",
  EXIT = "exit",
}

@ccclass("Menu")
export class Menu extends Component {
  public onLoad() {
    director.preloadScene("Game");
  }

  public onButtonClick(e: EventTouch, data: MenuButtonEvents) {
    switch (data) {
      case MenuButtonEvents.CONTINUE:
      case MenuButtonEvents.NEW:
        director.loadScene("Game");
        break;

      default:
        break;
    }
  }
}

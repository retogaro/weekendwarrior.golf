import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class ProductRoute extends Route {
  @service store;

  model() {
    return this.store.peekRecord("product", "Titleist-DCI962");
  }

  renderTemplate() {
    this.render({
      into: "index",
      outlet: "modal"
    });
  }
}

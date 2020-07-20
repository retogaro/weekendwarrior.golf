import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";

export default class IndexController extends Controller {
  queryParams = ["modal"];

  @tracked modal = null;

  get product() {
    const slug = this.modal;
    const record = this.store.peekRecord("product", slug);

    return record;
  }
}

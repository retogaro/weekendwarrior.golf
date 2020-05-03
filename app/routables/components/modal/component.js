import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class ModalComponent extends Component {
  @service router;

  @action
  close() {
    this.router.transitionTo({ queryParams: { modal: null } });
  }
}

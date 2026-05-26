import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { on } from '@ember/modifier';

export default class CounterComponent extends Component {
  @tracked added;

  get clicks() {
    return this.args.clicks + this.added;
  }

  increment = () => {
    this.added++;
  };

  <template>
    <button type="button" {{on "click" this.increment}}>Clicks:
      {{this.clicks}}</button>
    {{yield}}
  </template>
}

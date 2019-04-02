import { setComponentManager, capabilities } from '@ember/-internals/glimmer';
import { setOwner } from '@ember/-internals/owner';

class GlimmerishComponentManager {
  constructor(owner) {
    this.capabilities = capabilities('3.4');
    this.owner = owner;
  }

  createComponent(Factory, args) {
    return new Factory(this.owner, args.named);
  }

  updateComponent() {}

  getContext(component) {
    return component;
  }
}

class GlimmerishComponent {
  constructor(owner, args) {
    setOwner(this, owner);
    this.args = args;
  }
}

setComponentManager(() => new GlimmerishComponentManager(), GlimmerishComponent);

export default GlimmerishComponent;

type Callback = () => void;

export class Eventing {
  private events: { [key: string]: Callback[] } = {};

  on = (eventName: string, callback: Callback): void => {
    const callbacks = this.events[eventName] || [];
    callbacks.push(callback);
    this.events[eventName] = callbacks;
  };

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];

    if (!handlers) return;

    handlers.forEach((h) => h());
  };
}

interface State {
  order: Order;
  cancelOrder(): any;
  verifyPayment(): any;
  shipOrder(): any;
}

class Order {
  cancelledOrderState!: State;
  paymentPendingState!: State;
  orderShipedState!: State;
  orderBeingPrepared!: State;

  currentState!: State;

  constructor() {
    this.cancelledOrderState = new CancelledOrderState(this);
    this.paymentPendingState = new PaymentPendingState(this);
    this.orderShipedState = new OrderShippedState(this);
    this.orderBeingPrepared = new OrderBeingPrepared(this);

    this.setState(this.paymentPendingState);
  }

  setState(state: State) {
    this.currentState = state;
  }

  getCurrentState(): State {
    return this.currentState;
  }
}

class CancelledOrderState implements State {
  order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  cancelOrder() {
    console.log("This order is already cancelled");
    this.order.setState(this.order.cancelledOrderState);
  }

  verifyPayment() {
    console.log("The order is cancelled, you cannot pay anymore.");
  }

  shipOrder() {
    console.log("The order is cancelled, you cannot ship it anymore.");
  }
}
class PaymentPendingState implements State {
  order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  cancelOrder() {
    console.log("Cancelling your unpaid order...");
    this.order.setState(this.order.cancelledOrderState);
  }

  verifyPayment() {
    console.log("Payment verified! Shipping soon.");
    this.order.setState(this.order.orderBeingPrepared);
  }
  shipOrder() {
    console.log("Cannot ship order when payment is pending!");
  }
}
class OrderBeingPrepared implements State {
  order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  cancelOrder() {
    console.log("Cancelling your order.. You will be refunded.");
    this.order.setState(this.order.cancelledOrderState);
  }
  verifyPayment() {
    console.log("Payment is already verified.");
  }
  shipOrder() {
    console.log("Shipping your order now..");
    this.order.setState(this.order.orderShipedState);
  }
}
class OrderShippedState implements State {
  order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  cancelOrder() {
    console.log("You cannot cancel an order that has been shipped.");
  }
  verifyPayment() {
    console.log("Payment is already verified");
  }
  shipOrder() {
    console.log("Order is already shipped");
  }
}

let order = new Order();

order.getCurrentState().verifyPayment();
order.getCurrentState().shipOrder();
order.getCurrentState().cancelOrder();

console.log("Order state: " + (<any>order.getCurrentState()).constructor.name);

//inherits default values as well

class A {
  constructor(a = 10) {
    this.a = a;
  }
}

class B extends A {
  constructor(a, b = 20) {
    super(a);
    this.b = b;
  }
}

var b = new B();
console.log(b);

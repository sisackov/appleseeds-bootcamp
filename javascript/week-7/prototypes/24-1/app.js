function Square(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
}

Square.prototype.isSquare = function () {
    return this.a === this.b && this.b === this.c && this.c === this.d;
};

const square = new Square(1, 1, 1, 1);
console.log(square.isSquare());

const square2 = new Square(1, 3, 1, 2);
console.log(square2.isSquare());

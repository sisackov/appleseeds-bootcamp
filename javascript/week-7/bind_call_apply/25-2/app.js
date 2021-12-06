const person = {
    name: 'Yoni',
    print1: function () {
        console.log(this.name);
        setTimeout(this.print2.bind(this), 1000);
    },
    print2: function () {
        console.log(this.name);
    },
}

person.print1();

class Father {
    constructor(name) {
        this.name = name;
        console.log("I am" + " " + this.name)
    }
    setAge(age) {
        this.age = age;
    }
    setHeight(height) {
        this.height = height;
    }
}
class Child extends Father {
    getAge() {
        return this.age
    }
    getHeight() {
        return this.height
    }
}
let child = new Child('李华')
child.setAge(18);
child.setHeight(180);
console.log(child.name)
console.log(child.getAge());
console.log(child.getHeight());
console.log('我叫' + child.name + '，我今年' + child.getAge() + '岁了，我的身高是' + child.getHeight())

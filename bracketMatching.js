class Stack{
    constructor(_max){
        this.max = _max;
        this.container = [];
    }
    push(data){
        this.container.push(data);
    }
    pop(){
        return this.container.pop();
    }
    isEmpty(){
        return this.container.length == 0;
    }
    isFull(){
        return this.container.length == this.max;
    }
}

var str = "a = (1 + v(b[3 + c[4]]))";

console.log(bracketMatching(str));

function bracketMatching(str){
    var bmstack = new Stack(100);
    for (let i=0; i<str.length; i++){
        console.log(i + " char: " + str[i]);

        // 左括號
        if (str[i] == '{' || str[i] == '[' || str[i] == '('){
            bmstack.push(str[i]);
        }

        // 右括號
        else if (str[i] == '}' || str[i] == ']' || str[i] == ')'){
            if (bmstack.isEmpty()) return "unmatch";  // 多了一個右括號

            var openning = bmstack.pop();

            if(
                (str[i] == '}' && openning != '{') ||
                (str[i] == ']' && openning != '[') ||
                (str[i] == ')' && openning != '(')
            ){
                return "unmatch";
            }
        }
    }

    if(!bmstack.isEmpty()) return "unmatch"; // 左括號多了

    return "match";
}

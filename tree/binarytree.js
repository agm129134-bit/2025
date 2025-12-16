const readline = require('readline');

/***********************
 * 二元樹節點
 ***********************/
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

/********************************
 * 建立二元樹（支援字母與數字）
 ********************************/
function buildBinaryTree(arr) {
    if (!arr || arr.length === 0 || arr[0] === null) return null;

    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;

    while (i < arr.length && queue.length > 0) {
        let current = queue.shift();

        // 處理左子節點
        if (i < arr.length) {
            if (arr[i] !== null) {
                current.left = new TreeNode(arr[i]);
                queue.push(current.left);
            }
            i++;
        }

        // 處理右子節點
        if (i < arr.length) {
            if (arr[i] !== null) {
                current.right = new TreeNode(arr[i]);
                queue.push(current.right);
            }
            i++;
        }
    }
    return root;
}

/************************
 * 遍歷函式 (迭代版)
 ************************/
function preorder(root) {
    let result = [];
    if (!root) return result;
    let stack = [root];
    while (stack.length > 0) {
        let node = stack.pop();
        result.push(node.val);
        if (node.right) stack.push(node.right);
        if (node.left)  stack.push(node.left);
    }
    return result;
}

function inorder(root) {
    let result = [];
    let stack = [];
    let current = root;
    while (current !== null || stack.length > 0) {
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        result.push(current.val);
        current = current.right;
    }
    return result;
}

function postorder(root) {
    let result = [];
    if (!root) return result;
    let s1 = [root];
    let s2 = [];
    while (s1.length > 0) {
        let node = s1.pop();
        s2.push(node);
        if (node.left)  s1.push(node.left);
        if (node.right) s1.push(node.right);
    }
    while (s2.length > 0) {
        result.push(s2.pop().val);
    }
    return result;
}

/************************
 * 視覺化樹狀圖
 ************************/
function printTree(root, prefix = "", isLeft = true) {
    if (root === null) return;
    if (root.right) printTree(root.right, prefix + (isLeft ? "│   " : "    "), false);
    console.log(prefix + (isLeft ? "└── " : "┌── ") + root.val);
    if (root.left) printTree(root.left, prefix + (isLeft ? "    " : "│   "), true);
}

/***********************
 * 互動輸入處理
 ***********************/
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.clear();
console.log("==========================================");
console.log("   通用二元樹測試 (支援 字母/數字)   ");
console.log("==========================================");
console.log("範例 1 (字母): A, B, C, null, D");
console.log("範例 2 (數字): 1, 2, 3");
console.log("範例 3 (混合): Root, Left, Right, 100, 200");
console.log("輸入 'exit' 離開");
console.log("------------------------------------------");

function ask() {
    rl.question('\n請輸入陣列 (逗號分隔): ', (input) => {
        if (input.trim().toLowerCase() === 'exit') {
            console.log("Bye!");
            rl.close();
            return;
        }

        try {
            // --- 關鍵修改：智慧判斷型別 ---
            const arr = input.split(',').map(item => {
                const raw = item.trim();
                const lower = raw.toLowerCase();
                
                // 1. 處理空值
                if (lower === 'null' || lower === '') return null;
                
                // 2. 嘗試轉成數字
                const num = Number(raw);
                if (!isNaN(num)) {
                    return num; // 如果是有效數字，回傳數字
                }
                
                // 3. 否則回傳原始字串 (字母)
                return raw;
            });

            console.log(`\n讀入資料: [ ${arr.map(x => x === null ? 'null' : x).join(', ')} ]`);

            const root = buildBinaryTree(arr);

            console.log("\n--- 樹狀結構 (左旋90度) ---");
            if (!root) console.log("(空樹)");
            else printTree(root);

            console.log("\n--- 迭代遍歷結果 ---");
            console.log("Preorder :", preorder(root));
            console.log("Inorder  :", inorder(root));
            console.log("Postorder:", postorder(root));

        } catch (e) {
            console.log("發生錯誤:", e.message);
        }

        ask();
    });
}

ask();
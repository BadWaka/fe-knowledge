function Node(val) {
    this.val = val;
    this.children = [];
}

let testRoot = {
    val: 'a',
    children: [
        {
            val: 'b',
            children: [
                {
                    val: 'd'
                },
                {
                    val: 'e'
                }
            ]
        },
        {
            val: 'c',
            children: [
                {
                    val: 'f',
                    children: [
                        {
                            val: 'h'
                        }
                    ]
                },
                {
                    val: 'g'
                }
            ]
        }
    ]
};

// DFS

// 递归 recursion
function deepFirstSearch(node, nodeList = []) {
    if (!node) {
        return [];
    }
    nodeList.push(node);
    if (!node.children) {
        return nodeList;
    }
    for (let i = 0; i < node.children.length; i++) {
        deepFirstSearch(node.children[i], nodeList);
    }
    return nodeList;
}

function deepFirstSearch2(node) {
    if (!node) {
        return [];
    }
    let stack = [];
    let nodeList = [];
    stack.push(node);
    while (stack.length !== 0) {
        let item = stack.pop();
        console.log('item', item);
        if (!item) {
            break;
        }
        nodeList.push(item);
        if (item.children) {
            for (let i = 0; i < item.children.length; i++) {
                stack.push(item[i]);
            }
        }
    }
    return nodeList;
}

let arr1 = deepFirstSearch2(testRoot);
console.log('arr1', arr1);

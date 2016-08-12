var cloneGraph = function(graph) {
    var map = {};
    function traverse(node) {
        if (!node) {
            return null;
        }
        if (!map[node.label]) {
            var cloneNode = new UndirectedGraphNode(node.label);
            map[cloneNode.label] = cloneNode;
            node.neighbors.map(function(neighborNode) {
                cloneNode.neighbors.push(traverse(neighborNode));
            });
            return cloneNode;
        } else {
          return map[node.label];
        }
    }
    return traverse(graph);
};


// test
var node2 = new UndirectedGraphNode(2);
node2.neighbors.push(node2)
var node1 = new UndirectedGraphNode(1);
node1.neighbors.push(node2);
var node0 = new UndirectedGraphNode(0);
node0.neighbors.push(node1);
node0.neighbors.push(node2);
var graph = node0;

var util = require('util');
function UndirectedGraphNode(label) {
   this.label = label;
   this.neighbors = [];
}
console.log('original graph:\n', util.inspect(graph, {showHidden: false, depth: null}));
console.log('cloned graph:\n', util.inspect(cloneGraph(graph), {showHidden: false, depth: null}));

##
# Binary_Tree.

=begin
In computer science, a binary tree is a 
tree data structure in which each node has 
at most two children, which are referred 
to as the left child and the right child.

Please do not get confused between a binary 
tree and a binary search tree.

https://computersciencewiki.org/index.php/Binary_tree
=end

# Node structure for binary tree.

Node = Struct.new :data, :left, :right do
    def self.create
        # allocate memory for a new node.
        new_node = Node.new();

        # get & ask user for node data.
        puts "enter number greater than -1"
        val = gets.to_i;

        # recursively add left,right to tree
        return nil if val < 0;
        new_node.data = val;
        # left
        puts "enter left child of #{val}";
        new_node.left = Node.create();
        # right
        puts "enter right child of #{val}";
        new_node.right = Node.create();

        new_node;
    end

    def self.inorder root
        # return to recursive calls if root is nil.
        return if root === nil;

        # recusively get left, root, right.
        # left
        Node.inorder(root.left);
        # root
        puts root.data;
        # right
        Node.inorder(root.right);
    end

    def self.preorder root
        # return to recursive call if root is nil.
        return if root === nil;

        # recursively get root, left, right.
        puts root.data;
        Node.preorder(root.left);
        Node.preorder(root.right); 
    end

    def self.postorder root 
        # return to recursive call if root is nil.
        return nil if root === nil;

        # recursively get left, right, root.
        Node.postorder(root.left);
        Node.postorder(root.right);
        puts root.data;
    end
end

root = nil;
root = Node.create();
puts root;
Node.inorder(root);
Node.preorder(root);
Node.postorder(root);

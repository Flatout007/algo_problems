# PROPERTIES OF RECURSION

:heavy_check_mark: Same operation is performed multiple times with different inputs

:heavy_check_mark: In every step we try to make the problem smaller

:heavy_check_mark: We mandatorily need to have a base condition, which tells the system to stop the recursion

_Example of using recursion to search for a node in a binary tree using pseudocode_

```cs
search(root, value_to_find)
    if(root equals null) return null

    else if(root->value equals value_to_find) return root

    else if(value_to_find < root->value) search(root->left, value_to_find)

    else search(root->right, value_to_find)
```
(function($) {
    // TODO: make the node ID configurable
    var treeNode = $('#jsdoc-toc-nav');

    // initialize the tree
    treeNode.tree({
        autoEscape: false,
        closedIcon: '&#x21e2;',
        data: [{"label":"<a href=\"module-class-expression.html\">class-expression</a>","id":"module:class-expression","children":[{"label":"<a href=\"module-class-expression-class_expression.html\">class_expression</a>","id":"module:class-expression~class_expression","children":[]}]}],
        openedIcon: ' &#x21e3;',
        saveState: true,
        useContextMenu: false
    });

    // add event handlers
    // TODO
})(jQuery);

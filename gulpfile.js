var requireDir = require('require-dir');

//Require all tasks in gul/tasks, including subfolders
requireDir = ('./gulp/tasks', {recurse: true});

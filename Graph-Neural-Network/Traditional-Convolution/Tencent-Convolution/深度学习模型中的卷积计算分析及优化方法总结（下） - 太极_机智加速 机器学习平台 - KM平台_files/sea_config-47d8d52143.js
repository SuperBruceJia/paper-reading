seajs.config({
    'path' : {
        'jquery' : km_path + 'js/jquery'
    },
    base : km_path + 'js/',
    debug : true,
    charset : 'utf-8',
    map : [
    	['.js', '.js?v=' + km_file_ver]
    ]
});
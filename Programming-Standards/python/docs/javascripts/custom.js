
document.querySelectorAll('.good_example_span').forEach(function(item) {
    var p = item.parentElement;
    p.classList.add('good_example');
    p.nextElementSibling.classList.add('good_example_pre');
});

document.querySelectorAll('.bad_example_span').forEach(function(item) {
    var p = item.parentElement;
    p.classList.add('bad_example');
    p.nextElementSibling.classList.add('bad_example_pre');
});

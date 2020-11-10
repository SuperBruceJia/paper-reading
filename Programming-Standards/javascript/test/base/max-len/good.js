const foo = jsonData
  && jsonData.foo
  && jsonData.foo.bar
  && jsonData.foo.bar.baz
  && jsonData.foo.bar.baz.quux
  && jsonData.foo.bar.baz.quux.xyzzy;

$.ajax({
  method: 'POST',
  url: 'https://airbnb.com/',
  data: { name: 'John' },
})
  .done(() => console.log('Congratulations!'))
  .fail(() => console.log('You have failed this city.'));

const str = 'The quick brown fox jumps over the lazy dog, the another quick brown fox jumps over the lazy dog, the 3rd quick brown fox jumps over the lazy dog';

const templateStr = `${jsonData.foo} The quick brown fox jumps over the lazy dog, the another quick brown fox jumps over the lazy dog, the 3rd quick brown fox jumps over the lazy dog`;

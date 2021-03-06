const transformBlock = (world, options) => world.map((row, y) => row.set(
    'blocks',
    row.get('blocks').map((block) =>
    block.get('value') === options.from
      ? block.set('value', options.to)
      : block
    )
));

export default transformBlock;

module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  const enhancedItem = item.enhancement;
  if(enhancedItem < 20) {
    return { ...item, enhancement: enhancedItem + 1}
  } else {
    return { ...item }
  }
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  const newItem = { name: item.name, durability: 100, enhancement: item.enhancement }
  return newItem;
}

function get(item) {
  return { ...item };
}

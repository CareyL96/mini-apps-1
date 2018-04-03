exports.formatCsv = (csv) => {
  csv = JSON.parse(csv);
  var attributes = getAttributesArray(csv);
  var formattedCsv = attributes.join(',') + '\n';

  var recurse = (person) => {
    formattedCsv += getAttributeInfo(person, attributes);
    if (person.children === []) {
      return;
    }

    for (let i = 0; i < person.children.length; i++) {
      let child = person.children[i];
      recurse(child);
    }
  }
  recurse(csv);

  return formattedCsv;
}

var getAttributesArray = (csv) => {
  var attributes = Object.keys(csv);
  attributes.pop();
  return attributes;
}

var getAttributeInfo = (csv, attributes) => {
  var info = [];
  attributes.forEach(attribute => {
    info.push(csv[attribute])
  });

  return info.join(',') + '\n';
}
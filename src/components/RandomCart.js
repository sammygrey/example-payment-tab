const items = [
  "Falchion of Reflection",
  "Holy Greaves of Giants",
  "Silk Gloves",
  "Dragon's Crown",
  "Pendant of Perfection",
  "Titanium Ring of Giants",
  "Heavy Belt",
  "Bone Wand",
  "Ring Mail of Giants",
  "Demonhide Boots of the Fox",
  "Heavy Gloves",
  "Cap",
  "Necklace",
  "Gold Ring",
  "Wool Sash of Protection",
  "Ghost Wand",
  "Chain Mail",
  "Shoes of Enlightenment",
  "Demon's Hands",
  "Ancient Helm",
  "Platinum Ring of Vitriol",
];

export function RandomCart() {
  var numItems = Math.ceil(Math.random() * 5);
  var total = 0;
  var itemString = "";
  var genItems = {};

  for (var i = 0; i < numItems; i++) {
    var item = items[Math.floor(Math.random() * items.length)];
    var price = (Math.random() * 101).toFixed(2);
    if (!(item in genItems)) {
      itemString = itemString.concat(
        `<li class="items"><a href="#" id="name">${item}</a> <span class="price" id="price">$${price}</span></li>`
      );
      genItems[`${item}`] = 1;
      total = +total + +price;
    } else {
      i--;
    }
  }

  var tax = (total * 0.06).toFixed(2);
  var fees = (total * 0.025).toFixed(2);
  total = (+total + +fees + +tax).toFixed(2);

  return { numItems, total, itemString, tax, fees };
}

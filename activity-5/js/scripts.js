var data = [
  {
    name: "Path Intellisense",
    description: "Visual Studio Code plugin that autocompletes filenames.",
    author: "Christian Kohler",
    url: "https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense",
    downloads: 15629344,
    stars: 122,
    price: "Free",
    selector: "p1",
  },
  {
    name: "Indent-rainbow",
    description: "Makes indentation easier to read.",
    author: "oderwat",
    url: "https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow",
    downloads: 9922538,
    stars: 138,
    price: "Free",
    selector: "p2",
  },
];

function Package(data) {
  this.name = data.name;
  this.description = data.description;
  this.author = data.author;
  this.url = data.url;
  this.downloads = data.downloads;
  this.stars = data.stars;
  this.price = data.price;
  this.selector = data.selector;

  this.getFormattedDownloads = function () {
    return this.downloads.toLocaleString();
  };

  this.getFormattedStars = function () {
    return this.stars.toLocaleString();
  };
}

var getTodaysDate = function () {
  var today = new Date();
  return today.toDateString();
};

var getEl = function (id) {
  return document.getElementById(id);
};

var writePackageInfo = function (package) {
  var selector = package.selector,
    nameEl = getEl(selector + "-name"),
    descEl = getEl(selector + "-description"),
    authEl = getEl(selector + "-author"),
    urlEL = getEl(selector + "-url"),
    priceEl = getEl(selector + "-price"),
    downloadEl = getEl(selector + "-downloads"),
    starsEl = getEl(selector + "-stars");

  nameEl.textContent = package.name;
  descEl.textContent = package.description;
  authEl.textContent = package.author;
  urlEL.textContent = package.url;
  priceEl.textContent = package.price;
  downloadEl.textContent = package.getFormattedDownloads();
  starsEl.textContent = package.getFormattedStars();
};

var init = function () {
  dateEl = getEl("date");
  dateEl.textContent = getTodaysDate();

  var pathI = new Package(data[0]);
  writePackageInfo(pathI);

  var rainbow = new Package(data[1]);
  writePackageInfo(rainbow);
};

init();

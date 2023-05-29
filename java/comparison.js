const productComparisonList = JSON.parse(localStorage.getItem('productComparisionList'));
var storedObject = productComparisonList;
import data from './data.json' assert { type: 'json' };
// var storedObject = localStorage.getItem("productComparisionList");
function findObjectsByName(data, storedObject) {
    var result = [];
  
    for (var j = 0; j < storedObject.length; j++) {
      for (var i = 0; i < data.length; i++) {
        var item = data[i];
  
        if (item.name === storedObject[j].name) {
          result.push(item);
        }
      }
    }
  
    return result;
  }
  
var filteredObjects = findObjectsByName(data,storedObject);

//============ Rendering Product Comparision  
        

// var productWrapper = document.getElementById("page-two-product-wrapper");

// for (var i = 0; i < filteredObjects.length; i++) {
//     var cardData = filteredObjects[i];

//     var productCard = document.createElement("div");
//     productCard.className = "page-two-product-data-card";

//     var image = document.createElement("img");
//     image.className = "page-two-product-data-image";
//     image.src = cardData.image_url;
//     productCard.appendChild(image);

//     var infoContainer = document.createElement("div");
//     infoContainer.className = "page-two-product-info-container";
//     productCard.appendChild(infoContainer);

//     var keyValues = Object.entries(cardData);

//     for (var j = 0; j < keyValues.length; j++) {
//         var key = keyValues[j][0];
//         var value = keyValues[j][1];

//         var keyElement = document.createElement("div");
//         keyElement.className = "page-two-product-key";
//         keyElement.textContent = key;
//         infoContainer.appendChild(keyElement);

//         var valueElement = document.createElement("div");
//         valueElement.className = "page-two-product-value";
        
//         if (typeof value === 'object') {
//             valueElement.textContent = JSON.stringify(value);
//         } else {
//             valueElement.textContent = value;
//         }
        
//         infoContainer.appendChild(valueElement);
//     }

//     var btnContainer = document.createElement("div");
//     btnContainer.className = "page-two-cart-compare-btn-container";
//     productCard.appendChild(btnContainer);

//     productWrapper.appendChild(productCard);
// }












var productWrapper = document.getElementById("page-two-product-wrapper");

for (var i = 0; i < filteredObjects.length; i++) {
    var cardData = filteredObjects[i];

    var productCard = document.createElement("div");
    productCard.className = "page-two-product-data-card";

    var image = document.createElement("img");
    image.className = "page-two-product-data-image";
    image.src = cardData.image_url;
    productCard.appendChild(image);

    var name = document.createElement("div");
    name.className = "page-two-product-brand-name";
    name.textContent = cardData.name;
    productCard.appendChild(name);

    var price = document.createElement("div");
    price.className = "page-two-product-og-price";
    price.textContent = "$" + " " + cardData.price;
    productCard.appendChild(price);

    var btnContainer = document.createElement("div");
    btnContainer.className = "page-two-cart-compare-btn-container";
    productCard.appendChild(btnContainer);

    var displaySize = document.createElement("div");
    displaySize.textContent = "Display Size: " + cardData.display.size;
    productCard.appendChild(displaySize);

    var displayResolution = document.createElement("div");
    displayResolution.textContent = "Resolution: " + cardData.display.resolution;
    productCard.appendChild(displayResolution);

    var processorManufacturer = document.createElement("div");
    processorManufacturer.textContent = "Processor Manufacturer: " + cardData.processor.manufacturer;
    productCard.appendChild(processorManufacturer);

    var processorModel = document.createElement("div");
    processorModel.textContent = "Processor Model: " + cardData.processor.model;
    productCard.appendChild(processorModel);

    var memorySize = document.createElement("div");
    memorySize.textContent = "Memory Size: " + cardData.memory.size;
    productCard.appendChild(memorySize);

    var memoryType = document.createElement("div");
    memoryType.textContent = "Memory Type: " + cardData.memory.type;
    productCard.appendChild(memoryType);

    var storageSize = document.createElement("div");
    storageSize.textContent = "Storage Size: " + cardData.storage.size;
    productCard.appendChild(storageSize);

    var storageType = document.createElement("div");
    storageType.textContent = "Storage Type: " + cardData.storage.type;
    productCard.appendChild(storageType);

    var weight = document.createElement("div");
    weight.textContent = "Weight: " + cardData.weight;
    productCard.appendChild(weight);

    var colorOptions = document.createElement("div");
    colorOptions.textContent = "Color Options: " + cardData.options.color.join(", ");
    productCard.appendChild(colorOptions);

    var keyboardOptions = document.createElement("div");
    keyboardOptions.textContent = "Keyboard Options: " + cardData.options.keyboard.join(", ");
    productCard.appendChild(keyboardOptions);

    productWrapper.appendChild(productCard);
}


























// ============Render comp data

// var productWrapper = document.getElementById("page-two-product-wrapper");

// for (var i = 0; i < filteredObjects.length; i++){

//     var cardData = filteredObjects[i];

//     var productCard = document.createElement("div");
//     productCard.className = "page-two-product-data-card";

//     var image = document.createElement("img");
//     image.className = "page-two-product-data-image";
//     image.src= cardData.image_url;
//     productCard.appendChild(image);

//     var name = document.createElement("div");
//     name.className = "page-two-product-brand-name";
//     name.textContent = cardData.name;
//     productCard.appendChild(name);

//     var price= document.createElement("div");
//     price.className= "page-two-product-og-price";
//     price.textContent= "$" + " " + cardData.price;
//     productCard.appendChild(price);

//     var btnContainer = document.createElement("div");
//     btnContainer.className = "page-two-cart-compare-btn-container";
//     productCard.appendChild(btnContainer);

//     productWrapper.appendChild(productCard);
// };
















































// // ======================
// // Retrieve the product comparison list from session storage
// const productComparisonList = JSON.parse(localStorage.getItem('productComparisionList'));
// import data from './data.json' assert { type: 'json' };
// // Retrieve the products from your JSON data (assuming it is stored in the `data` variable)
// const products = data;
// var storedObject = productComparisonList;
// // var storedObject = localStorage.getItem("productComparisionList");
//     console.log(storedObject);
//     console.log(products);
// // Filter the products based on the names in the comparison list

// var toBeCompared = function(){
//     for(i=0, i<=products.length;i++){
//         if(products.name === storedObject.name){
            
//         }    
//     }
// }


// // Access the selected products and do whatever you need with them
// selectedProducts.forEach((product) => {
//   console.log(product);
//   // Perform further operations with the selected product
//   const compareModelCardContainer = document.querySelector('.compare-model-card-container');
//   const compareSpecRowContents = document.querySelector('.compare-spec-row-contents');

// // Function to create and append a model card
// function createModelCard(model) {
//   const modelCard = document.createElement('div');
//   modelCard.classList.add('model-card');
//   modelCard.textContent = model;

//   compareModelCardContainer.appendChild(modelCard);
// }

// // Function to create and append a specification row
// function createSpecRow(spec, values) {
//   const specRow = document.createElement('div');
//   specRow.classList.add('compare-spec-row');

//   const specTitle = document.createElement('strong');
//   specTitle.classList.add('compare-spec-row-title');
//   specTitle.textContent = spec;

//   const specContents = document.createElement('div');
//   specContents.classList.add('compare-spec-row-contents');

//   values.forEach((value) => {
//     const specValue = document.createElement('span');
//     specValue.classList.add('compare-spec-value');
//     specValue.textContent = value;

//     specContents.appendChild(specValue);
//   });

//   specRow.appendChild(specTitle);
//   specRow.appendChild(specContents);

//   compareSpecRowContents.appendChild(specRow);
// }

// // Parse the JSON data
// const parsedData = JSON.parse(data);

// // Extract the model names
// const modelNames = parsedData.products.map((product) => product.name);

// // Add the model cards to the container
// modelNames.forEach((modelName) => {
//   createModelCard(modelName);
// });

// // Extract and add the specification rows
// const specifications = Object.keys(parsedData.products[0]);
// specifications.forEach((spec) => {
//   if (spec !== 'name') {
//     const specValues = parsedData.products.map((product) => product[spec]);
//     createSpecRow(spec, specValues);
//   }
// });

// });

// // ======================


// // Assuming you have your JSON data stored in a variable called data

// // Get the container elements
// const compareModelCardContainer = document.querySelector('.compare-model-card-container');
// const compareSpecRowContents = document.querySelector('.compare-spec-row-contents');

// // Function to create and append a model card
// function createModelCard(model) {
//   const modelCard = document.createElement('div');
//   modelCard.classList.add('model-card');
//   modelCard.textContent = model;

//   compareModelCardContainer.appendChild(modelCard);
// }

// // Function to create and append a specification row
// function createSpecRow(spec, values) {
//   const specRow = document.createElement('div');
//   specRow.classList.add('compare-spec-row');

//   const specTitle = document.createElement('strong');
//   specTitle.classList.add('compare-spec-row-title');
//   specTitle.textContent = spec;

//   const specContents = document.createElement('div');
//   specContents.classList.add('compare-spec-row-contents');

//   values.forEach((value) => {
//     const specValue = document.createElement('span');
//     specValue.classList.add('compare-spec-value');
//     specValue.textContent = value;

//     specContents.appendChild(specValue);
//   });

//   specRow.appendChild(specTitle);
//   specRow.appendChild(specContents);

//   compareSpecRowContents.appendChild(specRow);
// }

// // Parse the JSON data
// const parsedData = JSON.parse(data);

// // Extract the model names
// const modelNames = parsedData.products.map((product) => product.name);

// // Add the model cards to the container
// modelNames.forEach((modelName) => {
//   createModelCard(modelName);
// });

// // Extract and add the specification rows
// const specifications = Object.keys(parsedData.products[0]);
// specifications.forEach((spec) => {
//   if (spec !== 'name') {
//     const specValues = parsedData.products.map((product) => product[spec]);
//     createSpecRow(spec, specValues);
//   }
// });

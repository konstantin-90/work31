const dataPhone = [
    {    
    name: "iPhone 13",    
    description: "Флагманский смартфон Apple с OLED-дисплеем, новым процессором A15 Bionic и тройной камерой.",    
    cost: 999,    
    brand: "Apple"  
    },  
    {    
    name: "Samsung Galaxy Z Flip 3",    
    description: "Смартфон-раскладушка с дисплеем из стекла, процессором Snapdragon 888 и двойной камерой.",    
    cost: 999,    
    brand: "Samsung"  },  
    {    
    name: "OnePlus 10 Pro",    
    description: "Флагманский смартфон OnePlus с 6,7-дюймовым дисплеем, процессором Snapdragon 8 Gen 1 и четверной камерой.",    
    cost: 899,    
    brand: "OnePlus"  
    },  
    {    
    name: "Google Pixel 6",    
    description: "Смартфон с дисплеем из супертонкого стекла, новым процессором Tensor и двойной камерой.",    
    cost: 749,    "brand": "Google"  },  
    {    
    name: "Xiaomi Mi 12",    
    description: "Флагманский смартфон Xiaomi с 6,8-дюймовым дисплеем, процессором Snapdragon 8 Gen 1 и пятикратной камерой.",    
    cost: 999,    
    brand: "Xiaomi"  
}
];

const dataLaptop = [
    {
      name: "MacBook Pro",
      description: "Powerful laptop for professional use",
      cost: 1999,
      brand: "Apple"
    },
    {
      name: "ThinkPad X1 Carbon",
      description: "Ultra-light and durable business laptop",
      cost: 1599,
      brand: "Lenovo"
    },
    {
      name: "Surface Laptop 4",
      description: "Sleek and stylish laptop for everyday use",
      cost: 1299,
      brand: "Microsoft"
    },
    {
      name: "ZenBook UX425",
      description: "Thin and light laptop with long battery life",
      cost: 899,
      brand: "Asus"
    },
    {
      name: "Chromebook Spin 713",
      description: "Affordable and versatile laptop for students",
      cost: 599,
      brand: "Acer"
    }
];

  const dataTablet = [
    {
      name: "iPad Pro",
      description: "11-inch Liquid Retina display, A14 Bionic chip, and support for Apple Pencil and Magic Keyboard.",
      cost: 799,
      brand: "Apple"
    },
    {
      name: "Galaxy Tab S7+",
      description: "12.4-inch Super AMOLED display, Qualcomm Snapdragon 865 Plus processor, and support for the S Pen.",
      cost: 849,
      brand: "Samsung"
    },
    {
      name: "Surface Pro 7+",
      description: "12.3-inch PixelSense display, 11th Gen Intel Core processors, and optional LTE Advanced.",
      cost: 899,
      brand: "Microsoft"
    },
    {
      name: "Lenovo Tab P11 Pro",
      description: "11.5-inch OLED display, Qualcomm Snapdragon 730G processor, and quad speakers tuned by JBL.",
      cost: 499,
      brand: "Lenovo"
    },
    {
      name: "Fire HD 10",
      description: "10.1-inch 1080p full HD display, octa-core processor, and up to 12 hours of battery life.",
      cost: 149,
      brand: "Amazon"
    }
];
  

const phoneList = document.getElementById("phone");
const tablet = document.getElementById("tablet");
const laptop = document.getElementById("laptop");


phoneList.addEventListener("click", createPhoneList);
tablet.addEventListener("click", createLaptopList);
laptop.addEventListener("click", createTabletList);


// функция вывода сообщения о покупке
function showAlert(productName, productCost) {
  alert(`Товар "${productName}" был куплен! Сумма заказа сотавила: ${productCost}$!`);
  const nameProductList = document.getElementById("table__container");
  nameProductList.innerHTML = "";
  const description = document.getElementById('description');
  description.innerHTML = "";
}

function createPhoneList() {
  const tableContainer = document.getElementById("table__container");
  tableContainer.innerHTML = ""; // Очищаем содержимое перед выводом новых данных

  dataPhone.forEach((phoneData) => {
    let newTable = document.createElement("div");
    newTable.className = "card";
    newTable.style = "width: 18rem;";
    newTable.innerHTML = `
    <div class="card-body">
    <h5 class="card-title">${phoneData.name}</h5>
    </div>
    `;

    newTable.addEventListener("click", function () {
      createPhone(phoneData); // Вызываем функцию createPhone() с передачей объекта phoneData
    });
    
    tableContainer.appendChild(newTable);
  })
};


function createPhone(phoneData) {
  const phoneContainer = document.getElementById('description');
  phoneContainer.innerHTML = '';

  let newTable = document.createElement("div");
  newTable.className = "card";
  newTable.style = "width: 18rem;";
  newTable.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">${phoneData.name}</h5>
      <p class="card-text">Brand: ${phoneData.brand}</p>
      <p class="card-text">${phoneData.description}</p>
      <p class="card-text">Cost: ${phoneData.cost}</p>
      <a href="#" class="card-link" onclick="showAlert('${phoneData.name}', '${phoneData.cost}')">Buy</a>
    </div>
  `;

  phoneContainer.appendChild(newTable);
}


function createLaptopList() {
  const tableContainer = document.getElementById("table__container");
  tableContainer.innerHTML = ""; // Очищаем содержимое перед выводом новых данных

  dataLaptop.forEach((LaptopData) => {
    let newTable = document.createElement("div");
    newTable.className = "card";
    newTable.style = "width: 18rem;";
    newTable.innerHTML = `
    <div class="card-body">
    <h5 class="card-title">${LaptopData.name}</h5>
    </div>
    `;

    newTable.addEventListener("click", function () {
      createLaptop(LaptopData); // Вызываем функцию createPhone() с передачей объекта phoneData
    });
    
    tableContainer.appendChild(newTable);
  })
};


function createLaptop(LaptopData) {
  const laptopContainer = document.getElementById('description');
  laptopContainer.innerHTML = '';

  let newTable = document.createElement("div");
  newTable.className = "card";
  newTable.style = "width: 18rem;";
  newTable.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">${LaptopData.name}</h5>
      <p class="card-text">Brand: ${LaptopData.brand}</p>
      <p class="card-text">${LaptopData.description}</p>
      <p class="card-text">Cost: ${LaptopData.cost}</p>
      <a href="#" class="card-link" onclick="showAlert('${LaptopData.name}', '${LaptopData.cost}')">Buy</a>
    </div>
  `;

  laptopContainer.appendChild(newTable);
}


function createTabletList() {
  const tabletContainer = document.getElementById("table__container");
  tabletContainer.innerHTML = ""; // Очищаем содержимое перед выводом новых данных

  dataTablet.forEach((tabletData) => {
    let newTable = document.createElement("div");
    newTable.className = "card";
    newTable.style = "width: 18rem;";
    newTable.innerHTML = `
    <div class="card-body">
    <h5 class="card-title">${tabletData.name}</h5>
    </div>
    `;

    newTable.addEventListener("click", function () {
      createTablet(tabletData); // Вызываем функцию createPhone() с передачей объекта phoneData
    });
    
    tabletContainer.appendChild(newTable);
  })
};


function createTablet(tabletData) {
  const tabletContainer = document.getElementById('description');
  tabletContainer.innerHTML = '';

  let newTable = document.createElement("div");
  newTable.className = "card";
  newTable.style = "width: 18rem;";
  newTable.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">${tabletData.name}</h5>
      <p class="card-text">Brand: ${tabletData.brand}</p>
      <p class="card-text">${tabletData.description}</p>
      <p class="card-text">Cost: ${tabletData.cost}</p>
      <a href="#" class="card-link" onclick="showAlert('${tabletData.name}', '${tabletData.cost}')">Buy</a>
    </div>
  `;

  tabletContainer.appendChild(newTable);
}

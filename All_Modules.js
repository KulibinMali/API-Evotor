# API-Evotor
Скрипты для получения данных с Эвотора для JS (gs)

function getToken() {
  return '{key}';
}

function getEmployers2(){
     let options = {
    'headers': {'Accept': "application/vnd.evotor.v2+json",
                'Authorization': getToken(),
                 'Content-Type': "application/vnd.evotor.v2+json"
                
                },
    'method': 'get'
  };

  let response = UrlFetchApp.fetch('https://api.evotor.ru/employees', options);
  return JSON.parse(response);
}

function getDocuments2(){
   let token = getToken();
   let options = {
    'headers': {'Accept': "application/vnd.evotor.v2+json",
                'Authorization': token,
                 'Content-Type': "application/vnd.evotor.v2+json"
                
                },
    'method': 'get'
  };

  let stores = getSmartTerminal();
  for(var i =0; i < stores.length; i++){
    var storeId = stores[i].storeUuid;
    try {
    var response = UrlFetchApp.fetch('https://api.evotor.ru/stores/' + storeId + '/documents?types=SELL', options);
    return JSON.parse(response);
    // var response = UrlFetchApp.fetch('api.evotor.ru/api/v1/inventories/stores/' + storeUuid + '/products/schemes', options);
      console.log(JSON.parse(response));
    } catch(e){
      console.log(e);
    }
}
}

//Получить список сотрудников 
function getEmployers(){
   let options = {
    'headers': {accept: "application/json",
                'Authorization': getToken(),
                 'Content-Type': "application/vnd.evotor.v2+json"
                
                },
    'method': 'get'
  };

  let response = UrlFetchApp.fetch('api.evotor.ru/api/v1/inventories/employees', options);
  return JSON.parse(response);
}

function getSmartTerminal() {
    let options = {
    'headers': {accept: "application/json",
                'Authorization': getToken()},
    'method': 'get'
  };

  let response = UrlFetchApp.fetch('api.evotor.ru/api/v1/inventories/devices/search', options);
  return JSON.parse(response);
}


//Получить список магазинов 
function getListStores(){
  let token = getToken();
   let options = {
    'headers': {accept: "application/json",
                'Authorization': token
                },
    'method': 'get'
  };

   let response = UrlFetchApp.fetch('api.evotor.ru/api/v1/inventories/stores/search', options);
  return JSON.parse(response);
}

function getGoodsShema(){
     let token = getToken();
   let options = {
    'headers': {accept: "application/json",
                'X-Authorization': token
                },
    'method': 'get'
  };
     let stores = getSmartTerminal();
  for(var i =0; i < stores.length; i++){
    var storeUuid = stores[i].storeUuid;
   let response = UrlFetchApp.fetch('api.evotor.ru/api/v1/inventories/stores/'+  storeUuid + '/products/schemes', options);
     return JSON.parse(response);
  }
  return null;
  
}

function getGoods(){
  let token = getToken();
   let options = {
    'headers': {accept: "application/json",
                'X-Authorization': token
                },
    'method': 'get'
  };
     let stores = getSmartTerminal();
  for(var i =0; i < stores.length; i++){
    var storeUuid = stores[i].storeUuid;
   let response = UrlFetchApp.fetch('api.evotor.ru/api/v1/inventories/stores/'+  storeUuid + '/products', options);
     return JSON.parse(response);
  }
  return null;
}

function getDocuments(){
  let token = getToken();
  let options = {
    'headers': {accept: "application/json",
                'X-Authorization': token
                },           
    'method': 'get'
  };

  let stores = getSmartTerminal();
  for(var i =0; i < stores.length; i++){
    var storeUuid = stores[i].storeUuid;
    try {
    var response = UrlFetchApp.fetch('api.evotor.ru/api/v1/inventories/stores/' + storeUuid + '/documents?deviceUuid={ID}&types=SELL&gtCloseDate=2021-06-24T09:33:19.757+0000&ltCloseDate=2021-07-24T09:33:19.757+0000', options);
    // var response = UrlFetchApp.fetch('api.evotor.ru/api/v1/inventories/stores/' + storeUuid + '/products/schemes', options);
      console.log(JSON.parse(response));
    } catch(e){
      console.log(e);
    }


//  ltCloseDate
// string <date-time>

// Дата окончания выборки. Ответ содержит документы, созданные до указанной даты.
// Если не заданы даты начала и окончания выборки, возвращаются документы созданные за последний месяц с текущей даты.
// Для выгрузки доступны документы, созданные не более шести месяцев назад, с момента выполнения запроса. Диапазон дат (от gtCloseDate до ltCloseDate) в рамках одного запроса не может превышать один месяц.
// Формат времени - 2017-01-10T09:33:19.757+0000
// gtCloseDate
// string <date-time>
// Дата начала выборки. Ответ содержит документы, созданные после указанной даты.
// Если не заданы даты начала и окончания выборки, возвращаются документы созданные за последний месяц с текущей даты.
// Для выгрузки доступны документы, созданные не более шести месяцев назад, с момента выполнения запроса. Диапазон дат (от gtCloseDate до ltCloseDate) в рамках одного запроса не может превышать один месяц.
// Формат времени - 2017-01-10T09:33:19.757+0000

    // Кассовые документы – SELL, PAYBACK, CASH_INCOME, CASH_OUTCOME, OPEN_SESSION, FPRINT, CLOSE_SESSION.
    // Инвентаризация – INVENTORY;
    // Приемка – ACCEPT;
    // Возврат поставщику – RETURN;
    // Списание – WRITE_OFF;
    // Акт переоценки – REVALUATION;
    // Вскрытие тары – OPEN_TARE.
  
  }
  return ;
}


function getOFDStores(){
      let options = {
    'headers': {accept: "application/json",
                'Authorization': getToken()},
    'method': 'get',
    'muteHttpExceptions': true
  };

  let response = UrlFetchApp.fetch('api.evotor.ru/api/v1/ofd/stores', options);
  return JSON.parse(response);
}

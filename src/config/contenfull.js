//Contenfull config
const contenfullConfig = {
    space: "ecg5hum2lttf",
    token: "plYkQzohukQgIMiWaYRkjysVjmIuDioUedjUiiqqQCI",
  }
  
  //Contenfull query
const query = `
       {
          nikeShopCollection{
              items{
                  
                  id,
                     model,
                     img,
                     price,
                     size,
                     amount
                  }
              }
      }`

export {query,contenfullConfig}
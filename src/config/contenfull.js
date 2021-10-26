//Contenfull config
const contenfullConfig = {
    space: process.env.REACT_APP_CONTENFULL_SPACE,
    token: process.env.REACT_APP_CONTENFULL_TOKEN,
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
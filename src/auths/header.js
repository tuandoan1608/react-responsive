const API_URL ='https://api.jikan.moe/v3/'
export const Header = (url,method,data=[]) =>{
      return  {
          url:API_URL + url,
          method:method,
          headers:{
           
          },
          data:data
      }
 }

const URL_BACKEND_TOP = window.location.hostname.includes('localhost')
? 'http://localhost:8080':
'https://brflix-dev.herokuapp.com'; 

// ? 'http://localhost:8080/categorias':
// 'https://brflix-dev.herokuapp.com/categorias'; 
export default{
    URL_BACKEND_TOP
};
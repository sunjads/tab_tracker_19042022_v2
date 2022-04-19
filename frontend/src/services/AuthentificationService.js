import Api from "@/services/Api";

//exporter un objet qui a une methode register

export default {
  register(credentials) {
    //on passera mail+mdp a cette methode post de
    //axios module
    return Api().post("register", credentials);
  },
};

//AuthentificationService.register({
//    email:'testing@gmail.com',
//   password:'123456'
//})

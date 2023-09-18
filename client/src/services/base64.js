// import axios from "axios";
export const convertBase64 = async (file) => {
 return  new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
     return resolve(fileReader.result);
      console.log(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

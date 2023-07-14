import axios from 'axios';

export default () =>{
    return axios.create({
        baseURL: 'https://vencer-olermo.vercel.app/',
    });
}

// import axios from 'axios';

// export async function sendEmailApi(fullname, email, message) {
//   const formData = {
//     fullname,
//     email,
//     message
//   };

//   return axios.post('/api/sendEmail', formData)
//     .then(response => {
//       console.log('Email sent successfully');
//       return response.data;
//     })
//     .catch(error => {
//       console.error('Error sending email:', error);
//       throw error;
//     });
// }
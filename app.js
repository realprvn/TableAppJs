var users = [  
    {id: 1, img:'./images/prvn.jpeg',username:'Parvin Nasrullayev', age:22,location:'Baku',mail:'nasrullayev.parvin@bk.ru',salary: '1250$'},

    {id: 2, img:'./images/esmer.jpg',username:'Esmer Zeynalova', age:23,location:'Baku',mail:'asmar.parvin@gmail.com',salary: '1250$'},

    {id: 3, img:'./images/munavvar.jpeg',username:'Munavvar Nashirova', age:21,location:'Baku',mail:'nashirova@gmail.com',salary: '1900$'},

    {id: 4, img:'./images/ali.jpg',username:'Ali Nasrullayev', age:25,location:'Baku',mail:'nasrullayev.ali@gmail.com',salary: '1900$'},

    {id: 5, img:'./images/gunel.jpeg',username:'Gunel Nasrullayeva', age:26,location:'Baku',mail:'gunel.1997@mail.ru',salary: '1450$'},

    {id: 6, img:'./images/ferid.jpeg',username:'Farid Galandarov', age:22,location:'Baku',mail:'farid.qalandarov@mail.ru',salary: '1450$'},

    {id: 7, img:'./images/ilham.jpeg',username:'Ilham Baghirov', age:21,location:'Baku',mail:'baghirov005@gmail.com',salary: '1250$'},

    {id: 8, img:'./images/bayram.jpeg',username:'Bayram Alizade', age:22,location:'Baku',mail:'bayram2002@mail.ru',salary: '1850$'},    

    {id: 8, img:'./images/aladdin.jpeg',username:'Aladdin Quliyev', age:21,location:'Baku',mail:'aladdin1907mail.ru',salary: '1100$'},

    {id: 10, img:'./images/valid.jpeg',username:'Valid Qurbansoy', age:19,location:'Baku',mail:'valid2000@hotstop.com',salary: '450$'},

    

    {id: 11, img:'./images/elnur.jpeg',username:'Elnur Allazov', age:24,location:'Baku',mail:'allazov.elnur@gmail.com',salary: '950$'},

];

var tableBody = document.querySelector("#userTable tbody");
 users.forEach(function(user) {

  var row = tableBody.insertRow();
console.log('row',row);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5)


 var img = document.createElement('img');
 img.src = user.img;
 img.alt = user.username + '';
 img.classname = 'user-img';

 cell1.textContent = user.id;
 cell2.appendChild(img);
 cell2.appendChild(document.createTextNode(user.username));
 cell3.textContent = user.age;
 cell4.textContent = user.location;
 cell5.textContent = user.mail;
 cell6.textContent = user.salary
});






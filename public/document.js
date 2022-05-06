import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, serverTimestamp, query, orderBy, where, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2D8pmuo_y8DVuh9hqNFmA8kZGsfuQiE4",
  authDomain: "outta-sexy-web.firebaseapp.com",
  projectId: "outta-sexy-web",
  storageBucket: "outta-sexy-web.appspot.com",
  messagingSenderId: "442716455224",
  appId: "1:442716455224:web:42483957a4f0d1f2e601cd",
  measurementId: "G-7NV2JY54JT"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

$(document).on('click', 'a.page', function(){
    var currentRow = $(this).closest('tr');
    var id = currentRow.find('td:eq(0)').text();
    localStorage.setItem("pageid", id);
});

$(document).on('mouseenter', '.onetex' ,function(e) {
    $('.one, .oneone, .oneonetwo, .onetwo').css('display', 'block');
    $('.two, .twoone, .twotwo, .twothree').css('display', 'none');
    $('.thi, .thione').css('display', 'none');
})

$(document).on('mouseenter', '.twotex' ,function(e) {
    $('.one, .oneone, .oneonetwo, .onetwo').css('display', 'none');
    $('.two, .twoone, .twotwo, .twothree').css('display', 'block');
    $('.thi, .thione').css('display', 'none');
})

$(document).on('mouseenter', '.thitex' ,function(e) {
    $('.one, .oneone, .oneonetwo, .onetwo').css('display', 'none');
    $('.two, .twoone, .twotwo, .twothree').css('display', 'none');
    $('.thi, .thione').css('display', 'block');
})

function WeightChange(a){
    $(document).ready(function(){ 
        $(a).hover(function(){  
            $(a).css('font-weight', '700');
        }, function(){  
            $(a).css('font-weight', '500');
        })}) 
    }
  
  WeightChange('.oneone');
  WeightChange('.oneonetwo');
  WeightChange('.onetwo');
  WeightChange('.twoone');
  WeightChange('.twotwo');
  WeightChange('.twothree');
  WeightChange('.thione');

  const db = getFirestore();
  const colRef = collection(db, 'datasets');

  const q = query(colRef, orderBy("번호", "desc"));

  console.log(q);

  
  onSnapshot(q, (snapshot) => {
      resetTables('tbody1','cbox1');
    snapshot.docs.forEach((doc) => {
      var id = doc.id;
      var num = doc.data().번호;
      var title = doc.data().제목;
      var body = doc.data().내용;
      var date = new Date(doc.data().작성일.seconds*1000).toISOString().split('T')[0];
      var download = doc.data().파일;
      console.log("File "+id+": " +title,body,date,download);
      AddItemsToTable(id,num,title,date,download);
    });
  });
  function AddItemsToTable(id,num,title,date,download){
      var tbody = document.getElementById('tbody1');
      var trow = document.createElement('tr');
      var td1 = document.createElement('td');
      var td2 = document.createElement('td');
      var td3 = document.createElement('td'); // <td><td>
      var td4 = document.createElement('td');
      td1.innerHTML = num;
      td2.innerHTML = `<a href="documentpage.html" class="page">${title}</a>`;
      td3.innerHTML = date;
      td4.innerHTML = `<a href="${download}"><img src="다운.png"></a>`;
      trow.appendChild(td1);
      trow.appendChild(td2);
      trow.appendChild(td3);
      trow.appendChild(td4);
      tbody.appendChild(trow);

      var cbox = document.getElementById('cbox1');
      var cboxrow = document.createElement('tr');
      var cbox1 = document.createElement('td');
      cbox1.innerHTML = `<input class="datacbox" type="checkbox" value=${id}></input>`;
      cboxrow.appendChild(cbox1);
      cbox.appendChild(cboxrow);
  }

  function resetTables(tid,cid){
      var tbody = document.getElementById(tid);
      tbody.innerHTML = "<tr><th>번호</th><th>제목</th><th>작성일</th><th>다운로드</th></tr>";
      var cbox = document.getElementById(cid);
      cbox.innerHTML = "<tr><th>선택</th></tr>";
  }

  var datasel = [];

  $(document).on('change', '.datacbox', function() {
    datasel = [];
        var checkboxes = document.getElementsByClassName("datacbox");
        for(var i = 0; i < checkboxes.length; i++)  
        {
            if(checkboxes[i].checked){
                datasel.push(checkboxes[i].value);
            }
        }
        if(datasel.length==1){
            postbutton.disabled = false;
        }
        else{
            postbutton.disabled = true;
        }
    });

$(document).on("click","#data-del",async function(){
    for(let i = 0; i < datasel.length; i++){
        await deleteDoc(doc(db, "datasets", datasel[i]));
    }
    alert("Deleted");
});

const postbutton = document.getElementById("data-edit");
postbutton.disabled = true;

$("#data-post").click(function(){ 
    localStorage.removeItem("postid");
    location.href="documentpost.html";
    alert("works");
});


$("#data-edit").click(function(){ 
    localStorage.setItem("postid",datasel[0]);
    location.href="documentpost.html";
});



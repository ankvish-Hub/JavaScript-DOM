var arr = [{
  dp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000", story: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000"
},

{ dp: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000", story: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000" },

{ dp: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000", story: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000" },

{ dp: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000", story: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000" },
];

var storiyan = document.querySelector("#storiyan");
var clutter = ""
arr.forEach(function (elem,idx) {
  clutter +=`<div class="story">
        <img id="${idx}"src="${elem.dp}" alt="">
      </div>`
});

storiyan.innerHTML = clutter;

storiyan.addEventListener("click",function(dets){
  document.querySelector("#full-screen").style.display = "block"
  document.querySelector("#full-screen").style.
  backgroundImage = `url(${arr[dets.target.id].story})`

  
  setTimeout(() => {
    document.querySelector("#full-screen").style.display = "none"
    
  }, 3000);
  
});


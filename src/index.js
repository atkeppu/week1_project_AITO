import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

document.getElementById("add-comment").addEventListener('click', AddUnsortList)
document.getElementById("remove-comments").addEventListener('click', RemoveAllComments)


function AddUnsortList() 
{  
  const ul = document.getElementsByTagName("UL")[0];
  const textare = document.getElementsByTagName("textarea")[0];                   
  ul.innerHTML += '<li>' +textare.value +' </li>';        
};

function RemoveAllComments() 
{  
  if (confirm("Do you really wants to delete all the comments?") == true) 
  {  
    const ul = document.getElementsByTagName("UL")[0];
    ul.innerHTML = '';
  } 
};


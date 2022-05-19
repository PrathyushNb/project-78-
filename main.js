var images = ["https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/bw5W5zSK/mother.jpg" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqlTpouzgrAoMv0-vT_sgvGDCgpmkaqbK_lQ&usqp=CAU","https://previews.123rf.com/images/dualororua/dualororua1707/dualororua170700044/81606107-a-cute-school-boy-cartoon-go-to-school.jpg"];
var names = ["dad", "Mom", "Brother", "Me"];
var i = 0;

function update(){

  var array_length = images.length - 1;
  var updated_image = images[i];
  var updated_text = names[i];

  document.getElementById("family_book_image").src = updated_image;
  document.getElementById("name").innerHTML = updated_text;

  i++;


  if(i>array_length){
  i = 0;
                
  }
}

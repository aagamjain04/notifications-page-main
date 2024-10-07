/* CRIO_SOLUTION_START_MODULE_ONE */
console.log(data);

let main = document.getElementById("list");

data.map((ele, index) => {
  let li = document.createElement("li");
  li.className = "new-notification";
  if(index===3){
    li.id = "private"
  }

  let image = document.createElement("img");
  image.src = ele.img;

  let div = document.createElement("div");
  div.className = "notification-infos";

  let p1 = document.createElement("p");
  p1.className = "notification-text";

  p1.innerHTML = `<a href="#" class="profile-link">${ele.info.name}</a> ${ele.info.action} <a href="#" class="notification-link-post">${ele.info.postName}</a>
    <span class="notification-dot"></span>`;

  let p2 = document.createElement("p");
  p2.className = "data";

  let span = document.createElement("span");
  span.className = "notification-text-private-message";
  span.textContent = ele.info.privateMessage;

  let notifyImage = document.createElement("img");
  notifyImage.className = "notification-image";
  notifyImage.setAttribute("alt", "notification image");
  notifyImage.src = ele.info.picture;

  div.append(p1, p2);

  if (ele.info.privateMessage) div.appendChild(span);
  if (ele.info.picture) div.appendChild(notifyImage);

  li.append(image, div);

  main.append(li);
});
/* CRIO_SOLUTION_END_MODULE_ONE */
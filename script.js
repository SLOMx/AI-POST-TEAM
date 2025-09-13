```js
document.getElementById("postForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const teamName = document.getElementById("teamName").value.trim();
  const playersNames = document.getElementById("playersNames").value.trim().split(",");
  const teamLogoFile = document.getElementById("teamLogo").files[0];
  const playersImagesFiles = Array.from(document.getElementById("playersImages").files);

  if (!teamLogoFile || playersImagesFiles.length === 0) {
    alert("يرجى رفع الشعار وصور اللاعبين.");
    return;
  }

  const postPreview = document.getElementById("postPreview");
postPreview.innerHTML = "";

  // عرض اسم الفريق
  const title = document.createElement("h3");
  title.textContent = `فريق: ${teamName}`;
  postPreview.appendChild(title);

  // عرض الشعار
  const logoImg = document.createElement("img");
  logoImg.className = "logo";
  logoImg.src = URL.createObjectURL(teamLogoFile);
  logoImg.alt = "لوجو الفريق";
  postPreview.appendChild(logoImg);

  // عرض أسماء اللاعبين
  const namesList = document.createElement("p");
  namesList.textContent = "اللاعبون: " + playersNames.map(name => name.trim()).join(", ");
  postPreview.appendChild(namesList);

  // عرض صور اللاعبين
  const imagesContainer = document.createElement("div");
  playersImagesFiles.forEach(file => {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    img.alt = "صورة لاعب";
    imagesContainer.appendChild(img);
  });
  postPreview.appendChild(imagesContainer);
});
```
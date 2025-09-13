js
const form = document.getElementById("postForm");
const loading = document.getElementById("loading");
const result = document.getElementById("result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // اظهار لودر
  loading.style.display = "block";
  result.innerHTML = "";

  // جمع البيانات
  const teamName = document.getElementById("teamName").value.trim();
  const playersNames = document.getElementById("playersNames").value.trim().split(",");
  const teamLogoFile = document.getElementById("teamLogo").files[0];
  const playersImagesFiles = Array.from(document.getElementById("playersImages").files);

  // قراءة الصور للعرض
  const readFile = (file) =>
    new Promise((res) => {
      const reader = new FileReader();
      reader.onload = () => res(reader.result);
      reader.readAsDataURL(file);
    });

  const logoDataURL = await readFile(teamLogoFile);
  const playersDataURLs = await Promise.all(playersImagesFiles.map(readFile));

  // طلب إنشاء وصف بوست من OpenAI
  try {
    const prompt = `
      صمم لي بوست تسويقي احترافي وملهم لفريق ألعاب اسمه teamName يتكون من اللاعبين:{playersNames.join(", ")}.
      اكتب نص قصير وجذاب للبوست.

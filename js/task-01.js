const elemCategories = document.querySelector("#categories");
const elemLi = elemCategories.querySelectorAll(".item");
console.log(`Number of categories: ${elemLi.length}`);

const titles = [];
elemLi.forEach((elem) => {
  console.log("Category: ", elem.getElementsByTagName("h2")[0].textContent);
  console.log(
    "Elements: ",
    elem.getElementsByTagName("li").length
  );
});

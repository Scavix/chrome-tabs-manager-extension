document.getElementById("generateJson").addEventListener("click", function () {
  chrome.tabs.query({}, function (tabs) {
    const tabInfoArray = tabs.map((tab) => {
      return {
        title: tab.title,
        url: tab.url,
      };
    });

    const jsonContent = JSON.stringify(tabInfoArray, null, 2);
    //document.getElementById("jsonContent").innerHTML = jsonContent;
    navigator.clipboard.writeText(jsonContent);
  });
});

document.getElementById("generateList").addEventListener("click", function () {
  chrome.tabs.query({}, function (tabs) {
    const tabInfoArray = tabs.map((tab) => {
      return {
        title: tab.title,
        url: tab.url,
      };
    });

    let s = "";
    tabInfoArray.forEach((tab) => {
      s += `<li><a href = "${tab.url}">${tab.title}</a></li>` + "\n";
    });

    //document.getElementById("jsonContent").innerHTML = s;
    navigator.clipboard.writeText(s);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.query({}, function (tabs) {
    var tabList = document.getElementById('tabList');

    tabs.forEach(function (tab) {
      var listItem = document.createElement('li');
      listItem.textContent = tab.title;
      listItem.addEventListener('click', function () {
        chrome.tabs.update(tab.id, { active: true });
      });

      tabList.appendChild(listItem);
    });
  });
});

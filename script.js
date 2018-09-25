var cards_div = document.getElementById('card-container')

$.getJSON("./data.json", function (data) {
  $.each(data, function (index, value) {
    value.forEach((project) => {
      //create div for card
      createCard(project)  
    })
  });
});




function createCard(project) {
  var card = document.createElement("div")
      card.classList.add("card")
      card.classList.add("grey")
      card.classList.add("lighten-3")
      //create div for card content
      var content = document.createElement("div")
      content.classList.add("card-content")

      var title = document.createElement("span")
      title.classList.add("card-title")
      title.innerHTML = project.title
      content.appendChild(title)

      var tech = document.createElement("p")
      tech.classList.add("tech")
      tech.innerHTML = project.tech
      content.appendChild(tech)

      var desc = document.createElement("p")
      desc.classList.add("desc")
      desc.innerHTML = project.description
      content.appendChild(desc)

      // create div for card action
      var action = document.createElement("div")
      action.classList.add("card-action")

      var repo = document.createElement("a")
      repo.innerHTML = "Repository",
      repo.setAttribute('href', project.repository);
      action.appendChild(repo)

      // push content and action divs to card
      card.appendChild(content)
      card.appendChild(action)

      // push card to document
      cards_div.appendChild(card)
}

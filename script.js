var projects_div = document.getElementById('project-container')
var projects_btn = document.getElementById('projects-btn')

var about_div = document.getElementById('about-container')
var about_btn = document.getElementById('about-btn')

var resume_div = document.getElementById('resume-container')
var resume_btn = document.getElementById('resume-btn')

var contact_div = document.getElementById('contact-container')
var contact_btn = document.getElementById('contact-btn')

$.getJSON("./data.json", function (data) {
  $.each(data, function (index, value) {
    value.forEach((project) => {
      //create div for card
      createCard(project)  
    })
  });
});


// LAZY SINGLE PAGE ROUTING

about_btn.addEventListener('click', ()=>{
  projects_div.style.display = 'none'
  resume_div.style.display = 'none'
  contact_div.style.display = 'none'
  about_div.style.display = 'block'
})

projects_btn.addEventListener('click', ()=>{
  about_div.style.display = 'none'
  resume_div.style.display = 'none'
  contact_div.style.display = 'none'
  projects_div.style.display = 'block'
})

contact_btn.addEventListener('click', ()=>{
  about_div.style.display = 'none'
  resume_div.style.display = 'none'
  projects_div.style.display = 'none'
  contact_div.style.display = 'block'
})

resume_btn.addEventListener('click', ()=>{
  about_div.style.display = 'none'
  projects_div.style.display = 'none'
  contact_div.style.display = 'none'
  resume_div.style.display = 'block'
})
  




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
      projects_div.appendChild(card)
}

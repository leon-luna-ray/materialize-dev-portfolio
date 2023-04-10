import { getImageUrl } from './sanity';

function getLinks(project) {
  const links = [];

  if(project.url){
    links.push(`<a href="${project.url}" target="_blank">Application</a>`)
  }
  if(project.repository){
    links.push(`<a href="${project.repository}" target="_blank">Github</a>`)
  }

  return links.length ? links.join('\r\n') : '';
}

export function featuredProjectCard(project) {
  return `
    <div class="project-card one feature-card card-panel hoverable">
        <div class="feature-content row">
            <div class="feature-info col s12">
                <h3 class="feature-title center-align">${project.title}</h3>
                <p class="feature-text ">${project.description[0].children[0].text}</p>
            </div>
            <div class="feature-image-hr">
                <img src="${getImageUrl(project.mainImage)}" alt="Screenshot of ${project.title}" class="card responsive-img">
            </div>
        </div>
        <div class="card-action links">${getLinks(project)}</div>
    </div>`;
}

export function projectCard(project) {
  return`
    <div class="col s12 m6">
      <div class="project-card hoverable card-panel">
        <div class="card-image">
          <img src="${getImageUrl(project.mainImage)}" alt="Screenshot of ${project.title}" class="card">
        </div>
        <div class="card-content">
          <h3 class="sm-card-title">${project.title}</h3>
          <p>${project.description[0].children[0].text}</p>
        </div>
        <div class="card-action links">${getLinks(project)}</div>
      </div>
    </div>`;
}
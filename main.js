const ContainerJSON = document.querySelector('.ContainerJSON');

function capsules() {
  fetch('https://api.spacexdata.com/v3/capsules')
  .then(data => data.json())
  .then(resp => {
    console.log(resp)
    resp.forEach(element => {
      const elementContainer = document.createElement('div')
      elementContainer.classList = 'elementContainer'
      elementContainer.innerHTML = `
      <h1> ${element.capsule_serial} </h1>
      <p> ${element.details} </p>
      `
      ContainerJSON.append(elementContainer)
    });
  })
}

capsules()
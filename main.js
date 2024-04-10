const ContainerJSON = document.querySelector('.ContainerJSON');

function capsules() {
  fetch('https://api.spacexdata.com/v3/capsules')
  .then(data => data.json())
  .then(resp => {
    console.log(resp);
    resp.forEach(element => {
      let imageStatus = './images/rocketActive.svg';
      let textElement = element.details
      if (element.details === null) {
        textElement = '';
      }
      if(element.status === "destroyed" || element.status === "retired") {
        imageStatus = './images/rocketDeactivate.svg'
      }
      if(element.status === "unknown") {
        imageStatus = './images/rocketUnknown.svg'
      }
      const elementContainer = document.createElement('div')
      elementContainer.classList = 'elementContainer'
      elementContainer.innerHTML = `
      <h1> ${element.capsule_serial} </h1>
      <img src='${imageStatus}'>
      <p> ${textElement} </p>
      `
      ContainerJSON.append(elementContainer)
    });
  })
}

capsules()
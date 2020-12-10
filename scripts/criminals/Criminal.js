const eventHub = document.querySelector('.container');
eventHub.addEventListener('click', evt => {
  if (!evt.target.id.startsWith('associates--')) {
    return;
  }

  const idParts = evt.target.id.split('--');
  const criminalId = parseInt(idParts[1]);

  eventHub.dispatchEvent(new CustomEvent('associatesChosen', {
    detail: { criminalId }
  }));
});

export const Criminal = (criminalObj) => {
  return `
    <section class="criminal__card">
      <div>
        <div class="criminal__name">${criminalObj.name}</div>
        <div class="criminal__age">Age: ${criminalObj.age}</div>
        <div class="criminal__conviction">Crime: ${criminalObj.conviction}</div>
        <div class="criminal__date">Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</div>
        <div class="criminal__date">Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</div>
      </div>
      <div class="button-container">
        <button id="associates--${criminalObj.id}">Associate Alibis</button>
      </div>
    </section>
  `;
};
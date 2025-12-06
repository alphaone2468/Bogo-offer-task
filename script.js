function handleOnClick(event) {
    const clickedElement = event.currentTarget;
    const clickedRadio = clickedElement.querySelector('input[type="radio"]');

    if (clickedRadio) {
        clickedRadio.checked = true;
    }

    document.querySelectorAll('.unitElement').forEach(el => {
        el.classList.remove('selected');
    });

    clickedElement.classList.add('selected');

    document.querySelectorAll('.unitDetails').forEach(detail => {
        detail.classList.remove('active');
    });

    const selectedUnit = document.querySelector('input[name="unit"]:checked');
    if (selectedUnit) {
        const unitNumber = selectedUnit.id.split('-')[1];
        const detailsElement = document.getElementById(`unitDetails-${unitNumber}`);
        if (detailsElement) {
            detailsElement.classList.add('active');
        }
    }
}
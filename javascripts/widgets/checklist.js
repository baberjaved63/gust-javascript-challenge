function checklist(widget) {
  const parentCheckbox = widget.querySelector("[kjs-role=parent-box]");
  const childCheckboxes = widget.querySelectorAll("[kjs-role=child-box]");

  function handleParentChange(e) {
    if (e.target.checked) {
      handleParentCheck(e);
    } else {
      handleParentUncheck(e);
    }
  }

  function handleParentCheck() {
    childCheckboxes.forEach((checkbox) => {
      checkbox.checked = true;
    });
  }

  function handleParentUncheck() {
    childCheckboxes.forEach((checkbox) => {
      checkbox.checked = false;
    })
  }

  function handleChildChange(e) {
    if (e.target.checked) {
      handleChildCheck(e);
    } else {
      handleChildUncheck(e);
    }
  }

  function handleChildCheck() {
    const checked_length = widget.querySelectorAll("[kjs-role=child-box]:checked").length
    const total_length = widget.querySelectorAll("[kjs-role=child-box]").length
    if (checked_length === total_length) {
      parentCheckbox.checked = true;
    }
  }

  function handleChildUncheck() {
    const checked_length = widget.querySelectorAll("[kjs-role=child-box]:checked").length

    if (checked_length === 0) {
      parentCheckbox.checked = false;
    }
  }

  let actions = [];

  actions.push({
    element: parentCheckbox,
    event: 'change',
    handler: handleParentChange
  });

  childCheckboxes.forEach((checkbox) => {
    actions.push({
      element: checkbox,
      event: 'change',
      handler: handleChildChange
    });
  });

  return { actions: actions };
}

module.exports = checklist;

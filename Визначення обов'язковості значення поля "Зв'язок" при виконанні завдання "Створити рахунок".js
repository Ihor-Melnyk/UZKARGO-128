function CreateAccountTask() {
  const stateTask = EdocsApi.getCaseTaskDataByCode("CreateAccount").state;
  if (stateTask == "assigned" || stateTask == "inProgress" || stateTask == "completed'") {
    setControlRequired("Connection");
  } else {
    setControlRequired("Connection", false);
  }
}

function setControlRequired(CODE, required = true) {
  const control = EdocsApi.getControlProperties(CODE);
  control.required = required;
  EdocsApi.setControlProperties(control);
}

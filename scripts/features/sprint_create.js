const sprintCreate = function () {

  const marginDivTag = document.createElement('div')
  marginDivTag.classList.add('margin-bottom-20')
  containerRowTag.appendChild(marginDivTag)

  const sprintCreateDivTag = document.createElement('div')
  sprintCreateDivTag.classList.add('col-md-12')

  for (let i = 0; i < 3; i++) {
    const sprintFormDivTag = document.createElement('div')
    sprintFormDivTag.classList.add('form-group')

    const sprintFormLabelTag = document.createElement('label')
    sprintFormLabelTag.classList.add('control-label')
    sprintFormLabelTag.classList.add('col-md-2')
    sprintFormLabelTag.setAttribute('for', 'name')

    const sprintFormInputDivTag = document.createElement('div')
    sprintFormInputDivTag.classList.add('col-md-10')

    const sprintFormInputTag = document.createElement('input')
    sprintFormInputTag.classList.add('form-control')
    sprintFormInputTag.setAttribute('type', 'text')
    sprintFormInputTag.setAttribute('name', 'name')
    sprintFormInputTag.setAttribute('autocomplete', 'off')
    sprintFormInputTag.setAttribute('placeholder', '스프린트 이름')

    sprintFormInputDivTag.appendChild(sprintFormInputTag)

    sprintFormDivTag.appendChild(sprintFormLabelTag)
    sprintFormDivTag.appendChild(sprintFormInputDivTag)

    sprintCreateDivTag.appendChild(sprintFormDivTag)
  }

  containerRowTag.appendChild(marginDivTag)

}

sprintCreate()
document.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelector('[data-element="awesome"]')
    const checkBox = document.querySelector('#checkbox')
    
    checkBox.addEventListener('change', () =>{
    element.setAttribute('data-sizing', checkBox.checked ? 'intrinsic': 'extrinsic')
    })
})
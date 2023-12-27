const submitBtn = document.querySelector('.submit-btn');

// CLICK EVENT
// submitBtn.addEventListener('click', handleEvent);      // 눌렀다 떼면 발생
// submitBtn.addEventListener('dblclick', handleEvent);   // 더블클릭시 발생
// submitBtn.addEventListener('mousedown', handleEvent);  // 눌렀을때 발생
// submitBtn.addEventListener('mouseup', handleEvent);    // 뗏을때 발생 * click 이벤트 보다 먼저 발생한다.
// submitBtn.addEventListener('mouseenter', handleEvent); // 마우스가 들어가기만 하면 발생
// submitBtn.addEventListener('mouseleave', handleEvent); // 마우스가 나가면 하면 발생
// submitBtn.addEventListener('mousemove', handleEvent);  // 마우스가 이동 할 때 마다 발생


const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const title = document.querySelector('h2');

// FORM EVENT
form.addEventListener('submit', handleEvent);
// emailInput.addEventListener('keydown', handleEvent);
// emailInput.addEventListener('keyup', handleEvent);
// emailInput.addEventListener('keypress', handleEvent);
// emailInput.addEventListener('focus', handleEvent);
// emailInput.addEventListener('blur', handleEvent);    // focus했다가 나갈때 발생
// emailInput.addEventListener('cut', handleEvent);     // 잘라내기 할 때 발생
// emailInput.addEventListener('paste', handleEvent);   // 붙여넣기 할 때 발생
emailInput.addEventListener('input', handleEvent);      // input한 내용이 달라질떄 마다 발생

function handleEvent(e) {
    if(e.type === 'submit'){
        e.preventDefault(); // 기본동작을 방지해준다.
    }
    
    console.log(`Event Type: ${e.type}`);
    // title.textContent = `MouseX: ${e.clientX}, MouseY: ${e.clientY}`;
    title.textContent = e.target.value;
}


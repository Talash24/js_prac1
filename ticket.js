let count = 0;


const allTicket = document.getElementsByClassName('seat-number'); 

for(const ticket of allTicket){
    ticket.addEventListener('click', function handleSelect(event){
        
        count = count + 1;

        

        if(count === 5){
            alert("You can't select more than four ticket!");
            return;
        }
        const ticketNumber = ticket.innerHTML;
        const button = document.getElementById(ticketNumber);
        const backgroundColor = window.getComputedStyle(button).backgroundColor;

        if(backgroundColor === 'rgb(29, 209, 0)'){
            alert('Ticket already booked!')
            return;
        }
        
        


        
        setBackgroundColorById(ticketNumber);
        addTicketDetails('seat-details',ticketNumber);
        totalPrice('total-cost', 550);
        const grandsTotal = getInnerText('total-cost');
        grandTotal(grandsTotal);
        
        if(count === 4){
            enableAButtton('apply-couponBtn')
        }
        
        

    })

    
}


function getInnerTextById(ElementId){
    const elementCapture = document.getElementById(ElementId)
    const elementText = elementCapture.innerText;
    return elementText;
}

function setBackgroundColorById(ElementId){
    
    const element = document.getElementById(ElementId);
    element.classList.add('bg-[#1DD100]');
    element.classList.add('text-white');
}

function addTicketDetails(ElementId, ticketNumber){
    
    const div = document.createElement('div');
    const p = document.createElement('p');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    p.innerText = ticketNumber;
    p1.innerText = 'Economy';
    p2.innerText = '550';
    
    div.appendChild(p);
    div.appendChild(p1);
    div.appendChild(p2);

    div.classList.add('flex');
    div.classList.add('justify-between');
    div.classList.add('pl-4')
    document.getElementById(ElementId).appendChild(div);
    
}

function totalPrice(ElementId, value){
    const totalCost = document.getElementById(ElementId).innerText;
    console.log(totalCost);
    const total = parseInt(totalCost) + parseInt(value);
    document.getElementById(ElementId).innerText = total;

}

function grandTotal(value){
     setInnerText('grand-total', value);
}

function getInnerText(ElementId){
    const element = document.getElementById(ElementId).innerText;
    return element;
}

function getTextasInt(ElementId){
    const element = document.getElementById(ElementId).innerText;
    const elementInt = parseInt(element);
    return elementInt;
}

function setInnerText(ElementId, value){
    document.getElementById(ElementId).innerText = value;
}

function enableAButtton(ElementId){
   document.getElementById(ElementId).disabled = false;
}

function disableAButton(ElementId){
    document.getElementById(ElementId).disabled = true;
}

function applyPromoCode(){
    
    const element = document.getElementById('promo-input').value;
    if(element === 'NEW15'){
        const totalMoney = getTextasInt('grand-total');
        const discount = parseFloat(totalMoney * 0.20);
        grandTotal(parseFloat(totalMoney - discount));
        disableAButton('apply-couponBtn');
    }else{
        alert('Please insert valid promo code');
    }
}
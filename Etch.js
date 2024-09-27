const gridContainer = document.getElementById('grid-container');
let amount=16;

function randColor()
{
    const option = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0;i<6;i++)
    {
        color+=option[Math.floor(Math.random()*16)];
    }
    return color;
}

function changeScale()
{
    for (let i = 0; i < amount*amount; i++) 
        {
            const div = document.createElement('div');
            div.classList.add('grid-item');
            
            div.addEventListener('mouseover', function() {
                div.style.backgroundColor = 'lightcoral'; // Change color on hover
            });
    
            div.addEventListener('mouseout', function() {
                div.style.backgroundColor = randColor(); // Revert color when hover ends
            });
            
            gridContainer.appendChild(div);
    }
}

for (let i = 0; i < amount*amount; i++) 
    {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        
        div.addEventListener('mouseover', function() {
            div.style.backgroundColor = 'lightcoral'; // Change color on hover
        });

        div.addEventListener('mouseout', function() {
            div.style.backgroundColor = randColor(); // Revert color when hover ends
        });
        
        gridContainer.appendChild(div);
}


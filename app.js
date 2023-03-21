const data = [
    {
      day: "mon",
      amount: 17.45
    },
    {
      day: "tue",
      amount: 34.91
    },
    {
      day: "wed",
      amount: 52.36
    },
    {
      day: "thu",
      amount: 31.07
    },
    {
      day: "fri",
      amount: 23.39
    },
    {
      day: "sat",
      amount: 43.28
    },
    {
      day: "sun",
      amount: 25.48
    }
];

const bars = document.querySelectorAll('.bar');
const barConts = document.querySelectorAll('.bar-cont');
for(let i=0; i<bars.length; i++) {
    bars[i].style.height = `${data[i].amount*2}px`;
    let spending = document.createElement('span');
    spending.style.background = 'hsl(25, 47%, 15%)';
    spending.style.color = 'hsl(33, 100%, 98%)';
    spending.style.borderRadius = '5px';
    spending.style.padding = '5px';
    spending.style.position = 'absolute';
    spending.style.top = '-40px';
    spending.style.zIndex = '1';
    bars[i].addEventListener('mouseenter', () => {
        bars[i].style.opacity = .5;
        barConts[i].prepend(spending);
        spending.innerHTML = `$${data[i].amount}`;
        spending.style.background = 'hsl(25, 47%, 15%)';
        spending.style.color = 'hsl(33, 100%, 98%)';
    })

    bars[i].addEventListener('mouseleave', () => {
        bars[i].style.opacity = 1;
        barConts[i].removeChild(spending);
    })
}
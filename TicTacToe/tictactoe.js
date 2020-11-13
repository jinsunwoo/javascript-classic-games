let 바디 = document.body;
let 테이블 = document.createElement('table');
for(let i=1; i<=3;i++) {
    let 줄 = document.createElement('tr')
    for (let j=1;j<=3;j++) {
        let 칸 = document.createElement('td')
        줄.appendChild(칸)
    }
    테이블.appendChild(줄)
}
바디.appendChild(테이블)
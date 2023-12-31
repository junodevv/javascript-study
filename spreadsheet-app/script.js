"use stiric"
const spreadSheetContainer = document.querySelector("#spreadsheet-container");
const ROWS = 10;
const COLS = 10;
const spreadsheet = [];
const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

class Cell {
    constructor(isHeader, disabled, data, row, column, rowName, columnName, active){
        this.isHeader = isHeader;
        this.disabled = disabled;
        this.data = data;
        this.row = row;
        this.rowName = rowName;
        this.column = column;
        this.columnName = columnName;
        this.active = active;
    }
}

initSpreadsheet()

function initSpreadsheet(){
    for(let i=0; i< ROWS; i++){
        let spreadsheetRow = [];
        for(let j=0; j< COLS; j++){
            let cellData = "";
            let isHeader = false;
            let disabled = false;
            
            // 모든 row의 첫 번쨰 컬럼에 숫자 넣기
            if(j===0){
                cellData = i;
                isHeader = true;
                disabled = true;
            }
            // 첫번쨰 row들
            if(i===0){
                cellData = alphabets[j-1];
                isHeader = true;
                disabled = true;
            }
            // 첫 번째 row의 첫번째 컬럼 "";
            if(i===0 && j===0){
                cellData = "";
            }
            const rowName = i;
            const columnName = alphabets[j-1];

            const cell = new Cell(isHeader, disabled, cellData, i, j, rowName, columnName, false);
            spreadsheetRow.push(cell);
        }
        spreadsheet.push(spreadsheetRow);
    }
    drawSheet();
    console.log("spreadsheet", spreadsheet);
}

function createCell(cell){
    const cellEl = document.createElement('input');
    cellEl.className = 'cell';
    cellEl.id = "cell_" + cell.row + cell.column;
    cellEl.value = cell.data;
    cellEl.disabled = cell.disabled;
    // <input class="cell" id="cell_00" value="i-j" disabled></input>
    if(cell.isHeader){
        cellEl.classList.add('header');
    }
    cellEl.onclick = () => handleCellClick(cell);
    cellEl.onchange = (e) => handleOnChange(e.target.value, cell);

    return cellEl;
}

function drawSheet(){
    for(let i = 0; i < spreadsheet.length; i++){
        const rowContainerEl = document.createElement("div");
        rowContainerEl.className = "cell-row";
        for(let j=0; j<spreadsheet[i].length; j++){
            const cell = spreadsheet[i][j];
            rowContainerEl.append(createCell(cell));
        }
        spreadSheetContainer.append(rowContainerEl);
    }
}

function handleCellClick(cell){
    clearHeaderActiveStates();
    const columnHeader = spreadsheet[0][cell.column];
    const rowHeader = spreadsheet[cell.row][0];
    const columnHeaderEl = getElFromRowCol(columnHeader.row, columnHeader.column);
    const rowHeaderEl = getElFromRowCol(rowHeader.row, rowHeader.column);
    columnHeaderEl.classList.add('active');
    rowHeaderEl.classList.add('active');
    document.querySelector("#cell-status").innerHTML = cell.columnName + "" + cell.rowName;
    // console.log('clicked cell', cell);
    // console.log('columnHeader', columnHeader);
    // console.log('rowHeader', rowHeader);
}

function getElFromRowCol(row, col){
    return document.querySelector('#cell_' + row + col);
}

// active를 지우는 함수
function clearHeaderActiveStates(){
    // class가 header인 애들을 찾아서 Collection으로 반환
    const headers = document.querySelectorAll('.header');
    // Collection을 모두 순회하는 법 (=forEach)
    headers.forEach((header) => {
        header.classList.remove('active');
    })
}

const exportBtn = document.querySelector('#export-btn');

exportBtn.onclick = function(e){
    let csv = "";
    for(let i=0; i<spreadsheet.length; i++){
        if(i===0) continue; // 첫쨰row(A~I)는 생략
        csv += spreadsheet[i]
                    .filter((item) => !item.isHeader) // 헤더가 아닌 것들만 골라서 새로운 배열로 반환
                    .map((item) => item.data) // data 속성만 return 해주는 함수
                    .join(",")  // 모든 배열안의 item들을 ","를 이용해서 join해준다.
                    + "\r\n"; // spreadsheet의 row가 끝날때마가 개행을 해준다.
    }
    const csvObj = new Blob([csv]); // csv변수의 내용을 이용해 Blob 객체를 만든다.
    /* 이렇게 생성된 Blob 객체는 파일 다운로드, 데이터 전송, 클라이언트 측 파일 생성 등의 웹 개발 작업에 활용된다. */
    const csvUrl = URL.createObjectURL(csvObj); // Blob(csvObj) 객체로부터 URL을 생성해주는 함수
    console.log('csv', csvUrl);
    const a = document.createElement('a');
    a.href = csvUrl;
    a.download = "Spreadsheet File name.csv";
    a.click();
}

function handleOnChange(data, cell){
    cell.data = data;
}
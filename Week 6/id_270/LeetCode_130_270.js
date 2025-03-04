var solve = function(board) {
    let m = board.length;
    if(m == 0){return};
    let n = board[0].length;
    let cannot = {};
    let dfs = (i,j) => {
        if(i < 0 || j < 0 || i == m || j == n || board[i][j] != 'O' || cannot[i+'-'+j]){
            return;
        }
        cannot[i+'-'+j] = true;
        dfs(i-1,j);
        dfs(i+1,j);
        dfs(i,j-1);
        dfs(i,j+1);
    }
    for(let i = 0;i < m;i++){
        for(let j = 0;j < n;j++){
            if((i == 0 || j == 0 || i == m-1 || j == n-1) && board[i][j] == 'O'){
                dfs(i,j);
            }
        }
    }
    for(let i = 1;i < m-1;i++){
        for(let j = 1;j < n-1;j++){
            if(!cannot[i+'-'+j] && board[i][j] == 'O'){
                board[i][j] = 'X';
            }
        }
    }
};
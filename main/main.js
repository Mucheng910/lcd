module.exports = function main(num) {
    var lcd = [
        ['._.', '|.|', '|_|'],
        ['...', '..|', '..|'],
        ['._.', '._|', '|_.'],
        ['._.', '._|', '._|'],
        ['...', '|_|', '..|'],
        ['._.', '|_.', '._|'],
        ['._.', '|_.', '|_|'],
        ['._.', '..|', '..|'],
        ['._.', '|_|', '|_|'],
        ['._.', '|_|', '..|'],
    ]
    var numLength = num.length
    var numArr = num.split('')
    var res = ''
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < numLength; j++) {
            if (j === numLength - 1) {
                res = res + lcd[Number(numArr[j])][i]
                res = res + '\n'
            } else {
                res = res + lcd[Number(numArr[j])][i] + ' '
            }
        }
    }
    return res;
};
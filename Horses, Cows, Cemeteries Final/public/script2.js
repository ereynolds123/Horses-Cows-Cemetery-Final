function submitForm() {
    const teamOneName = document.getElementById('teamOne').value
    const teamTwoName = document.getElementById('teamTwo').value
    const rulesName = document.getElementById('rulesName').value
    const rulesValue = document.getElementById('rules').value

    console.log("teamOneName", teamOneName);
    console.log("teamTwoName", teamTwoName);
    console.log("rulesName", rulesName);
    console.log("rulesValue", rulesValue);

    localStorage.setItem('teamOneName', teamOneName);
    localStorage.setItem('teamTwoName', teamTwoName);
    localStorage.setItem('rulesValue', rulesValue);
    localStorage.setItem('rulesName', rulesName);

    window.location.href = 'game.html';
}

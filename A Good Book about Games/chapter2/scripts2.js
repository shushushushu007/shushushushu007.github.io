document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submitBtn');
    const errorText = document.getElementById('errorText');
    const keyInput = document.getElementById('keyInput');


    submitBtn.addEventListener('click', function() {
        const inputText = keyInput.value.trim();
        if (inputText.toLowerCase() === "meta") {
            goToLevel(4);
        } else {
            errorText.style.display = 'block'; // 显示错误信息
        }
    });

    // 初始化页面
    goToLevel(1);
});

function goToLevel(level) {
    const levels = document.querySelectorAll(".level");
    levels.forEach((levelDiv, index) => {
        if (index + 1 === level) {
            levelDiv.style.display = "block"; // 显示当前关卡
        } else {
            levelDiv.style.display = "none"; // 隐藏其他关卡
        }
    });
}




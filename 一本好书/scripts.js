
document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submitBtn');
    const errorText = document.getElementById('errorText');

   


    const keyInput = document.getElementById('keyInput');

   

    submitBtn.addEventListener('click', function() {
        const inputText = keyInput.value.trim();
        if (inputText.toLowerCase() === "observer") {
            goToLevel(12);
        } else {
            errorText.style.display = 'block'; // ��ʾ������Ϣ
        }
    });

    // ��ʼ��ҳ��
    goToLevel(1);
});

// ���ڴ洢ÿ����ť�ĵ��״̬
const buttonStates = {
    btn1: false,
    btn2: false,
    btn3: false
};

function buttonClicked(buttonId) {
    const hidText1 = document.getElementById('hidText1');
    const hidText2 = document.getElementById('hidText2');
    const hidText3 = document.getElementById('hidText3');
    const hidText4 = document.getElementById('hidText4');
    const hidText5 = document.getElementById('hidText5');
    const hidText6 = document.getElementById('hidText6');
    const hidText7 = document.getElementById('hidText7');
    // ���ð�ť�ĵ��״̬Ϊtrue
    buttonStates[buttonId] = true;
    // ������а�ť�Ƿ񶼱������
    const allButtonsClicked = Object.values(buttonStates).every(state => state);
    if (allButtonsClicked) {
        // ������а�ť�������������ʾ���ذ�ť
        

        document.getElementById("hiddenBtn").style.display = "block";
        document.getElementById('hidText1').style.display = "block";
        document.getElementById('hidText2').style.display = "block";
        document.getElementById('hidText3').style.display = "block";
        document.getElementById('hidText4').style.display = "block";
        document.getElementById('hidText5').style.display = "block";
        document.getElementById('hidText6').style.display = "block";

        document.getElementById("btn1").style.display = "none";
        document.getElementById("btn2").style.display = "none";
        document.getElementById("btn3").style.display = "none";
        goToLevel(6);
    }

    goToLevel(3);
}


function goToLevel(level) {
    const levels = document.querySelectorAll(".level");
    levels.forEach((levelDiv, index) => {
        if (index + 1 === level) {
            levelDiv.style.display = "block"; // ��ʾ��ǰ�ؿ�
        } else {
            levelDiv.style.display = "none"; // ���������ؿ�
        }
    });
}




const adviceButton = document.querySelector(".adivice-botton");
const adviceNumber = document.querySelector(".advice-id");
const adviceTexto = document.querySelector(".texto-advice");

async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const adviceContent = await response.json();
    const adviceId = `Advice #${adviceContent.slip.id}`;
    const adviceText = `"${adviceContent.slip.advice}"`;

    adviceNumber.innerHTML = adviceId;
    adviceTexto.innerHTML = adviceText;
}

adviceButton.addEventListener("click", getAdvice);

getAdvice();
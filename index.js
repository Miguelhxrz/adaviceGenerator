document.addEventListener('DOMContentLoaded', function() {

  const advice_num = document.querySelector('#advice__num');

  const advice_msg = document.querySelector('#advice__text');

  const randomAdvice_button = document.querySelector('#advice__ramdom');

  const RandomAdviceURL = 'https://api.adviceslip.com/advice';

  async function getAvice () {
    try {
      const result = await fetch(RandomAdviceURL);
    
      const data = await result.json(); 

      advice_num.textContent = `#${data.slip.id}`;

      advice_msg.textContent = `"${data.slip.advice}"`
    
    } catch (error) {
      console.error(error);  
    }
    
  };

  getAvice();

  randomAdvice_button.addEventListener('click', () => getAvice())


})
const birthdayText = document.querySelector('#birthday');
const birthday = localStorage['date'];
const nameUser = document.querySelector('#name_text');
const gender = localStorage['gender'];

document.addEventListener('DOMContentLoaded', function () {
  nameUser.innerHTML = localStorage['name'];
  birthdayText.innerHTML = birthday;
});

let user = navigator.userAgent.toString();

let allRows = document.querySelectorAll('.rectangle-tr');
let allRowsArray = Array.from(allRows);

if (user.includes('Mac') || user.includes('Macintosh')) {
  for (let i = 0; i < allRowsArray.length; i++) {
    allRowsArray[i].classList.add('rectangle-tr-active');
  }
}

const birthdayArray = birthday.split('.');

let A = parseInt(calculation(birthdayArray[0]));
let B = parseInt(calculation(birthdayArray[1]));
let C = parseInt(calculation(birthdayArray[2]));

function calculation(number) {
  let sumNumber = number
    .toString()
    .split('')
    .reduce((previousValue, currentValue) => +previousValue + +currentValue);

  while (parseInt(number) > 22 || sumNumber > 22) {
    number = number
      .toString()
      .split('')
      .reduce((previousValue, currentValue) => +previousValue + +currentValue);

    if (parseInt(number) > 22) {
      number = number
        .toString()
        .split('')
        .reduce(
          (previousValue, currentValue) => +previousValue + +currentValue
        );
    }

    return number;
  }

  return number;
}

const date = new Date();
const age = document.querySelector('#age');

let ageMonths = date.getMonth() - parseInt(B) + 1;
let ageDays = date.getDate() - birthdayArray[0];

let ageNumber = date.getFullYear() - parseInt(birthdayArray[2]);

if (ageMonths <= 0 && ageDays < 0) {
  ageNumber -= 1;
}

console.log(ageDays);

age.innerHTML = ageNumber.toString();

let D = calculation(A + B + C);
let K1 = calculation(D + C);

const firstChakraItemOne = document.querySelector('#D');
firstChakraItemOne.innerHTML = D.toString();

const firstChakraItemTwo = document.querySelector('#C');
firstChakraItemTwo.innerHTML = C.toString();

const firstChakraItemThree = document.querySelector('#K1');
firstChakraItemThree.innerHTML = K1.toString();

let X = calculation(A + B + C + D);
let D2 = calculation(D + X);
let D1 = calculation(D + D2);

let C2 = calculation(C + X);
let C1 = calculation(C + C2);

let K2 = calculation(D2 + C2);

const secondChakraItemOne = document.querySelector('#D1');
secondChakraItemOne.innerHTML = D2.toString();

const secondChakraItemTwo = document.querySelector('#C1');
secondChakraItemTwo.innerHTML = C2.toString();

const secondChakraItemThree = document.querySelector('#K2');
secondChakraItemThree.innerHTML = K2.toString();

let K3 = calculation(X + X);

const thirdChakraItemOne = document.querySelector('#X');
thirdChakraItemOne.innerHTML = X.toString();

const thirdChakraItemTwo = document.querySelector('#X_2');
thirdChakraItemTwo.innerHTML = X.toString();

const thirdChakraItemThree = document.querySelector('#K3');
thirdChakraItemThree.innerHTML = K3.toString();

let B2 = calculation(B + X);
let B3 = calculation(B2 + X);

let A2 = calculation(A + X);
let A3 = calculation(A2 + X);

let K4 = calculation(B3 + A3);

const fourthChakraItemOne = document.querySelector('#B3');
fourthChakraItemOne.innerHTML = B3.toString();

const fourthChakraItemTwo = document.querySelector('#A3');
fourthChakraItemTwo.innerHTML = A3.toString();

const fourthChakraItemThree = document.querySelector('#K4');
fourthChakraItemThree.innerHTML = K4.toString();

let K5 = calculation(B2 + A2);

const fifthChakraItemOne = document.querySelector('#B2');
fifthChakraItemOne.innerHTML = B2.toString();

const fifthChakraItemTwo = document.querySelector('#A2');
fifthChakraItemTwo.innerHTML = A2.toString();

const fifthChakraItemThree = document.querySelector('#K5');
fifthChakraItemThree.innerHTML = K5.toString();

let B1 = calculation(B + B2);

let A1 = calculation(A + A2);

let K6 = calculation(B1 + A1);

const sixthChakraItemOne = document.querySelector('#B1');
sixthChakraItemOne.innerHTML = B1.toString();

const sixthChakraItemTwo = document.querySelector('#A1');
sixthChakraItemTwo.innerHTML = A1.toString();

const sixthChakraItemThree = document.querySelector('#K6');
sixthChakraItemThree.innerHTML = K6.toString();

let E = calculation(A + B);

const seventhChakraItemOne = document.querySelector('#B');
seventhChakraItemOne.innerHTML = B.toString();

const seventhChakraItemTwo = document.querySelector('#A');
seventhChakraItemTwo.innerHTML = A.toString();

const seventhChakraItemThree = document.querySelector('#E');
seventhChakraItemThree.innerHTML = E.toString();

let T1 = calculation(D + D2 + B3 + X + B1 + B2 + B);
let T2 = calculation(A + A1 + A2 + A3 + X + C2 + C);
let T3 = calculation(E + K6 + K5 + K4 + K3 + K2 + K1);

const lastChakraItemOne = document.querySelector('#T1');
lastChakraItemOne.innerHTML = T1.toString();

const lastChakraItemTwo = document.querySelector('#T2');
lastChakraItemTwo.innerHTML = T2.toString();

const lastChakraItemThree = document.querySelector('#T3');
lastChakraItemThree.innerHTML = T3.toString();

let LN = calculation(B + D);
let LZ = calculation(A + C);
let LP1 = calculation(LN + LZ);

const privateItemOne = document.querySelector('#LN');
privateItemOne.innerHTML = LN.toString();

const privateItemTwo = document.querySelector('#LZ');
privateItemTwo.innerHTML = LZ.toString();

const privateItemThree = document.querySelector('#LP1');
privateItemThree.innerHTML = LP1.toString();

let G = calculation(C + D);
let F = calculation(B + C);
let H = calculation(D + A);

let LO = calculation(E + G);
let LM = calculation(F + H);
let Y = calculation(E + F + G + H);

const socialItemOne = document.querySelector('#LO');
socialItemOne.innerHTML = LO.toString();

const socialItemTwo = document.querySelector('#LM');
socialItemTwo.innerHTML = LM.toString();

const socialItemThree = document.querySelector('#Y');
socialItemThree.innerHTML = Y.toString();

let LP3 = calculation(LP1 + Y);

const spiritItemOne = document.querySelector('#LP1_2');
spiritItemOne.innerHTML = LP1.toString();

const spiritItemTwo = document.querySelector('#Y_2');
spiritItemTwo.innerHTML = Y.toString();

const spiritItemThree = document.querySelector('#LP3');
spiritItemThree.innerHTML = LP3.toString();

const manItemOne = document.querySelector('#E_man');
manItemOne.innerHTML = E.toString();

const manItemTwo = document.querySelector('#G_man');
manItemTwo.innerHTML = G.toString();

const manItemThree = document.querySelector('#X_man');
manItemThree.innerHTML = X.toString();

const womanItemOne = document.querySelector('#F_woman');
womanItemOne.innerHTML = F.toString();

const womanItemTwo = document.querySelector('#H_woman');
womanItemTwo.innerHTML = H.toString();

const womanItemThree = document.querySelector('#X_woman');
womanItemThree.innerHTML = X.toString();

const diagramItemOne = document.querySelector('#B_diagram');
diagramItemOne.innerHTML = B.toString();

const diagramItemTwo = document.querySelector('#E_diagram');
diagramItemTwo.innerHTML = E.toString();

const diagramItemThree = document.querySelector('#F_diagram');
diagramItemThree.innerHTML = F.toString();

const diagramItemFourth = document.querySelector('#A_diagram');
diagramItemFourth.innerHTML = A.toString();

const diagramItemFifth = document.querySelector('#C_diagram');
diagramItemFifth.innerHTML = C.toString();

const diagramItemSixth = document.querySelector('#H_diagram');
diagramItemSixth.innerHTML = H.toString();

const diagramItemSeventh = document.querySelector('#G_diagram');
diagramItemSeventh.innerHTML = G.toString();

const diagramItemEighth = document.querySelector('#D_diagram');
diagramItemEighth.innerHTML = D.toString();

const personalPanelItem = document.querySelector('#personal_panel');

function personalPanelContentCreate(numbers) {
  let isPositiveTitleOpened = true;
  let isNegativeTitleOpened = true;
  let isCommunicationTitleOpened = true;
  let isSuperPowerTitleOpened = true;

  numbers.map((item, index, array) => {
    if (isPositiveTitleOpened) {
      isPositiveTitleOpened = !isPositiveTitleOpened;
      const text = document.createElement('p');
      text.textContent = 'В позитиве';
      text.style.fontWeight = '700';
      personalPanelItem.appendChild(text);
    }

    if (index === 0) {
      for (let i = 0; i < array.length; i++) {
        if (i === 0 || (i === 1 && array[0] !== array[1])) {
          switch (array[i]) {
            case 1: {
              let paragraph = document.createElement('p');
              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 2: {
              let paragraph = document.createElement('p');
              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 3: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 4: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 5: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 6: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 7: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 8: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 9: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 10: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 11: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 12: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 13: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 14: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 15: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 16: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 17: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 18: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 19: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 20: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 21: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 22: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
          }
        }
      }
    }

    if (isNegativeTitleOpened) {
      isNegativeTitleOpened = !isNegativeTitleOpened;
      const text = document.createElement('p');
      text.innerHTML = 'В негативе';
      text.style.fontWeight = '700';
      personalPanelItem.appendChild(text);
    }

    if (index === 0) {
      for (let i = 0; i < array.length; i++) {
        if (i === 0 || (i === 1 && array[0] !== array[1])) {
          switch (array[i]) {
            case 1: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 2: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 3: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 4: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 5: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 6: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 7: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 8: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 9: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 10: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 11: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 12: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 13: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 14: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 15: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 16: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 17: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 18: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 19: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 20: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 21: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
            case 22: {
              let paragraph = document.createElement('p');

              paragraph.innerHTML = ` `;
              personalPanelItem.appendChild(paragraph);
              break;
            }
          }
        }
      }
    }

    if (index === 2) {
      if (isCommunicationTitleOpened) {
        isCommunicationTitleOpened = !isCommunicationTitleOpened;
        const text = document.createElement('p');
        text.innerHTML = 'В общении';
        text.style.fontWeight = '700';
        personalPanelItem.appendChild(text);
      }

      switch (item) {
        case 1: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 2: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 3: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 4: {
          let paragraph = document.createElement('p');

          if (gender === 'М') {
            paragraph.innerHTML = ` `;
          }

          if (gender === 'Ж') {
            paragraph.innerHTML = ` `;
          }

          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 5: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 6: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 7: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 8: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 9: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 10: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 11: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 12: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 13: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 14: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 15: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 16: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 17: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 18: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 19: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 20: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 21: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 22: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
      }
    }

    if (index === 2) {
      switch (item) {
        case 3: {
          if (isSuperPowerTitleOpened) {
            isSuperPowerTitleOpened = !isSuperPowerTitleOpened;
            const text = document.createElement('p');
            text.innerHTML = 'Ваша супер сила';
            text.style.fontWeight = '700';
            personalPanelItem.appendChild(text);
          }

          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 4: {
          if (isSuperPowerTitleOpened) {
            isSuperPowerTitleOpened = !isSuperPowerTitleOpened;
            const text = document.createElement('p');
            text.innerHTML = 'Ваша супер сила';
            text.style.fontWeight = '700';
            personalPanelItem.appendChild(text);
          }

          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 5: {
          if (isSuperPowerTitleOpened) {
            isSuperPowerTitleOpened = !isSuperPowerTitleOpened;
            const text = document.createElement('p');
            text.innerHTML = 'Ваша супер сила';
            text.style.fontWeight = '700';
            personalPanelItem.appendChild(text);
          }

          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 6: {
          if (isSuperPowerTitleOpened) {
            isSuperPowerTitleOpened = !isSuperPowerTitleOpened;
            const text = document.createElement('p');
            text.innerHTML = 'Ваша супер сила';
            text.style.fontWeight = '700';
            personalPanelItem.appendChild(text);
          }

          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 7: {
          if (isSuperPowerTitleOpened) {
            isSuperPowerTitleOpened = !isSuperPowerTitleOpened;
            const text = document.createElement('p');
            text.innerHTML = 'Ваша супер сила';
            text.style.fontWeight = '700';
            personalPanelItem.appendChild(text);
          }

          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 8: {
          if (isSuperPowerTitleOpened) {
            isSuperPowerTitleOpened = !isSuperPowerTitleOpened;
            const text = document.createElement('p');
            text.innerHTML = 'Ваша супер сила';
            text.style.fontWeight = '700';
            personalPanelItem.appendChild(text);
          }

          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 9: {
          if (isSuperPowerTitleOpened) {
            isSuperPowerTitleOpened = !isSuperPowerTitleOpened;
            const text = document.createElement('p');
            text.innerHTML = 'Ваша супер сила';
            text.style.fontWeight = '700';
            personalPanelItem.appendChild(text);
          }

          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 10: {
          if (isSuperPowerTitleOpened) {
            isSuperPowerTitleOpened = !isSuperPowerTitleOpened;
            const text = document.createElement('p');
            text.innerHTML = 'Ваша супер сила';
            text.style.fontWeight = '700';
            personalPanelItem.appendChild(text);
          }

          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 11: {
          if (isSuperPowerTitleOpened) {
            isSuperPowerTitleOpened = !isSuperPowerTitleOpened;
            const text = document.createElement('p');
            text.innerHTML = 'Ваша супер сила';
            text.style.fontWeight = '700';
            personalPanelItem.appendChild(text);
          }

          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 12: {
          if (isSuperPowerTitleOpened) {
            isSuperPowerTitleOpened = !isSuperPowerTitleOpened;
            const text = document.createElement('p');
            text.innerHTML = 'Ваша супер сила';
            text.style.fontWeight = '700';
            personalPanelItem.appendChild(text);
          }

          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 13: {
          if (isSuperPowerTitleOpened) {
            isSuperPowerTitleOpened = !isSuperPowerTitleOpened;
            const text = document.createElement('p');
            text.innerHTML = 'Ваша супер сила';
            text.style.fontWeight = '700';
            personalPanelItem.appendChild(text);
          }

          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 14: {
          if (isSuperPowerTitleOpened) {
            isSuperPowerTitleOpened = !isSuperPowerTitleOpened;
            const text = document.createElement('p');
            text.innerHTML = 'Ваша супер сила';
            text.style.fontWeight = '700';
            personalPanelItem.appendChild(text);
          }

          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 15: {
          if (isSuperPowerTitleOpened) {
            isSuperPowerTitleOpened = !isSuperPowerTitleOpened;
            const text = document.createElement('p');
            text.innerHTML = 'Ваша супер сила';
            text.style.fontWeight = '700';
            personalPanelItem.appendChild(text);
          }

          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 16: {
          if (isSuperPowerTitleOpened) {
            isSuperPowerTitleOpened = !isSuperPowerTitleOpened;
            const text = document.createElement('p');
            text.innerHTML = 'Ваша супер сила';
            text.style.fontWeight = '700';
            personalPanelItem.appendChild(text);
          }

          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 17: {
          if (isSuperPowerTitleOpened) {
            isSuperPowerTitleOpened = !isSuperPowerTitleOpened;
            const text = document.createElement('p');
            text.innerHTML = 'Ваша супер сила';
            text.style.fontWeight = '700';
            personalPanelItem.appendChild(text);
          }

          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 18: {
          if (isSuperPowerTitleOpened) {
            isSuperPowerTitleOpened = !isSuperPowerTitleOpened;
            const text = document.createElement('p');
            text.innerHTML = 'Ваша супер сила';
            text.style.fontWeight = '700';
            personalPanelItem.appendChild(text);
          }

          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 19: {
          if (isSuperPowerTitleOpened) {
            isSuperPowerTitleOpened = !isSuperPowerTitleOpened;
            const text = document.createElement('p');
            text.innerHTML = 'Ваша супер сила';
            text.style.fontWeight = '700';
            personalPanelItem.appendChild(text);
          }

          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 20: {
          if (isSuperPowerTitleOpened) {
            isSuperPowerTitleOpened = !isSuperPowerTitleOpened;
            const text = document.createElement('p');
            text.innerHTML = 'Ваша супер сила';
            text.style.fontWeight = '700';
            personalPanelItem.appendChild(text);
          }

          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 21: {
          if (isSuperPowerTitleOpened) {
            isSuperPowerTitleOpened = !isSuperPowerTitleOpened;
            const text = document.createElement('p');
            text.innerHTML = 'Ваша супер сила';
            text.style.fontWeight = '700';
            personalPanelItem.appendChild(text);
          }

          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
        case 22: {
          if (isSuperPowerTitleOpened) {
            isSuperPowerTitleOpened = !isSuperPowerTitleOpened;
            const text = document.createElement('p');
            text.innerHTML = 'Ваша супер сила';
            text.style.fontWeight = '700';
            personalPanelItem.appendChild(text);
          }

          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          personalPanelItem.appendChild(paragraph);
          break;
        }
      }
    }
  });
}

personalPanelContentCreate([A, B, X]);

const talentsPanelItem = document.querySelector('#talents_panel');

let isTalentsTitleFirstOpened = true;
let isTalentsTitleSecondOpened = true;
let isTalentsTitleThirdOpened = true;

function talentsPanelContentCreate(numbers, status) {
  const unicalNumbers = new Set(numbers);

  if (status === 1 && isTalentsTitleFirstOpened && unicalNumbers.size !== 0) {
    isTalentsTitleFirstOpened = !isTalentsTitleFirstOpened;
    const text = document.createElement('p');
    text.innerHTML = 'Талант от Бога';
    text.style.fontWeight = '700';
    talentsPanelItem.appendChild(text);
  }

  if (status === 2 && isTalentsTitleSecondOpened && unicalNumbers.size !== 1) {
    isTalentsTitleSecondOpened = !isTalentsTitleSecondOpened;
    const text = document.createElement('p');
    text.innerHTML = 'Талант от Отца';
    text.style.fontWeight = '700';
    talentsPanelItem.appendChild(text);
  }

  if (status === 3 && isTalentsTitleThirdOpened && unicalNumbers.size !== 1) {
    isTalentsTitleThirdOpened = !isTalentsTitleThirdOpened;
    const text = document.createElement('p');
    text.innerHTML = 'Талант от Матери';
    text.style.fontWeight = '700';
    talentsPanelItem.appendChild(text);
  }

  Array.from(unicalNumbers).map((item, index, array) => {
    switch (item) {
      case 0: {
        break;
      }
      case 1: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        talentsPanelItem.appendChild(paragraph);
        break;
      }
      case 2: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        talentsPanelItem.appendChild(paragraph);
        break;
      }
      case 3: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        talentsPanelItem.appendChild(paragraph);
        break;
      }
      case 4: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        talentsPanelItem.appendChild(paragraph);
        break;
      }
      case 5: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        talentsPanelItem.appendChild(paragraph);
        break;
      }
      case 6: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        talentsPanelItem.appendChild(paragraph);
        break;
      }
      case 7: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        talentsPanelItem.appendChild(paragraph);
        break;
      }
      case 8: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        talentsPanelItem.appendChild(paragraph);
        break;
      }
      case 9: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        talentsPanelItem.appendChild(paragraph);
        break;
      }
      case 10: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        talentsPanelItem.appendChild(paragraph);
        break;
      }
      case 11: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        talentsPanelItem.appendChild(paragraph);
        break;
      }
      case 12: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        talentsPanelItem.appendChild(paragraph);
        break;
      }
      case 13: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        talentsPanelItem.appendChild(paragraph);
        break;
      }
      case 14: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        talentsPanelItem.appendChild(paragraph);
        break;
      }
      case 15: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        talentsPanelItem.appendChild(paragraph);
        break;
      }
      case 16: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        talentsPanelItem.appendChild(paragraph);
        break;
      }
      case 17: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        talentsPanelItem.appendChild(paragraph);
        break;
      }
      case 18: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        talentsPanelItem.appendChild(paragraph);
        break;
      }
      case 19: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        talentsPanelItem.appendChild(paragraph);
        break;
      }
      case 20: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        talentsPanelItem.appendChild(paragraph);
        break;
      }
      case 21: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        talentsPanelItem.appendChild(paragraph);
        break;
      }
      case 22: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        talentsPanelItem.appendChild(paragraph);
        break;
      }
    }
  });
}

let E2 = calculation(E + Y);
let E1 = calculation(E + E2);

let F2 = calculation(F + Y);
let F1 = calculation(F + F2);

let E_duplicate = E;
let E1_duplicate = E1;
let E2_duplicate = E2;

let F_duplicate = F;
let F1_duplicate = F1;
let F2_duplicate = F2;

if (E === B || E === B1 || E === B2) {
  E_duplicate = 0;
}

if (E1 === B || E1 === B1 || E2 === B2) {
  E1_duplicate = 0;
}

if (E2 === B || E2 === B1 || E2 === B2) {
  E2_duplicate = 0;
}

if (F === B || F === B1 || F === B2 || F === E || F === E1 || F === E2) {
  F_duplicate = 0;
}

if (F1 === B || F1 === B1 || F1 === B2 || F1 === E || F1 === E1 || F1 === E2) {
  F1_duplicate = 0;
}

if (F2 === B || F2 === B1 || F2 === B2 || F2 === E || F2 === E1 || F2 === E2) {
  F2_duplicate = 0;
}

talentsPanelContentCreate([B, B1, B2], 1);
talentsPanelContentCreate([E_duplicate, E1_duplicate, E2_duplicate], 2);
talentsPanelContentCreate([F_duplicate, F1_duplicate, F2_duplicate], 3);

const pastLivesPanelItem = document.querySelector('#past_lives_panel');

function pastLivesContentCreate(D2, D1, D) {
  if (D2 === 3 && D1 === 7 && D === 22) {
    let title = document.createElement('p');
    title.style.fontWeight = '700';
    title.innerHTML = 'Названия Кармичесткого Хвоста: Узник';

    let paragraph = document.createElement('p');
    paragraph.innerHTML = ` `;
    pastLivesPanelItem.appendChild(title);
    pastLivesPanelItem.appendChild(paragraph);
  }

  if (D2 === 3 && D1 === 13 && D === 10) {
    let title = document.createElement('p');
    title.style.fontWeight = '700';
    title.innerHTML = 'Названия Кармичесткого Хвоста: Суицид';

    let paragraph = document.createElement('p');
    paragraph.innerHTML = ` `;
    pastLivesPanelItem.appendChild(title);
    pastLivesPanelItem.appendChild(paragraph);
  }

  if (D2 === 3 && D1 === 22 && D === 19) {
    let title = document.createElement('p');
    title.style.fontWeight = '700';
    title.innerHTML = 'Названия Кармичесткого Хвоста: Нерожденное Дитя';

    let paragraph = document.createElement('p');
    paragraph.innerHTML = ` `;
    pastLivesPanelItem.appendChild(title);
    pastLivesPanelItem.appendChild(paragraph);
  }

  if (D2 === 6 && D1 === 5 && D === 17) {
    let title = document.createElement('p');
    title.style.fontWeight = '700';
    title.innerHTML = 'Названия Кармичесткого Хвоста: Гордыня';

    let paragraph = document.createElement('p');
    paragraph.innerHTML = ` `;
    pastLivesPanelItem.appendChild(title);
    pastLivesPanelItem.appendChild(paragraph);
  }

  if (D2 === 6 && D1 === 8 && D === 20) {
    let title = document.createElement('p');
    title.style.fontWeight = '700';
    title.innerHTML = 'Названия Кармичесткого Хвоста: Разочарование Рода';

    let paragraph = document.createElement('p');
    paragraph.innerHTML = ` `;
    pastLivesPanelItem.appendChild(title);
    pastLivesPanelItem.appendChild(paragraph);
  }

  if (D2 === 6 && D1 === 14 && D === 8) {
    let title = document.createElement('p');
    title.style.fontWeight = '700';
    title.innerHTML = 'Названия Кармичесткого Хвоста: Диктатор';

    let paragraph = document.createElement('p');
    paragraph.innerHTML = ` `;
    pastLivesPanelItem.appendChild(title);
    pastLivesPanelItem.appendChild(paragraph);
  }

  if (D2 === 6 && D1 === 17 && D === 11) {
    let title = document.createElement('p');
    title.style.fontWeight = '700';
    title.innerHTML = 'Названия Кармичесткого Хвоста: Загубленный Талант';

    let paragraph = document.createElement('p');
    paragraph.innerHTML = ` `;
    pastLivesPanelItem.appendChild(title);
    pastLivesPanelItem.appendChild(paragraph);
  }

  if (D2 === 6 && D1 === 20 && D === 14) {
    let title = document.createElement('p');
    title.style.fontWeight = '700';
    title.innerHTML =
      'Названия Кармичесткого Хвоста: Душа, Которую Принесли В Жертву';

    let paragraph = document.createElement('p');
    paragraph.innerHTML = ` `;
    pastLivesPanelItem.appendChild(title);
    pastLivesPanelItem.appendChild(paragraph);
  }

  if (D2 === 9 && D1 === 3 && D === 21) {
    let title = document.createElement('p');
    title.style.fontWeight = '700';
    title.innerHTML = 'Названия Кармичесткого Хвоста: Надзиратель';

    let paragraph = document.createElement('p');
    paragraph.innerHTML = ` `;
    pastLivesPanelItem.appendChild(title);
    pastLivesPanelItem.appendChild(paragraph);
  }

  if (D2 === 9 && D1 === 12 && D === 3) {
    let title = document.createElement('p');
    title.style.fontWeight = '700';
    title.innerHTML = 'Названия Кармичесткого Хвоста: Одинокая Женщина';

    let paragraph = document.createElement('p');
    paragraph.innerHTML = ` `;
    pastLivesPanelItem.appendChild(title);
    pastLivesPanelItem.appendChild(paragraph);
  }

  if (D2 === 9 && D1 === 15 && D === 6) {
    let title = document.createElement('p');
    title.style.fontWeight = '700';
    title.innerHTML = 'Названия Кармичесткого Хвоста: Мир Страстей И Сказок';

    let paragraph = document.createElement('p');
    paragraph.innerHTML = ` `;
    pastLivesPanelItem.appendChild(title);
    pastLivesPanelItem.appendChild(paragraph);
  }

  if (D2 === 12 && D1 === 16 && D === 4) {
    let title = document.createElement('p');
    title.style.fontWeight = '700';
    title.innerHTML = 'Названия Кармичесткого Хвоста: Император';

    let paragraph = document.createElement('p');
    paragraph.innerHTML = ` `;
    pastLivesPanelItem.appendChild(title);
    pastLivesPanelItem.appendChild(paragraph);
  }

  if (D2 === 12 && D1 === 19 && D === 7) {
    let title = document.createElement('p');
    title.style.fontWeight = '700';
    title.innerHTML = 'Названия Кармичесткого Хвоста: Воин';

    let paragraph = document.createElement('p');
    paragraph.innerHTML = ` `;
    pastLivesPanelItem.appendChild(title);
    pastLivesPanelItem.appendChild(paragraph);
  }

  if (D2 === 15 && D1 === 5 && D === 8) {
    let title = document.createElement('p');
    title.style.fontWeight = '700';
    title.innerHTML =
      'Названия Кармичесткого Хвоста: Предательства И Страсти В Семье';

    let paragraph = document.createElement('p');
    paragraph.innerHTML = ` `;
    pastLivesPanelItem.appendChild(title);
    pastLivesPanelItem.appendChild(paragraph);
  }

  if (D2 === 15 && D1 === 8 && D === 11) {
    let title = document.createElement('p');
    title.style.fontWeight = '700';
    title.innerHTML = 'Названия Кармичесткого Хвоста: Физическая Агрессия';

    let paragraph = document.createElement('p');
    paragraph.innerHTML = ` `;
    pastLivesPanelItem.appendChild(title);
    pastLivesPanelItem.appendChild(paragraph);
  }

  if (D2 === 15 && D1 === 20 && D === 5) {
    let title = document.createElement('p');
    title.style.fontWeight = '700';
    title.innerHTML = 'Названия Кармичесткого Хвоста: Бунтарь';

    let paragraph = document.createElement('p');
    paragraph.innerHTML = ` `;
    pastLivesPanelItem.appendChild(title);
    pastLivesPanelItem.appendChild(paragraph);
  }

  if (D2 === 18 && D1 === 3 && D === 12) {
    let title = document.createElement('p');
    title.style.fontWeight = '700';
    title.innerHTML = 'Названия Кармичесткого Хвоста: Физические Страдания';

    let paragraph = document.createElement('p');
    paragraph.innerHTML = ` `;
    pastLivesPanelItem.appendChild(title);
    pastLivesPanelItem.appendChild(paragraph);
  }

  if (D2 === 18 && D1 === 6 && D === 6) {
    let title = document.createElement('p');
    title.style.fontWeight = '700';
    title.innerHTML = 'Названия Кармичесткого Хвоста: Любовная Магия';

    let paragraph = document.createElement('p');
    paragraph.innerHTML = ` `;
    pastLivesPanelItem.appendChild(title);
    pastLivesPanelItem.appendChild(paragraph);
  }

  if (D2 === 18 && D1 === 6 && D === 15) {
    let title = document.createElement('p');
    title.style.fontWeight = '700';
    title.innerHTML = 'Названия Кармичесткого Хвоста: Темный Маг';

    let paragraph = document.createElement('p');
    paragraph.innerHTML = ` `;
    pastLivesPanelItem.appendChild(title);
    pastLivesPanelItem.appendChild(paragraph);
  }

  if (D2 === 21 && D1 === 4 && D === 10) {
    let title = document.createElement('p');
    title.style.fontWeight = '700';
    title.innerHTML = 'Названия Кармичесткого Хвоста: Угнетенная Душа';

    let paragraph = document.createElement('p');
    paragraph.innerHTML = ` `;
    pastLivesPanelItem.appendChild(title);
    pastLivesPanelItem.appendChild(paragraph);
  }

  if (D2 === 21 && D1 === 7 && D === 13) {
    let title = document.createElement('p');
    title.style.fontWeight = '700';
    title.innerHTML =
      'Названия Кармичесткого Хвоста: Разрушение И Смерть Многим Душам';

    let paragraph = document.createElement('p');
    paragraph.innerHTML = ` `;
    pastLivesPanelItem.appendChild(title);
    pastLivesPanelItem.appendChild(paragraph);
  }

  if (D2 === 21 && D1 === 10 && D === 7) {
    let title = document.createElement('p');
    title.style.fontWeight = '700';
    title.innerHTML = 'Названия Кармичесткого Хвоста: Воин Веры';

    let paragraph = document.createElement('p');
    paragraph.innerHTML = ` `;
       pastLivesPanelItem.appendChild(title);
    pastLivesPanelItem.appendChild(paragraph);
  }

  if (D2 === 21 && D1 === 10 && D === 16) {
    let title = document.createElement('p');
    title.style.fontWeight = '700';
    title.innerHTML = 'Названия Кармичесткого Хвоста: Духовный Жрец';

    let paragraph = document.createElement('p');
    paragraph.innerHTML = ` `;
    pastLivesPanelItem.appendChild(title);
    pastLivesPanelItem.appendChild(paragraph);
  }

  if (D2 === 18 && D1 === 9 && D === 9) {
    let title = document.createElement('p');
    title.style.fontWeight = '700';
    title.innerHTML = 'Названия Кармичесткого Хвоста: Волшебник';

    let paragraph = document.createElement('p');
    paragraph.innerHTML = ` `;
    pastLivesPanelItem.appendChild(title);
    pastLivesPanelItem.appendChild(paragraph);
  }

  if (D2 === 9 && D1 === 18 && D === 9) {
    let title = document.createElement('p');
    title.style.fontWeight = '700';
    title.innerHTML = 'Названия Кармичесткого Хвоста: Волшебник';

    let paragraph = document.createElement('p');
    paragraph.innerHTML = ` `;
    pastLivesPanelItem.appendChild(title);
    pastLivesPanelItem.appendChild(paragraph);
  }

  if (D2 === 9 && D1 === 9 && D === 18) {
    let title = document.createElement('p');
    title.style.fontWeight = '700';
    title.innerHTML = 'Названия Кармичесткого Хвоста: Волшебник';

    let paragraph = document.createElement('p');
    paragraph.innerHTML = ` `;
    pastLivesPanelItem.appendChild(title);
    pastLivesPanelItem.appendChild(paragraph);
  }
}

pastLivesContentCreate(D2, D1, D);

const healthPanelItem = document.querySelector('#health_panel');

function healthPanelContentCreate(numbers, title, description) {
  const uniqNumbers = new Set(numbers);

  if (uniqNumbers.size !== 1) {
    let topic = document.createElement('p');
    topic.style.fontWeight = '700';
    topic.innerHTML = ` `;

    healthPanelItem.appendChild(topic);
  }

  let p = document.createElement('p');
  p.innerHTML = ` `;

  healthPanelItem.appendChild(p);

  Array.from(uniqNumbers).map((item) => {
    switch (item) {
      case 1: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        healthPanelItem.appendChild(paragraph);
        break;
      }
      case 2: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        healthPanelItem.appendChild(paragraph);
        break;
      }
      case 3: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        healthPanelItem.appendChild(paragraph);
        break;
      }
      case 4: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        healthPanelItem.appendChild(paragraph);
        break;
      }
      case 5: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        healthPanelItem.appendChild(paragraph);
        break;
      }
      case 6: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        healthPanelItem.appendChild(paragraph);
        break;
      }
      case 7: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        healthPanelItem.appendChild(paragraph);
        break;
      }
      case 8: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        healthPanelItem.appendChild(paragraph);
        break;
      }
      case 9: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        healthPanelItem.appendChild(paragraph);
        break;
      }
      case 10: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        healthPanelItem.appendChild(paragraph);
        break;
      }
      case 11: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        healthPanelItem.appendChild(paragraph);
        break;
      }
      case 12: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        healthPanelItem.appendChild(paragraph);
        break;
      }
      case 13: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        healthPanelItem.appendChild(paragraph);
        break;
      }
      case 14: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        healthPanelItem.appendChild(paragraph);
        break;
      }
      case 15: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        healthPanelItem.appendChild(paragraph);
        break;
      }
      case 16: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        healthPanelItem.appendChild(paragraph);
        break;
      }
      case 17: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        healthPanelItem.appendChild(paragraph);
        break;
      }
      case 18: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        healthPanelItem.appendChild(paragraph);
        break;
      }
      case 19: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        healthPanelItem.appendChild(paragraph);
        break;
      }
      case 20: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        healthPanelItem.appendChild(paragraph);
        break;
      }
      case 21: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        healthPanelItem.appendChild(paragraph);
        break;
      }
      case 22: {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = ` `;

        healthPanelItem.appendChild(paragraph);
        break;
      }
    }
  });
}

let B1_duplicate = B1;
let A1_duplicate = A1;
let K6_duplicate = K6;

let B2_duplicate = B2;
let A2_duplicate = A2;
let K5_duplicate = K5;

let B3_duplicate = B3;
let A3_duplicate = A3;
let K4_duplicate = K4;

let X_duplicate = X;
let Y_duplicate = Y;
let K3_duplicate = K3;

let D1_duplicate = D1;
let C1_duplicate = C1;
let K2_duplicate = K2;

let D_duplicate = D;
let C_duplicate = C;
let K1_duplicate = K1;

if (B1 === B || B1 === A || B1 === E) {
  B1_duplicate = 0;
}

if (A1 === B || A1 === A || A1 === E) {
  A1_duplicate = 0;
}

if (K6 === B || K6 === A || K6 === E) {
  K6_duplicate = 0;
}

if (B2 === B || B2 === A || B2 === E || B2 === B1 || B2 === A1 || B2 === K6) {
  B2_duplicate = 0;
}

if (A2 === B || A2 === A || A2 === E || A2 === B1 || A2 === A1 || A2 === K6) {
  A2_duplicate = 0;
}

if (K5 === B || K5 === A || K5 === E || K5 === B1 || K5 === A1 || K5 === K6) {
  K5_duplicate = 0;
}

if (
  B3 === B ||
  B3 === A ||
  B3 === E ||
  B3 === B1 ||
  B3 === A1 ||
  B3 === K6 ||
  B3 === B2 ||
  B3 === A2 ||
  B3 === K5
) {
  B3_duplicate = 0;
}

if (
  A3 === B ||
  A3 === A ||
  A3 === E ||
  A3 === B1 ||
  A3 === A1 ||
  A3 === K6 ||
  A3 === B2 ||
  A3 === A2 ||
  A3 === K5
) {
  A3_duplicate = 0;
}

if (
  K4 === B ||
  K4 === A ||
  K4 === E ||
  K4 === B1 ||
  K4 === A1 ||
  K4 === K6 ||
  K4 === B2 ||
  K4 === A2 ||
  K4 === K5
) {
  K4_duplicate = 0;
}

if (
  X === B ||
  X === A ||
  X === E ||
  X === B1 ||
  X === A1 ||
  X === K6 ||
  X === B2 ||
  X === A2 ||
  X === K5 ||
  X === B3 ||
  X === A3 ||
  X === K4
) {
  X_duplicate = 0;
}

if (
  Y === B ||
  Y === A ||
  Y === E ||
  Y === B1 ||
  Y === A1 ||
  Y === K6 ||
  Y === B2 ||
  Y === A2 ||
  Y === K5 ||
  Y === B3 ||
  Y === A3 ||
  Y === K4
) {
  Y_duplicate = 0;
}

if (
  K3 === B ||
  K3 === A ||
  K3 === E ||
  K3 === B1 ||
  K3 === A1 ||
  K3 === K6 ||
  K3 === B2 ||
  K3 === A2 ||
  K3 === K5 ||
  K3 === B3 ||
  K3 === A3 ||
  K3 === K4
) {
  K3_duplicate = 0;
}

if (
  D1 === B ||
  D1 === A ||
  D1 === E ||
  D1 === B1 ||
  D1 === A1 ||
  D1 === K6 ||
  D1 === B2 ||
  D1 === A2 ||
  D1 === K5 ||
  D1 === B3 ||
  D1 === A3 ||
  D1 === K4 ||
  D1 === X ||
  D1 === Y ||
  D1 === K3
) {
  D1_duplicate = 0;
}

if (
  C1 === B ||
  C1 === A ||
  C1 === E ||
  C1 === B1 ||
  C1 === A1 ||
  C1 === K6 ||
  C1 === B2 ||
  C1 === A2 ||
  C1 === K5 ||
  C1 === B3 ||
  C1 === A3 ||
  C1 === K4 ||
  C1 === X ||
  C1 === Y ||
  C1 === K3
) {
  C1_duplicate = 0;
}

if (
  K2 === B ||
  K2 === A ||
  K2 === E ||
  K2 === B1 ||
  K2 === A1 ||
  K2 === K6 ||
  K2 === B2 ||
  K2 === A2 ||
  K2 === K5 ||
  K2 === B3 ||
  K2 === A3 ||
  K2 === K4 ||
  K2 === X ||
  K2 === Y ||
  K2 === K3
) {
  K2_duplicate = 0;
}

if (
  D === B ||
  D === A ||
  D === E ||
  D === B1 ||
  D === A1 ||
  D === K6 ||
  D === B2 ||
  D === A2 ||
  D === K5 ||
  D === B3 ||
  D === A3 ||
  D === K4 ||
  D === X ||
  D === Y ||
  D === K3 ||
  D === D1 ||
  D === C1 ||
  D === K2
) {
  D_duplicate = 0;
}

if (
  C === B ||
  C === A ||
  C === E ||
  C === B1 ||
  C === A1 ||
  C === K6 ||
  C === B2 ||
  C === A2 ||
  C === K5 ||
  C === B3 ||
  C === A3 ||
  C === K4 ||
  C === X ||
  C === Y ||
  C === K3 ||
  C === D1 ||
  C === C1 ||
  C === K2
) {
  C_duplicate = 0;
}

if (
  K1 === B ||
  K1 === A ||
  K1 === E ||
  K1 === B1 ||
  K1 === A1 ||
  K1 === K6 ||
  K1 === B2 ||
  K1 === A2 ||
  K1 === K5 ||
  K1 === B3 ||
  K1 === A3 ||
  K1 === K4 ||
  K1 === X ||
  K1 === Y ||
  K1 === K3 ||
  K1 === D1 ||
  K1 === C1 ||
  K1 === K2
) {
  K1_duplicate = 0;
}

healthPanelContentCreate(
  [B, A, E],
  'Сахасрара - отвечают за головной мозг, волосы, верхняя часть черепа.',
  `<b>Проблемы со здоровьем:</b><br>
Заболевания могут быть как косметического характера (проблемы с волосами), так и более серьезного уровня - проблемы со здоровьем в черепном отделе, нарушения функций мозга и так далее. В быту вы ведете себя хаотично, много беспокойства. Не понимаете отдельных вещей и постоянно требуете строгой конкретики.<br>
<br><b>Причины:</b> <br>
Жить полноценной жизнью вам мешают материальные привязки. Вы разочаровались в своих духовных идеалах и стали жестким прагматиком. Верите только себе и рассчитываете только на себя. К окружающим нередко проявляете злость и нетерпение, пытаетесь поучать и воспитывать в духе своих убеждений. Можете навязывать свое мнение и не принимаете позицию собеседника. Вы не видите своего пути и глобальной миссии, поэтому все силы направляете на достижение исключительного материального благополучия. При этом испытываете проблемы, отсутствие энергии, так как мыслите узко и не готовы принимать помощь от судьбы.<br>
<br><b>Решение проблемы:</b> <br>
Придется постигнуть высшие законы вселенной, разобраться в своем жизненном пути и предназначении. Так же хорошо помогать в этом другим людям со сходными проблемами. Определитесь со своей главной миссией и следуйте ей. Важно не просто зарабатывать ради своего комфорта и процветания, а выполнять работу, которая поможет и другим людям, будет служить важной идее. Относитесь к проблемам в жизни проще, воспринимая их как полезный опыт. Хорошо жить в режиме, питаться, заниматься физическими упражнениями, работой и отдыхать регулярно. Составьте график и следуйте ему. Полезно вести довольно строгий и умеренный образ жизни, не предаваться излишествам, заниматься энергетическими и духовными практиками.
`
);
healthPanelContentCreate(
  [B1_duplicate, A1_duplicate, K6_duplicate],
  'Аджна - отвечают за затылочные и височные доли мозга, глаз, уши, нос, лицо, верхняя челюсть, зубы верхней челюсти, зрительный нерв, кора головного мозга.',
  `<b>Проблемы со здоровьем:</b> <br>
В вашей ситуации встречаются заболевания глаз, ушей, частые проблемы с зубами. Потеря здоровья может быть связана с затылочной областью или проблемами в зоне лица. В более широком плане это выражается в проблемах при общении, отсутствии друзей, недостатке логики, постоянных протестах против систем, в которых находитесь (работа, семья, страна).<br>
<br><b>Причины:</b> <br>
Вы живете собственными иллюзиями и сильно оторваны от реальности. Часто настолько отдаетесь выражению протеста против внешнего мира, что забываете о работе и семейных обязанностях. У вас не хватает времени часто даже на самое необходимое. При этом вы рассуждаете и мечтаете о глобальных вещах, которые не в силах поменять. Свою же жизнь не принимаете и не можете выстроить будущее, заняться своей судьбой. Живете как живется, словно плывете по течению. При этом вас тревожит ощущение существования не своей жизнью (в профессии, месте жительства, в личных отношениях). Вы словно раздвоены, так как ваш внутренний мир не соответствует внешним ценностям. Отсюда неустроенность жизни, разлад между глубинными желаниями (которые боитесь даже постигнуть) и навязанными стереотипами общества. Могут возникнуть проблемы с психическим состоянием.<br>
<br><b>Решение проблемы:</b> <br>
Вам нужно расширить свой кругозор и принимать информацию из разных источников. Помогайте благоустройству общества, работайте со своим внутренним “я” и глубинным сознанием. Важно найти свое предназначение в жизни, свой особый энергетический поток и следовать ему. Возможно, придется полностью сменить систему ценностей, отказаться от иллюзий, за которые держались раньше. Не бойтесь остаться наедине с собой для глубокого постижения своей миссии в жизни. Осознайте свою роль, откажитесь от вредных привычек, научитесь грамотно распределять время и деньги. Самодисциплина станет важным шагом к переустройству жизни. Не забывайте о постоянном развитии своей личности.

`
);
healthPanelContentCreate(
  [B2_duplicate, A2_duplicate, K5_duplicate],
  'Вишудха - отвечают за щитовидная железа, трахея, бронхи, горло, голосовые связки, плечи, руки, седьмой шейный позвонок, все шейные позвонки, нижняя челюсть, зубы нижней челюсти.',
  `<b>Проблемы со здоровьем:</b> <br>
Часто повторяются заболевания горла, могут возникнуть проблемы с щитовидкой, нижней челюстью. Нередко болят плечи или руки. На бытовом уровне вы не говорите правду, лжете себе и другим, возможно неумение выражать мысли, некоммуникабельность или наоборот - постоянное перебивание собеседника.<br>
<br><b>Причины:</b> <br>
Вы боитесь говорить правду, даже ту информацию и знания, в которых уверены, пережили на собственном опыте. Делиться хочется и одновременно страшно, потому что последствия могут быть в будущем. Вы ведете себя шаблонно и так же мыслите, не готовы проявлять свое творческое начало, уникальную личность. Боитесь осуждения и неодобрения, а отсюда проблемы в общении, замкнутость, заниженная самооценка, неумение выражать себя и говорить в буквальном смысле (глотание слов, сбивчивый голос). Вы стараетесь следовать всем понятным догмам, имеете множество распространенных в обществе предрассудков, боитесь отличаться от других. При этом много фантазируете и говорите неправду, а отсюда сразу начинаются проблемы со здоровьем. Лжете не только другим, но даже себе.<br>
<br><b>Решение проблемы:</b> <br>
Нужно пересмотреть и проанализировать опыт прошлого. Передать всю его ценность и постигнутые вами истины людям в любой словесной, устной форме. Вам важно начать говорить, это может быть видео ролик на ютубе, песня в караоке, первый в жизни тост в большой компании. Высказывайтесь на собраниях и на работе при принятии коллективных решений, просто пойте в ванной, рассказывайте что-то в кругу друзей. Но обязательно начинать проговаривать свои мысли, опыт и мнение. Говорите правду и избегайте лжи в любой форме. Для успеха используйте подсказки жизни и больше прислушивайтесь к себе. Занимайтесь творческим самовыражением.
`
);
healthPanelContentCreate(
  [B3_duplicate, A3_duplicate, K4_duplicate],
  'Анахата - отвечают за сердце, кровеносная система, органы дыхания, легкие, бронхи, грудной отдел позвоночника, рёбра, лопаточная зона спины, грудь.',
  `<b>Проблемы со здоровьем:</b> <br>
Проблемы обычно наблюдаются с сердцем, легкими, бронхами. Возможны травмы ребер и все заболевания, связанные с областью грудной клетки. Это проявляется и на бытовом уровне: вам словно что-то мешает расправить грудь и дышать в полную силу. Много планов, но нет энергии на их реализацию.<br>
<br><b>Причины:</b> <br>
Вы находитесь в глубочайшей депрессии и словно полностью обесточены. Нет сил двигаться вперед, все время обращаетесь к какому-то случаю в прошлом. Нередко испытываете чувство вины и раскаяния. Вы хотите словно застраховаться от неприятностей, но не знаете как. Поэтому страшно идти дальше, реализовывать свои идеи, помогать другим создавать лучшее будущее. В то же время и внутри вы недостаточно испытываете любви к окружающим, словно ничем не наполнены. Настоящее вас не радует, непонятно, как дальше жить и выходить из состояния глубокого физического и душевного упадка. Это может выражаться как в полном равнодушии и желании, чтобы вас все оставили в покое, так и в излишней жертвенности по отношению к другим. Вы много отдаете, но ничего не получаете взамен, энергия тратится впустую, вы не чувствуете удовлетворения. Порой сами ждете чудесной помощи извне, решения ваших проблем.<br>
<br><b>Решение проблемы:</b><br>
Единомышленниками или психологом. Пусть это будет своеобразная исповедь, раскрытие своих плохих поступков и черт характера, за которые вам стыдно. Вы можете таким образом даже самостоятельно создавать группы для обмена знаниями и опытом в построении счастливых, гармоничных отношений. Вам необходимо построить для себя новую картину мира, научиться верить и любить взаимно и счастливо. Учитесь чему-то новому и всегда имейте пространство комфорта, где можно быть собой и просто расслабиться с близкими. Проанализируйте свое окружение и общайтесь с истинными друзьями, не тратя время на пустые контакты. Будьте настоящим, старайтесь выражать свои эмоции открыто. Переведите фокус со своих проблем на общие задачи своего круга общения. Научитесь принимать людей и себя со всеми светлыми и темными сторонами. Так в нужный момент вы сможете собраться и стать самодостаточным, без обвинений себя и окружающих, без зависимости от чужого одобрения или помощи.
`
);
healthPanelContentCreate(
  [X_duplicate, Y_duplicate, K3_duplicate],
  'Манипура - отвечают за ЖКТ, органы брюшной полости, поджелудочная железа, селезёнка, печень, желчный пузырь, тонкий кишечник, центральная часть позвоночника.',
  `<b>Проблемы со здоровьем:</b> <br>
Заболевания могут быть в области желудочно-кишечного тракта. Нередко поражается средняя часть позвоночника. На поведенческом уровне это выражается в агрессии, раздражительности, неадекватности. Равнодушие может резко переходить в злобу и требовательность. Вы теряете что-то важное и делаете все, чтобы удержать это, в том числе незаконными методами, нарушая все нормы морали и права.<br>
<br><b>Причины:</b> <br>
Вы испытываете слишком сильную привязанность в отношении к человеку, либо вещам, обстоятельствам, образу жизни. При этом сами наделяете их исключительными, ценными для себя свойствами. Для вас важно контролировать и обладать. Вы часто высокомерны и амбициозны, любите показывать свою парадную сторону жизни и гордиться успехами. Ради результата не видите недостойных средств. В то же время можете быть безответственны. С людьми ниже вас по социальной лестнице, зависимыми (например, подчиненные на работе) не контактируете совсем. В какой-то момент жизнь начинает отнимать самое важное, чтобы вы начали действовать, развиваться, выходить из привычной зоны комфорта. Но вместо этого вы жалуетесь или проявляете агрессию. Не хотите меняться и хватаетесь за то, что у вас отбирают, любыми путями. Придется столкнуться с собой внутренним и понять, что не все зависит от вас и подвластно вашему влиянию. Как только сможете отпустить это - угроза потери минует.<br>
<br><b>Решение проблемы:</b> <br>
Определите новые границы жизни, уберите прежние рамки, вы должны развиваться. Переоцените окружение и принимайте мир таким, как он есть, без гордости и высокомерия. Совершайте спонтанные поступки и избавляйтесь от собственных комплексов. Сделайте что-то несвойственное кардинальная смена имиджа). Начните выстраивать отношения с разными людьми, а не только с теми, кто вам выгоден. Неплохо начать заниматься благотворительностью. Дисциплинируйте себя и развивайте волю через спорт, правильное питание, соблюдение режима. Так вы сможете освободиться от рамок и собственного недовольства, разочарования, агрессии. Станьте хозяином своего тела и эмоций.

`
);
healthPanelContentCreate(
  [D1_duplicate, C1_duplicate, K2_duplicate],
  'Свадхистана - отвечают за надпочечники, матка и яичники, почки, кишечник, предстательная железа у мужчин, поясничный район позвоночного столба.',
  `<b>Проблемы со здоровьем:</b> <br>
В физическом плане можно страдать от заболевания таких органов, как почки, печень, толстый кишечник, половая сфера, надпочечники, поясничный отдел. На бытовом уровне это отражается в чувстве постоянной вины, ощущения нехватки любви, раздражительности, отсутствии радости от о всего. Вы можете ответственности или чрезмерно искать выгоду во всем при недостатке плодов от вашей деятельности. Не повышают зарплату, нет заказов, вы начинаете экономить и выгадывать, впадаете в еще большую депрессию.<br>
<br><b>Причины:</b> <br>
Часто все идет из детства, когда родители недостаточно уделяли внимания, где- то недооценили, недолюбили. Когда во взрослой жизни сталкиваетесь с подобной ситуацией, внутри просыпается тот обиженный ребенок. И вы моментально ставите себе блок, отказываетесь от дальнейших действий. Вслед за этим возникает чувство вины, что не выполнили обязательства, поступили неправильно. И так повторяется много раз вплоть до серьезного крушения в жизни (как потеря работы). У вас нет сил для творчества, создания каких-то плодов деятельности. Не заводите детей, ведь внутренне еще сами довольно инфантильны и не дали достаточно ребенку в себе. Нет энергии, сил и знаний откуда взять вдохновение для жизненного толчка.<br>
<br><b>Решение проблемы:</b> <br>
Примите своих родителей и полюбите в себе того недолюбленного ребенка. Позвольте себе жить как хочется, реализуйте свои желания одно за другим. Найдите единомышленников, заведите друзей, с которыми можно проговаривать и решать свои эмоциональные проблемы. Откажитесь от крайностей - чрезмерного шопоголизма или фанатичного накопления ценностей. Избавьтесь от внутреннего стыда перед собой и близкими. Позвольте реализоваться себе творчески. Ищите источник энергии для себя в приятных вещах. Это может быть массаж, организация мероприятий, забота о внешности, любой вид отдыха. Важно найти любимое занятие и работать в комфортной зоне, где сможете максимально раскрыться.
`
);
healthPanelContentCreate(
  [D_duplicate, C_duplicate, K1_duplicate],
  'Муладхара - отвечают за Мочеполовая система, нижние конечности, толстый кишечник, копчик, крестец, ноги.',
  `<b>Проблемы со здоровьем:</b> <br>
На физическом плане начинаются проблемы с ногами, мочеполовой системой, областью крестца. В жизненном плане материальным голодом, крушением жизни, постоянной нехваткой брошенности и неоцененности. Вы испытываете усталость и чувство безнадежности ситуации.<br>
<br><b>Причины:</b> <br>
Вы слишком зациклены на прошлом, живете в нем, постоянно возвращаетесь туда воспоминаниями. Здесь возможно два варианта. Когда-то было очень хорошо - благополучие, счастье, достаток. А сейчас - плохо, и вы не можете принять ситуацию, живете воспоминаниями о прошлом. Или наоборот - в прошлом было несколько повторяющихся ситуаций с проблемами, неудачами, предательством. Вы не можете этого забыть и двигаться вперед. Постоянно крутитесь как белка в колесе, но ничего не меняется. От этого усталость, страх на грани выживания, вы экономите на всем и постоянно себя сдерживаете. Хочется просто уже отказаться от движения, так как нет энергии и результата. Ждете “волшебной палочки”, которая решит все за вас.<br>
<br><b>Решение проблемы:</b> <br>
Пересмотрите свои ценности и отношение к прошлому. Умейте видеть хорошее в настоящем. Даже в самом неудачном прошлом тоже найдите позитивные примеры и уроки. Нужно быть готовым к переменам. Сделайте для себя настоящее более ценным, чем прошлое. Все проблемы не навсегда, жизнь течет, а ситуации меняются. Будьте готовы поймать благоприятный момент. Полезно заняться чем-то увлекательным и интересным, пусть даже вначале не приносящим больших денег. Освободитесь от прошлого и на элементарном, бытовом уровне. По возможности, сделайте ремонт или поменяйте часть обстановки, уберите старые фото и вещи.
`
);

const purposePanelItem = document.querySelector('#purpose_panel');

function purposePanelContentCreate(LP1, LP2, LP3) {
  const uniqLP1 = new Set(LP1);
  const uniqLP2 = new Set(LP2);
  const uniqLP3 = new Set(LP3);

  let isPurposeTitleFirstOpened = true;
  let isPurposeTitleSecondOpened = true;
  let isPurposeTitleThirdOpened = true;

  if (isPurposeTitleFirstOpened) {
    const text = document.createElement('p');
    text.innerHTML = 'Предназначение (20-40 лет)';
    text.style.fontWeight = '700';
    purposePanelItem.appendChild(text);
  }

  Array.from(uniqLP1).map((item) => {
    switch (item) {
      case 1: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 3: {
        let paragraph = document.createElement('p');

        if (gender === 'М' && parseInt(age.innerHTML) <= 40) {
          paragraph.innerHTML = ` `;
        }

        if (gender === 'Ж' && parseInt(age.innerHTML) <= 40) {
          paragraph.innerHTML = ` `;
        }

        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 4: {
        let paragraph = document.createElement('p');

        if (gender === 'М' && parseInt(age.innerHTML) <= 40) {
          paragraph.innerHTML = ` `;
        }

        if (gender === 'Ж' && parseInt(age.innerHTML) <= 40) {
          paragraph.innerHTML = ` `;
        }

        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 5: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 6: {
        let paragraph = document.createElement('p');

        if (parseInt(age.innerHTML) <= 40) {
          paragraph.innerHTML = ` `;
        }

        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 7: {
        let paragraph = document.createElement('p');

        if (parseInt(age.innerHTML) <= 40) {
          paragraph.innerHTML = ` `;
        }

        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 8: {
        let paragraph = document.createElement('p');

        if (parseInt(age.innerHTML) <= 40) {
          paragraph.innerHTML = ` `;
        }

        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 9: {
        let paragraph = document.createElement('p');

        if (parseInt(age.innerHTML) <= 40) {
          paragraph.innerHTML = ` `;
        }

        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 10: {
        let paragraph = document.createElement('p');

        if (parseInt(age.innerHTML) <= 40) {
          paragraph.innerHTML = ` `;
        }

        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 11: {
        let paragraph = document.createElement('p');

        if (parseInt(age.innerHTML) <= 40) {
          paragraph.innerHTML = ` `;
        }

        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 12: {
        let paragraph = document.createElement('p');

        if (parseInt(age.innerHTML) <= 40) {
          paragraph.innerHTML = ` `;
        }

        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 13: {
        let paragraph = document.createElement('p');

        if (parseInt(age.innerHTML) <= 40) {
          paragraph.innerHTML = ` `;
        }

        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 14: {
        let paragraph = document.createElement('p');

        if (parseInt(age.innerHTML) <= 40) {
          paragraph.innerHTML = ` `;
        }

        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 15: {
        let paragraph = document.createElement('p');

        if (parseInt(age.innerHTML) <= 40) {
          paragraph.innerHTML = ` `;
        }

        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 16: {
        let paragraph = document.createElement('p');

        if (parseInt(age.innerHTML) <= 40) {
          paragraph.innerHTML = ` `;
        }

        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 17: {
        let paragraph = document.createElement('p');

        if (parseInt(age.innerHTML) <= 40) {
          paragraph.innerHTML = ` `;
        }

        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 18: {
        let paragraph = document.createElement('p');

        if (parseInt(age.innerHTML) <= 40) {
          paragraph.innerHTML = ` `;
        }

        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 19: {
        let paragraph = document.createElement('p');

        if (parseInt(age.innerHTML) <= 40) {
          paragraph.innerHTML = ` `;
        }

        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 20: {
        let paragraph = document.createElement('p');

        if (parseInt(age.innerHTML) <= 40) {
          paragraph.innerHTML = ` `;
        }

        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 21: {
        let paragraph = document.createElement('p');

        if (parseInt(age.innerHTML) <= 40) {
          paragraph.innerHTML = ` `;
        }

        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 22: {
        let paragraph = document.createElement('p');

        if (parseInt(age.innerHTML) <= 40) {
          paragraph.innerHTML = ` `;
        }

        purposePanelItem.appendChild(paragraph);
        break;
      }
    }
  });

  if (isPurposeTitleSecondOpened) {
    const text = document.createElement('p');
    text.innerHTML = 'Предназначение (40-60 лет)';
    text.style.fontWeight = '700';
    purposePanelItem.appendChild(text);
  }

  Array.from(uniqLP2).map((item) => {
    switch (item) {
      case 1: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 3: {
        let paragraph = document.createElement('p');

        if (gender === 'М') {
          paragraph.innerHTML = ` `;
        } else {
          paragraph.innerHTML = ` `;
        }

        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 4: {
        let paragraph = document.createElement('p');

        if (gender === 'М') {
          paragraph.innerHTML = ` `;
        } else {
          paragraph.innerHTML = ` `;
        }

        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 5: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 6: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 7: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 8: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 9: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 10: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 11: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 12: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 13: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 14: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 15: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 16: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 17: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 18: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 19: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 20: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 21: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 22: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
    }
  });

  if (isPurposeTitleThirdOpened) {
    const text = document.createElement('p');
    text.innerHTML = 'Предназначение (общие)';
    text.style.fontWeight = '700';
    purposePanelItem.appendChild(text);
  }

  Array.from(uniqLP3).map((item) => {
    switch (item) {
      case 1: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 3: {
        let paragraph = document.createElement('p');

        if (gender === 'М') {
          paragraph.innerHTML = ` `;
        } else {
          paragraph.innerHTML = ` `;
        }

        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 4: {
        let paragraph = document.createElement('p');

        if (gender === 'М') {
          paragraph.innerHTML = ` `;
        } else {
          paragraph.innerHTML = ` `;
        }

        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 5: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 6: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 7: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 8: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 9: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 10: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 11: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 12: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 13: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 14: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 15: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 16: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 17: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 18: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 19: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 20: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 21: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
      case 22: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        purposePanelItem.appendChild(paragraph);
        break;
      }
    }
  });
}

let LP2 = calculation(E + G + H + F);

purposePanelContentCreate([LP1], [LP2], [LP3]);

const testsPanelItem = document.querySelector('#tests_panel');

function testsPanelContentCreate(item) {
  switch (item) {
    case 1: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      testsPanelItem.appendChild(paragraph);
      break;
    }
    case 2: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      testsPanelItem.appendChild(paragraph);
      break;
    }
    case 3: {
      let paragraph = document.createElement('p');

      if (gender === 'М') {
        paragraph.innerHTML = ` `;
      } else {
        paragraph.innerHTML = ` `;
      }

      testsPanelItem.appendChild(paragraph);
      break;
    }
    case 4: {
      let paragraph = document.createElement('p');

      if (gender === 'М') {
        paragraph.innerHTML = ` `;
      } else {
        paragraph.innerHTML = ` `;
      }

      testsPanelItem.appendChild(paragraph);
      break;
    }
    case 5: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      testsPanelItem.appendChild(paragraph);
      break;
    }
    case 6: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      testsPanelItem.appendChild(paragraph);
      break;
    }
    case 7: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      testsPanelItem.appendChild(paragraph);
      break;
    }
    case 8: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      testsPanelItem.appendChild(paragraph);
      break;
    }
    case 9: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      testsPanelItem.appendChild(paragraph);
      break;
    }
    case 10: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      testsPanelItem.appendChild(paragraph);
      break;
    }
    case 11: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      testsPanelItem.appendChild(paragraph);
      break;
    }
    case 12: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      testsPanelItem.appendChild(paragraph);
      break;
    }
    case 13: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      testsPanelItem.appendChild(paragraph);
      break;
    }
    case 14: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      testsPanelItem.appendChild(paragraph);
      break;
    }
    case 15: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      testsPanelItem.appendChild(paragraph);
      break;
    }
    case 16: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      testsPanelItem.appendChild(paragraph);
      break;
    }
    case 17: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      testsPanelItem.appendChild(paragraph);
      break;
    }
    case 18: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      testsPanelItem.appendChild(paragraph);
      break;
    }
    case 19: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      testsPanelItem.appendChild(paragraph);
      break;
    }
    case 20: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      testsPanelItem.appendChild(paragraph);
      break;
    }
    case 21: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      testsPanelItem.appendChild(paragraph);
      break;
    }
    case 22: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      testsPanelItem.appendChild(paragraph);
      break;
    }
  }
}

testsPanelContentCreate(X);

const childrenPanelItem = document.querySelector('#children_panel');

function childrenPanelContentCreate(numbers) {
  const uniqNumbers = new Set(numbers);

  Array.from(uniqNumbers).map((item) => {
    switch (item) {
      case 1: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        childrenPanelItem.appendChild(paragraph);
        break;
      }
      case 2: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        childrenPanelItem.appendChild(paragraph);
        break;
      }
      case 3: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        childrenPanelItem.appendChild(paragraph);
        break;
      }
      case 4: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        childrenPanelItem.appendChild(paragraph);
        break;
      }
      case 5: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        childrenPanelItem.appendChild(paragraph);
        break;
      }
      case 6: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        childrenPanelItem.appendChild(paragraph);
        break;
      }
      case 7: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        childrenPanelItem.appendChild(paragraph);
        break;
      }
      case 8: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        childrenPanelItem.appendChild(paragraph);
        break;
      }
      case 9: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        childrenPanelItem.appendChild(paragraph);
        break;
      }
      case 10: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        childrenPanelItem.appendChild(paragraph);
        break;
      }
      case 11: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        childrenPanelItem.appendChild(paragraph);
        break;
      }
      case 12: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        childrenPanelItem.appendChild(paragraph);
        break;
      }
      case 13: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        childrenPanelItem.appendChild(paragraph);
        break;
      }
      case 14: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        childrenPanelItem.appendChild(paragraph);
        break;
      }
      case 15: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        childrenPanelItem.appendChild(paragraph);
        break;
      }
      case 16: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        childrenPanelItem.appendChild(paragraph);
        break;
      }
      case 17: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        childrenPanelItem.appendChild(paragraph);
        break;
      }
      case 18: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        childrenPanelItem.appendChild(paragraph);
        break;
      }
      case 19: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        childrenPanelItem.appendChild(paragraph);
        break;
      }
      case 20: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        childrenPanelItem.appendChild(paragraph);
        break;
      }
      case 21: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        childrenPanelItem.appendChild(paragraph);
        break;
      }
      case 22: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        childrenPanelItem.appendChild(paragraph);
        break;
      }
    }
  });
}

childrenPanelContentCreate([A, A1, A2]);

const managementPanelItem = document.querySelector('#management_panel');

function managementPanelContentCreate(numbers) {
  const uniqNumbers = new Set(numbers);

  Array.from(uniqNumbers).map((item) => {
    switch (item) {
      case 1: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        managementPanelItem.appendChild(paragraph);
        break;
      }
      case 2: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        managementPanelItem.appendChild(paragraph);
        break;
      }
      case 3: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        managementPanelItem.appendChild(paragraph);
        break;
      }
      case 4: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        managementPanelItem.appendChild(paragraph);
        break;
      }
      case 5: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        managementPanelItem.appendChild(paragraph);
        break;
      }
      case 6: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        managementPanelItem.appendChild(paragraph);
        break;
      }
      case 7: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        managementPanelItem.appendChild(paragraph);
        break;
      }
      case 8: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        managementPanelItem.appendChild(paragraph);
        break;
      }
      case 9: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        managementPanelItem.appendChild(paragraph);
        break;
      }
      case 10: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        managementPanelItem.appendChild(paragraph);
        break;
      }
      case 11: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        managementPanelItem.appendChild(paragraph);
        break;
      }
      case 12: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        managementPanelItem.appendChild(paragraph);
        break;
      }
      case 13: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        managementPanelItem.appendChild(paragraph);
        break;
      }
      case 14: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        managementPanelItem.appendChild(paragraph);
        break;
      }
      case 15: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        managementPanelItem.appendChild(paragraph);
        break;
      }
      case 16: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        managementPanelItem.appendChild(paragraph);
        break;
      }
      case 17: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        managementPanelItem.appendChild(paragraph);
        break;
      }
      case 18: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        managementPanelItem.appendChild(paragraph);
        break;
      }
      case 19: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        managementPanelItem.appendChild(paragraph);
        break;
      }
      case 20: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        managementPanelItem.appendChild(paragraph);
        break;
      }
      case 21: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        managementPanelItem.appendChild(paragraph);
        break;
      }
      case 22: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        managementPanelItem.appendChild(paragraph);
        break;
      }
    }
  });
}

managementPanelContentCreate([A, B, X]);

const parentsPanelItem = document.querySelector('#parents_panel');

function parentsPanelContentCreate(numbers, status) {
  const uniqNumbers = new Set(numbers);

  if (status === 1) {
    const text = document.createElement('p');
    text.innerHTML = 'Родовые программы по мужской линии';
    text.style.fontWeight = '700';
    parentsPanelItem.appendChild(text);

    Array.from(uniqNumbers).map((item) => {
      switch (item) {
        case 1: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 2: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 3: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 4: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 5: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 6: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 7: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 8: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 9: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 10: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 11: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 12: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 13: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 14: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 15: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 16: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 17: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 18: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 19: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 20: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 21: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 22: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
      }
    });
  }

  if (status === 2) {
    const text = document.createElement('p');
    text.innerHTML = 'Родовые программы по женской линии';
    text.style.fontWeight = '700';
    parentsPanelItem.appendChild(text);

    Array.from(uniqNumbers).map((item) => {
      switch (item) {
        case 1: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 2: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 3: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 4: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 5: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 6: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 7: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 8: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 9: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 10: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 11: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 12: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 13: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 14: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 15: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 16: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 17: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 18: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 19: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 20: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 21: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 22: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
      }
    });
  }

  if (status === 3) {
    const text = document.createElement('p');
    text.innerHTML = 'Обиды на родителей';
    text.style.fontWeight = '700';
    parentsPanelItem.appendChild(text);

    Array.from(uniqNumbers).map((item) => {
      switch (item) {
        case 1: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 2: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 3: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 4: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 5: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 6: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 7: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 8: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 9: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 10: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 11: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 12: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 13: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 14: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 15: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 16: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 17: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 18: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 19: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 20: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 21: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
        case 22: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          parentsPanelItem.appendChild(paragraph);
          break;
        }
      }
    });
  }
}

let G2 = calculation(G + Y);
let G1 = calculation(G2 + G);

let H2 = calculation(H + Y);
let H1 = calculation(H + H2);

parentsPanelContentCreate([E, E1, E2, X, G, G1, G2], 1);
parentsPanelContentCreate([F, F1, F2, X, H, H1, H2], 2);
parentsPanelContentCreate([A, A1, A2], 3);

let G4 = calculation(C2 + D2);
let L = calculation(D2 + G4);

const lovesPanelItem = document.querySelector('#love_panel');

function lovesPanelContentCreate(numbers, G4) {
  const uniqNumbers = new Set(numbers);

  if (gender === 'М') {
    const text = document.createElement('p');
    text.innerHTML = 'Отношения у мужчин';
    text.style.fontWeight = '700';
    lovesPanelItem.appendChild(text);

    Array.from(uniqNumbers).map((item) => {
      switch (item) {
        case 3: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 4: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 5: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 6: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 7: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 8: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 9: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 10: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 11: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 12: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 13: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 14: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 15: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 16: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 17: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 18: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 19: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 20: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 21: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 22: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
      }
    });
  }

  if (gender === 'Ж') {
    const text = document.createElement('p');
    text.innerHTML = 'Отношения у женщин';
    text.style.fontWeight = '700';
    lovesPanelItem.appendChild(text);

    Array.from(uniqNumbers).map((item) => {
      switch (item) {
        case 3: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 4: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 5: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 6: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 7: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 8: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 9: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 10: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 11: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 12: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 13: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 14: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 15: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 16: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 17: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 18: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 19: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 20: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 21: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 22: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
      }
    });
  }

  const text = document.createElement('p');
  text.innerHTML = 'На выходе';
  text.style.fontWeight = '700';
  lovesPanelItem.appendChild(text);

  switch (G4) {
    case 3: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      lovesPanelItem.appendChild(paragraph);
      break;
    }
    case 4: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      lovesPanelItem.appendChild(paragraph);
      break;
    }
    case 5: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      lovesPanelItem.appendChild(paragraph);
      break;
    }
    case 6: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      lovesPanelItem.appendChild(paragraph);
      break;
    }
    case 7: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      lovesPanelItem.appendChild(paragraph);
      break;
    }
    case 8: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      lovesPanelItem.appendChild(paragraph);
      break;
    }
    case 9: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      lovesPanelItem.appendChild(paragraph);
      break;
    }
    case 10: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      lovesPanelItem.appendChild(paragraph);
      break;
    }
    case 11: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      lovesPanelItem.appendChild(paragraph);
      break;
    }
    case 12: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      lovesPanelItem.appendChild(paragraph);
      break;
    }
    case 13: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      lovesPanelItem.appendChild(paragraph);
      break;
    }
    case 14: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      lovesPanelItem.appendChild(paragraph);
      break;
    }
    case 15: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      lovesPanelItem.appendChild(paragraph);
      break;
    }
    case 16: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      lovesPanelItem.appendChild(paragraph);
      break;
    }
    case 17: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      lovesPanelItem.appendChild(paragraph);
      break;
    }
    case 18: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      lovesPanelItem.appendChild(paragraph);
      break;
    }
    case 19: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      lovesPanelItem.appendChild(paragraph);
      break;
    }
    case 20: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      lovesPanelItem.appendChild(paragraph);
      break;
    }
    case 21: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      lovesPanelItem.appendChild(paragraph);
      break;
    }
    case 22: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      lovesPanelItem.appendChild(paragraph);
      break;
    }
  }

  if (gender === 'М') {
    const text = document.createElement('p');
    text.innerHTML = 'Характер партнёра';
    text.style.fontWeight = '700';
    lovesPanelItem.appendChild(text);

    Array.from(uniqNumbers).map((item) => {
      switch (item) {
        case 3: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 4: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 5: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 6: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 7: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 8: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 9: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 10: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 11: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 12: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 13: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 14: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 15: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 16: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 17: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 18: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 19: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 20: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 21: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 22: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
      }
    });
  }

  if (gender === 'Ж') {
    const text = document.createElement('p');
    text.innerHTML = 'Характер партнёра';
    text.style.fontWeight = '700';
    lovesPanelItem.appendChild(text);

    Array.from(uniqNumbers).map((item) => {
      switch (item) {
        case 3: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 4: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 5: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 6: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 7: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 8: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 9: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 10: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 11: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 12: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 13: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 14: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 15: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 16: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 17: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 18: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 19: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 20: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 21: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
        case 22: {
          let paragraph = document.createElement('p');

          paragraph.innerHTML = ` `;
          lovesPanelItem.appendChild(paragraph);
          break;
        }
      }
    });
  }
}

lovesPanelContentCreate([D2, L], G4);

let AE = calculation(A + E);
let AE1 = calculation(A + AE);
let AE2 = calculation(E + AE);
let AE3 = calculation(A + AE1);
let AE4 = calculation(AE + AE1);
let AE5 = calculation(AE + AE2);
let AE6 = calculation(E + AE2);

let EB = calculation(E + B);
let EB1 = calculation(E + EB);
let EB2 = calculation(B + EB);
let EB3 = calculation(E + EB1);
let EB4 = calculation(EB + EB1);
let EB5 = calculation(EB + EB2);
let EB6 = calculation(B + EB2);

let BF = calculation(B + F);
let BF1 = calculation(B + BF);
let BF2 = calculation(F + BF);
let BF3 = calculation(B + BF1);
let BF4 = calculation(BF + BF1);
let BF5 = calculation(BF1 + BF2);
let BF6 = calculation(F + BF2);

let FC = calculation(F + C);
let FC1 = calculation(F + FC);
let FC2 = calculation(C + FC);
let FC3 = calculation(F + FC1);
let FC4 = calculation(FC + FC1);
let FC5 = calculation(FC + FC2);
let FC6 = calculation(C + FC2);

let CG = calculation(C + G);
let CG1 = calculation(C + CG);
let CG2 = calculation(G + CG);
let CG3 = calculation(C + CG1);
let CG4 = calculation(CG + CG1);
let CG5 = calculation(CG + CG2);
let CG6 = calculation(C + CG2);

let GD = calculation(G + D);
let GD1 = calculation(G + GD);
let GD2 = calculation(D + GD);
let GD3 = calculation(G + GD1);
let GD4 = calculation(GD + GD1);
let GD5 = calculation(GD + GD2);
let GD6 = calculation(G + GD2);

let DH = calculation(D + H);
let DH1 = calculation(D + DH);
let DH2 = calculation(H + DH);
let DH3 = calculation(D + DH1);
let DH4 = calculation(DH + DH1);
let DH5 = calculation(DH + DH2);
let DH6 = calculation(D + DH2);

let HA = calculation(H + A);
let HA1 = calculation(H + HA);
let HA2 = calculation(A + HA);
let HA3 = calculation(H + HA1);
let HA4 = calculation(HA + HA1);
let HA5 = calculation(HA + HA2);
let HA6 = calculation(A + HA2);

const yearsPanelItem = document.querySelector('#years_panel');

function yearsPanelContentCreate() {
  let number;

  const text = document.createElement('p');
  text.innerHTML = 'Суть года, основной мотив';
  text.style.fontWeight = '700';
  yearsPanelItem.appendChild(text);

  switch (parseInt(age.innerHTML)) {
    case 1: {
      number = AE3;
      break;
    }
    case 2: {
      number = AE3;
      break;
    }
    case 3: {
      number = AE4;
      break;
    }
    case 4: {
      number = AE4;
      break;
    }
    case 5: {
      number = AE;
      break;
    }
    case 6: {
      number = AE5;
      break;
    }
    case 7: {
      number = AE5;
      break;
    }
    case 8: {
      number = AE2;
      break;
    }
    case 9: {
      number = AE6;
      break;
    }
    case 10: {
      number = E;
      break;
    }
    case 11: {
      number = EB3;
      break;
    }
    case 12: {
      number = EB3;
      break;
    }
    case 13: {
      number = EB1;
      break;
    }
    case 14: {
      number = EB4;
      break;
    }
    case 15: {
      number = EB;
      break;
    }
    case 16: {
      number = EB5;
      break;
    }
    case 17: {
      number = EB5;
      break;
    }
    case 18: {
      number = EB2;
      break;
    }
    case 19: {
      number = EB6;
      break;
    }
    case 20: {
      number = B;
      break;
    }
    case 21: {
      number = BF3;
      break;
    }
    case 22: {
      number = BF3;
      break;
    }
    case 23: {
      number = BF1;
      break;
    }
    case 24: {
      number = BF4;
      break;
    }
    case 25: {
      number = BF;
      break;
    }
    case 26: {
      number = BF5;
      break;
    }
    case 27: {
      number = BF5;
      break;
    }
    case 28: {
      number = BF2;
      break;
    }
    case 29: {
      number = BF6;
      break;
    }
    case 30: {
      number = F;
      break;
    }
    case 31: {
      number = FC3;
      break;
    }
    case 32: {
      number = FC3;
      break;
    }
    case 33: {
      number = FC1;
      break;
    }
    case 34: {
      number = FC4;
      break;
    }
    case 35: {
      number = FC;
      break;
    }
    case 36: {
      number = FC5;
      break;
    }
    case 37: {
      number = FC5;
      break;
    }
    case 38: {
      number = FC2;
      break;
    }
    case 39: {
      number = FC6;
      break;
    }
    case 40: {
      number = C;
      break;
    }
    case 41: {
      number = CG3;
      break;
    }
    case 42: {
      number = CG3;
      break;
    }
    case 43: {
      number = CG1;
      break;
    }
    case 44: {
      number = CG4;
      break;
    }
    case 45: {
      number = CG;
      break;
    }
    case 46: {
      number = CG5;
      break;
    }
    case 47: {
      number = CG5;
      break;
    }
    case 48: {
      number = CG2;
      break;
    }
    case 49: {
      number = CG6;
      break;
    }
    case 50: {
      number = G;
      break;
    }
    case 51: {
      number = GD3;
      break;
    }
    case 52: {
      number = GD3;
      break;
    }
    case 53: {
      number = GD1;
      break;
    }
    case 54: {
      number = GD4;
      break;
    }
    case 55: {
      number = GD;
      break;
    }
    case 56: {
      number = GD5;
      break;
    }
    case 57: {
      number = GD5;
      break;
    }
    case 58: {
      number = GD2;
      break;
    }
    case 59: {
      number = GD6;
      break;
    }
    case 60: {
      number = D;
      break;
    }
    case 61: {
      number = DH3;
      break;
    }
    case 62: {
      number = DH3;
      break;
    }
    case 63: {
      number = DH1;
      break;
    }
    case 64: {
      number = DH4;
      break;
    }
    case 65: {
      number = DH;
      break;
    }
    case 66: {
      number = DH5;
      break;
    }
    case 67: {
      number = DH5;
      break;
    }
    case 68: {
      number = DH2;
      break;
    }
    case 69: {
      number = DH6;
      break;
    }
    case 70: {
      number = H;
      break;
    }
    case 71: {
      number = HA3;
      break;
    }
    case 72: {
      number = HA3;
      break;
    }
    case 73: {
      number = HA1;
      break;
    }
    case 74: {
      number = HA4;
      break;
    }
    case 75: {
      number = HA;
      break;
    }
    case 76: {
      number = HA5;
      break;
    }
    case 77: {
      number = HA5;
      break;
    }
    case 78: {
      number = HA2;
      break;
    }
    case 79: {
      number = HA6;
      break;
    }
  }

  if (gender === 'М') {
    const text = document.createElement('p');
    text.innerHTML = 'В плюсе';
    text.style.fontWeight = '700';
    yearsPanelItem.appendChild(text);

    switch (number) {
      case 3: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 4: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 5: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 6: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 7: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 8: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 9: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 10: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 11: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 12: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 13: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 14: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 15: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 16: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 17: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 18: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 19: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 20: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 21: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 22: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
    }

    const text2 = document.createElement('p');
    text2.innerHTML = 'В минусе';
    text2.style.fontWeight = '700';
    yearsPanelItem.appendChild(text2);

    switch (number) {
      case 3: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 4: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 5: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 6: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 7: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 8: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 9: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 10: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 11: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 12: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 13: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 14: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 15: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 16: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 17: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 18: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 19: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 20: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 21: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 22: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
    }
  }

  if (gender === 'Ж') {
    const text = document.createElement('p');
    text.innerHTML = 'В плюсе';
    text.style.fontWeight = '700';
    yearsPanelItem.appendChild(text);

    switch (number) {
      case 3: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 4: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 5: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 6: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 7: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 8: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 9: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 10: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 11: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 12: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 13: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 14: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 15: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 16: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 17: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 18: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 19: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 20: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 21: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 22: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
    }

    const text2 = document.createElement('p');
    text2.innerHTML = 'В минусе';
    text2.style.fontWeight = '700';
    yearsPanelItem.appendChild(text2);

    switch (number) {
      case 3: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 4: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 5: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 6: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 7: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 8: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 9: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 10: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 11: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 12: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 13: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 14: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 15: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 16: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 17: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 18: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 19: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 20: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 21: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 22: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
    }
  }

  let newAge;
  let number2;

  if (parseInt(age.innerHTML) <= 40) {
    newAge = parseInt(age.innerHTML) + 40;
  } else {
    newAge = parseInt(age.innerHTML) - 40;
  }

  switch (newAge) {
    case 1: {
      number2 = AE3;
      break;
    }
    case 2: {
      number2 = AE3;
      break;
    }
    case 3: {
      number2 = AE4;
      break;
    }
    case 4: {
      number2 = AE4;
      break;
    }
    case 5: {
      number2 = AE;
      break;
    }
    case 6: {
      number2 = AE5;
      break;
    }
    case 7: {
      number2 = AE5;
      break;
    }
    case 8: {
      number2 = AE2;
      break;
    }
    case 9: {
      number2 = AE6;
      break;
    }
    case 10: {
      number2 = E;
      break;
    }
    case 11: {
      number2 = EB3;
      break;
    }
    case 12: {
      number2 = EB3;
      break;
    }
    case 13: {
      number2 = EB1;
      break;
    }
    case 14: {
      number2 = EB4;
      break;
    }
    case 15: {
      number2 = EB;
      break;
    }
    case 16: {
      number2 = EB5;
      break;
    }
    case 17: {
      number2 = EB5;
      break;
    }
    case 18: {
      number2 = EB2;
      break;
    }
    case 19: {
      number2 = EB6;
      break;
    }
    case 20: {
      number2 = B;
      break;
    }
    case 21: {
      number2 = BF3;
      break;
    }
    case 22: {
      number2 = BF3;
      break;
    }
    case 23: {
      number2 = BF1;
      break;
    }
    case 24: {
      number2 = BF4;
      break;
    }
    case 25: {
      number2 = BF;
      break;
    }
    case 26: {
      number2 = BF5;
      break;
    }
    case 27: {
      number2 = BF5;
      break;
    }
    case 28: {
      number2 = BF2;
      break;
    }
    case 29: {
      number2 = BF6;
      break;
    }
    case 30: {
      number2 = F;
      break;
    }
    case 31: {
      number2 = FC3;
      break;
    }
    case 32: {
      number2 = FC3;
      break;
    }
    case 33: {
      number2 = FC1;
      break;
    }
    case 34: {
      number2 = FC4;
      break;
    }
    case 35: {
      number2 = FC;
      break;
    }
    case 36: {
      number2 = FC5;
      break;
    }
    case 37: {
      number2 = FC5;
      break;
    }
    case 38: {
      number2 = FC2;
      break;
    }
    case 39: {
      number2 = FC6;
      break;
    }
    case 40: {
      number2 = C;
      break;
    }
    case 41: {
      number2 = CG3;
      break;
    }
    case 42: {
      number2 = CG3;
      break;
    }
    case 43: {
      number2 = CG1;
      break;
    }
    case 44: {
      number2 = CG4;
      break;
    }
    case 45: {
      number2 = CG;
      break;
    }
    case 46: {
      number2 = CG5;
      break;
    }
    case 47: {
      number2 = CG5;
      break;
    }
    case 48: {
      number2 = CG2;
      break;
    }
    case 49: {
      number2 = CG6;
      break;
    }
    case 50: {
      number2 = G;
      break;
    }
    case 51: {
      number2 = GD3;
      break;
    }
    case 52: {
      number2 = GD3;
      break;
    }
    case 53: {
      number2 = GD1;
      break;
    }
    case 54: {
      number2 = GD4;
      break;
    }
    case 55: {
      number2 = GD;
      break;
    }
    case 56: {
      number2 = GD5;
      break;
    }
    case 57: {
      number2 = GD5;
      break;
    }
    case 58: {
      number2 = GD2;
      break;
    }
    case 59: {
      number2 = GD6;
      break;
    }
    case 60: {
      number2 = D;
      break;
    }
    case 61: {
      number2 = DH3;
      break;
    }
    case 62: {
      number2 = DH3;
      break;
    }
    case 63: {
      number2 = DH1;
      break;
    }
    case 64: {
      number2 = DH4;
      break;
    }
    case 65: {
      number2 = DH;
      break;
    }
    case 66: {
      number2 = DH5;
      break;
    }
    case 67: {
      number2 = DH5;
      break;
    }
    case 68: {
      number2 = DH2;
      break;
    }
    case 69: {
      number2 = DH6;
      break;
    }
    case 70: {
      number2 = H;
      break;
    }
    case 71: {
      number2 = HA3;
      break;
    }
    case 72: {
      number2 = HA3;
      break;
    }
    case 73: {
      number2 = HA1;
      break;
    }
    case 74: {
      number2 = HA4;
      break;
    }
    case 75: {
      number2 = HA;
      break;
    }
    case 76: {
      number2 = HA5;
      break;
    }
    case 77: {
      number2 = HA5;
      break;
    }
    case 78: {
      number2 = HA2;
      break;
    }
    case 79: {
      number2 = HA6;
      break;
    }
  }

  const text2 = document.createElement('p');
  text2.innerHTML = 'Причины событий';
  text2.style.fontWeight = '700';
  yearsPanelItem.appendChild(text2);

  if (gender === 'М') {
    const text = document.createElement('p');
    text.innerHTML = 'В плюсе';
    text.style.fontWeight = '700';
    yearsPanelItem.appendChild(text);

    switch (number2) {
      case 3: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 4: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 5: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 6: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 7: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 8: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 9: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 10: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 11: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 12: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 13: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 14: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 15: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 16: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 17: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 18: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 19: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 20: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 21: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 22: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
    }

    const text2 = document.createElement('p');
    text2.innerHTML = 'В минусе';
    text2.style.fontWeight = '700';
    yearsPanelItem.appendChild(text2);

    switch (number2) {
      case 3: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 4: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 5: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 6: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 7: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 8: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 9: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 10: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 11: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 12: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 13: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 14: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 15: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 16: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 17: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 18: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 19: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 20: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 21: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 22: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
    }
  }

  if (gender === 'Ж') {
    const text = document.createElement('p');
    text.innerHTML = 'В плюсе';
    text.style.fontWeight = '700';
    yearsPanelItem.appendChild(text);

    switch (number2) {
      case 3: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 4: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 5: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 6: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 7: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 8: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 9: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 10: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 11: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 12: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 13: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 14: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 15: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 16: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 17: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 18: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 19: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 20: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 21: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 22: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
    }

    const text2 = document.createElement('p');
    text2.innerHTML = 'В минусе';
    text2.style.fontWeight = '700';
    yearsPanelItem.appendChild(text2);

    switch (number2) {
      case 3: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 4: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 5: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 6: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 7: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 8: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 9: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 10: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 11: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 12: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 13: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 14: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 15: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 16: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 17: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 18: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 19: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 20: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 21: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
      case 22: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        yearsPanelItem.appendChild(paragraph);
        break;
      }
    }
  }
}

yearsPanelContentCreate();

const moneyPanelItem = document.querySelector('#money_panel');

function moneyPanelContentCreate(M, numbers1, numbers2) {
  const uniqNumbers1 = new Set(numbers1);
  const uniqNumbers2 = new Set(numbers2);

  const text2 = document.createElement('p');
  text2.innerHTML = 'Направление деятельности';
  text2.style.fontWeight = '700';
  moneyPanelItem.appendChild(text2);

  switch (M) {
    case 1: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      moneyPanelItem.appendChild(paragraph);
      break;
    }
    case 2: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      moneyPanelItem.appendChild(paragraph);
      break;
    }
    case 3: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      moneyPanelItem.appendChild(paragraph);
      break;
    }
    case 4: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      moneyPanelItem.appendChild(paragraph);
      break;
    }
    case 5: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      moneyPanelItem.appendChild(paragraph);
      break;
    }
    case 6: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      moneyPanelItem.appendChild(paragraph);
      break;
    }
    case 7: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      moneyPanelItem.appendChild(paragraph);
      break;
    }
    case 8: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      moneyPanelItem.appendChild(paragraph);
      break;
    }
    case 9: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      moneyPanelItem.appendChild(paragraph);
      break;
    }
    case 10: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      moneyPanelItem.appendChild(paragraph);
      break;
    }
    case 11: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      moneyPanelItem.appendChild(paragraph);
      break;
    }
    case 12: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      moneyPanelItem.appendChild(paragraph);
      break;
    }
    case 13: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      moneyPanelItem.appendChild(paragraph);
      break;
    }
    case 14: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      moneyPanelItem.appendChild(paragraph);
      break;
    }
    case 15: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      moneyPanelItem.appendChild(paragraph);
      break;
    }
    case 16: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      moneyPanelItem.appendChild(paragraph);
      break;
    }
    case 17: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      moneyPanelItem.appendChild(paragraph);
      break;
    }
    case 18: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      moneyPanelItem.appendChild(paragraph);
      break;
    }
    case 19: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      moneyPanelItem.appendChild(paragraph);
      break;
    }
    case 20: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      moneyPanelItem.appendChild(paragraph);
      break;
    }
    case 21: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      moneyPanelItem.appendChild(paragraph);
      break;
    }
    case 22: {
      let paragraph = document.createElement('p');

      paragraph.innerHTML = ` `;
      moneyPanelItem.appendChild(paragraph);
      break;
    }
  }

  const text = document.createElement('p');
  text.innerHTML = 'Для достижения успеха важно';
  text.style.fontWeight = '700';
  moneyPanelItem.appendChild(text);

  Array.from(uniqNumbers1).map((item) => {
    switch (item) {
      case 1: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 2: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 3: {
        let paragraph = document.createElement('p');

        if (gender === 'М') {
          paragraph.innerHTML = ` `;
        } else {
          paragraph.innerHTML = ` `;
        }

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 4: {
        let paragraph = document.createElement('p');

        if (gender === 'М') {
          paragraph.innerHTML = ` `;
        } else {
          paragraph.innerHTML = ` `;
        }

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 5: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 6: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 7: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 8: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 9: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 10: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 11: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 12: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 13: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 14: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 15: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 16: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 17: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 18: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 19: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 20: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 21: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 22: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
    }
  });

  const text3 = document.createElement('p');
  text3.innerHTML = 'Как раскрыть денежный поток';
  text3.style.fontWeight = '700';
  moneyPanelItem.appendChild(text3);

  Array.from(uniqNumbers2).map((item) => {
    switch (item) {
      case 2: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 3: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 4: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 5: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 6: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 7: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 8: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 9: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 10: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 11: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 12: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 13: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 14: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 15: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 16: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 17: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 18: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 19: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 20: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 21: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
      case 22: {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = ` `;
        moneyPanelItem.appendChild(paragraph);
        break;
      }
    }
  });
}

let M = calculation(G4 + C2);

moneyPanelContentCreate(M, [G4, C2], [C, C1]);

const B1Diagram = document.querySelector('#B1_diagram');
const B2Diagram = document.querySelector('#B2_diagram');
const B3Diagram = document.querySelector('#B3_diagram');

const E1Diagram = document.querySelector('#E1_diagram');
const E2Diagram = document.querySelector('#E2_diagram');

const F1Diagram = document.querySelector('#F1_diagram');
const F2Diagram = document.querySelector('#F2_diagram');

const A1Diagram = document.querySelector('#A1_diagram');
const A2Diagram = document.querySelector('#A2_diagram');
const A3Diagram = document.querySelector('#A3_diagram');

const C1Diagram = document.querySelector('#C1_diagram');
const C2Diagram = document.querySelector('#C2_diagram');

const YDiagram = document.querySelector('#Y_diagram');
const XDiagram = document.querySelector('#X_diagram');

const H1Diagram = document.querySelector('#H1_diagram');
const H2Diagram = document.querySelector('#H2_diagram');

const G1Diagram = document.querySelector('#G1_diagram');
const G2Diagram = document.querySelector('#G2_diagram');
const G4Diagram = document.querySelector('#G4_diagram');

const LDiagram = document.querySelector('#L_diagram');
const MDiagram = document.querySelector('#M_diagram');

const D1Diagram = document.querySelector('#D1_diagram');
const D2Diagram = document.querySelector('#D2_diagram');

B1Diagram.innerHTML = B1;
B2Diagram.innerHTML = B2;
B3Diagram.innerHTML = B3;

E1Diagram.innerHTML = E1;
E2Diagram.innerHTML = E2;

F1Diagram.innerHTML = F1;
F2Diagram.innerHTML = F2;

A1Diagram.innerHTML = A1;
A2Diagram.innerHTML = A2;
A3Diagram.innerHTML = A3;

C1Diagram.innerHTML = C1;
C2Diagram.innerHTML = C2;

XDiagram.innerHTML = X;
YDiagram.innerHTML = Y;

H1Diagram.innerHTML = H1;
H2Diagram.innerHTML = H2;

G1Diagram.innerHTML = G1;
G2Diagram.innerHTML = G2;
G4Diagram.innerHTML = G4;

LDiagram.innerHTML = L;
MDiagram.innerHTML = M;

D1Diagram.innerHTML = D1;
D2Diagram.innerHTML = D2;

const swiper = document.querySelector('.swiper');
const cardsSwiper = document.querySelectorAll('.swiper .swiper-slide');
let cardsArray = Array.from(cardsSwiper);
cardsArray[ageNumber - 1].id = 'actual_age';

const actualAgeElement = document.querySelector('#actual_age');

swiper.addEventListener('mouseover', function () {
  const paragraphs = document.querySelectorAll('#years_panel p');
  const paragraphsWrapper = document.querySelector('#years_panel');

  if (!actualAgeElement.classList.contains('swiper-slide-active')) {
    paragraphs.forEach((paragraph) => {
      paragraph.style.display = 'none';
    });

    let paragraph = document.createElement('p');
    paragraph.id = 'paid-paragraph';
    paragraph.innerHTML = 'Данный пункт будет доступен в платной версии';

    paragraphsWrapper.appendChild(paragraph);
  } else {
    let paragraphPaid = document.querySelector('#paid-paragraph');

    paragraphsWrapper.removeChild(paragraphPaid);

    paragraphs.forEach((paragraph) => {
      paragraph.style.display = 'block';
    });
  }
});

swiper.addEventListener('touchend', function () {
  const paragraphs = document.querySelectorAll('#years_panel p');
  const paragraphsWrapper = document.querySelector('#years_panel');

  if (!actualAgeElement.classList.contains('swiper-slide-active')) {
    paragraphs.forEach((paragraph) => {
      paragraph.style.display = 'none';
    });

    let paragraph = document.createElement('p');
    paragraph.id = 'paid-paragraph';
    paragraph.innerHTML = 'Данный пункт будет доступен в платной версии';

    paragraphsWrapper.appendChild(paragraph);
  } else {
    let paragraphPaid = document.querySelector('#paid-paragraph');

    paragraphsWrapper.removeChild(paragraphPaid);

    paragraphs.forEach((paragraph) => {
      paragraph.style.display = 'block';
    });
  }
});

swiper.addEventListener('touchmove', function () {
  const paragraphs = document.querySelectorAll('#years_panel p');
  const paragraphsWrapper = document.querySelector('#years_panel');

  if (!actualAgeElement.classList.contains('swiper-slide-active')) {
    paragraphs.forEach((paragraph) => {
      paragraph.style.display = 'none';
    });

    let paragraph = document.createElement('p');
    paragraph.id = 'paid-paragraph';
    paragraph.innerHTML = 'Данный пункт будет доступен в платной версии';

    paragraphsWrapper.appendChild(paragraph);
  } else {
    let paragraphPaid = document.querySelector('#paid-paragraph');

    paragraphsWrapper.removeChild(paragraphPaid);

    paragraphs.forEach((paragraph) => {
      paragraph.style.display = 'block';
    });
  }
});

swiper.addEventListener('touchstart', function () {
  const paragraphs = document.querySelectorAll('#years_panel p');
  const paragraphsWrapper = document.querySelector('#years_panel');

  if (!actualAgeElement.classList.contains('swiper-slide-active')) {
    paragraphs.forEach((paragraph) => {
      paragraph.style.display = 'none';
    });

    let paragraph = document.createElement('p');
    paragraph.id = 'paid-paragraph';
    paragraph.innerHTML = 'Данный пункт будет доступен в платной версии';

    paragraphsWrapper.appendChild(paragraph);
  } else {
    let paragraphPaid = document.querySelector('#paid-paragraph');

    paragraphsWrapper.removeChild(paragraphPaid);

    paragraphs.forEach((paragraph) => {
      paragraph.style.display = 'block';
    });
  }
});

swiper.addEventListener('click', function () {
  const paragraphs = document.querySelectorAll('#years_panel p');
  const paragraphsWrapper = document.querySelector('#years_panel');

  if (!actualAgeElement.classList.contains('swiper-slide-active')) {
    paragraphs.forEach((paragraph) => {
      paragraph.style.display = 'none';
    });

    let paragraph = document.createElement('p');
    paragraph.id = 'paid-paragraph';
    paragraph.innerHTML = 'Данный пункт будет доступен в платной версии';

    paragraphsWrapper.appendChild(paragraph);
  } else {
    let paragraphPaid = document.querySelector('#paid-paragraph');

    paragraphsWrapper.removeChild(paragraphPaid);

    paragraphs.forEach((paragraph) => {
      paragraph.style.display = 'block';
    });
  }
});

swiper.addEventListener('touchcancel', function () {
  const paragraphs = document.querySelectorAll('#years_panel p');
  const paragraphsWrapper = document.querySelector('#years_panel');

  if (!actualAgeElement.classList.contains('swiper-slide-active')) {
    paragraphs.forEach((paragraph) => {
      paragraph.style.display = 'none';
    });

    let paragraph = document.createElement('p');
    paragraph.id = 'paid-paragraph';
    paragraph.innerHTML = 'Данный пункт будет доступен в платной версии';

    paragraphsWrapper.appendChild(paragraph);
  } else {
    let paragraphPaid = document.querySelector('#paid-paragraph');

    paragraphsWrapper.removeChild(paragraphPaid);

    paragraphs.forEach((paragraph) => {
      paragraph.style.display = 'block';
    });
  }
});


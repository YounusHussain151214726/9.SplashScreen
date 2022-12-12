const { body } = document;

function changeBg(number) {
  console.log(number);
  let previousBg;

  if (body.className) {
    previousBg = body.className;
    console.log(previousBg);
  }

  body.className = "";
  //   switch (number) {
  //     case "1":
  //       return previousBg === "background-1"
  //         ? false
  //         : body.classList.add("background-1");
  //     case "2":
  //       return previousBg === "background-2"
  //         ? false
  //         : body.classList.add("background-2");
  //     case "3":
  //       return previousBg === "background-3"
  //         ? false
  //         : body.classList.add("background-3");
  //   }

  if (number == 1) {
    return previousBg === "background-1"
      ? false
      : body.classList.add("background-1");
  } else if (number == 2) {
    return previousBg === "background-2"
      ? false
      : body.classList.add("background-2");
  } else if (number == 3) {
    return previousBg === "background-3"
      ? false
      : body.classList.add("background-3");
  }
}

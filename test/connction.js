function getDataCards(data) {
    const arrayData = []

    for (let product of Object.values(data)) {
      arrayData.push(product);
    }

    localStorage.setItem("object",JSON.stringify(arrayData));
  }

  module.exports=getDataCards
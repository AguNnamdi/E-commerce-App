import * as firebase from "firebase";
import './firebase'


export const getData = async (category="isNew") => {
    const products = [];
    try {
        const ref = firebase.firestore().collection("products")
            .where("tags", 'array-contains', "isNew");
        //   .where(`${gender}`,'in',["new","women"]   );
        //    .where("tags",'array-contains', `${gender}`);

        const productsSnap = await ref.get();
        productsSnap.forEach((product) => {
            const data = product.data();
            products.push({
                id: product.id,
                ...data
            })
        });
    } catch (e) {
        console.log('error', e)
    }
    return products;
}
//   console.log("allData db", allData);
//   return allData;

// return allData
//   let innerData = [];

//   for (let key in allCategories) {
//     let dividedByGender = allCategories[key];
//     for (let item in dividedByGender) {
//       innerData.push(...dividedByGender[item]);
//     }
//   }
//   setAllData(innerData);
// };
export const getData = async (value) => {
  const products = [];
  try {
    const ref = firebase
      .firestore()
      .collection("products")
      .where("tags", "array-contains", `${value}`);

    const productsSnap = await ref.get();
    productsSnap.forEach((product) => {
      const data = product.data();
      products.push({
        id: product.id,
        ...data,
      });
    });
    console.log("products getData", products);
  } catch (e) {
    console.log("error", e);
  }
  return products;
};

export const setUserFB = async () => {
  const data = {
    name: "aysel",
    email: "aysel.mail",
    password: "345",
  };
  try {
    const ref = firebase
      .firestore()
      .collection("users")
      .doc("12345")
      .set({
        name: data.name,
        email: data.email,
        password: data.password,
      })
      .catch((error) => {
        console.log(
          "Something went wrong with added user to firestore: ",
          error
        );
      });

    // const userSnap = await ref.get();
    // console.log("userSnap getData", userSnap);
  } catch (e) {
    console.log("error", e);
  }
};

export const filterDataByTag = async (value) => {

  const products = [];
  try {
    const ref = firebase
      .firestore()
      .collection("products")
      .where("tags", "array-contains", `${value}`);
  
        const productsSnap = await ref.get();
        productsSnap.forEach((product) => {
            const data = product.data();
            products.push({
                id: product.id,
                ...data,
            });
        });
        console.log("filterDataByTag", products);
    } catch (e) {
        console.log(" filterDataByTag error", e);
    }
    return products
};


filterDataByTag("new");



// let  db = firebase.firestore();
// products.forEach(function(product) {
//     db.collection("products").add({
//         // id:product.id,
//         brandName: product.brandName,
//         colors: product.colors,
//         sizes: product.sizes,
//         about: product.about,
//         count: product.count,
//         imagesUrls: product.imagesUrls,
//         tags: product.tags,
//         rating: product.rating,
//         reviews: product.reviews,
//         price: product.price,
//         name: product.name
//     })
// })

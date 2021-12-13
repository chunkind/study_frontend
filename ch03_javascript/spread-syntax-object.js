//Spread Syntax - Object
const item = { type: 'shirt', size: 'M'};
const detail = { price: 20, made: 'Korea', gender: 'M'};

//bad code
item['price'] = detail.price;

//bad code
const newObject = new Object();
newObject['type'] = item.type;
newObject['size'] = item.size;
newObject['price'] = item.price;
newObject['made'] = item.made;
newObject['gender'] = item.gender;

//bad code
const newObject2 = {
    type : item.type,
    size : item.size,
    price : item.price,
    made : item.made,
    gender : item.gender,
}

//good
const shirt0 = Object.assign(item, detail);

//good
const shirt = { ...item, ...detail, price: 40};

//spread syntax - array
let fruits = ['수박', '귤', '바나나'];

//기존 객체 그대로 유지
fruits.push('딸기');

//새 객체 생성
fruits = [...fruits, '딸기'];

//앞에 추가 하고 싶다면???
fruits = ['딸기', ...fruits];

const fruits2 = ['멜론', '복숭아', '당근'];
let combined = fruits.concat(fruits2);
combined = [...fruits, '체리', ...fruits2];
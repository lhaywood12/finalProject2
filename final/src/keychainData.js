// 20220519121727
// http://localhost:3001/api/keychain

let keychains = [
    {
      "keychain_id": 1,
      "name": "Pink Valentine",
      "image": "1",
      "price": 6,
      "qty": 15,
      "type": "1",
      "last_update": "2022-05-10T15:36:06.000Z"
    },
    {
      "keychain_id": 2,
      "name": "Red Valentine",
      "image": "2",
      "price": 5,
      "qty": 20,
      "type": "1",
      "last_update": "2022-05-10T15:36:06.000Z"
    },
    {
      "keychain_id": 3,
      "name": "Sweet Heart",
      "image": "3",
      "price": 5,
      "qty": 10,
      "type": "1",
      "last_update": "2022-05-10T15:36:06.000Z"
    },
    {
      "keychain_id": 4,
      "name": "Easter Egg",
      "image": "4",
      "price": 6,
      "qty": 15,
      "type": "2",
      "last_update": "2022-05-10T15:36:06.000Z"
    },
    {
      "keychain_id": 5,
      "name": "Easter Rabbit",
      "image": "5",
      "price": 4,
      "qty": 25,
      "type": "2",
      "last_update": "2022-05-10T15:36:06.000Z"
    },
    {
      "keychain_id": 6,
      "name": "Easter Basket",
      "image": "6",
      "price": 9,
      "qty": 10,
      "type": "2",
      "last_update": "2022-05-10T15:36:06.000Z"
    },
    {
      "keychain_id": 7,
      "name": "Trick or Treat",
      "image": "7",
      "price": 9,
      "qty": 7,
      "type": "3",
      "last_update": "2022-05-10T15:36:06.000Z"
    },
    {
      "keychain_id": 8,
      "name": "Laughing Pumpkin",
      "image": "8",
      "price": 6,
      "qty": 11,
      "type": "3",
      "last_update": "2022-05-10T15:36:06.000Z"
    },
    {
      "keychain_id": 9,
      "name": "Spooky Ghost",
      "image": "9",
      "price": 7,
      "qty": 18,
      "type": "3",
      "last_update": "2022-05-10T15:36:06.000Z"
    },
    {
      "keychain_id": 10,
      "name": "Snow & Cookies",
      "image": "10",
      "price": 8,
      "qty": 11,
      "type": "4",
      "last_update": "2022-05-10T15:36:06.000Z"
    },
    {
      "keychain_id": 11,
      "name": "Happy Santa",
      "image": "11",
      "price": 10,
      "qty": 5,
      "type": "4",
      "last_update": "2022-05-10T15:36:06.000Z"
    },
    {
      "keychain_id": 12,
      "name": "Jiggle Bells",
      "image": "12",
      "price": 10,
      "qty": 14,
      "type": "4",
      "last_update": "2022-05-10T15:36:06.000Z"
    },
    {
      "keychain_id": 13,
      "name": "Hamster Plushy",
      "image": "13",
      "price": 11,
      "qty": 12,
      "type": "5",
      "last_update": "2022-05-10T15:36:06.000Z"
    },
    {
      "keychain_id": 14,
      "name": "Panda Plushy",
      "image": "14",
      "price": 11,
      "qty": 13,
      "type": "5",
      "last_update": "2022-05-10T15:36:06.000Z"
    },
    {
      "keychain_id": 15,
      "name": "Colorful Turtle",
      "image": "15",
      "price": 10,
      "qty": 27,
      "type": "5",
      "last_update": "2022-05-10T15:36:06.000Z"
    },
    {
      "keychain_id": 16,
      "name": "It is Your Day",
      "image": "16",
      "price": 6,
      "qty": 30,
      "type": "6",
      "last_update": "2022-05-10T15:36:06.000Z"
    },
    {
      "keychain_id": 17,
      "name": "Happy 30th B-Day",
      "image": "17",
      "price": 5,
      "qty": 10,
      "type": "6",
      "last_update": "2022-05-10T15:36:06.000Z"
    },
    {
      "keychain_id": 18,
      "name": "Happy Birthday to You",
      "image": "18",
      "price": 4,
      "qty": 12,
      "type": "6",
      "last_update": "2022-05-10T15:36:06.000Z"
    },
    {
      "keychain_id": 19,
      "name": "Mardi Gras Mask",
      "image": "19",
      "price": 6,
      "qty": 11,
      "type": "7",
      "last_update": "2022-05-10T15:36:06.000Z"
    },
    {
      "keychain_id": 20,
      "name": "Mardi Gras Jester",
      "image": "20",
      "price": 5,
      "qty": 9,
      "type": "7",
      "last_update": "2022-05-10T15:36:06.000Z"
    },
    {
      "keychain_id": 21,
      "name": "Mardi New Orleans",
      "image": "21",
      "price": 6,
      "qty": 16,
      "type": "7",
      "last_update": "2022-05-10T15:36:06.000Z"
    },
    {
      "keychain_id": 22,
      "name": "Four Leaf Clover",
      "image": "22",
      "price": 3,
      "qty": 10,
      "type": "8",
      "last_update": "2022-05-10T15:36:06.000Z"
    },
    {
      "keychain_id": 23,
      "name": "St.Patrick Clover",
      "image": "23",
      "price": 5,
      "qty": 15,
      "type": "8",
      "last_update": "2022-05-10T15:36:06.000Z"
    },
    {
      "keychain_id": 24,
      "name": "Good Luck Clover",
      "image": "24",
      "price": 4,
      "qty": 10,
      "type": "8",
      "last_update": "2022-05-10T15:36:06.000Z"
    }
  ]

  export default keychains
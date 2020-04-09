const initstate = {
    items: [{
        id: 1,
        name: 'blue rack shirt',
        price: 25.33,
        size: ['XL', 'L', 'M'],
        img: require('../images/image1.jpg'),
    },
    {
        id: 2,
        name: 'denim shirt',
        price: 41.33,
        size: ['XL', 'L', 'M'],
        img: require('../images/image2.jpg'),
    },
    {
        id: 3,
        name: 'levis jeans',
        price: 18.88,
        size: ['XL', 'L', 'M'],
        img: require('../images/image3.jpg'),
    },
    {
        id: 4,
        name: 'red trouser peter england',
        price: 30.00,
        size: ['XL', 'L', 'ML', 'XS'],
        img: require('../images/image4.jpg'),
    },
    {
        id: 5,
        name: 'black leather jacket',
        price: 55.21,
        size: ['XL', 'M'],
        img: require('../images/image5.jpg'),
    },
    {
        id: 6,
        name: 'rugged jeans blue',
        price: 23.13,
        size: ['XL'],
        img: require('../images/image6.jpg'),
    },
    {
        id: 7,
        name: 'shirt printed ',
        price: 10.17,
        size: ['L', 'M', 'XS'],
        img: require('../images/image7.png'),
    },
    {
        id: 8,
        name: 'shirt arrow',
        price: 22.33,
        size: ['L', 'M', 'S', 'XS'],
        img: require('../images/image8.jpg'),
    },
    {
        id: 9,
        name: 'blue rack shirt6',
        price: 20.33,
        size: ['XL', 'L', 'S'],
        img: require('../images/image9.jpg'),
    },
    {
        id: 10,
        name: 'blue rack shirt1',
        price: 29.33,
        size: ['S'],
        img: require('../images/image10.jpeg'),
    },
    {
        id: 11,
        name: 'blue rack shirt9',
        price: 18.18,
        size: ['XL', 'L', 'M', 'XXL', "S"],
        img: require('../images/image11.jpg'),
    }],
    cart_items: [],
    filtered_items: [],
    total: 0
}

const data = (state = initstate, action) => {
    //ADD TO CART
    if (action.type === "ADD_TO_CART") {
        let total = 0;
        const cart_item = state.items.find(item => item.id === action.id);
        total = state.total + cart_item.price;
        console.log(state.total);
        console.log(cart_item);
        return {
            ...state,
            cart_items: [...state.cart_items, cart_item],
            total: total
        }
    }

    //FILTER BY SIZE
    if (action.type === "FILTER_SIZE") {
        const items = state.items.filter(item => {
            return item.size.includes(action.size);
        })

        return {
            ...state,
            filtered_items: items
        }
    }

    //filter by prize
    if (action.type === "FILTER_RATE") {
        let items = [];
        console.log(action.value);

        //high to low price
        if (action.value === "highToLow") {
            items = [...state.filtered_items].sort(function(a, b){
                return b.price - a.price;
            })
        }

        //low to high price
        else if(action.value==='lowToHigh') {
            items = [...state.filtered_items].sort(function(a, b) {
                return a.price - b.price;
            })
        }

        console.log(items);
       console.log(state.filtered_items);

        return {
            ...state,
            filtered_items:items
        }
    }

    return { ...state, filtered_items: state.items }
}

export default data;
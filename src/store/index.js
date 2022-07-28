import { createStore } from 'vuex'

export default createStore({
    state: {
        cart: [],
        cartItems: [],
        products: [
            {
                id: 1,
                title: "【Blue Bay】無穀貓飼料",
                description: "鮪魚+干貝/5.5kg(挑嘴貓/呼吸道保健)",
                ingredient: "綜合魚肉(鮪魚、鯖魚、沙丁魚、北海道干貝)、台灣去骨鮮雞肉及乾燥雞肉、油脂(大豆油/生育酚保鮮、鱈魚油、鮮雞油、有機冷壓初榨椰子油)、豌豆、樹薯、水解雞肝、有機雞蛋、台灣蔬果膳纖(番茄、蔓越莓、蘋果、胡蘿蔔、山藥、南瓜)、脫水甜菜、必須礦物質(氯化鈉、磷酸二鈣、鉀、鐵、鋅、銅、錳、碘、硒) 、L-離胺酸、綜合維生素 (氯化膽鹼、維生素A、維生素E、維生素C、維生素D3、維生素B1、菸鹼酸、泛酸鈣、維生素B6、核黃素、葉酸、維生素H2、維生素B12)、酵母粉(MOS)、絲蘭萃取物、海藻粉、純鱉蛋粉、綜合消化酵素、牛磺酸、益生菌 ( 啤酒酵母菌、乳酸菌、納豆菌)、抗氧化劑、綠茶萃取物(兒茶素、綠茶多酚)",
                price: 1690,
                sale: 1450,
                count: "0",
                imageUrl: "https://shoplineimg.com/5d75ea2814d2b000015a9c68/608fb404eee2090032962d66/800x.webp?source_format=jpg"
            },
            {
                id: 2,
                title: "【Blue Bay】無穀貓飼料",
                description: "鮭魚+雞肉/5.5kg(室內貓/化毛配方)",
                ingredient: "綜合魚肉(鮭魚、鯖魚、沙丁魚)、台灣去骨鮮雞肉及乾燥雞肉、油脂( 大豆油/生育酚保鮮、鱈魚油、鮮雞油、有機冷壓初榨椰子油)、豌豆、樹薯、干貝、水解雞肝、有機雞蛋、台灣蔬果膳纖 (番茄、蔓越莓、蘋果、胡蘿蔔、山藥、南瓜)、脫水甜菜、必需礦物質(氯化鈉、磷酸二鈣、鉀、鐵、鋅、銅、錳、碘、硒)、L-離胺酸、綜合維生素(氯化膽鹼、維生素A、維生素E、維生素C、維生素D3、維生素B1、菸鹼酸、泛酸鈣、維生素B6、核黃素、葉酸、維生素H2、維生素B12)、酵母粉(MOS)、絲蘭萃取物、海藻粉、純鱉蛋粉、綜合消化酵素、牛磺酸、益生菌(啤酒酵母菌、乳酸菌、納豆菌)、左旋肉鹼、抗氧化劑、綠茶萃取物(兒茶素、綠茶多酚)",
                price: 1690,
                sale: 1450,
                count: "0",
                imageUrl: "https://shoplineimg.com/5d75ea2814d2b000015a9c68/608fa71ae926f9003b368a57/800x.webp?source_format=jpg"
            },
            {
                id: 3,
                title: "【Blue Bay】EASY貓飼料",
                description: "雞肉+鮭魚/8kg(化毛配方)",
                ingredient: "澳洲脫水雞肉及台灣去骨鮮雞肉、鮭魚肉、 珍珠大麥、糙米、玉米蛋白、鮭魚油(生育酚 保存)、紫花苜蓿、脫水甜菜、鮮雞油(生育酚 保存)、冷壓初榨有機椰子油、南瓜、蔓越莓 、水解雞肝、有機雞蛋、時令蔬果( 蘋果、有 機紅蘿蔔、有機番茄、有機高麗菜、有機苜 蓿)、啤酒酵母粉、海藻粉、必須礦物質(磷酸 二鈣、氯化鈉、氯化鉀、鐵、鋅、銅、錳、 碘、硒)、維生素(氯化膽鹼、維生素A、E、C 、D3、B1、菸鹼酸、泛酸鈣、B6、核黃素、 葉酸、維生素H2、B12)、果寡糖FOS、甘露 寡糖MOS、絲蘭萃取物、大豆卵磷脂、牛磺 酸、酵素(含納豆菌)、枯草芽孢桿菌、乳酸菌 ",
                price: 1220,
                sale: 1080,
                count: "0",
                imageUrl: "https://shoplineimg.com/5d75ea2814d2b000015a9c68/5d9c327a3bb22121eb0f5b5b/800x.webp?source_format=jpg"
            },
            {
                id: 4,
                title: "【Monge】天然全能 室內成貓配方",
                description: "雞肉/1.5kg/1歲以上成貓",
                ingredient: "雞肉，米，動物脂肪（雞脂肪含量99.6％，以天然抗氧化物保存），甜菜漿，玉米麩，水解動物蛋白，全蛋粉（富含優質蛋白）， 鮭魚（脫水鮭魚），魚油（鮭魚油），啤酒酵母（甘露寡糖和維生素B12來源），豌豆纖維，牛磺酸，木寡糖（3 g / kg），水解酵母（甘露寡糖來源），絲蘭萃取，玫瑰果",
                price: 595,
                sale: 515,
                count: "0",
                imageUrl: "https://monge.com.tw/upload/product-imgs/21_img_main_800x1020.jpg"
            },
            {
                id: 5,
                title: "【Monge】天然全能 成貓化毛配方",
                description: "雞肉/1.5kg/1歲以上成貓",
                ingredient: "雞肉，玉米，動物脂肪（雞脂肪含量99.6％，以天然抗氧化物保存），米，甜菜漿，玉米麩，水解動物蛋白，全蛋粉（富含優質蛋白），鮭魚（脫水鮭魚），魚油（鮭魚油），啤酒酵母（甘露寡糖和維生素B12來源），豌豆纖維，牛磺酸，木寡糖（3 g / kg），水解酵母（甘露寡糖來源），絲蘭萃取，玫瑰果",
                price: 595,
                sale: 515,
                count: "0",
                imageUrl: "https://monge.com.tw/upload/product-imgs/22_img_main_800x1020.jpg"
            },
            {
                id: 6,
                title: "【Monge】天然全能 成貓泌尿保健配方",
                description: "雞肉/10kg/1歲以上成貓",
                ingredient: "米，玉米麩，雞肉(脫水雞肉18%，新鮮雞肉5%)，脫水鮭魚，動物脂肪（雞脂肪含量99.6％），燕麥，水解動物蛋白，脫水豌豆，全蛋粉，魚油（鮭魚油） ，木寡糖（XOS 0.3%），水解酵母（甘露寡糖來源），絲蘭萃取",
                price: 595,
                sale: 515,
                count: "0",
                imageUrl: "https://monge.com.tw/upload/product-imgs/23_img_main_800x1020.jpg"
            },
            {
                id: 7,
                title: "【Monge】天然全能 高齡貓配方",
                description: "雞肉/400g/7歲以上高齡貓",
                ingredient: "雞肉，米，動物脂肪（雞脂肪含量99.6％，以天然抗氧化物保存），玉米，甜菜漿，玉米麩，水解動物蛋白，全蛋粉（富含優質蛋白） ，脫水鮭魚，魚油（鮭魚油），啤酒酵母（甘露寡糖和維生素B12來源），豌豆纖維，牛磺酸，木寡糖（3 g / kg），水解酵母（甘露寡糖來源），絲蘭萃取，玫瑰果，脫水鳳梨",
                price: 210,
                sale: 190,
                count: "0",
                imageUrl: "https://monge.com.tw/upload/product-imgs/26_img_main_800x1020.jpg"
            },
        ]
    },
    getters: {
        product: (state) => (id) => {
            return state.products.filter(p => p.id === Number(id))[0]
        },
        productTitle: (state) => (title) => {
            return state.products.filter(p => p.title === String(title))[0]
        },
        cartItems: (state) => {
            return state.cart.map(
                itemId => state.products.find(
                    product => product.id === itemId,
                ),
            )
        }

    },
    mutations: {
        addToCart(state, payload) {
            state.cart.push(Number(payload))
            // const currentItem = state.cart.find(product => product.id === Number(payload))
            // if (currentItem) {
            //     currentItem.cart.count++
            // } else {
            //     state.cart.push(Number(payload));
            // }
        },
        decrementProductInventory(state, payload) {
            let product = state.products.find(product => product.id === Number(payload))
            product.count--;
        },
        removeFromCart(state, payload) {
            let indexToDelete = state.cart.indexOf(Number(payload));
            state.cart.splice(indexToDelete, 1)
        },
        incrementProductInventory(state, payload) {
            let product = state.products.find(product => product.id === Number(payload))
            product.count++;
        },

    },
    actions: {
        addToCart({ commit }, payload) {
            commit('addToCart', payload)
        },
        removeFromCart({ commit }, payload) {
            commit('removeFromCart', payload)
        },
        incrementProductInventory({ commit }, payload) {
            commit('incrementProductInventory', payload)
        },
        decrementProductInventory({ commit }, payload) {
            commit('decrementProductInventory', payload)
        },
    },
    modules: {
    }
})

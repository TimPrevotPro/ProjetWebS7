import { createStore } from "vuex";
import {Article} from "@/components/Article.vue";
export default createStore({
    state: {
        isConnected: false,
        user: {
            admin: false,
            user_id: '',
            identite: ''
        },
        cartItems: [
            {
                id: 0,
                name: 'NotAnItem',
                description: "We need this to make sure we can add articles to the cart",
                image: '',
                price: 0
            },
        ],
        articles: [
            {
                id: 1,
                name: 'Eau du robinet',
                description: "Parce que boire de l'eau, c'est important, dans 20-30 ans y'en aura plus",
                image: '',
                price: 2
            },
            {
                id: 2,
                name: 'Eau de bain de Squeezie',
                description: "Un flacon d'eau provenant du bain de Squeezie, le youtubeur le plus connu de France !",
                image: '',
                price: 25
            },
            {
                id: 3,
                name: 'Eau de bain de Gotaga',
                description: "Le seul et l'unique French Monster !",
                image: '',
                price: 18
            },
            {
                id: 4,
                name: 'Eau de bain de McFly et Carlito',
                description: "Les deux papas nudistes les plus connus du Youtube Game sont aussi nos partenaires !",
                image: '',
                price: 20
            },
            {
                id: 5,
                name: 'Eau de bain de Sardoche',
                description: "MAIS C'ÉTAIT SÛR EN FAIT ! Il paraît que cette eau est encore plus salée que l'eau de mer...",
                image: '',
                price: 15
            },
            {
                id: 6,
                name: 'Eau de bain de Locklear',
                description: "Si vous aimez l'exil fiscal, ou vous faire passer pour plus jeune que vous ne l'êtes, cette eau de bain est pour vous !",
                image: '',
                price: 22
            },
        ]
    },
    mutations: {
        setIsConnected(state, newVar) {
            state.isConnected = newVar;
        },
        setUser(state, user) {
            state.user.admin = user.admin;
            state.user.user_id = user.user_id;
            state.user.identite = user.identite;
        },
        addToCart(state, article) {
            const newArticle = new Article();
            newArticle.id = article.id;
            newArticle.name = article.name;
            newArticle.description = article.description;
            newArticle.image = article.image;
            newArticle.price = article.price;
            state.cartItems.push(newArticle);
        }
    },
    actions: {},
    modules: {},
});

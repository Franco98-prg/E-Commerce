//Granos
import blendColombia from "../assets/Products/blend-colombia-brasil.webp"
import boliviaBourbon from "../assets/Products/bolivia-bourbon.webp"
import brasilRedCatuai from "../assets/Products/brasil-red-catuai.webp"
import colombiaHoney from "../assets/Products/colombia-honey-250g.webp"
import colombiaHuila from "../assets/Products/colombia-huila.webp"
import colombiaLavado from "../assets/Products/colombia-lavado.webp"
import colombiaNatural from "../assets/Products/colombia-natural-250g.webp"
//MERCH
import RemeraVintageR from "../assets/Products/remera-vintage-rosa.webp"
import RemeraVintageM from "../assets/Products/remera-vintage-marron.webp"
import RemeraTazaM from "../assets/Products/remera-taza-marron.webp"
import RemeraTazaR from "../assets/Products/remera-taza-rosa.webp"
//TEA
import TeaChai from "../assets/Products/tea-chai.webp"
import TeaBlend from "../assets/Products/tea-blend.webp"




const PRODUCTS = [
  { 
    id: "1", 
    name: "Blend Colombia Brasil", 
    category: "Granos", 
    price: 22000,  
    stock: 12,  
    description: "Café etíope de proceso lavado, notas florales y a jazmín.",
    image:blendColombia
  },
  { 
    id: "2", 
    name: "Bolivia Bourbon", 
    category: "Granos", 
    price: 38000,  
    stock: 6,  
    description: "Variedad Geisha con notas a bergamota y miel. Micro-lote.",
    image:boliviaBourbon
  },
  { 
    id: "3", 
    name: "Brasil Red Catuai", 
    category: "Granos", 
    price: 25000,  
    stock: 9,  
    description: "Café de proceso honey con cuerpo sedoso y notas frutales.",
    image:brasilRedCatuai
  },
  { 
    id: "4", 
    name: "Colombia Honey", 
    category: "Granos", 
    price: 28000,  
    stock: 8,  
    description: "Café de Kenia con alta acidez cítrica y dulzor intenso.",
    image:colombiaHoney
  },
  { 
    id: "5", 
    name: "Colombia Huila", 
    category: "Granos", 
    price: 24000,  
    stock: 10,  
    description: "Café guatemalteco con notas a chocolate oscuro, nuez y caramelo.",
    image:colombiaHuila
  },
  { 
    id: "6", 
    name: "Colombia Lavado", 
    category: "Granos", 
    price: 21000,  
    stock: 14,  
    description: "Café orgánico peruano con acidez suave y matices a panela.",
    image:colombiaLavado
  },
  { 
    id: "7", 
    name: "Colomia Natural", 
    category: "Granos", 
    price: 18000,  
    stock: 20,  
    description: "Café brasileño natural con cuerpo pesado y notas a cacao y almendra.",
    image:colombiaNatural
  },
  { 
    id: "8", 
    name: "Blend Colombia 500grs", 
    category: "Granos", 
    price: 52000,  
    stock: 7,  
    description: "Variedad Pacamara con aromas cítricos, dulzor a caramelo y final largo.",
    image:blendColombia
  },

  // Tea
  { 
    id: "9", 
    name: "Tea Chai", 
    category: "Tea", 
    price: 16000,  
    stock: 15,  
    description: "Canela en rama, clavo de olor, pimienta negra/rosa, jengibre, anis estrellado, menta peperina, té negro.",
    image:TeaBlend
  },
  { 
    id: "10", 
    name: "Tea Blend", 
    category: "Tea", 
    price: 27500,  
    stock: 10,  
    description: "A base de té verde con manzanilla, rosa mosqueta y lavanda.",
    image: TeaChai
  },
  { 
    id: "11", 
    name: "Tea Verde", 
    category: "Tea", 
    price: 14000,  
    stock: 25,  
    description: "Notas Herbal, corteza de guayaba, manzana verde, manzanilla suave",
    image:TeaBlend
  },
  { 
    id: "12", 
    name: "Tea Negro", 
    category: "Tea", 
    price: 18000,  
    stock: 8,  
    description: "Notas Amaderado, manzana roja, caramelo, whisky añejado en barrica",
    image: TeaChai
  },

  // MERCH
  { 
    id: "13", 
    name: "Remera Vintage Rosa", 
    category: "Merch", 
    price: 38000,  
    stock: 30,  
    description: "¡Remera Kafea con diseño único vintage! esta hecha de tela de algodon de la mejor calidad, es de cuello redondo y su silueta es boxy fit, lo que quiere decir que tiene una forma amplia y cuadrada.",
    image: RemeraVintageR
  },
  { 
    id: "14", 
    name: "Remera Vintage Marron", 
    category: "Merch", 
    price: 38000,  
    stock: 20,  
    description: "¡Remera Kafea con diseño único vintage! esta hecha de tela de algodon de la mejor calidad, es de cuello redondo y su silueta es boxy fit, lo que quiere decir que tiene una forma amplia y cuadrada. ",
    image: RemeraVintageM
  },
  { 
    id: "15", 
    name: "Remera Taza Rosa", 
    category: "Merch", 
    price: 38000,  
    stock: 40,  
    description: "¡Remera Kafea con diseño único de taza de café! esta hecha de tela de algodon de la mejor calidad, es de cuello redondo y su silueta es boxy fit, lo que quiere decir que tiene una forma amplia y cuadrada.",
    image: RemeraTazaR
  },
  { 
    id: "16", 
    name: "Remera Taza Marron", 
    category: "Merch", 
    price: 38000,  
    stock: 50,  
    description: "¡Remera Kafea con diseño único de taza de café! esta hecha de tela de algodon de la mejor calidad, es de cuello redondo y su silueta es boxy fit, lo que quiere decir que tiene una forma amplia y cuadrada. ",
    image: RemeraTazaM
  }

];


//USERS
const delay = (ms = 600) => new Promise(res => setTimeout(res, ms));

export const getProducts = async () => {
   await delay(); return PRODUCTS; 
};

export const getProductsByCategory = async (categoryId) => {
   await delay(); return PRODUCTS.filter(p => p.category === categoryId); 
};

export const getProductById = async (id) => {
  await delay(); const p = PRODUCTS.find(x => x.id === id); if(!p) throw new Error('Producto no encontrado'); return p; 
};


import location from '/assets/circularIcons/location.svg';
import food from '/assets/circularIcons/food.svg';
import shield from '/assets/circularIcons/shield.svg';

export const ciudades = {
    heading: 'Ciudades',
    icon: location,
    sections: [
        { title: 'La Plata', anchor:'/restaurantes/la-plata' },
        { title: 'San Isidro', anchor:'/restaurantes/san-isidro'},
        { title: 'Córdoba', anchor: '/restaurantes/cordoba'},
        { title: 'Buenos Aires', anchor: '/restaurantes/buenos-aires'},
        { title: 'Vicente López', anchor: '/restaurantes/vicente-lopez'},
    ]
};

export const barrios = {
    heading: 'Barrios',
    icon: shield,
    sections: [
        { title: 'Palermo', anchor:'/restaurantes/buenos-aires/palermo' },
        { title: 'Caballito', anchor:'/restaurantes/buenos-aires/caballito'},
        { title: 'Belgrano', anchor: '/restaurantes/buenos-aires/belgrano'},
        { title: 'Recoleta', anchor: '/restaurantes/buenos-aires/recoleta'},
        { title: 'Microcentro', anchor: '/restaurantes/buenos-aires/microcentro'},
        { title: 'Nueva Córdoba', anchor: '/restaurantes/buenos-aires/nueva-cordoba'},
    ]
};

export const comidas = {
    heading: 'Comidas',
    icon: food,
    sections: [
        { title: 'Sushi', anchor:'/comidas/sushi' },
        { title: 'Picadas', anchor:'/comidas/picadas'},
        { title: 'Empanadas', anchor: '/comidas/empanadas'},
        { title: 'Desayunos', anchor: '/comidas/desayunos'},
        { title: 'Helados', anchor: '/comidas/helados'},
        { title: 'Pizzas', anchor: '/comidas/pizzas'},
    ]
}
